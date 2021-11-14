import styled from 'styled-components'
import Card from './Card'

const Image = styled.img`
  margin: 30px;
`
const ImageNanolex = styled.img`
  margin: 30px;
  width: 160px;
`
const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`

const Zertifizierungen = () => (
  <Card title="Zertifizierungen">
    <Wrapper>
      <ImageNanolex
        src="/static/NanolexApprovedDetailer_2018.svg"
        alt="Nanolex Zertifizierung"
      />
      <Image src="/static/maxprotect.jpg" alt="Max Protect Zertifizierung" />
    </Wrapper>
  </Card>
)
export default Zertifizierungen
