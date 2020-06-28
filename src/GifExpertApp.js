import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import { GifGrid } from './components/GifGrid'
const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Harry Potter'])
  return (
    <>
      <h1 className='animate__animated animate__rubberBand'>Gif Expert App</h1>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
      <hr id='separador' />
    </>
  )
}

export default GifExpertApp
