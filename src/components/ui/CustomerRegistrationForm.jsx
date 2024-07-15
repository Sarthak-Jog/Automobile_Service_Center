import { Button, Col, Container, Form, Row, Toast, ToastContainer } from "react-bootstrap";
import { Header } from "../library/Header";
import { useState } from "react";
import { saveCustomer } from "../../services/CustomerService"
import Footer from "../library/footer";
import { NavigationBar } from "./NavigationBar";

export function CustomerRegistrationForm() {
    const [formData, setFormData] = useState({ customer_name: '', vehicle_name: '', last_service_date: '', last_km: '', due_date: '', due_km: '', full_service: '', oil_change: '', washing: '', charges: '' });

    const [showToast, setShowToast] = useState(false);

    const handleFieldChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleCloseToast = () => {
        setShowToast(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        saveCustomer(formData)
            .then((response) => {
                setShowToast(true);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <NavigationBar />
            <Header title="Register Customers" />
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Customer_name</Form.Label>
                                <Form.Control type="text" placeholder="Enter customer name" name="customer_name" onChange={handleFieldChange} />
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Vehicle_name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Vehicle Name" name="vehicle_name" onChange={handleFieldChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Last_service_date</Form.Label>
                                <Form.Control type="date" placeholder="Enter Last service date" name="last_service_date" onChange={handleFieldChange} />
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Last_km</Form.Label>
                                <Form.Control type="number" placeholder="Enter Last_km" name="last_km" onChange={handleFieldChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Due_date</Form.Label>
                                <Form.Control type="date" placeholder="Enter Due_date" name="due_date" onChange={handleFieldChange} />
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Due_km</Form.Label>
                                <Form.Control type="number" placeholder="Enter Due_Km" name="due_km" onChange={handleFieldChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Full_service</Form.Label>
                                <Form.Control type="text" placeholder="Enter Yes/No" name="full_service" onChange={handleFieldChange} />
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Oil_change</Form.Label>
                                <Form.Control type="text" placeholder="Enter Yes/No" name="oil_change" onChange={handleFieldChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Washing</Form.Label>
                                <Form.Control type="text" placeholder="Enter Yes/No" name="washing" onChange={handleFieldChange} />
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Charges</Form.Label>
                                <Form.Control type="number" placeholder="Enter Charges" name="charges" onChange={handleFieldChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Button className="mb-4" type="submit" variant="primary">Register Customer</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
            <ToastContainer position="top-end">
                <Toast bg="success" onClose={handleCloseToast} show={showToast} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Confirmation</strong>
                    </Toast.Header>
                    <Toast.Body className="text-white">Customer registered</Toast.Body>
                </Toast>
            </ToastContainer>
            <Footer />
        </>
    )
}
