import { useEffect, useState } from 'react'

export function useEventData() {

  const [events, setEvents] = useState([])
  const [isloading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    fetch('https://api.spacexdata.com/v3/history')
      .then(res => {
        if(res.ok) {
          return res.json()
        } else {
          throw Error('Fetching Events')
        }
      })
      .then(events => {
        setEvents(events)
        setIsLoading(false)
      })
      .catch(error => setError(error))
  },[])

  return { events, isloading, error }
}