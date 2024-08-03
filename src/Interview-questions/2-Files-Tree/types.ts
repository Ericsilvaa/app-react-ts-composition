export type TEntryProps = {
  entry: TEntry
  depth: number
}

export type TEntry = {
  name: string
  articles?: TEntry[]
}
