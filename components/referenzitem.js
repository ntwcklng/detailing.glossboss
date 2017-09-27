import styled from 'styled-components'
import config from '../config'

const Referenz = styled.div`
  text-align: center;
  color: ${config.darkText};
  padding: 30px;
  border: 1px solid white;
  margin-top: 50px;
  box-shadow: ${config.cardShadow};
  padding-top: 0;
  background-color: white;
`

const ReferenzLink = styled.a`
  text-decoration: none;
  color: ${config.mainColor};
`

const ReferenzImage = styled.img`
  opacity: .9;
`

const ReferenzDesc = styled.p`
  color: ${config.darkText};
`

const ReferenzReadMore = styled.div`
  text-transform: uppercase;
  text-align: right;
  margin-top: 50px;
`

const ReferenzTitle = styled.h2`
  letter-spacing: 2px;
`

export default({img, link, title, desc, readMore}) => (
  <Referenz>
    <ReferenzLink href={link} target="_blank">
      <div className="inner">
        <ReferenzTitle>{title}</ReferenzTitle>
        <ReferenzDesc>{desc}</ReferenzDesc>
        <ReferenzImage src={img} />
        <ReferenzReadMore>{readMore ? {readMore} : 'Bericht ansehen'}</ReferenzReadMore>
      </div>
    </ReferenzLink>
  </Referenz>
)