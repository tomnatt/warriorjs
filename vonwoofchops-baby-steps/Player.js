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
    // If nearest thing is an enemy, shoot
    // If next to a captive, rescue
    // Else move forward

    if (this.isInjured(warrior) && !this.takingDamage(warrior)) {
      this.healUp(warrior);

    } else if (warrior.feel().isWall()) {
      warrior.pivot();

    } else if (this.enemyNearest(warrior)) {
      warrior.shoot();

    } else if (warrior.feel().isUnit() && warrior.feel().getUnit().isBound()) {
      warrior.rescue();

    } else {
      warrior.walk();
    }
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
