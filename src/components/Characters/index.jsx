import React from 'react'

import Character from './Character'
import "./style.css"

export const Characters = ({setCount, count, chars}) => {
  return (
    <div className='characters'>
        {
            chars?.map(char=>{
                return (<Character setCount={setCount} count={count} item={char}/>)
            })
        }
    </div>
  )
}
