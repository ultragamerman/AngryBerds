class slingShot {
    constructor(bodyA,bodyB ){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:10
        }
        this.slingShot = Constraint.create(options);
        World.add(world,this.slingShot);
    }
    display(){
        strokeWeight(4);
        (this.slingShot.bodyA.position.x,this.slingShot.bodyA.position.y,this.slingShot.bodyB.position.x,this.slingShot.bodyB.position.y);
    }
}