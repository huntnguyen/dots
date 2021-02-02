let dotCounter = 0;
placeRandomDot = function(){
    let img = document.createElement('img');
    img.setAttribute('id', 'dot');
    img.setAttribute('src','images/dot.png');
    body.appendChild(img);
    dotCounter++;
};

drawLine = function(){
    
};
document.onclick = placeRandomDot;