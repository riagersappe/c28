class slingshot {
    constructor(a,b,l,s,w){
        var constraint = {
            bodyA:a,
            pointB:b,
            length:l,
            stiffness:s
          }
        
          this.sling1 = Matter.Constraint.create(constraint);
          World.add(myworld,this.sling1);
          this.w = w
    }
    display(){
        if(this.sling1.bodyA != null){
        strokeWeight(this.w);
        line(this.sling1.bodyA.position.x,this.sling1.bodyA.position.y,this.sling1.pointB.x,this.sling1.pointB.y);
        }
    }
    fly(){
        this.sling1.bodyA = null
    }
}