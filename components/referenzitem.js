import styled from 'styled-components'
import config from '../config'

const Referenz = styled.div`
  text-align: center;
  color: ${config.darkText};
  padding: 30px;
  border: 1px solid white;
  margin-top: 50px;
  ${'' /* &:hover {
    border: 1px solid #50A8DB;
    opacity: 1
  }; */}
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  padding-top: 0;
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