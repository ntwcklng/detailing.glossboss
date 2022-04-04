import Page from '../layouts/Page'
import Video from '../components/Video'
import Card from '../components/Card'
import { NextSeo } from 'next-seo'

const IndexPage = () => (
  <Page
    title="GLOSSBOSS Detailing"
    subTitle="Dein Ansprechpartner für Keramikversiegelung und Autopflege im Ruhrgebiet"
  >
    <NextSeo
      title="GLOSSBOSS Detailing in 46282 Dorsten"
      description="Dein Ansprechpartner für Keramikversiegelung und Autopflege im Ruhrgebiet"
      canonical="https://detailing.glossboss.de/"
    />
    <Card title="darf ich mich kurz vorstellen?">
      <img
        src="https://glossboss-shop.de/media/image/opc/lg/marvin_glossboss_shadow.png"
        style={{
          maxWidth: '250px',
          float: 'left',
        }}
      />
      Mein Name ist Marvin Mieth und ich betreibe seit über{' '}
      <strong>13 Jahren</strong> die Fahrzeugaufbereitung auf höchstem Niveau.
      Dabei teste ich für diverse Hersteller Produkte die vor der
      Markteinführung stehen, schule Fachpersonal im Bereich Detailing und
      betreibe einige Info-Kanäle rund um das Thema Fahrzeugpflege wie z.B.
      diesen{' '}
      <a href="https://ad.glossboss.de/#abo" target="_blank">
        Youtube-Kanal
      </a>{' '}
      und einen{' '}
      <a href="https://nass-und-schaumig.podigee.io" target="_blank">
        Podcast
      </a>
      .<br />
      Die Aufbereitung von Kundenfahrzeugen bleibt dabei stets das
      Herzens-Projekt - und das merkt man auch: jedes Auto welches von mir
      gepflegt wird, ist ein Unikat. Keine Massenabfertigung und keine
      Kompromisse.
      <h3>Machst du auch Elektroautos?</h3>
      Durch meine Ausbildung und meiner weiteren Tätigkeiten im{' '}
      <strong>IHK Prüfungsausschuss Nord-Westfalen</strong> für Elektroniker bin
      ich der ideale Ansprechpartner wenn es um die Pflege von Elektroautos wie
      <strong> Tesla, Polestar</strong> usw. geht. Dabei gehe ich auf die
      besonderen wünsche und Anforderungen ein um den Lack langfristig zu
      schützen.
      <h3>Beratung steht an erster Stelle</h3>
      Bei einem persönlichen Beratungsgespräch finden wir das passende
      Pflegeprogramm für dein Fahrzeug. Dabei ist es mir besonders wichtig für{' '}
      <strong>dich</strong> das richtige zu finden. Vielleicht benötigst du bei
      deinem Fahrprofil nicht die teuerste und beste High-End
      Keramikversiegelung, sondern ein Carnaubawachs, welches stärker glänzt?
      Möglicherweise aber doch, da du Vielfahrer bist.{' '}
      <a href="https://ad.glossboss.de/#besichtigungstermin">
        Vereinbare gerne einen Besichtigungstermin
      </a>
      .
    </Card>
    <Card title="Einblick in unsere Arbeit">
      <Video link="https://www.youtube.com/embed/blEA8MAKZpU" />
    </Card>
  </Page>
)
export default IndexPage
