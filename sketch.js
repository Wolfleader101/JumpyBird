var Entity = /** @class */ (function () {
    function Entity(name, pos) {
        this.name = name;
        this.pos = pos;
        this.rb = {
            vel: new p5.Vector(0, 0)
        };
    }
    Entity.prototype.draw = function () {
        square(this.pos.x, this.pos.y, 80).fill("#fae502").stroke(0, 0);
    };
    return Entity;
}());
var Physics = /** @class */ (function () {
    function Physics(entityList) {
        this.entityList = entityList;
    }
    Physics.prototype.OnUpdate = function () {
        this.entityList.forEach(function (ent) {
            console.log(deltaTime);
            ent.rb.vel.y += 9.8 * (deltaTime / 1000);
            if (ent.pos.y + 80 >= 450) {
                ent.pos.y = 450 - 80;
                ent.rb.vel.y = 0;
            }
            ent.pos.y += ent.rb.vel.y;
            ent.draw();
        });
    };
    Physics.prototype.OnKeyPressed = function () {
        if (keyCode == 32) {
        }
    };
    return Physics;
}());
var ents = [new Entity("player", new p5.Vector(50, 50))];
var img;
var physics = new Physics(ents);
function preload() {
    img = loadImage("assets/pipe.png");
}
function setup() {
    createCanvas(900, 450);
}
function draw() {
    background(220);
    physics === null || physics === void 0 ? void 0 : physics.OnUpdate();
}
function keyPressed() {
    physics === null || physics === void 0 ? void 0 : physics.OnKeyPressed();
}
