import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Logo from '../components/logo'
import ArrowDown from './arrowdown'

const Navbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, .90);
  padding: 15px;
  font-size: 15px;
  z-index: 1;
`

const NavbarList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  min-height: 70px;
`

const NavbarListItem = styled.li`
  display: inline-block;
  margin-right: 25px;
  padding: 0;
  transform: ${props => props.isLogo ? '' : 'translateY(-30px)'};
  @media (max-width: 713px) {
    display: ${props => props.isLogo ? 'block' : props.toggle ? 'block':'none'};
    margin: ${props => props.isLogo ? '0' : '10px auto'};
    transform: ${props => props.isLogo ? '' : 'translateY(30px)'};
    text-align: center;
    height: 50px;
    width: 100%;
  }
`

const NavbarListItemToggle = styled.div`
  display: none;
  @media (max-width: 713px) {
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 35px;
    right: 25px;
  }
`

export default class NavBar extends React.Component {
  constructor () {
    super()
    this.state = {
      nav: false
    }
  }
  toggleNav() {
    this.setState({nav: !this.state.nav})
  }
  render () {
    return (
      <Navbar>
        <NavbarListItemToggle onClick={() => this.toggleNav()}>
          <ArrowDown toggle={this.state.nav} />
        </NavbarListItemToggle>
        <NavbarList>
          <NavbarListItem isLogo={true}>
            <Link href="/" prefetch><a><Logo /></a></Link>
          </NavbarListItem>
          {this.props.links.map(link => (
            <NavbarListItem key={link.href} toggle={this.state.nav}>
              <Link href={link.href} prefetch><a>{link.title}</a></Link>
            </NavbarListItem>
          ))}
        </NavbarList>
      </Navbar>
    );
  }
}
