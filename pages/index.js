import styled from 'styled-components'

import Page from '../layouts/page'
import Heading from '../components/heading'
import SubHeading from '../components/subHeading'
import Video from '../components/video'
import Hero from '../components/hero'
import Card from '../components/card'

const IndexWrapper = styled.div`
  margin-top: -300px;
`

export default () => (
  <div>
    <Hero />
    <Page>
      <IndexWrapper>
      <Card>
        <Heading>Willkommen bei Autopflege Mieth</Heading>
        <SubHeading>Dein Ansprechpartner für Keramik / Siliziumversiegelung und Lackaufbereitung im Ruhrgebiet</SubHeading>
        <Video link="https://www.youtube.com/embed/BYCaH_K57P4" />
      </Card>
    </IndexWrapper>
    </Page>
</div>
)