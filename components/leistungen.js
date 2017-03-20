export default() => (
  <div>
  <div className="leistung">
    <h2>Polieren - Defektkorrektur</h2>
    <p>Wir entfernen feine Kratzer (Waschanlagenkratzer, Swirls) und Hologramme. Je nachdem wie sehr dein Lack zerkratzt ist, muss dies in mehreren Durchgängen geschehen.</p>
    <p>Der erste Durchgang kostet rund 400€ und beinhaltet die Fahrzeugwäsche (inkl. Felgen und Einstiege), Lackreinigung mittels Knete und die erste Stufe der Defektkorrektur, wo mit einem Durchgang der beste Kompromiss aus Kratzerentfernung und Glanzsteigerung gewählt wird.</p>
    <p>Jeder weitere Durchgang kostet rund 300€, entfernt mehr Kratzer und lässt deinen Lack noch mehr glänzen.</p>
  </div>
  <div className="leistung">
    <h2>Versiegelung - Keramikbeschichtung</h2>
    <p>Eine keramische Versiegelung wie das Gtechniq Crystal Serum schützt den Lack zuverlässig vor allen Umwelteinflüssen. Du kannst wählen zwischen:</p>
    <ul>
      <li>Gtechniq Crystal Serum (+ Exo)</li>
      <li>Gyeon Prime/Mohs</li>
      <li>Weitere auf Anfrage</li>
    </ul>
  </div>
  <style jsx>{`
    h1 {margin: 25px 0 10px;}
    h2 {margin-bottom: 25px;color: #50A8DB}
    .leistung {
      margin: 50px 0;
      padding: 25px;
      box-sizing: border-box;
      border: 1px solid white;
    }
    .leistung:hover {
      border: 1px solid #50A8DB;
    }
    ul {
      margin: 20px;
      padding: 0;
    }
  `}</style>
  </div>
)