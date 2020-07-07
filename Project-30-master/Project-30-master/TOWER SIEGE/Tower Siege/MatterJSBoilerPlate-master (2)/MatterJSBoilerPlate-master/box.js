class Target{
    constructor(x,y){
        var options = {
            friction : 0.5
        }
        this.body = Bodies.rectangle(x,y,80,80)// options)
        this.x = x;
        this.y = y;
        World.add(world, this.body);
        this.Visibility = 255;
    }
    score(){
        if(this.Visibility <0 && this.Visibility > -1005){
            score++;
        }
    }
    display(){
        if(this.body.speed < 2.5){
            var angle = this.body.angle;
            var pos = this.body.position;
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            fill("red");
            rect(this.x/10000,this.y/10000,80,80);
            pop();
        }
        else{
            World.remove(world,this.body);
            push();
            this.Visibility -= 5;
            //tint(255,this.Visibility);
            //rect(this.x/10000,this.y/10000,80,80);
            pop();
        }
    }
}