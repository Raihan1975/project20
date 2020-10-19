var c,w;
var cv,we;
var d,o;
var go,st;
o=go;
go=1;
st=0;
function setup() {
  createCanvas(1200,800);
  cv=random(55,250);
  we=random(400,1200);
  c = createSprite(100,600,1200,100);
  c.velocityX=0;
  c.debug=true;
  
  w = createSprite(1000,600,10,120);

}

function draw() {
  background(14,14,14);
  if(o===go){  
 if(c.isTouching(w)){
   d=0.5*we*cv*cv%22500;
   if(d<80){
     c.shapeColor="green";
     c.x=980;
     c.velocityX=0;
   }else
   if(d>100){
    c.shapeColor="yellow";
    c.x=1000;
     c.velocityX=0;
  }else
  if(d>180){
    c.shapeColor="red";
    c.x=1111;
     c.velocityX=0;
  }
  o=st;
 }
}else if(0===st){
  if(keyDown(space)){
    o=go;
  }

}

  
  
  drawSprites();
}
