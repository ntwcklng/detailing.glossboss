import Page from '../layouts/Page'
import Card from '../components/Card'

const AnfahrtComponent = () => (
  <Page title="Anfahrt">
    <Card>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2474.199241144196!2d6.965941316445566!3d51.67449597966295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8f189d61acb17%3A0xfa99b3931c00c5ad!2sMarienstra%C3%9Fe+41%2C+46284+Dorsten!5e0!3m2!1sde!2sde!4v1490538417317"
          frameBorder="0"
          allowFullScreen
        />
        <style jsx>
          {`
            iframe {
              max-width: 100%;
              width: 900px;
              height: 400px;
              border: 0;
            }
          `}
        </style>
      </div>
      <p>Marienstr. 41, 46284 Dorsten</p>
      <p>
        Bitte nur nach <strong>vorheriger</strong> Terminabsprache vorbeikommen!
      </p>
    </Card>
  </Page>
)
export default AnfahrtComponent