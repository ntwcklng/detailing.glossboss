import styled from 'styled-components'
import config from '../config'

const Referenz = styled.a`
  text-decoration: none;
  color: ${config.mainColor};
`

const ReferenzImage = styled.img`
  opacity: 0.9;
  max-width: 100%;
  &:hover {
    opacity: 1;
  }
`

const ReferenzDesc = styled.p`
  color: ${config.lightText};
`

const ReferenzReadMore = styled.a`
  display: block;
  text-transform: uppercase;
  text-align: right;
  margin-top: 50px;
`

const ReferenzImageWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`

const ReferenzImageItemWrapper = styled.div`
  flex: 1 0 330px;
  margin: 10px;
  @media (max-width: ${config.mobileMQ}) {
    margin: 10px auto;
    flex: 100%;
  }
`

export default ({ img, link, desc, readMore }) => (
  <Referenz>
    <div className="inner">
      <ReferenzDesc>{desc}</ReferenzDesc>
      <ReferenzImageWrapper>
        {img.map(img => (
          <ReferenzImageItemWrapper>
            <a href={img.replace('thumbnail/', '')} target="_blank">
              <ReferenzImage
                src={img.replace('amazonaws.com/', 'amazonaws.com/thumbnails/')}
              />
            </a>
          </ReferenzImageItemWrapper>
        ))}
      </ReferenzImageWrapper>
      {link && (
        <ReferenzReadMore href={link} target="_blank">
          {readMore ? { readMore } : 'Bericht ansehen'}
        </ReferenzReadMore>
      )}
    </div>
  </Referenz>
)
