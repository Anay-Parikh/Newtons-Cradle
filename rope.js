class Rope {
	constructor(body1, body2, offset1, offset2) {
		this.body1 = body1;
        this.body2 = body2;
		this.offset1 = offset1;

		var options = {
			bodyA: body1,
			pointA: offset1,
			bodyB: body2,
			pointB: offset2,
			length: 250,
			stiffness: 0.2
		}

        this.rope = Constraint.create(options);
		World.add(world, this.rope);

	}

    display() {
	    var pointA = this.body1.position;
		var pointB = this.body2.position;

		push();
		strokeWeight(2);
		line(this.offset1.x + pointA.x, pointA.y, pointB.x, pointB.y);
		pop();
	}

}
