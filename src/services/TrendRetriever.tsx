import { useState, useEffect } from 'react'
import { TrendsProps } from '../components/TrendContainer'

export default function GetTrends(prop: TrendsProps) {
    const [trends, setTrends] = useState([])
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
                setTrends(json)
            })
            .catch((err) => {
                console.error(err)
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [url])

    if (loading) return 'Loading...'
    if (error) return 'Could not retrieve Twitter Trends.'
    return trends
}
