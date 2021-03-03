var cnv, ctx, pos_x=0, img;

function anim(){
    ctx.clearRect(0,0,1920,1080);
    ctx.drawImage(img,pos_x,0);
    pos_x += 1;
    setTimeout(anim,10); 
}

window.onload = function(){
    img = new Image();
    img.src = 'Nuevo.png';
    cnv = document.getElementById('lienzo');
    ctx = cnv.getContext('2d');
    anim();
};

// <canvas width="1920" height="190" id="lienzo"></canvas>

// para hacer la animacion de cad
