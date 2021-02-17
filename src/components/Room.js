import { Layer, Stage } from 'react-konva'
import Racks from './Racks'
import Walls from './Walls'

const Room = ({data}) => {

    const width = 700
    const height = 700

    return (
        <Stage width={width} height={height}>
            <Layer>
                <Walls data={data} margin={10} />
            </Layer>
        </Stage>
    )
}

export default Room
