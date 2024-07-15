import { Container } from "react-bootstrap";
import { Header } from "../library/Header";
import { NavigationBar } from "./NavigationBar";

export function Admin() {
    return (
        <>
            <NavigationBar />
            <Container>
                <h1>Hello, This is a Customer Registration page</h1>
                <Header title="Welcome to Customer Registration" description="Here you can perform CRUD operations on Customer" />
            </Container>
        </>
    )
}