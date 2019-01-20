import styled from 'styled-components'

import SocialItem from './socialitem.js'
import Zertifiziert from './zertifiziert'
import config from '../config'

const Footer = styled.div`
  text-align: center;
  color: ${config.lightText};
  margin: 30px 0;
  @media (max-width: 500px) {
    margin: 5px;
  }
`

export default () => (
  <Footer>
    <Zertifiziert />
    <SocialItem text="Facebook" link="https://www.facebook.com/glossboss.de" />
    <SocialItem
      text="Instagram"
      link="https://www.instagram.com/glossboss.de"
    />
    <SocialItem
      text="Youtube"
      link="https://www.youtube.com/user/glossboss.de"
    />
    <SocialItem text="Blog" link="https://glossboss.de" />
  </Footer>
)
