class polygon{
    constructor(x,y,r){
        var options={
            'restitution': 0.8,
            'friction' : 1.0,
            'density': 1.0,
          
        }
        this.body = Bodies.circle(x,y,r,options);
        this.image = loadImage("polygon.png");
        World.add(world,this.body);
    }

    display(){
       
        var posX = this.body.position.x;
        var posY = this.body.position.y;

        push();
        translate(posX,posY);
        imageMode(CENTER);
        image(this.image,posX,posY,40,40);
        pop();
    }
}