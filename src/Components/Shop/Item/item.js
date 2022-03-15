import React, { useState } from 'react'

const Item = ({name,id, updateShop}) => {
    let values = {
        name: name,
        id: id
    }
  return (
    <div>
        <div>
            <button value={values} onClick={() => {
                updateShop(values)
            }}>Click me</button>
        </div>
    </div>
  )
}

export default Item