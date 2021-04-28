import styled from 'styled-components'
import config from '../config'

const Button = styled.a`
display: block;
  box-sizing: border-box;
  background: linear-gradient(135deg, #ff5200, #bf0bbf);
  background-repeat: no-repeat;
  background-origin: padding-box, border-box;
  margin: 20px auto;
  margin-top: 50px;
  padding: 15px;
  box-shadow: ${config.cardShadow};
  background-color: ${props =>
    props.highlight ? config.mainColor : '#130027'};
  color: ${props => props.highlight && '#d6f0ff'};
  width: 250px;
  text-decoration: none;
`
const ButtonInner = styled.div`
  text-align: center;
  letter-spacing: 1.2px;
  color: ${props => (props.highlight ? 'white' : config.darkText)};
  font-weight: 500;
  text-transform: uppercase;
`
const ButtonComponent = ({ title, link}) => (
    <Button href={link}>
        <ButtonInner>{title}</ButtonInner>
  </Button>
)
export default ButtonComponent