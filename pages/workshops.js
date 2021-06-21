import Page from '../layouts/Page'
import Card from '../components/Card'
import Button from '../components/Button'
import styled from 'styled-components'

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
  <Page title="Workshops / Schulungen" subTitle="">
    <Card>
    <h1>Lust auf 'n Workshop beim Papa?</h1>
    <WorkshopImage src="https://glossbossuploader.s3.eu-central-1.amazonaws.com/vUrxiThlT8ttY3zq1X-Xk-papa/DSC06430.jpg" alt="Dozent Marvin Mieth"></WorkshopImage>
      <p>
        Vor allem für Neueinsteiger ist die Informationsflut im Internet überwältigend. Muss ich die Politur nun mit 3 oder 4 Kreuzstriche durchfahren? Reichen 5 erbsengroße Tröpfchen oder doch lieber 7?
      </p>
      <p>In meinem Workshop zeige ich dir zu nahezu allen Themenbereichen die richtige Methode um alle arbeiten beim professionellen Detailing fachgerecht auszuführen. Erfahrungsgemäß ist der größte Schwerpunkt jedoch immer das Thema <strong>Polieren</strong>, dicht gefolgt von der korrekten Applikation von Keramik- oder Gummibeschichtungen. </p>
      <p>Bevor wir mit dem praktischen Teil beginnen, werden die wichtigsten Grundlagen zum Lackaufbau, die richtige Kalkulation von Polierdurchgängen usw. geschult.</p>
      <p>Idealerweise buchst du direkt einen Termin mit 2 weiteren Freunden. Maximal sind 3 Schulungsteilnehmer pro Tag möglich, damit auf jeden individuell eingegangen werden kann. Wenn du die Schulung alleine besuchen möchtest, so teile mir dies bitte im Vorfeld mit, da ich sonst weitere Teilnehmer einlade, damit sich der Preis pro Person entsprechend reduziert.</p>
      <LeistungList>
        <LeistungListItem>Dauer ca. 4-6 Stunden</LeistungListItem>
        <LeistungListItem>Inhalte richten sich nach Wunsch der Teilnehmer</LeistungListItem>
        <LeistungListItem>Hoher Lernerfolg dank meiner didaktischen Ausbildung</LeistungListItem>
        <LeistungListItem>Große Auswahl an Poliermaschinen verfügbar (u.a. diverse Rupes und Flex Maschinen)</LeistungListItem>
        <LeistungListItem>Kein Markengebundener Workshop - wir nutzen das was uns am besten gefällt</LeistungListItem>
        <LeistungListItem>Der Workshop findet in 46282 Dorsten statt</LeistungListItem>
        <LeistungListItem>Kaffee, Snacks und ein Happen zum Mittag sind natürlich inklusive :)</LeistungListItem>
      </LeistungList>
      <LeistungPreis>
        <span>pro Schulungstag </span>700€ <span>inkl. MwSt für max. 3 Teilnehmer (233,33€ pro Person inkl. MwSt)</span>
      </LeistungPreis>
      <Button link="mailto:marvin@glossboss.de?subject=GLOSSBOSS%20Workshop" title="Termin anfragen"></Button>
      <SilentP>oder anrufen: <a href="tel:+491703262412">+491703262412</a></SilentP>
      <SilentP>Du möchtest ein Nanolex Approved Detailer werden?</SilentP>
      <Button link="/nanolex" title="zur Nanolex Zertifizierung"></Button>
    </Card>
  </Page>
)
export default WorkshopsComponent