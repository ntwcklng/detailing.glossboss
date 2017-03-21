import Link from 'next/link';
import styled from 'styled-components';

const Navbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, .9);
  color: #585858;
  padding: 25px 15px;
  font-size: 15px;
  z-index: 1;
  @media (max-width: 500px) {
    font-size: 14px;
  }
`
const NavbarList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  @media (min-width: 500px) {
    margin-left: 25px;
  }
`
const NavbarListItem = styled.li`
  display: inline-block;
  margin-right: 25px;
`

export default ({ links }) => (
  <Navbar>
    <NavbarList>
      {links.map(link => (
        <NavbarListItem key={link.href}>
          <Link href={link.href} prefetch><a>{link.title}</a></Link>
        </NavbarListItem>
      ))}
    </NavbarList>
  </Navbar>
);
