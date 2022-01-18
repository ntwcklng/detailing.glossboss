import Page from '../layouts/Page'
import Card from '../components/Card'
import Button from '../components/Button'
import styled from 'styled-components'
import { NextSeo } from 'next-seo';

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
  <Page title="Nanolex Zertifizierung" subTitle="werde ein approved Detailer">
            <NextSeo
      title="Nanolex Zertifizierung von GLOSSBOSS"
      description="Werde ein approved Nanolex Detailer"
      canonical="https://detailing.glossboss.de/nanolex"
    />
    <Card>
    <h1>Nanolex Zertifizierung durch GLOSSBOSS</h1>
    <WorkshopImage src="https://glossbossuploader.s3.eu-central-1.amazonaws.com/3LUrV7K49fnVIS5U29lf0-/DSC07354.jpg" alt="Dozent Marvin Mieth"></WorkshopImage>
      <p>
        Die Schulung findet direkt bei dir in der Halle statt. Somit lernen wir in deiner gewohnten Umgebung das System von Nanolex kennen. Die Inhalt sind u.a.</p>
      <LeistungList>
        <LeistungListItem>Grundaufbau des Systems - theoretischer Teil und Vorstellung der Firma Nanolex</LeistungListItem>
        <LeistungListItem>Lack, Scheiben und Felgen vorbereiten</LeistungListItem>
        <LeistungListItem>Applizieren / Demonstration der Versiegelungen (Si3D, Si3D Max/HD/BC, ggf. SiShield)</LeistungListItem>
        <LeistungListItem>die nötige Nachpflege</LeistungListItem>
      </LeistungList>
      <p>Alle nötigen Produkte werde ich mitbringen - falls du spezielle Wünsche hast teile mir dies bitte im Vorfeld mit.</p>
      <p>Die wichtigsten Infos Zusammengefasst:</p>
      <LeistungList>
        <LeistungListItem>Das Schulungsobjekt kann entweder eine alte Motorhaube sein, oder ein Kundenfahrzeug, welches mit einer Keramikversiegelung veredelt werden soll. Ein ganzes Auto werden wir aber nicht beschichten können während der Schulung.</LeistungListItem>
        <LeistungListItem>Schulungsdauer ca. 3-6h, je nach Vorlieben und Erfahrungen mit anderen Systemen</LeistungListItem>
        <LeistungListItem>Die Schulungsgebühr beläuft sich auf 1000€ exkl. MwSt pro Teilnehmer, dafür bekommst du einen <strong>500€ inkl. MwSt Gutschein</strong> im Glossboss-Shop.de</LeistungListItem>
        <LeistungListItem>zusätzlich <strong>20% Rabatt</strong> auf alle Nanolex Produkte im Glossboss-shop.de, sodass die Schulung nach Abzug des Rabattes nur 300€ kostet - du sparst also langfristig!</LeistungListItem>
        <LeistungListItem>Ab 50km Anfahrtsweg (von Dorsten), werden zusätzlich 0,30cent pro Kilometer Fahrtkosten berechnet</LeistungListItem>
      </LeistungList>
      <Button link="mailto:marvin@glossboss.de?subject=Nanolex%20Zertifizierung" title="Termin anfragen"></Button>
      <SilentP>oder anrufen: <a href="tel:+491703262412">+491703262412</a></SilentP>
    </Card>
  </Page>
)
export default WorkshopsComponent