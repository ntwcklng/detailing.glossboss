import styled from 'styled-components'
import config from '../config'

const Card = styled.div`
  box-sizing: border-box;
  background: linear-gradient(
      ${config.cardBackground},
      ${config.cardBackground}
    ),
    linear-gradient(135deg, #ff5200, #bf0bbf);
  border: 5px solid transparent;
  background-repeat: no-repeat;
  background-origin: padding-box, border-box;
  margin: 50px 0;
  padding: 25px;
  box-shadow: ${config.cardShadow};
  background-color: ${props =>
    props.highlight ? config.mainColor : '#130027'};
  color: ${props => props.highlight && '#d6f0ff'};
`
const CardTitle = styled.h2`
  margin: 0 0 25px 0;
  letter-spacing: 1.2px;
  color: ${props => (props.highlight ? 'white' : config.darkText)};
  font-weight: 500;
  text-transform: uppercase;
`
const CardComponent = ({ children, title, highlight }) => (
  <Card highlight={highlight}>
    <CardTitle highlight={highlight}>{title}</CardTitle>
    {children}
  </Card>
)
export default CardComponent