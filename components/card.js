import styled from 'styled-components'
import config from '../config'

const Card = styled.div`
  margin: 50px 0;
  padding: 25px;
  box-shadow: ${config.cardShadow};
  background-color: white;
  border-top: 4px solid ${config.mainColorLight};
`
const CardTitle = styled.h2`
  margin: 0 0 25px 0;
  letter-spacing: 2px;
  color: ${config.mainColor};
`
export default ({children, title}) => (
  <Card>
    <CardTitle>{title}</CardTitle>
    {children}
  </Card>
)