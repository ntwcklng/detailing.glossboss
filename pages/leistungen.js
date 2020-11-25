import styled from 'styled-components'

import Page from '../layouts/Page'
import Heading from '../components/Heading'
import Card from '../components/Card'

import {
  LeistungList,
  LeistungListItem,
  LeistungPreis,
} from '../components/Leistungen.js'

const LeistungenComponent = () => (
  <Page title="Leistungen / Preise">
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
        Eine keramische Versiegelung wie das Gtechniq Crystal Serum schützt den
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
        <LeistungListItem>Servfaces Ultima</LeistungListItem>
        <LeistungListItem>Gtechniq Crystal Serum (+ Exo)</LeistungListItem>
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

    <Card title="Max Protect UNC-R Elite Gummibeschichtung">
      <p>
        Gummibeschichtungen eliminieren viele Probleme die man sonst nur von
        Keramikbeschichtung kennt wie z.B. Wasserflecken, nachdem man nicht
        gründlich/schnell genug abgetrocknet hat. Der einzigartige schon fast
        Wachsähnliche Glanz der Gummibeschichtungen lassen die Herzen der
        Enthusiasten höher schlagen.
      </p>

      <LeistungList>
        <LeistungListItem>min. 1-Stufige Defektkorrektur</LeistungListItem>
        <LeistungListItem>
          Lackversiegelung mit Max Protect UNC-R Elite
        </LeistungListItem>
        <LeistungListItem>Standzeit: ca. 40-55 Wäschen</LeistungListItem>
      </LeistungList>
      <LeistungPreis>
        ab 1300€ <span>inkl. MwSt</span>
      </LeistungPreis>
    </Card>

    <Card title="Nanolex/ServFaces 1 Schicht Keramikbeschichtung">
      <p>
        Die kostengünstigere alternative mit einer Schicht ServFaces Ultima oder
        Nanolex Si3D HD.
      </p>

      <LeistungList>
        <LeistungListItem>1-Stufige Defektkorrektur</LeistungListItem>
        <LeistungListItem>
          Lackversiegelung mit Nanolex Si3d HD oder ServFaces Ultima
        </LeistungListItem>
        <LeistungListItem>Standzeit: ca. 20-25 Wäschen</LeistungListItem>
      </LeistungList>
      <LeistungPreis>
        ab 800€ <span>inkl. MwSt</span>
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

    <Card title="Dichtung- und Gummipflege für Oldtimer">
      <p>
        Mit der Zeit schwinden die Weichmacher aus den Dichtungen von deinen
        Oldtimer. Die Folgen sind Wasser bzw. Feuchtigkeitseintritt in den
        Innenraum und harte bzw. spröde Dichtungen.
      </p>
      <p>
        Damit das langfristig nicht mehr passiert, reinigen und pflegen wir
        deine Dichtungen und Gummis, damit diese so lang wie möglich geschmeidig
        bleiben.
      </p>
      <LeistungPreis>
        ab 30€ <span>inkl. MwSt</span>
      </LeistungPreis>
    </Card>

    <Card title="Master Paket" highlight={true}>
      <p>
        Begrenzt auf wenige Autos im Jahr ist das Master Paket die absolute
        Endstufe des machbaren. Dein Lack wird in bis zu 5 Durchgängen bis zur
        perfektion Poliert und mit einem Lackschutz deiner Wahl veredelt.{' '}
      </p>
      <p>
        Für weitere Infos kontaktiere uns und wir finden die beste Lösung für
        dein Fahrzeug.
      </p>
      <p>
        Für 2021 nur noch <strong>3 von 4</strong> verfügbar
      </p>
      <LeistungPreis>
        ab 2500€ <span>inkl. MwSt</span>
      </LeistungPreis>
    </Card>
  </Page>
)
export default LeistungenComponent