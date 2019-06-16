import Page from '../layouts/page'
import Video from '../components/video'
import Card from '../components/card'

export default () => (
  <Page
    title="Willkommen bei GLOSSBOSS Detailing"
    subTitle="Dein Ansprechpartner für Keramik / Siliziumversiegelung und Lackaufbereitung im Ruhrgebiet"
  >
    <Card title="Einblick in unsere Arbeit">
      <Video link="https://www.youtube.com/embed/rXvB57Wo1YY" />
    </Card>
  </Page>
)
