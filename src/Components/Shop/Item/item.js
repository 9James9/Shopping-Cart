import React, { useState } from 'react'

const Item = ({name,id, updateShop}) => {
    let values = {
        name: name,
        id: id,
        quantity: 1
    }
  return (
    <div>
        <div>
            <button value={values} onClick={() => {
                updateShop(values)
            }}>{name}</button>
        </div>
    </div>
  )
}

export default Item