import Page from '../layouts/Page'
import Card from '../components/Card'
import { NextSeo } from 'next-seo';

export default () => (
  <Page title="Team">
            <NextSeo
      title="Impressum"
      description="This example uses more of the available config options."
      canonical="https://detailing.glossboss.de/impressum"
    />
    <Card title="Wer wir sind">
      <p>Papa & Kröte</p>
    </Card>
    <Card title="Detail">
      <p>Hallo</p>
    </Card>
  </Page>
)
