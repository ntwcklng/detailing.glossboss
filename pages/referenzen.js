import Page from '../layouts/page'
import Heading from '../components/heading'
import SubHeading from '../components/subHeading'
import ReferenzItem from '../components/referenzitem.js'
import Card from '../components/card'

export default () => (
  <Page
  title="Referenzen"
  subTitle="Hier findest du eine kleine Auswahl an Fahrzeugen die wir schon pflegen durften."
  >
  <Card title="Golf VII GTI">
    <ReferenzItem
      img={[
        'https://glossbossuploader.s3.eu-central-1.amazonaws.com/nsuBwPhmXJec0sW1IMK56-papagti/IMG_3886.jpeg',
        'https://glossbossuploader.s3.eu-central-1.amazonaws.com/nsuBwPhmXJec0sW1IMK56-papagti/IMG_3889.jpeg',
        'https://glossbossuploader.s3.eu-central-1.amazonaws.com/nsuBwPhmXJec0sW1IMK56-papagti/IMG_3894.jpeg'
      ]}
      link="https://glossboss.de/videos/keramik-oder-wachs-fuer-marvins-gti/"
      desc="Ein Idiumgrauer Golf 7 GTI wurde mit Nanolex Si3D HD Ultra keramisch Beschichtet."
    />
  </Card>
    <Card title="Porsche 996 Turbo">
      <ReferenzItem
        img={[
          'https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/996turbo-bilder/DSC02067.jpg',
          'https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/996turbo-bilder/DSC02070.jpg',
          'https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/996turbo-bilder/DSC02063.jpg'
        ]}
        link="https://www.glossboss.de/pflegeberichte/video-porsche-996-turbo-gtechniq-crystal-serum-exo/"
        desc="Dieser Speedgelbe Porsche 996 Turbo wurde 2 Stufig poliert und anschließend mit Gtechniq Crystal Serum + Exo gepflegt"
      />
    </Card>

    <Card title="Porsche 997 Cabrio">
      <ReferenzItem
        img={[
          'https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/997-grau-serum-2/DSC02006.jpg',
          'https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/997-grau-serum-2/DSC02016.jpg',
          'https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/997-grau-serum-2/DSC02013.jpg'
        ]}
        link="https://www.glossboss.de/pflegeberichte/crystal-serum-nach-2-jahren/"
        desc="Das perfekte Beispiel zum Thema: 'wie lange hält sich das Gtechniq Crystal Serum'. Der Besitzer kam nach 2 Jahren zum auffrischen und mit staunenden Gesichtern haben wir den Lack begutachtet"
      />
    </Card>

    <Card title="Porsche 993">
      <ReferenzItem
        img={[
          'https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/porsche993_schwarz_csl_exo/DSC01893.jpg',
          'https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/porsche993_schwarz_csl_exo/DSC01888.jpg',
          'https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/porsche993_schwarz_csl_exo/DSC01896.jpg'
        ]}
        link="https://www.glossboss.de/pflegeberichte/porsche-993-schwarz-gtechniq-crystal-serum-light-exo/"
        desc="Es muss nicht immer das Crystal Serum sein - sondern es darf auch mal der kleine Bruder - das Crystal Serum LIGHT - auf den Lack"
      />
    </Card>

    <Card title="AMG GTS">
      <ReferenzItem
        img={[
          'https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/amg-gts-grau/DSC01439.jpg',
          'https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/amg-gts-grau/DSC01438.jpg',
          'https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/amg-gts-grau/DSC01421.jpg'
        ]}
        link="https://www.glossboss.de/pflegeberichte/amg-gts-grau-gtechniq-crystal-serum-exo/"
        desc="Neuwagenversiegelung bei diesen AMG GTS in Grau mit Crystal Serum + Exo"
      />
    </Card>

    <Card title="Porsche 911 (G-Modell)">
      <ReferenzItem
        img={[
          'https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/porsche_gmodell_1/DSC00550.jpg',
          'https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/porsche_gmodell_1/DSC00553.jpg',
          'https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/porsche_gmodell_1/DSC00546.jpg'
        ]}
        link="https://www.glossboss.de/pflegeberichte/porsche-g-modell-irisblau/"
        desc="Dieses Irisblaue Porsche G-Modell wurde in mehreren Polierstufen wieder auf Hochglanz gebracht und anschließend mit einem Wax-Versiegelungs-Hybrid geschützt"
      />
    </Card>

  </Page>
)
