
class Tower {
    constructor(x, y, width, height) {

      var options = {
        //set the static body(challenge 2)
        isStatics: true
      };

      //Load the image of the tower(challenge 5)
        this.width = width;
        this.height = height;

      //write the instruction to create a rectangular tower body(challenge1)
        this.image = loadImage("assets/tower.png");

      //add the option inside the rectangular body(challenge 2)
        this.body = Bodies.rectangle(200,200,50,50,options);

      //Add this object to the World(challenge 2)
        World.add(world, this.body);
    }

display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
  }
}
