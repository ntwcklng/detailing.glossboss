import styled from 'styled-components'
import config from '../config'

export const Leistung = styled.div`
  margin: 50px 0;
  padding: 25px;
  ${'' /* border: 1px solid white; */}
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  ${'' /* &:hover {
    border: 1px solid #50A8DB;
  } */}
`

export const LeistungTitle = styled.h2`
  margin-bottom: 25px;
  color: ${config.mainColor};
`

export const LeistungList = styled.ul`
  margin: 20px;
  padding: 0;
  list-style:none;
  color: ${config.lightText};
`

export const LeistungListItem = styled.li`
  &:before {
  content: '';
  display: inline-block;
  height: 1em;
  width: 1em;
  background-image: url(/static/check.svg);
  background-size: contain;
  background-repeat: no-repeat;
  margin-right:0.5em;
  margin-top: 10px;
  transform: translate(0,2px);
  }
`

export const LeistungPreis = styled.h2`
  margin: 20px 0;
  color: ${config.lightText};
  padding: 0;
  text-align: right;
`