import styled from 'styled-components'

import SocialItem from './socialitem.js'
import config from '../config'

const Item = styled.a`
  text-align: center;
  color: ${config.lightText};
  padding: 30px;
  text-decoration: none;
  display: inline-block;
  &:hover {
    color: ${config.mainColor};
  };
  @media (max-width: 713px) {
    padding: 10px; 
  };
`

export default({text, link}) => (
  <Item href={link} target="_blank">{text}</Item>
)