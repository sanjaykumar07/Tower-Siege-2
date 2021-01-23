class blockorange extends baseblock {
  constructor(x,y,width,height)
  {
    super(x,y,width,height);
    this.b=255;
  }

  display()
  {
    
    push();
    stroke("blue")
    strokeWeight(1)
    fill("black")
    if(this.body.speed<2.5){
      super.display();
    }else{
      World.remove(world,this.body);
      tint(255,this.b)
      this.b=this.b-5;
    }
    pop();
  }
}
     