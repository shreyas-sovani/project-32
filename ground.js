class Ground{



    constructor(x,y,width,height){
    
    var opt={
    
        //'restitution':0.8,
        //'density':1
    isStatic:true
    
    }
    
    
    this.width=width;
    this.height=height;
    this.body=Bodies.rectangle(x,y,width,height,opt);
    World.add(world,this.body)
    
    
    }
    
    display(){
    
    rectMode(CENTER);
    
    var pos=this.body.position;
    
    rect(pos.x,pos.y,this.width,this.height);
    
    
    
    
    
    }
    
    
    
    
    
    
    
    
    
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    