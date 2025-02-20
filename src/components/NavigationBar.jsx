import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NavDropdown } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../store/AuthContext';
import { useNavigate } from "react-router-dom"
import { CartSumContext } from '../store/CartSumContext';

function NavigationBar() {
  const { t, i18n } = useTranslation();

  const {loggedIn, setLoggedIn} = useContext(AuthContext);
  const {cartSum} = useContext(CartSumContext);

  const navigate = useNavigate()

  const logout = () => {
    setLoggedIn(false)
    sessionStorage.removeItem("token")
    navigate("/")
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">{t("nav.webshop")}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/shops">{t("nav.shops")}</Nav.Link>
            <Nav.Link as={Link} to="/cart">{t("nav.cart")}</Nav.Link>
            <div>{cartSum.toFixed(2)} €</div>
            <Nav.Link as={Link} to="/contact">{t("nav.contact")}</Nav.Link>

            { loggedIn === true && <NavDropdown title="Admin" id="admin-nav-dropdown">
              <NavDropdown.Item as={Link} to="/admin/add-product">Add Product</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/admin/maintain-products">Maintain Products</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/admin/maintain-categories">Maintain Categories</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/admin/add-shops">Add Shops</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/admin/maintain-shops">Maintain Shops</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/admin/maintain-towns">Maintain Towns</NavDropdown.Item>
            </NavDropdown>}
            </Nav>
            <Nav>
            {loggedIn === false ? 
            <>
              <Nav.Link as={Link} to="/login">{t("nav.login")}</Nav.Link>
              <Nav.Link as={Link} to="/signup">{t("nav.signup")}</Nav.Link>
            </> :
            <>
              <Nav.Link onClick={logout}>Logout</Nav.Link>
            </>}
            </Nav>

          <button className='buttonlang' onClick={() => i18n.changeLanguage("en")} ><img className="icon" src="/english.png" alt="" /></button>
          <button className='buttonlang' onClick={() => i18n.changeLanguage("et")} ><img className="icon" src="/estonian.png" alt="" /></button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar