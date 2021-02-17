import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DrawRoom from './components/DrawRoom'
import Room from './components/Room'

const App = () => {

    const [data, setData] = useState({})

    const onDraw = (data) => {
        setData(data)
    }

    return (
        <Container>
            <Row>
                <Col xs lg="2"><DrawRoom onDraw={onDraw}/></Col>
                <Col><Room data={data}/></Col>
            </Row>
        </Container>
    )
}

export default App
