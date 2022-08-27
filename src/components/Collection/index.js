import React from 'react'
import { CategoryCard } from './styles'
import { Button } from '../Button'

export const Collection = () => {

  const IMG = 'https://media.istockphoto.com/photos/red-headphones-isolated-picture-id835148968?k=20&m=835148968&s=170667a&w=0&h=daLHpdrq22SuLaxOsAYlExZ_ER2E3ccSGKvKml7SUGU='

  return (
    <CategoryCard>
        <img src={IMG} alt='' />
        <div className='cover' />
        <div className='product_info' >
          <h2>Name</h2>
          <Button>Button Text</Button>
        </div>
    </CategoryCard>
  )
}
