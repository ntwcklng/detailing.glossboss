import styled from 'styled-components'

import Page from '../layouts/page'
import Heading from '../components/heading'

const Leistung = styled.div`
  margin: 50px 0;
  padding: 25px;
  box-sizing: border-box;
  border: 1px solid white;
  &:hover {
    border: 1px solid #50A8DB;
  }
`
const LeistungTitle = styled.h2`
  margin-bottom: 25px;
  color: #50A8DB;
`
const LeistungList = styled.ul`
  margin: 20px;
  padding: 0;
`
const LeistungPreis = styled.h2`
  margin: 20px 0;
  color: #c1c1c1;
  padding: 0;
`
export default() => (
  <Page>
    <Heading>Leistungen / Preise</Heading>
    <Leistung>
      <LeistungTitle>Polieren - Defektkorrektur</LeistungTitle>
      <p>Wir entfernen feine Kratzer (Waschanlagenkratzer, Swirls) und Hologramme. Je nachdem wie sehr dein Lack zerkratzt ist, muss dies in mehreren Durchgängen geschehen.</p>
      <p>Der erste Durchgang kostet rund 400€ und beinhaltet die Fahrzeugwäsche (inkl. Felgen und Einstiege), Lackreinigung mittels Knete und die erste Stufe der Defektkorrektur, wo mit einem Durchgang der beste Kompromiss aus Kratzerentfernung und Glanzsteigerung gewählt wird.</p>
      <p>Jeder weitere Durchgang kostet rund 300€, entfernt mehr Kratzer und lässt deinen Lack noch mehr glänzen.</p>
      <LeistungPreis>ab 500€</LeistungPreis>
    </Leistung>
    
    <Leistung>
      <LeistungTitle>Versiegelung - Keramikbeschichtung</LeistungTitle>
      <p>Eine keramische Versiegelung wie das Gtechniq Crystal Serum schützt den Lack zuverlässig vor allen Umwelteinflüssen. Als erster in Deutschland zertifizierter Aufbereiter von Gtechniq, appliziere ich diese Versiegelung fachlich korrekt, damit diese auch mehrere Jahre hält.</p> <p>Weitere Vorteile: der Dreck wird schlechter haften, das Wasser perlt schöner und schneller ab und das Waschen geht einfacher von der Hand. Du kannst wählen zwischen:</p>
      <LeistungList>
        <li>Gtechniq Crystal Serum (+ Exo)</li>
        <li>Gyeon Prime/Mohs</li>
        <li>Weitere auf Anfrage</li>
      </LeistungList>
      <p>Bevor wir aber deinen Lack mit einer Keramikversiegelung schützen können, muss dieser mindestens 1-Stufig poliert werden.</p>
      <LeistungPreis>ab 150€</LeistungPreis>
    </Leistung>
    
    <Leistung>
      <LeistungTitle>Lederreinigung / Lederreperatur</LeistungTitle>
      <p>Egal ob speckiges Leder oder eingerissene Sitzwange, wir können es reparieren.</p>
      <p>Schaue dir dazu dieses Youtube Video an: <a href="https://youtu.be/-6gDw7lzgp4?t=11m11s" target="_blank">Leder nachfärben am Porsche 997 Turbo</a></p>
      <LeistungPreis>ab 200€</LeistungPreis>
    </Leistung>
  </Page>
)