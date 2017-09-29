import styled from 'styled-components'
import config from '../config'

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
  margin: 0 0 25px 0;
`

export default({img, link, title, desc, readMore}) => (
  <ReferenzLink href={link} target="_blank">
    <div className="inner">
      <ReferenzTitle>{title}</ReferenzTitle>
      <ReferenzDesc>{desc}</ReferenzDesc>
      <ReferenzImage src={img} />
      <ReferenzReadMore>{readMore ? {readMore} : 'Bericht ansehen'}</ReferenzReadMore>
    </div>
  </ReferenzLink>
)