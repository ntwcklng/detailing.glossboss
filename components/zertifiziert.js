import styled from 'styled-components'
import Card from './card'

const Image = styled.img`
  margin: 30px;
`

export default () => (
  <Card title="Zertifizierungen">
    <Image src="/static/gyeon-logo.png" alt="Gyeon Zertifizierung" />
    <Image src="/static/gtechniq-logo.jpg" alt="Gtechniq Zertifizierung" />
  </Card>
)
