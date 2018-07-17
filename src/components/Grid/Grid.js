import React from 'react'
import { Grid, Row } from 'react-flexbox-grid'
import S from './styled'

export const GridPreview = () => (
  <S.Wrapper>
    <Grid>
      <Row>{[...Array(12)].map((e, i) => <S.Col xs={1} key={i} />)}</Row>
    </Grid>
  </S.Wrapper>
)
