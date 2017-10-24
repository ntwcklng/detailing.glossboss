import styled from 'styled-components'

import config from '../config'

const Item = styled.a`
  text-align: center;
  color: ${config.lightText};
  padding: 30px;
  text-decoration: none;
  display: inline-block;
  @media (max-width: ${config.mobileMQ}) {
    padding: 10px;
  }
`

export default ({ text, link }) => (
  <Item href={link} target="_blank">
    {text}
  </Item>
)
