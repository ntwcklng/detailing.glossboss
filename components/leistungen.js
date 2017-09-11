import styled from 'styled-components'

export const Leistung = styled.div`
  margin: 50px 0;
  padding: 25px;
  box-sizing: border-box;
  border: 1px solid white;
  &:hover {
    border: 1px solid #50A8DB;
  }
`
export const LeistungTitle = styled.h2`
  margin-bottom: 25px;
  color: #50A8DB;
`
export const LeistungList = styled.ul`
  margin: 20px;
  padding: 0;
  list-style:none;
  color: #828080;
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
  color: #c1c1c1;
  padding: 0;
`