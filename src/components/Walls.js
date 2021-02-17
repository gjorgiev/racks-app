import React from 'react'
import { Shape } from 'react-konva'

const Walls = ({data}) => {
    const margin = 10
    const lineWidth = 3

    const {A, B, C1, C2} = data

    return (
        <Shape
            sceneFunc={(context, shape) => {
                context.beginPath();
                // start drawing the walls
                // set the starting point to draw the first wall A
                context.moveTo(margin, margin)
                context.lineTo(A, margin)
                // let's draw the wall B1
                context.moveTo(margin, margin)
                context.lineTo(margin, B)
                // draw wall B2
                context.moveTo(A, margin)
                context.lineTo(A, B)
                // draw wall C1
                context.moveTo(margin, B)
                context.lineTo(C1, B)
                // draw wall C2
                context.moveTo(A-C2, B)
                context.lineTo(A, B)
                // execute the drawing
                context.closePath()
                // (!) Konva specific method, it is very important
                context.fillStrokeShape(shape);
            }}
            strokeWidth={lineWidth}
            stroke="black"
        />
    )
}

export default Walls
