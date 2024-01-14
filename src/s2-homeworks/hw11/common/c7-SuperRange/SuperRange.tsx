import React from 'react'
import {Slider, SliderProps} from '@mui/material'


interface Super {
    value:number|number[]
    handleChange: (event: any, value: any)=>void
    id:string
}
const SuperRange = ({value, handleChange,...props}:Super) => {
    return (
        <Slider
            sx={ { width: 300 }
                
            }
            value={value}
            onChange={handleChange}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
