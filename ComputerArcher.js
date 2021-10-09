class ComputerArcher{
    constructor(x,y,width,height ){
    var Options = {isStatic:true}
    this.body = Bodies.rectangle(350,200,20,10,Options)
    this.image = loadImage("computerArcher.png")
    this.x = x;
    this.y = y;
    this.width=width;
    this.height = height;
    Matter.Body.setAngle(this.body, -90);
    }
    display(){
  
  
      var pos = this.body.position;
      var angle = this.body.angle;
    
       
      
    push();
    translate(pos.x, pos.y)
    rotate(angle)
    imageMode(CENTER)
    image(this.image,0,0,this.width,this.height)
    pop();
    
  
   
  }
    
    
    }
  
  