import styled from 'styled-components'
import react from 'react'

import config from '../config'

const Hero = styled.div`
  height: 500px;
  background-image: linear-gradient(${config.heroGradient}, ${config.heroGradient}), url("${props =>
  props.image}");
  background-size: cover;
`
const Title = styled.h1`
  position: relative;
  top: 40%;
  text-align: center;
  color: white;
  small {
    display: block;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 300;
    font-size: 24px;
    @media (max-width: ${config.mobileMQ}) {
      font-size: 20px;
    }
  }
  @media (max-width: ${config.mobileMQ}) {
    top: 30%;
    font-size: 24px;
  }
`
const heroImages = [
  'https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/amg-gts-grau/DSC01437.jpg',
  'https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/porsche993_schwarz_csl_exo/DSC01893.jpg',
  'https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/996turbo-bilder/DSC02070.jpg',
  'https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/997-grau-serum-2/DSC02013.jpg',
  'https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/porsche_gmodell_1/DSC00535.jpg'
]
const randomHeroImage =
  heroImages[Math.floor(Math.random() * heroImages.length)]

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
      <Hero image={this.state.image}>
        <Title>
          {this.props.title}
          <small>{this.props.subTitle}</small>
        </Title>
      </Hero>
    )
  }
}
