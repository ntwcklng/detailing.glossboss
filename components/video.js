import styled from 'styled-components'

const Item = styled.iframe`
margin: 5em 0;
width: 1000px;
height: 400px;
max-width: 100%;
frameborder: 0;
`
export default({link}) => (
  <div><Item src={link} frameborder="0" allowfullscreen /></div>
)