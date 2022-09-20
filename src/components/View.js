import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const View = ({shoes, deleteShoe}) => {
    return shoes.map(shoe=>(
        <tr key={shoe.brand}>
            <td>{shoe.brand}</td>
            <td>{shoe.size}</td>
            <td>{shoe.color}</td>
            <td>{shoe.price}</td>
            <td className='delete-btn' onClick={()=>deleteShoe(shoe.brand )}>
                <Icon icon={trash}/>
            </td>
        </tr>
    ))
}