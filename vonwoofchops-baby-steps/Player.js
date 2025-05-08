class Player {
  constructor() {
    this.health = 20; // Max health
    this.behindClear = false;
  }

  playTurn(warrior) {
    // Clear behind first
    if (!this.behindClear) {
      this.adventure(warrior, "backward");
    } else {
      this.adventure(warrior, "forward");
    }

    // Store health
    this.health = warrior.health();
  }

  adventure(warrior, direction) {
    //` If we're taking damage, run away or get fighting
    if (this.takingDamage(warrior)) {
      if (this.lowHealth(warrior)) {
        warrior.walk("backward");
      } else {
        this.moveRescueFight(warrior, direction);
      }

    // If not in danger and injured, heal up
    } else if (this.isInjured(warrior)) {
      this.healUp(warrior);

    // If healed and safe move onwards
    } else {
      this.moveRescueFight(warrior, direction);

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

  moveRescueFight(warrior, direction) {
    if (warrior.feel(direction).isEmpty()) {
      warrior.walk(direction);
    } else {
      if (warrior.feel(direction).isUnit()) {
        if (warrior.feel(direction).getUnit().isBound()) {
          warrior.rescue(direction);
        } else {
          warrior.attack(direction);
        }
      } else if (warrior.feel(direction).isWall()) {
        this.behindClear = true;
        warrior.walk();
      } else if (warrior.feel(direction).isStairs()) {
        warrior.walk(direction);
      }
    }
  }

  healUp(warrior) {
    warrior.rest();
  }
}
