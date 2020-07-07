class Platform {
    constructor(x,y) {
      var options = {
          isStatic:true,
          restitution:0.8,
          friction:1,
          density:1.0
      }
      this.body = Bodies.rectangle(x,y,240,30,options);

      this.x = x;
      this.y = y;
 
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      rectMode(CENTER);
      fill("navy");
      
      push();
      //translate(pos.x,pos.y);
      rotate(angle);
      rect(this.x,this.y, 240, 30)
      pop();
      
    }
  };