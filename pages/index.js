import Page from '../layouts/page'
import Heading from '../components/heading'
import Video from '../components/video'

export default () => (
  <Page>
    <Heading>Willkommen bei Autopflege Mieth</Heading>
    <p>Unser letztes Video:</p>
    <Video link="https://www.youtube.com/embed/tLG_XRvTMMI" />
  </Page>
)