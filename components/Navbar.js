import React from 'react'
import Link from 'next/link'
import styled, { ServerStyleSheet, createGlobalStyle } from 'styled-components'

import Logo from '../components/logo'
import config from '../config'
import ArrowDown from './arrowdown'

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${config.backgroundColor};
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto";
  text-rendering:optimizeLegibility;
  -webkit-font-smoothing:antialiased;
};
* {
  box-sizing: border-box
};
`

const Navbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  padding: 15px;
  font-size: 15px;
  z-index: 1;
  box-shadow: 0px 4px 6px -3px rgba(0, 0, 0, 0.3);
  background: ${config.cardBackground};
`

const NavbarList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  height: 50px;
  @media (max-width: ${config.mobileMQ}) {
    height: 100%;
  }
`

const NavbarListItem = styled.li`
  display: inline-block;
  margin-right: 25px;
  padding: 0;
  transform: ${props => (props.isLogo ? '' : 'translateY(-22px)')};
  text-transform: uppercase;
  letter-spacing: 1.5px;
  a {
    color: ${props => (props.active ? 'white !important' : '')};
    text-decoration: none;
    font-weight: ${props => (props.active ? '700' : '400')};
  }
  a:hover {
    color: white;
  }
  @media (max-width: ${config.mobileMQ}) {
    display: ${props =>
      props.isLogo ? 'block' : props.toggle ? 'block' : 'none'};
    margin: ${props => (props.isLogo ? '0' : '10px auto')};
    transform: ${props => (props.isLogo ? '' : 'translateY(30px)')};
    text-align: center;
    height: 50px;
    width: 100%;
  }
`

const NavbarListItemToggle = styled.div`
  display: none;
  @media (max-width: ${config.mobileMQ}) {
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 27px;
    right: 25px;
  }
`

const NavbarListItemLogoWrapper = styled.div`
  float: left;
`

export default class NavBar extends React.Component {
  constructor() {
    super()
    this.state = {
      nav: false
    }
  }
  toggleNav() {
    this.setState((prevState, props) => {
      return {
        nav: !prevState.nav
      }
    })
  }
  render() {
    return (
      <Navbar>
        <GlobalStyle />
        <NavbarListItemToggle onClick={() => this.toggleNav()}>
          <ArrowDown toggle={this.state.nav} />
        </NavbarListItemToggle>
        <NavbarList>
          <NavbarListItem isLogo={true}>
            <NavbarListItemLogoWrapper>
              <a href="/">
                <Logo />
              </a>
            </NavbarListItemLogoWrapper>
          </NavbarListItem>
          {this.props.links.map(link => (
            <NavbarListItem
              key={link.href}
              toggle={this.state.nav}
              active={link.href === location.pathname}
            >
              <Link href={link.href} prefetch>
                <a alt="Startseite">{link.title}</a>
              </Link>
            </NavbarListItem>
          ))}
        </NavbarList>
      </Navbar>
    )
  }
}
