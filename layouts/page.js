import React from 'react'
import Link from 'next/prefetch'
import Router from 'next/router'
import styled, {keyframes} from 'styled-components'

import Footer from '../components/footer'
import Navbar from '../components/navbar'
import config from '../config'

const fadeIn = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`

const ContentWrapper = styled.div`
  animation: ${fadeIn} .6s ease-in forwards;
`

const Main = styled.div`
  padding: 25px 30px;
  margin: 100px auto;
  width: 90%;
  max-width: 900px;
  font-family: 'Open Sans', sans-serif;
  color: ${config.darkText};
  @media (max-width: 500px) {
    padding: 0
  };
  a {
    color: ${config.mainColor};
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  };
  a:hover {
    color: #000;
    text-decoration: none;
  };
  a:visited {
    color: ${config.mainColor};
  }
  img {
    max-width: 100%;
  };
  * {
    box-sizing: border-box
  };
`
export default class Page extends React.Component {
  constructor() {
    super()
    this.state = {loaded: false}
  }
  componentDidMount() {
    this.setState({loaded: true})
  }

  render() {
    return (
      <div>
        {this.state.loaded &&
        <Main>
          <Navbar links={config.navbarLinks}/>
          <ContentWrapper>
            {this.props.children}
          </ContentWrapper>
          <Footer />
        </Main>}
      </div>
    )
  }
}
