import Page from '../layouts/Page'
import Card from '../components/Card'
import Button from '../components/Button'
import styled from 'styled-components'
import { NextSeo } from 'next-seo'

import {
  LeistungList,
  LeistungListItem,
  LeistungPreis,
} from '../components/Leistungen.js'

const SilentP = styled.p`
  text-align: center;
  font-weight: 200;
`
const WorkshopImage = styled.img`
  float: left;
  display: block;
  max-height: 450px;
  margin: 0 25px 25px 0;
  @media (max-width: 800px) {
    float: unset;
    margin: 25px auto;
    text-align: center;
  }
`

const WorkshopsComponent = () => (
  <Page
    title="Labocosmetica Zertifizierung"
    subTitle="werde ein approved Detailer"
  >
    <NextSeo
      title="Labocosmetica Zertifizierung von GLOSSBOSS"
      description="Werde ein approved Labocosmetica Detailer"
      canonical="https://detailing.glossboss.de/labocosmetica"
    />
    <Card>
      <h1>Labocosmetica Zertifizierung durch GLOSSBOSS</h1>
      <img src="/static/LogoLabocosmetica.jpg" style={{ maxWidth: '100%' }} />
      <WorkshopImage
        src="https://glossbossuploader.s3.eu-central-1.amazonaws.com/pF3ZGJajATcgGkDV2tS65-/DSC04698.jpg"
        alt="Dozent Marvin Mieth"
      ></WorkshopImage>
      <p>
        Seit 2021 sind wir für alle{' '}
        <strong>Labocosmetica Zertifizierungen in Deutschland Zuständig</strong>
        . Du profitierst von unserer Erfahrungen rund um das Thema Schulungen
        und Zertifizierungen. Ausserdem geniessen alle approved Labocosmetica
        Detailer einen Gebietsschutz, sodass wir für Exklusivität garantieren
        können. Die Schulung findet direkt bei dir in der Halle statt. Somit
        lernen wir in deiner gewohnten Umgebung das System von Labocosmetica
        kennen. Die Inhalte sind u.a.
      </p>
      <LeistungList>
        <LeistungListItem>
          Grundaufbau des Systems - theoretischer Teil und Vorstellung der Firma
          Labocosmetica bzw. MaFra
        </LeistungListItem>
        <LeistungListItem>
          Lack, Scheiben und Felgen vorbereiten
        </LeistungListItem>
        <LeistungListItem>
          Schwerpunkt der Schulung: Das Coating System von Labocosmetica (#SAM,
          #BLINDO+, #STC, #HPC)
        </LeistungListItem>
        <LeistungListItem>die nötige Nachpflege</LeistungListItem>
        <LeistungListItem>
          Das Schulungsobjekt kann entweder eine alte Motorhaube sein, oder ein
          Kundenfahrzeug, welches mit einer Keramikversiegelung veredelt werden
          soll. Ein ganzes Auto werden wir aber nicht beschichten können während
          der Schulung.
        </LeistungListItem>
        <LeistungListItem>
          Schulungsdauer ca. 4-6h, je nach Vorlieben und Erfahrungen mit anderen
          Systemen
        </LeistungListItem>
      </LeistungList>
      <br />
      <br />
      <p>
        Alle nötigen Produkte werde ich mitbringen - falls du spezielle Wünsche
        hast teile mir dies bitte im Vorfeld mit.
      </p>
      <p>Die wichtigsten Infos Zusammengefasst:</p>
      <LeistungList></LeistungList>
      <Button
        link="mailto:marvin@glossboss.de?subject=Labocosmetica%20Zertifizierung"
        title="Termin anfragen"
      ></Button>
      <SilentP>
        oder anrufen: <a href="tel:+491703262412">+491703262412</a>
      </SilentP>
    </Card>
  </Page>
)
export default WorkshopsComponent
