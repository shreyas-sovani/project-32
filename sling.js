class Slingshot{

    constructor(bodyA,pointB){
    
        var opt={
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.05,
    length:10
        }

        this.pointB=pointB;
      //  this.bodyA=bodyA;
    
    this.sling=Constraint.create(opt);
    World.add(world,this.sling);
   
    }


    attach(body){

        this.sling.bodyA=body;
    }
    
    fly(){

        this.sling.bodyA=null;
    }

   
    
    display(){
    

        if(this.sling.bodyA){
      var pointA=this.sling.bodyA.position;
      var pointB=this.pointB;
    strokeWeight(4);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    
    
    }
    
    
    
    
    
    
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    