import { useState, useEffect } from 'react'
import { Trending } from '../models/trends'
import { TestingTrends } from '../test/test'

export default function GetTrends(region: string) {
    const [trends, setTrends] = useState<Trending>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const proxyurl = 'https://cors-anywhere.herokuapp.com/'
    const url = `https://trendincy.herokuapp.com/trends/${region}`
    useEffect(() => {
        if (true) {
            const trending: Trending = TestingTrends
            setTrends(trending)
        }
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
