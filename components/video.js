import styled from 'styled-components'

import config from '../config'

const Item = styled.iframe`
  width: 1000px;
  height: 400px;
  max-width: 100%;
  border: none;
`

const Title = styled.h3`
  margin-top: 50px;
  color: ${config.lightText};
`

export default({link}) => (
  <div>
    <Title>Einblick in unsere Arbeit:</Title>
    <Item src={link} frameborder="0" allowfullscreen />
  </div>
)