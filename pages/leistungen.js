import styled from 'styled-components'

import Page from '../layouts/page'
import Heading from '../components/heading'
import Card from '../components/card'

import {
  LeistungTitle, 
  LeistungList, 
  LeistungListItem, 
  LeistungPreis
} from '../components/leistungen.js'

export default() => (
  <Page title="Leistungen / Preise">
    <Card>
      <LeistungTitle>Polieren - Defektkorrektur</LeistungTitle>
      <p>Wir entfernen feine Kratzer (Waschanlagenkratzer, Swirls) und Hologramme. Je nachdem wie sehr dein Lack zerkratzt ist, muss dies in mehreren Durchgängen geschehen.</p>
      <p>Der erste Durchgang kostet rund 500€ und beinhaltet die Fahrzeugwäsche (inkl. Felgen und Einstiege), Lackreinigung mittels Knete und die erste Stufe der Defektkorrektur, wo mit einem Durchgang der beste Kompromiss aus Kratzerentfernung und Glanzsteigerung gewählt wird.</p>
      <p>Jeder weitere Durchgang kostet rund 300€, entfernt mehr Kratzer und lässt deinen Lack noch mehr glänzen.</p>
      <LeistungPreis>ab 500€</LeistungPreis>
    </Card>
    
    <Card>
      <LeistungTitle>Versiegelung - Keramikbeschichtung</LeistungTitle>
      <p>Eine keramische Versiegelung wie das Gtechniq Crystal Serum schützt den Lack zuverlässig vor allen Umwelteinflüssen. Als erster in Deutschland zertifizierter Aufbereiter von Gtechniq, appliziere ich diese Versiegelung fachlich korrekt, damit diese auch mehrere Jahre hält.</p> <p>Weitere Vorteile: der Dreck wird schlechter haften, das Wasser perlt schöner und schneller ab und das Waschen geht einfacher von der Hand. Du kannst wählen zwischen:</p>
      <LeistungList>
        <LeistungListItem>Gtechniq Crystal Serum (+ Exo)</LeistungListItem>
        <LeistungListItem>Gyeon Prime/Mohs</LeistungListItem>
        <LeistungListItem>Weitere auf Anfrage</LeistungListItem>
      </LeistungList>
      <p>Bevor wir aber deinen Lack mit einer Keramikversiegelung schützen können, muss dieser mindestens 1-Stufig poliert werden.</p>
      <LeistungPreis>ab 150€</LeistungPreis>
    </Card>
    
    <Card>
      <LeistungTitle>Gtechniq Crystal Serum Paket</LeistungTitle>
      <p>Die längste Standzeit, der beste Schutz und das schönste Wasserablaufverhalten. Das Crystal Serum von Gtechniq ist ohne Zweifel die beste Versiegelung die es momentan gibt. Überzeuge dich selbst und schaue dir ein paar Arbeitsbeispiele an: <a href="https://glossboss.de/pflegeberichte/porsche-997-grau-crystal-serum-gtechniq/" target="_blank">Porsche 997 Grau</a>, <a href="https://glossboss.de/pflegeberichte/crystal-serum-nach-2-jahren/" target="_blank">Porsche 997 Grau nach 2 Jahren</a>, <a href="https://glossboss.de/pflegeberichte/video-porsche-996-turbo-gtechniq-crystal-serum-exo/" target="_blank">Porsche 996 Turbo</a></p>
      
      <LeistungList>
        <LeistungListItem>1-Stufige Defektkorrektur</LeistungListItem>
        <LeistungListItem>Lackversiegelung mit Gtechniq Crystal Serum + Exo</LeistungListItem>
        <LeistungListItem>Ca. 2-3 Jahre realistische Standzeit</LeistungListItem>
      </LeistungList>
      <LeistungPreis>ab 850€</LeistungPreis>
    </Card>
    
    <Card>
      <LeistungTitle>Gyeon Paket</LeistungTitle>
      <p>Dein Auto wird mit Mitteln aus dem Hause Gyeon gepflegt und 1-Stufig Poliert. Natürlich individuell erweiterbar und auf deinem Fahrzeug angepasst. Das Gyeon Paket könnte wiefolgt aussehen:</p>
      <LeistungList>
        <LeistungListItem>Lackversiegelung mit Gyeon Mohs(+) oder Prime</LeistungListItem>
        <LeistungListItem>Scheibenversiegelung mit Gyeon View</LeistungListItem>
        <LeistungListItem>Felgenversiegelung mit Gyeon Rim</LeistungListItem>
        <LeistungListItem>Kunststoffversiegelung mit Gyeon Trim</LeistungListItem>
      </LeistungList>
      <LeistungPreis>ab 650€</LeistungPreis>
    </Card>
    
    <Card>
      <LeistungTitle>Lederreinigung / Lederreperatur</LeistungTitle>
      <p>Egal ob speckiges Leder oder eingerissene Sitzwange, wir können es reparieren.</p>
      <p>Schaue dir dazu dieses Youtube Video an: <a href="https://youtu.be/-6gDw7lzgp4?t=11m11s" target="_blank">Leder nachfärben am Porsche 997 Turbo</a></p>
      <LeistungPreis>ab 200€</LeistungPreis>
    </Card>
  </Page>
)