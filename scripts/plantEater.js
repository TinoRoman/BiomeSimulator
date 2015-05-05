function PlantEater() {
  this.energy = 20;
}
PlantEater.prototype.act = function(context) {

  var space = context.find(" ");
  var wantReproduce = Math.round(Math.random() * 10) > 9;

  if (this.energy > 60 && space && wantReproduce) {
    return {type: "reproduce", direction: space};
  }

  var plant = context.find("*");
  if (plant && this.energy < 75) {
    return {type: "eat", direction: plant};
  }

  if (space) {
    return {type: "move", direction: space};
  }

};