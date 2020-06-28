import React from 'react'
import { GifGridItem } from './GifGridItem'
import useFetchGifs from './../hooks/useFetchGifs'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
export const GifGrid = ({ category }) => {
  // para renombrar en la destructuracion es con :
  const { loading, data: images } = useFetchGifs(category)
  return (
    <>
      <h3>{category}</h3>
      {loading && (
        <SkeletonTheme color='#202020' highlightColor='#444'>
          <p>
            <Skeleton count={3} />
          </p>
        </SkeletonTheme>
      )}
      <div className='card-grid'>
        {images.map((img) => (
          <GifGridItem {...img} key={img.id} />
        ))}
      </div>
    </>
  )
}
