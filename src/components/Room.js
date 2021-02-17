import { useState } from 'react'
import { Layer, Rect, Shape, Stage } from 'react-konva'
import Racks from './Racks'
import Walls from './Walls'

const Room = () => {

    const [data, setData] = useState({
        A: 300,
        B: 300,
        C1: 50,
        C2: 60
    })

    const width = data.A + 10
    const height = data.B + 10

    return (
        <Stage width={width} height={height} className="room">
            <Layer>
                <Racks />
                <Walls data={data} />
            </Layer>
        </Stage>
    )
}

export default Room
