import React from 'react';
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem} from 'reactstrap';
import Profile from '../pages/Profile'
import About from '../pages/About'
import { Route, Link, HashRouter} from 'react-router-dom';
import App from '../App';

class Navbars extends React.Component {
render(){
    return (
        <HashRouter>
        <div>
            <Navbar className="colornav" light expand="md">
            <NavbarBrand to="/"></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Nav className="ml-auto" navbar>
            <NavItem>
                <Link to="/">Home</Link>
                </NavItem>
                <NavItem>
                <Link to="/profile">Profile</Link>
              </NavItem>
              <NavItem>
                <Link to="/about">About</Link>
              </NavItem>
            </Nav>
            </Navbar>
      <Route path="/profile"  component={Profile} />
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      </div>
      </HashRouter>
    )
}
}

export default Navbars;