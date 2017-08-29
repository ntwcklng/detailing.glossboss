import styled from 'styled-components'
import SocialItem from './socialitem.js'

const Footer = styled.div`
  text-align: center;
  color: #c1c1c1;
  margin: 30px;
  &:hover {
    color: #50A8DB;
  }
  @media (max-width: 500px) {
    margin: 5px;
  }
`
export default() => (
  <Footer>
    <SocialItem text="Facebook" link="https://www.facebook.com/aufbereitung.mieth" />
    <SocialItem text="Youtube" link="https://www.youtube.com/user/glossbossblog" />
    <SocialItem text="Blog" link="https://glossboss.de" />
  </Footer>
)