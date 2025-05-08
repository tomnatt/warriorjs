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
    //` If we're taking damage, run away or get fighting
    if (this.takingDamage(warrior)) {
      if (this.lowHealth(warrior)) {
        warrior.walk("backward");
      } else {
        this.moveRescueFight(warrior);
      }

    // If not in danger and injured, heal up
    } else if (this.isInjured(warrior)) {
      this.healUp(warrior);

    // If healed and safe move onwards
    } else {
      this.moveRescueFight(warrior);

    }
  }

  takingRangedDamage(warrior) {
    return takingDamage(warrior) && warrior.feel().isEmpty();
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

  moveRescueFight(warrior) {
    if (warrior.feel().isEmpty()) {
      warrior.walk();
    } else {
      if (warrior.feel().isUnit()) {
        if (warrior.feel().getUnit().isBound()) {
          warrior.rescue();
        } else {
          warrior.attack();
        }
      } else if (warrior.feel().isWall()) {
        warrior.pivot();
      } else if (warrior.feel().isStairs()) {
        warrior.walk();
      }
    }
  }

  healUp(warrior) {
    warrior.rest();
  }
}
