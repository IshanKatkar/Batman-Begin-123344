class Drop {
    constructor(x,y) {
      var options = {
         
          restitution:0.2,
          friction:0.002
      }
      this.body = Bodies.circle(x,y,5,options);
       this.radius=5;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("blue");
      ellipse(pos.x, pos.y,this.radius,this.radius);
    }

    update(){
      if(this.body.position.y>100){

        Matter.Body.setPosition(this.body,{
          x:random(0,400),y:random(0,400)
        })
        
      }
    }
  };
