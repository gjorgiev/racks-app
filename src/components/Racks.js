import React from 'react'
import { Rect } from 'react-konva'

const Racks = () => {

    const colorA = "#FFD4eA"
    const colorB = "#DCDEFF"

    return (
       <>
        <Rect
            x={20}
            y={50}
            width={30}
            height={90}
            fill={colorA}
            draggable
            />
        <Rect
            x={60}
            y={50}
            width={45}
            height={150}
            fill={colorB}
            draggable
            />
       </>
    )
}

export default Racks
