import Page from '../layouts/Page'
import Card from '../components/Card'
import Button from '../components/Button'

import {
  LeistungList,
  LeistungListItem,
  LeistungPreis,
} from '../components/Leistungen.js'

const WorkshopsComponent = () => (
  <Page title="Workshops / Schulungen" subTitle="">
    <Card>
      <p>
        Vor allem für Neueinsteiger ist die Informationsflut im Internet überwältigend. Muss ich die Politur nun mit 3 oder 4 Kreuzstriche durchfahren? Reichen 5 erbsengroße Tröpfen oder doch lieber 7?
      </p>
      <p>In meinen Workshop zeige ich dir zu nahezu allen Themenbereichen die richtige Methode um alle arbeiten beim professionellen Detailing fachgerecht auszuführen. Erfahrungsgemäß ist der größte Schwerpunkt jedoch immer das Thema <strong>Polieren</strong>, dicht gefolgt von der korrekten Applikation von Keramik- oder Gummibeschichtungen. </p>
      <p>Bevor wir mit dem praktischen Teil beginnen, werden die wichtigsten Grundlagen zum Lackaufbau, die richtige Kalkulation von Polierdurchgängen usw. geschult.</p>
      
      <LeistungList>
        <LeistungListItem>Dauer ca. 4-6 Stunden</LeistungListItem>
        <LeistungListItem>Inhalte richten sich nach Wunsch der Teilnehmer</LeistungListItem>
        <LeistungListItem>Hoher Lernerfolg dank meiner didaktischen Ausbildung</LeistungListItem>
        <LeistungListItem>Große Auswahl an Poliermaschinen verfügbar (u.a. diverse Rupes und Flex Maschinen)</LeistungListItem>
        <LeistungListItem>Kein Markengebundener Workshop - wir nutzen das was uns am besten gefällt</LeistungListItem>
        <LeistungListItem>Der Workshop findet in 46282 Dorsten statt</LeistungListItem>
      </LeistungList>
      <LeistungPreis>
        700€ <span>inkl. MwSt für max. 3 Teilnehmer (233,33€ pro Person inkl. MwSt)</span>
      </LeistungPreis>
      <Button link="mailto:marvin@glossboss.de?subject=GLOSSBOSS%20Workshop" title="Termin anfragen"></Button>
    </Card>
  </Page>
)
export default WorkshopsComponent