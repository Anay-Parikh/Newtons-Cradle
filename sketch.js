const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var ball = [];
var rope = [];
var count = 5;
var r = 32;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	ellipseMode(RADIUS);

	engine = Engine.create();
	world = engine.world;

	var roof_options = {
		isStatic: true			
	}

	roof = Bodies.rectangle(400, 100, r*count*2, 30, roof_options);
    World.add(world, roof);

    var x = roof.vertices[0].x;
    for (var i = 0; i < count; i++) {
		ball[i] = Bodies.circle(x + r + (r*2*i), 350, r, {restitution: 1, density: 0.0008});
		console.log(ball[i]);
		World.add(world, ball[i]);
	}

	for (var i = 0; i < count; i++) {
		var offset = ball[i].position.x - roof.position.x;
		rope[i] = new Rope(roof, ball[i], {x: offset, y: 0}, {x: 0, y: 0});
	}

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  var roofWidth = roof.vertices[1].x - roof.vertices[0].x
  var roofHeight = roof.vertices[2].y - roof.vertices[1].y
  rect(roof.position.x, roof.position.y, roofWidth, roofHeight);
  
  for (var i = 0; i < count; i++) {
      ellipse(ball[i].position.x, ball[i].position.y, r);
	  rope[i].display();
  }	
 
}

function keyPressed() {
	if (keyCode == RIGHT_ARROW) {
	    Body.applyForce(ball[0], {x: ball[0].position.x, y: ball[0].position.y}, {x: -0.2, y: 0})
	}
}