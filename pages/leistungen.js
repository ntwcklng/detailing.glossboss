import styled from 'styled-components'

import Page from '../layouts/Page'
import Heading from '../components/Heading'
import Card from '../components/Card'
import { NextSeo } from 'next-seo';

import {
  LeistungList,
  LeistungListItem,
  LeistungPreis,
} from '../components/Leistungen.js'

const LeistungenComponent = () => (
  <Page title="Leistungen / Preise">
            <NextSeo
      title="Leistungen - GLOSSBOSS Detailing"
      description="Über 12 Jahre Erfahrung im Bereich der hochwertigen Fahrzeugpflege - Unsere Leistungen"
      canonical="https://detailing.glossboss.de/leistungen"
    />
    <p>Egal ob anspruchsvolle Defektkorrektur am Lack wie zum Beispiel tiefe Kratzer oder Vogelkotrückstände entfernen, oder einfache Lederreinigung und Pflege, wir bieten die passende Leistung. </p>
    <Card title="Polieren - Defektkorrektur">
      <p>
        Wir entfernen feine Kratzer (Waschanlagenkratzer, Swirls) und
        Hologramme. Je nachdem wie sehr dein Lack zerkratzt ist, muss dies in
        mehreren Durchgängen geschehen.
      </p>
      <p>
        Tiefere Kratzer und Parkschrammen werden von uns durch spezielle
        Trockenschleifsysteme entfernt ohne zuviel Lack abtragen zu müssen.
      </p>
      <p>
        Der erste Durchgang kostet rund 650€ und beinhaltet die Fahrzeugwäsche
        (inkl. Felgen und Einstiege), Lackreinigung mittels Knete und die erste
        Stufe der Defektkorrektur, wo mit einem Durchgang der beste Kompromiss
        aus Kratzerentfernung und Glanzsteigerung gewählt wird.
      </p>
      <p>
        Jeder weitere Durchgang kostet rund 300€, entfernt mehr Kratzer und
        lässt deinen Lack noch mehr glänzen.
      </p>
      <LeistungPreis>
        ab 650€ <span>inkl. MwSt</span>
      </LeistungPreis>
    </Card>

    <Card title="Versiegelung - Keramikbeschichtung">
      <p>
        Eine keramische Versiegelung wie das Nanolex Si3D schützt den
        Lack zuverlässig vor allen Umwelteinflüssen. Als erster in Deutschland
        zertifizierter Aufbereiter von Gtechniq, appliziere ich diese
        Versiegelung fachlich korrekt, damit diese auch mehrere Jahre hält.
      </p>{' '}
      <p>
        Weitere Vorteile: der Dreck wird schlechter haften, das Wasser perlt
        schöner und schneller ab und das Waschen geht einfacher von der Hand. Du
        kannst wählen zwischen:
      </p>
      <LeistungList>
        <LeistungListItem>
          Max Protect UNC-R Elite (Gummibeschichtung)
        </LeistungListItem>
        <LeistungListItem>Nanolex Si3d HD</LeistungListItem>
        <LeistungListItem>Sonax CC Evo / CC One</LeistungListItem>
        <LeistungListItem>Labocosmetica #BLINDO+ / #SAM / #HPC</LeistungListItem>
        <LeistungListItem>Max Protect UNC-R / UNC-R Light</LeistungListItem>
        <LeistungListItem>Weitere auf Anfrage</LeistungListItem>
      </LeistungList>
      <p>
        Bevor wir aber deinen Lack mit einer Keramikversiegelung schützen
        können, muss dieser mindestens 1-Stufig poliert werden.
      </p>
      <LeistungPreis>
        ab 150€ <span>inkl. MwSt</span>
      </LeistungPreis>
    </Card>

    <Card title="Luxuswachs - Zymöl, Swizöl">
      <p>
        Nicht jeder Lack wird so beansprucht, dass es sich lohnt eine keramische
        Versiegelung zu applizieren. Die Luxuswachse von Zymöl, Swizöl und co.
        sind was für echte Liebhaber, die ihr Fahrzeug hauptsächlich bei schönem
        Wetter bewegen. Die teilweise bis zu 3000€ teuren Wachse werden von uns
        nur auf frisch polierte Lacke aufgetragen um das bestmögliche Ergebnis
        zu erzielen.
      </p>
      <p>
        Du wirst belohnt mit einzigartigem Glanz und einer unvergleichlichen
        Haptik deines Lackes.
      </p>
      <p>Folgende Luxuswachse stehen bei uns zur Auswahl:</p>
      <LeistungList>
        <LeistungListItem>Zymöl Vintage</LeistungListItem>
        <LeistungListItem>Zymöl Concours</LeistungListItem>
        <LeistungListItem>Zymöl Carbon</LeistungListItem>
        <LeistungListItem>Swizöl Best of Show</LeistungListItem>
        <LeistungListItem>Swizöl Blau-Weiß</LeistungListItem>
        <LeistungListItem>Swizöl Shield</LeistungListItem>
        <LeistungListItem>Weitere auf Anfrage</LeistungListItem>
      </LeistungList>
      <LeistungPreis>
        ab 100€ <span>inkl. MwSt</span>
      </LeistungPreis>
    </Card>

    <Card title="Lederreinigung / Lederreperatur">
      <p>
        Egal ob speckiges Leder oder eingerissene Sitzwange, wir können es
        reparieren. Dein Leder wird wieder geschmeidiger und fühlt sich wieder
        natürlicher an. Die Regelmäßige Lederpflege ist unheimlich wichtig für
        den Werterhalt deines Schmuckstückes.
      </p>
      <p>
        Schaue dir dazu dieses Youtube Video an:{' '}
        <a href="https://youtu.be/-6gDw7lzgp4?t=11m11s" target="_blank">
          Leder nachfärben am Porsche 997 Turbo
        </a>
      </p>
      <LeistungPreis>
        ab 200€ <span>inkl. MwSt</span>
      </LeistungPreis>
    </Card>

    <Card title="Felgenversiegelung">
      <p>
        Versiegelte Felgen lassen sich einfacher reinigen und glänzen besser.
        Der heiße Bremsstaub kann sich außerdem nicht so schnell in den Lack der
        Felge einbrennen. Du hast die Wahl zwischen Gtechniq C5 und ServFaces
        Coat Rims. Beide Versiegelungen wurden von uns mehrfach getestet und
        garantieren maximale Standzeit.
      </p>
      <LeistungPreis>
        ab 150€ <span>inkl. MwSt</span>
      </LeistungPreis>
    </Card>

    <Card title="Flecken aus Stoff- und Alcantara entfernen">
      <p>
        Flecken aus Stoff- oder Alcantaraoberflächen entfernen wir entweder komplett Chemiefrei mit Trockendampf, oder schonend mit einer milden Reinigungslösung. 
      </p>
      <p>
        Damit die gereinigte Oberfläche auch langfristig vor neuen Verschmutzungen geschützt ist, wird diese nach der Reinigung imprägniert.
      </p>
      <LeistungList>
        <LeistungListItem>Stoff- oder Teilledersitze</LeistungListItem>
        <LeistungListItem>Alcantara Dachhimmel / Lenkrad / Sitze</LeistungListItem>
      </LeistungList>
      <LeistungPreis>
        ab 60€ <span>inkl. MwSt</span>
      </LeistungPreis>
    </Card>
  </Page>
)
export default LeistungenComponent