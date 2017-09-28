import styled from 'styled-components'
import config from '../config'

const Card = styled.div`
  margin: 50px 0;
  padding: 25px;
  box-shadow: ${config.cardShadow};
  background-color: white;
  border-top: 4px solid ${config.mainColorLight};
`
export default ({children}) => (
  <Card>{children}</Card>
)