export interface Trending {
    trends: Trends[]
}

export interface Trends {
    name: string
    tweet_volume: number | null
}
