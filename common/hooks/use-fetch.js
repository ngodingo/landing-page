import { useState, useEffect } from "react"

export function useFetch ({url, header}) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    // fetch api...
  }, [url])

  return {data, loading, error}
}