class PlayerArcher{
  constructor(x,y,width,height ){
  var Options = {isStatic:true}
  this.body = Bodies.rectangle(1400,200,20,10,Options)
  this.image = loadImage("playerArcher.png")
  this.x = x;
  this.y = y;
  this.width=width;
  this.height = height;
  Matter.Body.setAngle(this.body, -90);
  }
  display(){


    var pos = this.body.position;
    var angle = this.body.angle;
  
    if (keyIsDown(RIGHT_ARROW) && angle < 1.07 ) {

      angle += 0.1;
      Matter.Body.setAngle(this.body, angle);
    }

    if (keyIsDown(LEFT_ARROW) && angle > -120) {

      angle -=0.1;
      Matter.Body.setAngle(this.body, angle);
    }

    
  push();
  translate(pos.x, pos.y)
  rotate(angle)
  imageMode(CENTER)
  image(this.image,0,0,this.width,this.height)
  pop();
  


  
}
  
  
  }

