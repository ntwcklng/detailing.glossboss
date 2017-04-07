import Link from 'next/prefetch'
import Router from 'next/router'
import Header from '../components/head'
import Navbar from '../components/navbar'
import config from '../config'
import styled from 'styled-components'
import React from 'react'
import Loader from '../components/loading'

const Main = styled.div`
  padding: 25px 70px;
  margin: 100px auto;
  width: 90%;
  max-width: 900px;
  @media (max-width: 500px) {
    padding: 0
  }
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
        {this.state.loaded ?
        <Main>
          <Navbar links={config.navbarLinks}/>
          {this.props.children}
          <Header  />
        </Main> :
      <Loader />}
      </div>
    )
  }
}
