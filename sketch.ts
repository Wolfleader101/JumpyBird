interface Transform {
  pos: p5.Vector;
  rotation: p5.Vector;
  scale: p5.Vector;
}

interface RigidBody {
  vel: p5.Vector;
}

class Entity {
  readonly name: string;

  pos: p5.Vector;
  rb: RigidBody;

  constructor(name: string, pos: p5.Vector) {
    this.name = name;
    this.pos = pos;
    this.rb = {
      vel: new p5.Vector(0, 0),
    };
  }

  draw() {
    square(this.pos.x, this.pos.y, 80).fill("#fae502").stroke(0, 0);
  }
}

class Physics {
  private entityList: Entity[];

  constructor(entityList: Entity[]) {
    this.entityList = entityList;
  }

  OnUpdate() {
    this.entityList.forEach((ent) => {
      console.log(deltaTime);
      ent.rb.vel.y += 9.8 * (deltaTime / 1000);

      ent.pos.y += ent.rb.vel.y;
      ent.pos.x += 150 * (deltaTime / 1000);

      if (ent.pos.y + 80 >= 450) {
        ent.pos.y = 450 - 80;
        ent.rb.vel.y = 0;
      }

      ent.draw();
    });
  }

  OnKeyPressed() {
    if (keyCode == 32) {
      this.entityList.forEach((ent) => {
        ent.rb.vel.y -= 8;
      });
    }
  }
}

let ents = [new Entity("player", new p5.Vector(50, 50))];
let img: p5.Image;
let physics = new Physics(ents);

function preload() {
  img = loadImage("assets/pipe.png");
}

function setup() {
  createCanvas(900, 450);
}

function draw() {
  background(220);

  physics?.OnUpdate();
}

function keyPressed() {
  physics?.OnKeyPressed();
}
