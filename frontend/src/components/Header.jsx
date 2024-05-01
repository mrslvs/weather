import Container from 'react-bootstrap/Container';
import useAuth from '../hooks/useAuth';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import axiosInstance from '../api/axiosInstance';
import { useNavigate } from 'react-router-dom';

function Header({ setSelection }) {
    const { user, setUser } = useAuth();
    const navigate = useNavigate();

    const logout = async () => {
        try {
            const response = await axiosInstance.post('/logout', null, {
                withCredentials: true,
            });
            setUser({ user: '', isLoggedIn: false });
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Weather</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {!user.isLoggedIn ? (
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => setSelection('login')}>Login</Nav.Link>
                            <Nav.Link onClick={() => setSelection('register')}>Register</Nav.Link>
                        </Nav>
                    ) : (
                        <Nav className="me-auto">
                            <Button variant="danger" type="submit" onClick={logout}>
                                Logout
                            </Button>
                        </Nav>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
