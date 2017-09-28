import Page from '../layouts/page'
import Heading from '../components/heading'
import SubHeading from '../components/subHeading'
import ReferenzItem from '../components/referenzitem.js'
import Card from '../components/card'

export default () => (
  <Page title="Referenzen" subTitle="Hier findest du eine kleine Auswahl an Fahrzeugen die ich schon pflegen durfte.">
    <Card>
      <ReferenzItem
        img="https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/996turbo-bilder/DSC02067.jpg"
        link="https://www.glossboss.de/pflegeberichte/video-porsche-996-turbo-gtechniq-crystal-serum-exo/"
        title="Porsche 996 Turbo"
        desc="Dieser Speedgelbe Porsche 996 Turbo wurde 2 Stufig poliert und anschließend mit Gtechniq Crystal Serum + Exo gepflegt"
      />
    </Card>
    
    <Card>
      <ReferenzItem
        img="https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/997-grau-serum-2/DSC02006.jpg"
        link="https://www.glossboss.de/pflegeberichte/crystal-serum-nach-2-jahren/"
        title="Porsche 997 Cabrio"
        desc="Das perfekte Beispiel zum Thema: 'wie lange hält sich das Gtechniq Crystal Serum'. Der Besitzer kam nach 2 Jahren zum auffrischen und mit staunenden Gesichtern haben wir den Lack begutachtet"
      />
    </Card>
    
    <Card>
      <ReferenzItem
        img="https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/sonstige/sl55amg.jpg"
        link="https://www.glossboss.de/pflegeberichte/sl-55-amg-video-gyeon-prime/"
        title="SL 55 AMG"
        desc="Nach einer 2-Stufigen Politur kam als Lackschutz das Gyeon Prime drauf - schöner Glanz für den AMG"
      />
    </Card>
    
    <Card>
      <ReferenzItem
        img="https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/porsche993_schwarz_csl_exo/DSC01893.jpg"
        link="https://www.glossboss.de/pflegeberichte/porsche-993-schwarz-gtechniq-crystal-serum-light-exo/"
        title="Porsche 993"
        desc="Es muss nicht immer das Crystal Serum sein - sondern es darf auch mal der kleine Bruder - das Crystal Serum LIGHT - auf den Lack"
      />
    </Card>
    
    <Card>
      <ReferenzItem
        img="https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/amg-gts-grau/DSC01439.jpg"
        link="https://www.glossboss.de/pflegeberichte/amg-gts-grau-gtechniq-crystal-serum-exo/"
        title="AMG GTS"
        desc="Neuwagenversiegelung bei diesen AMG GTS in Grau mit Crystal Serum + Exo"
      />
    </Card>
    
    <Card>
      <ReferenzItem
        img="https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/porsche_gmodell_1/DSC00550.jpg"
        link="https://www.glossboss.de/pflegeberichte/porsche-g-modell-irisblau/"
        title="Porsche 911 (G-Modell)"
        desc="Dieses Irisblaue Porsche G-Modell wurde in mehreren Polierstufen wieder auf Hochglanz gebracht und anschließend mit einem Wax-Versiegelungs-Hybrid geschützt"
      />
    </Card>
    
    <Card>
      <ReferenzItem
        img="https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/991_4s_unischwarz/P1020978.JPG"
        link="https://www.glossboss.de/pflegeberichte/991-4s-unischwarz/"
        title="Porsche 991"
      />
    </Card>
  </Page>
)