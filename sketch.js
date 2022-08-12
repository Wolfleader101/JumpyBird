var img;
var Entity = /** @class */ (function () {
    function Entity(name, pos) {
        this.name = name;
        this.pos = pos;
        this.dir = 1;
    }
    Entity.prototype.draw = function () {
        ellipse(this.pos.x, this.pos.y, 80, 65).fill("#fae502").stroke(0, 0);
    };
    return Entity;
}());
function Physics(entityList) {
    // function OnUpdate() {
    entityList.forEach(function (ent) {
        ent.pos.y += ent.dir * 0.25 * deltaTime;
        if (ent.pos.y >= 450 || ent.pos.y <= 0) {
            ent.dir = -ent.dir;
        }
        ent.draw();
    });
    // }
}
var ents = [new Entity("player", new p5.Vector(50, 50))];
function preload() {
    img = loadImage("assets/pipe.png");
}
function setup() {
    createCanvas(900, 450);
}
function draw() {
    background(220);
    Physics(ents);
    // image(img, 0, 400, 69, 100);
    // ellipse(50, 50, 80, 65).fill("#fae502").stroke(0, 0);
}
