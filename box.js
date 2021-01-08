class Box{



    constructor(x,y,width,height){
    
    var opt={
    
        'restitution':0.8,
        'density':1,
        'friction':5

    
    }
    
    
    this.width=width;
    this.height=height;
    this.body=Bodies.rectangle(x,y,width,height,opt);
    World.add(world,this.body)
    
    this.visiblity=255;
    }

    display(){

        push();
        if(this.body.speed<6){
            ellipseMode(CENTER);
            strokeWeight(0.5);

            var pos=this.body.position;

            rect(pos.x,pos.y,this.width,this.height);


        pop();
        }
        else{
            push();
            World.remove(world,this.body);
            this.visiblity=this.visiblity-5;
            tint(255,this.visiblity);
            pop();
        }
    }
    
    
    score(){

        if(this.visiblity<0 && this.visiblity>-400){

            score++
        }


    }
    
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    