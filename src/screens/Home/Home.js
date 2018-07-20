import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

const Home = () => (
  <Grid>
    <Row>
      <Col xs={6}>Hello World!</Col>
      <Col xs={6}>This is using the other 6 columns!</Col>
    </Row>
  </Grid>
)

export { Home }
