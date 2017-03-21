import styled from 'styled-components'

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
export default() => (
  <div>
  <Leistung>
    <LeistungTitle>Polieren - Defektkorrektur</LeistungTitle>
    <p>Wir entfernen feine Kratzer (Waschanlagenkratzer, Swirls) und Hologramme. Je nachdem wie sehr dein Lack zerkratzt ist, muss dies in mehreren Durchgängen geschehen.</p>
    <p>Der erste Durchgang kostet rund 400€ und beinhaltet die Fahrzeugwäsche (inkl. Felgen und Einstiege), Lackreinigung mittels Knete und die erste Stufe der Defektkorrektur, wo mit einem Durchgang der beste Kompromiss aus Kratzerentfernung und Glanzsteigerung gewählt wird.</p>
    <p>Jeder weitere Durchgang kostet rund 300€, entfernt mehr Kratzer und lässt deinen Lack noch mehr glänzen.</p>
  </Leistung>
  <Leistung>
    <LeistungTitle>Versiegelung - Keramikbeschichtung</LeistungTitle>
    <p>Eine keramische Versiegelung wie das Gtechniq Crystal Serum schützt den Lack zuverlässig vor allen Umwelteinflüssen. Du kannst wählen zwischen:</p>
    <LeistungList>
      <li>Gtechniq Crystal Serum (+ Exo)</li>
      <li>Gyeon Prime/Mohs</li>
      <li>Weitere auf Anfrage</li>
    </LeistungList>
  </Leistung>
  </div>
)