import styled from 'styled-components'
import react from 'react'

const Hero = styled.div`
  background: #1f494D;
  height: 500px;
`
const Image = styled.img`
  mix-blend-mode: multiply;
  filter: grayscale(100%);
  width: 100%;
  height: 500px;
  object-fit: cover;
`
const heroImages = [
  'https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/amg-gts-grau/DSC01437.jpg',
  'https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/porsche993_schwarz_csl_exo/DSC01893.jpg',
  'https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/996turbo-bilder/DSC02070.jpg',
  'https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/997-grau-serum-2/DSC02013.jpg',
  'https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/porsche_gmodell_1/DSC00535.jpg',
]
const randomHeroImage = heroImages[Math.floor(Math.random()*heroImages.length)]

export default class Item extends react.Component {
  constructor(props) {
    super(props)
    this.state = {
      image: ''
    }
  }
  componentDidReceiveProps() {
    this.setState({
      image: randomHeroImage
    })
  }
  componentDidMount() {
    this.setState({
      image: randomHeroImage
    })
  }
  render() {
    return (
      <Hero>
        <Image src={this.state.image} alt={this.props.imageDescription || ''} />
      </Hero>
      
    )
  }
}