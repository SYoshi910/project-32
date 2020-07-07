class Poly{
    constructor(x, y, radius) {
      var options = {
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.body = Bodies.polygon(x, y, 8,radius, options);
      this.radius = radius;
      this.x = x;
      this.y = y;
      this.image = loadImage("sprites/octo2.jpg");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      imageMode(RADIUS);
      //imageMode(RADIUS);
      fill("orange");
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      image(this.image,this.x-97,this.y-170,this.radius*3,this.radius*3);
      //circle(0,0,this.radius);
      pop();
      
    }
  }