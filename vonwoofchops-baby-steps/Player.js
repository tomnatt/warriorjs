class Player {
  playTurn(warrior) {
    if (warrior.feel().isEmpty()) {
      if (warrior.health() < warrior.maxHealth() * 0.5) {
        this.healUp(warrior);
      } else {
        warrior.walk();
      }
    } else {
      warrior.attack();
    }
  }

  healUp(warrior) {
    warrior.rest();
  }
}
