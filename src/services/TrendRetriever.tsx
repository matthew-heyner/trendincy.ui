import { useState, useEffect } from 'react'
import { TrendsProps } from '../components/TrendContainer'
import { Trending } from '../models/trends'

export default function GetTrends(prop: TrendsProps) {
    const [trends, setTrends] = useState<Trending>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const proxyurl = 'https://cors-anywhere.herokuapp.com/'
    const url = `https://trendincy.herokuapp.com/trends/${prop.regions}`
    useEffect(() => {
        fetch(proxyurl + url)
            .then((response) => {
                if (response.ok) return response.json()
                throw response
            })
            .then((json) => {
                // const temp = JSON.stringify(json, null, 2)
                const trending: Trending = json
                setTrends(trending)
            })
            .catch((err) => {
                console.error(err)
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [url])

    if (loading) return undefined
    if (error) return false
    return trends
}
