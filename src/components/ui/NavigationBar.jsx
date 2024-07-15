import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { BASE_ROUTE, CONTACT_US, CUSTOMER_LIST_ROUTE, REGISTRATION_ROUTE } from "../../constants/AppRoute";


export function NavigationBar() {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Customer Registration</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to={BASE_ROUTE}>
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to={REGISTRATION_ROUTE}>
                                <Nav.Link>Register a Customer</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to={CUSTOMER_LIST_ROUTE}>
                                <Nav.Link>Customer List</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to={CONTACT_US}>
                                <Nav.Link>Contact Us</Nav.Link>
                            </LinkContainer>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

