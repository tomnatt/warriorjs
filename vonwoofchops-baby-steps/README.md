# VonWoofchops - Baby Steps

### _For players new to WarriorJS_

## Level 8

_You hear the mumbling of wizards. Beware of their deadly wands! Good thing you found a bow._

> **TIP:** Use `warrior.look()` to determine your surroundings, and `warrior.shoot()` to fire an arrow.

### Floor Map

```
╔══════╗
║@ Cww>║
╚══════╝

@ = VonWoofchops (20 HP)
C = Captive (1 HP)
w = Wizard (3 HP)
> = stairs
```

## Abilities

### Actions (only one per turn)

- `warrior.walk()`: Moves one space in the given direction (`'forward'` by default).
- `warrior.attack()`: Attacks a unit in the given direction (`'forward'` by default), dealing 5 HP of damage.
- `warrior.rest()`: Gains 10% of max health back, but does nothing more.
- `warrior.rescue()`: Releases a unit from his chains in the given direction (`'forward'` by default).
- `warrior.pivot()`: Rotates in the given direction (`'backward'` by default).
- `warrior.shoot()`: Shoots the bow & arrow in the given direction (`'forward'` by default), dealing 3 HP of damage to the first unit in a range of 3 spaces.

### Senses

- `warrior.think()`: Thinks out loud (`console.log` replacement).
- `warrior.feel()`: Returns the adjacent space in the given direction (`'forward'` by default).
- `warrior.health()`: Returns an integer representing your health.
- `warrior.maxHealth()`: Returns an integer representing your maximum health.
- `warrior.look()`: Returns an array of up to 3 spaces in the given direction (`'forward'` by default).

## Next Steps

When you're done editing `Player.js`, run the `warriorjs` command again.
