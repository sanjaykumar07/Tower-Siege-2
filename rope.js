class rope {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.03,
      length: 1,
    };
    this.rope = Matter.Constraint.create(options);
    World.add(world, this.rope);
  }

  fly() {
    this.rope.bodyA = null;
  }

  attacher(bodyA)
  {
      this.rope.bodyA=bodyA;
  }

  display() {
    if (this.rope.bodyA) {
      var pointA = this.rope.bodyA.position;
      var pointB = this.rope.pointB;
      strokeWeight(4);
      line(pointA.x, pointA.y, pointB.x, pointB.y);
    }


  }
}