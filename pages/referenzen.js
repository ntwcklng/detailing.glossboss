import Page from '../layouts/page'
import Heading from '../components/heading'
import ReferenzItem from '../components/referenzitem.js'

export default () => (
  <Page>
    <Heading>Referenzen</Heading>
    <ReferenzItem
      img="https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/996turbo-bilder/DSC02067.jpg"
      link="https://www.glossboss.de/pflegeberichte/video-porsche-996-turbo-gtechniq-crystal-serum-exo/"
      title="Porsche 996 Turbo"
    />
    <ReferenzItem
      img="https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/997-grau-serum-2/DSC02006.jpg"
      link="https://www.glossboss.de/pflegeberichte/crystal-serum-nach-2-jahren/"
      title="Porsche 997 Cabrio"
    />
    <ReferenzItem
      img="https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/sonstige/sl55amg.jpg"
      link="https://www.glossboss.de/pflegeberichte/sl-55-amg-video-gyeon-prime/"
      title="SL 55 AMG"
    />
    <ReferenzItem
      img="https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/porsche993_schwarz_csl_exo/DSC01893.jpg"
      link="https://www.glossboss.de/pflegeberichte/porsche-993-schwarz-gtechniq-crystal-serum-light-exo/"
      title="Porsche 993"
    />
    <ReferenzItem
      img="https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/amg-gts-grau/DSC01439.jpg"
      link="https://www.glossboss.de/pflegeberichte/amg-gts-grau-gtechniq-crystal-serum-exo/"
      title="AMG GTS"
    />
    <ReferenzItem
      img="https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/porsche_gmodell_1/DSC00550.jpg"
      link="https://www.glossboss.de/pflegeberichte/porsche-g-modell-irisblau/"
      title="Porsche 911 (G-Modell)"
    />
    <ReferenzItem
      img="https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/991_4s_unischwarz/P1020978.JPG"
      link="https://www.glossboss.de/pflegeberichte/991-4s-unischwarz/"
      title="Porsche 991"
    />
  </Page>
)