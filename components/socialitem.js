import styled from 'styled-components'

import config from '../config'

const Item = styled.a`
  text-align: center;
  color: ${config.darkText} !important;
  padding: 30px;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-weight: 600;
  @media (max-width: ${config.mobileMQ}) {
    padding: 10px;
  }
`

const SocialItem = ({ text, link }) => (
  <Item href={link} rel="noopener">
    {text}
  </Item>
)
export default SocialItem
