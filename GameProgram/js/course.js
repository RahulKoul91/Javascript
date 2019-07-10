var Character = {
    // Initialize the character
    initCharacter: function (name, health, force) {
        this.name = name;
        this.health = health;
        this.force = force;
    },
    // Attack a target
    attack: function (target) {
        if (this.health > 0) {
            var damage = this.force;
            console.log(this.name + " attacks " + target.name + " and causes " + damage + " damage points");
            target.health = target.health - damage;
            if (target.health > 0) {
                console.log(target.name + " has " + target.health + " health points left");
            } else {
                target.health = 0;
                console.log(target.name + " has been eliminated!");
            }
        } else {
            console.log(this.name + " can't attack (they've been eliminated).");
        }
    }
};

var Player = Object.create(Character);
// Initialize the player
Player.initPlayer = function (name, health, force) {
    this.initCharacter(name, health, force);
    this.xp = 0;
};
// Describe the player
Player.describe = function () {
    var description = this.name + " has " + this.health + " health points, " +
        this.force + " force points " + this.xp + " experience points";
    return description;
};
// Fight an enemy
Player.fight = function (enemy) {
    this.attack(enemy);
    if (enemy.health === 0) {
        console.log(this.name + " eliminated " + enemy.name + " and wins " +
            enemy.value + " experience points");
        this.xp += enemy.value;
    }
};

var Enemy = Object.create(Character);
// Initialize the enemy
Enemy.initEnemy = function (name, health, force, species, value) {
    this.initCharacter(name, health, force);
    this.species = species;
    this.value = value;
};

var player1 = Object.create(Player);
player1.initPlayer("Rainbow Dash", 150, 25);

var player2 = Object.create(Player);
player2.initPlayer("Applejack", 130, 30);

console.log("Welcome to the adventure! Here are our heros:");
console.log(player1.describe());
console.log(player2.describe());

var monster = Object.create(Enemy);
monster.initEnemy("Spike", 40, 20, "orc", 10);

console.log("A wild monster has appeared: it's a(n) " + monster.species + " named " + monster.name);

monster.attack(player1);
monster.attack(player2);

player1.fight(monster);
player2.fight(monster);

console.log(player1.describe());
console.log(player2.describe());