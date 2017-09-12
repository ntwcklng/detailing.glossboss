import styled from 'styled-components'

import config from '../config'

const Item = styled.iframe`
  margin: 1em 0;
  width: 1000px;
  height: 400px;
  max-width: 100%;
  border: none;
`

const Title = styled.h3`
  margin-top: 20px;
  color: ${config.lightText};
`

export default({link}) => (
  <div>
    <Title>Unser letztes Video:</Title>
    <Item src={link} frameborder="0" allowfullscreen />
  </div>
)