class Polygon{

    constructor(x,y,radius){
    
    var opt={
    
        'restitution':0.7,
        'density':1.2,
        'isStatic':false
         
    
    }
    
    
    //this.sides=sides;
    this.radius=radius;
    this.radius=radius;

    this.body=Bodies.circle(x,y,radius,opt);
    this.image=loadImage("polygon.png");

    World.add(world,this.body);
    
    
    }
    
    
    display(){
    
    var pos=this.body.position;
  imageMode(CENTER);
   image(this.image,pos.x,pos.y,this.radius,this.radius);
    
    
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    }