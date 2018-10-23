
const MAX_PARTICLES = 20;
let PARTICLES = [];
let ANIM = 0;

const random = (f, t) => Math.floor(Math.random() * t) + f; 
class Point{
  constructor(max_w,max_h, min_w = 0, min_h = 0){
    this.x = random(0,max_w);
    this.y = random(0,max_h);
  }
  fall(x,y){
    this.x += x;
    this.y += y;
  }
}

var canvas;

const clear = () => {
  const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.rect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = '#212121';
    ctx.fill();
}

export default function(cvs){
  return (start) => {
    canvas = cvs;
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    clear();
    const ctx = canvas.getContext('2d');
    animi(ctx, canvas.width, canvas.height, start);
  }
}

const animi = (ctx, w, h, start) => {
  ctx.fillStyle = 'rgba(255,255,255,0.4)';
  PARTICLES = [];
  for(let count = 0; count < MAX_PARTICLES; count++){
    PARTICLES.push(new Point(w,h));
  }
  PARTICLES.forEach(p => {
    ctx.fillRect(p.x, p.y, 2,2);
  })
  blink(ctx, start);
}



const blink = (ctx, start) => {
  const blink_up = () => {
    if(alpha < 0.9){
      clear();
      ctx.fillStyle = `rgba(255,255,255,${alpha})`;
      alpha += 0.005;
      PARTICLES.forEach(p => {
        ctx.fillRect(p.x, p.y, 2,2);
      })
      ANIM = window.requestAnimationFrame(blink_up);
    }
    else if(start === 1) window.cancelAnimationFrame(ANIM);
    else{
      ANIM = window.requestAnimationFrame(blink_down);
    }
  }
  const blink_down = () => {
    if(alpha > 0.1){
      clear();
      ctx.fillStyle = `rgba(255,255,255,${alpha})`;
      alpha -= 0.005;
      PARTICLES.forEach(p => {
        ctx.fillRect(p.x, p.y, 2,2);
      })
      ANIM = window.requestAnimationFrame(blink_down);
    }
    else if(start === 1) window.cancelAnimationFrame(ANIM);
    else{
      ANIM = window.requestAnimationFrame(blink_up);
    }
  }
  let alpha = ctx.fillStyle.split(',')[3][3]/10;
  blink_up();
}