import styled from 'styled-components'

const Referenz = styled.div`
  text-align: center;
  color: #282A36;
  padding: 30px;
  border: 1px solid white;
  &:hover {
    border: 1px solid #50A8DB;
    opacity: 1
  }
`

const ReferenzLink = styled.a`
  text-decoration: none;
`

const ReferenzImage = styled.img`
  opacity: .9;
`

export default({img, link, title}) => (
  <Referenz>
    <ReferenzLink href={link} target="_blank">
      <div className="inner">
        <h1>{title}</h1>
        <ReferenzImage src={img} />
      </div>
    </ReferenzLink>
  </Referenz>
)