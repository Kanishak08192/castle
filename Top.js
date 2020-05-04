class Top {
  constructor(x, y, width, height) {
    var options = {
        restitution:0.8,
        friction:0.3,
        density:1.0,
        isStatic:true
    }
    this.body = Bodies.rectangle(x,y,height,width,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("Sprites/download.png")  
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("green");
    rect(pos.x, pos.y, this.height, this.width);
    imageMode(CENTER);
    image(this.image ,this.body.position.x,this.body.position.y);
    
  }
}