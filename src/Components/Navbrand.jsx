import { Container, Navbar } from "react-bootstrap";

const Navbrand = () => {
    return (
        <>
            <Navbar bg="danger">
            <Container>
                <Navbar.Brand href="#home"><b className='text-white'>Portal Berita Menggunakan Functional Komponen</b></Navbar.Brand>
            </Container>
            </Navbar>
            <br />
        </>
    );
}

export default Navbrand