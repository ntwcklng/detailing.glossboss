import Page from '../layouts/Page'
import Video from '../components/Video'
import Card from '../components/Card'

const IndexPage = () => (
  <Page
    title="GLOSSBOSS Detailing"
    subTitle="Dein Ansprechpartner für Keramikversiegelung und Autopflege im Ruhrgebiet"
  >
    <Card title="Einblick in unsere Arbeit">
      <Video link="https://www.youtube.com/embed/rXvB57Wo1YY" />
    </Card>
  </Page>
)
export default IndexPage