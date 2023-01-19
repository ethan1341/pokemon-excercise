export interface Pokedex {
    base_happiness: number
    capture_rate: number
    color: { name: string, url: string },
    flavor_text_entries: Array<{flavor_text: string, language: string, version: string}>
}