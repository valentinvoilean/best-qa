import styled from 'styled-components'
import { Col as C } from 'react-flexbox-grid'

const Col = styled(C)`
  background: red;
  opacity: 0.5;
  height: 100vh
  background-clip: content-box;
`

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
`
export default {
  Col,
  Wrapper
}
