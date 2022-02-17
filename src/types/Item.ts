export type ItemStat = {
  name: string,
  value: number,
  stack: string,
  add: number,
  numberType: string
}

export type ItemProps = {
  data: {
    id?: number,
    name: string,
    icon: string,
    description: string,
    rarity: string,
    category: string,
    stats: ItemStat[]
  }
}