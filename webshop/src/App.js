import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/global/HomePage';
import ContactUs from './pages/global/ContactUs';
import Shops from './pages/global/Shops';
import Cart from './pages/global/Cart';
import SingleProduct from './pages/global/SingleProduct';
import AdminHome from './pages/admin/AdminHome';
import AddProduct from './pages/admin/AddProduct';
import EditProduct from './pages/admin/EditProduct';
import MaintainProducts from './pages/admin/MaintainProducts';
import MaintainCategories from './pages/admin/MaintainCategories';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useTranslation } from 'react-i18next';

function App() {

  const { t, i18n } = useTranslation();

// tehke kodus kolmas ja neljas keel (vene keel)

  const updateLanguageEn = () => {
    i18n.changeLanguage("en");
  }

  const updateLanguageEe = () => {
    i18n.changeLanguage("ee");
  }

  return (
    <div className="App">
     
     <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/">Mihkel's webshop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/admin">{t("admin")}</Nav.Link>
            <Nav.Link as={Link} to="/shops">{t("shops")}</Nav.Link>
            <Nav.Link as={Link} to="/contact">{t("contact")}</Nav.Link>
          </Nav>
          <Nav>
            <img className="lang" src="/english.png" alt="" onClick={updateLanguageEn} />
            <img className="lang" src="/estonian.png" alt="" onClick={updateLanguageEe} />
            <Nav.Link as={Link} to="/cart">{t("cart")}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <Routes>
        <Route path='' element={ <HomePage /> } />
        <Route path='contact' element={ <ContactUs /> } />
        <Route path='shops' element={ <Shops /> } />
        <Route path='cart' element={ <Cart /> } />
        <Route path='product' element={ <SingleProduct /> } />
        <Route path='admin' element={ <AdminHome /> } />
        <Route path='admin/add-product' element={ <AddProduct /> } />
        <Route path='admin/edit-product' element={ <EditProduct /> } />
        <Route path='admin/maintain-products' element={ <MaintainProducts /> } />
        <Route path='admin/maintain-categories' element={ <MaintainCategories /> } />
      </Routes>
    </div>
  );
}

export default App;
