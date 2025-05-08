# VonWoofchops - Baby Steps

### _For players new to WarriorJS_

## Level 6

_The wall behind you feels a bit further away in this room. And you hear more cries for help._

> **TIP:** You can walk backward by passing `'backward'` as an argument to `walk()`. Same goes for `feel()`, `rescue()` and `attack()`. Archers have a limited attack distance.

### Floor Map

```
╔════════╗
║C @ S aa║
╚════════╝

C = Captive (1 HP)
@ = VonWoofchops (20 HP)
S = Thick Sludge (24 HP)
a = Archer (7 HP)
> = stairs
```

## Abilities

### Actions (only one per turn)

- `warrior.walk()`: Moves one space in the given direction (`'forward'` by default).
- `warrior.attack()`: Attacks a unit in the given direction (`'forward'` by default), dealing 5 HP of damage.
- `warrior.rest()`: Gains 10% of max health back, but does nothing more.
- `warrior.rescue()`: Releases a unit from his chains in the given direction (`'forward'` by default).

### Senses

- `warrior.think()`: Thinks out loud (`console.log` replacement).
- `warrior.feel()`: Returns the adjacent space in the given direction (`'forward'` by default).
- `warrior.health()`: Returns an integer representing your health.
- `warrior.maxHealth()`: Returns an integer representing your maximum health.

## Next Steps

When you're done editing `Player.js`, run the `warriorjs` command again.
