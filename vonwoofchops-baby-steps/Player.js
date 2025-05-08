class Player {
  constructor() {
    this.health = 20; // Max health
  }

  playTurn(warrior) {
    // If we're taking damage, get fighting
    if (this.takingDamage(warrior)) {
      this.advanceAttack(warrior);

    // If not in danger and injured, heal up
    } else if (this.isInjured(warrior)) {
      this.healUp(warrior);

    // If healed and safe move onwards
    } else {
      this.advanceAttack(warrior);

    }

    // Store health
    this.health = warrior.health();
  }

  takingDamage(warrior) {
    return warrior.health() < this.health;
  }

  isInjured(warrior) {
    return warrior.health() < warrior.maxHealth();
  }

  advanceAttack(warrior) {
    if (warrior.feel().isEmpty()) {
      warrior.walk();
    } else {
      warrior.attack();
    }
  }

  healUp(warrior) {
    warrior.rest();
  }
}
