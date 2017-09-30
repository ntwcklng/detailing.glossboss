import styled from 'styled-components'

const Item = styled.iframe`
  width: 1000px;
  height: 400px;
  max-width: 100%;
  border: none;
`

export default({link}) => (
  <Item src={link} frameborder="0" allowfullscreen />
)