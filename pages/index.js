import Page from '../layouts/Page'
import Video from '../components/Video'
import Card from '../components/Card'
import { NextSeo } from 'next-seo';

const IndexPage = () => (
  <Page
    title="GLOSSBOSS Detailing"
    subTitle="Dein Ansprechpartner für Keramikversiegelung und Autopflege im Ruhrgebiet"
  >
            <NextSeo
      title="GLOSSBOSS Detailing in 46282 Dorsten"
      description="Dein Ansprechpartner für Keramikversiegelung und Autopflege im Ruhrgebiet"
      canonical="https://detailing.glossboss.de/"
    />
    <Card title="Einblick in unsere Arbeit">
      <Video link="https://www.youtube.com/embed/blEA8MAKZpU" />
    </Card>
  </Page>
)
export default IndexPage