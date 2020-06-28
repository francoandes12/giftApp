import { useState, useEffect } from 'react'
import { getGif } from './../helpers/getGifs'
const useFetchGifs = (category) => {
  const [state, setstate] = useState({
    data: [],
    loading: true
  })
  //efectos no pueden ser async
  useEffect(() => {
    getGif(category).then((imgs) => {
      setstate({
        data: imgs,
        loading: false
      })
    })
  }, [category])
  return state
}

export default useFetchGifs
