export class Cards {
  cards: Array<Pokemon>
}

export class Card {
  card: Pokemon
}

export class Attack {
  convertedEnergyCost: number
  cost: Array<string>
  damage: string
  name: string
  text: string
}

export class Ability {
  name: string
  text: string
}

export class Weakness {
  type: string
  value: string
}

export class Resistance {
  type: string
  value: string
}

export class Pokemon {
  ability: Ability
  attacks: Array<Attack>
  artist: string
  convertedRetreatCost: number
  hp: string
  id: string
  imageUrl: string
  imageUrlHiRes: string
  name: string
  nationalPokedexNumber: number
  number: string
  rarity: string
  resistances: Array<Resistance>
  retreatCost: Array<string>
  series: string
  set: string
  setCode: string
  subtype: string
  supertype: string
  text: Array<string>
  types: Array<string>
  weaknesses: Array<Weakness>
}