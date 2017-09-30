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

export default({img, link, desc, readMore}) => (
  <ReferenzLink href={link} target="_blank">
    <div className="inner">
      <ReferenzDesc>{desc}</ReferenzDesc>
      <ReferenzImage src={img} />
      <ReferenzReadMore>{readMore ? {readMore} : 'Bericht ansehen'}</ReferenzReadMore>
    </div>
  </ReferenzLink>
)