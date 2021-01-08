class Bird{
    constructor(x, y) {
        this.body = Bodies.rectangle(x, y, 50, 50);
        this.width = 50
        this.height = 50
        World.add(world, this.body);
    }

    display(){
        console.log(this.body.angle)
        var position = this.body.position;
        position.x = mouseX
        position.y = mouseY
        var angle = this.body.angle;
        push();
        translate(position.x, position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red")
        rect(0, 0, this.width, this.height)
        pop()
    }
}