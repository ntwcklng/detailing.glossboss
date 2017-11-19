import styled from 'styled-components'
import config from '../config'

const Card = styled.div`
  margin: 50px 0;
  padding: 25px;
  box-shadow: ${config.cardShadow};
  background-color: ${props => props.highlight ? config.mainColor : 'white'};
  border-top: 4px solid ${config.mainColorLight};
  color: ${props => props.highlight && '#d6f0ff'};
`
const CardTitle = styled.h2`
  margin: 0 0 25px 0;
  letter-spacing: 1px;
  color: ${props => props.highlight ? 'white' : config.darkText};
  font-weight: 400;
`
export default ({ children, title, highlight }) => (
  <Card highlight={highlight}>
    <CardTitle highlight={highlight}>{title}</CardTitle>
    {children}
  </Card>
)
