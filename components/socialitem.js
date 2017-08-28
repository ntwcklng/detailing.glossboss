import styled from 'styled-components'
import SocialItem from './socialitem.js'

const Item = styled.a`
text-align: center;
color: #c1c1c1;
padding: 30px;
text-decoration: none;
&:hover {
  color: #50A8DB;
}
`
export default({text, link}) => (
  <Item href={link} target="_blank">{text}</Item>
)