class blocktriangle{
  constructor(x, y, width, height, angle) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width+20, height+20, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("triangle.png");
    World.add(world, this.body);
    this.b=255;
  }


  display(){
    push ();
    if(this.body.speed<2.5){
      var angle = this.body.angle;
      
      translate(this.body.position.x, this.body.position.y);
      rotate(angle)
  
      imageMode(CENTER);
      image(this.image, 0, 0, this.width+20, this.height+20);
      }else{
        
        World.remove(world,this.body);
        tint(255,this.b)
        this.b=this.b-5;
       
      } 
      pop ();

  }
}

