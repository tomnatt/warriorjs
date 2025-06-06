class Player {
  constructor() {
    this.health = 20; // Max health
  }

  playTurn(warrior) {
    this.adventure(warrior);

    // Store health
    this.health = warrior.health();
  }

  adventure(warrior) {
    // If injured but not taking damage, heal
    // If wall in front, pivot
    // Shoot enemy behind
    // If captive behind, go rescue
    // If nearest thing is an enemy, shoot
    // If next to a captive, rescue
    // Else move forward

    if (this.isInjured(warrior) && !this.takingDamage(warrior)) {
      this.healUp(warrior);

    } else if (warrior.feel().isWall()) {
      warrior.pivot();

    } else if (this.enemyBehind(warrior)) {
      warrior.shoot("backward");

    } else if (this.captiveBehind(warrior)) {
      if (warrior.feel("backward").isUnit() && warrior.feel("backward").getUnit().isBound()) {
        warrior.rescue("backward");
      } else {
        warrior.walk("backward")
      }

    } else if (this.enemyNearest(warrior)) {
      warrior.shoot();

    } else if (warrior.feel().isUnit() && warrior.feel().getUnit().isBound()) {
      warrior.rescue();

    } else {
      warrior.walk();
    }
  }

  enemyBehind(warrior) {
    const spaceWithUnit = warrior.look("backward").find(space => space.isUnit());
    return spaceWithUnit && spaceWithUnit.getUnit().isEnemy();
  }

  captiveBehind(warrior) {
    const spaceWithUnit = warrior.look("backward").find(space => space.isUnit());
    return spaceWithUnit && spaceWithUnit.getUnit().isBound();
  }

  enemyNearest(warrior) {
    const spaceWithUnit = warrior.look().find(space => space.isUnit());
    return spaceWithUnit && spaceWithUnit.getUnit().isEnemy();
  }

  takingDamage(warrior) {
    return warrior.health() < this.health;
  }

  lowHealth(warrior) {
    return warrior.health() < 9; // This should be enough to retreat out of arrow range
  }

  isInjured(warrior) {
    return warrior.health() < warrior.maxHealth();
  }

  healUp(warrior) {
    warrior.rest();
  }
}
