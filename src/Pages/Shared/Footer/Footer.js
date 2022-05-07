import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div>
            <div className="font-small bg-dark text-white pt-4 mt-4">
                <Container fluid className="text-center text-md-left">
                    <Row>
                        <Col md="6">
                            <h5 className="title">Footer Content</h5>
                            <p>
                                Here you can use rows and columns here to organize your footer
                                content.
                            </p>
                        </Col>
                        <Col md="6">
                            <h5 className="title">Links</h5>
                            <ul>
                                <li className="list-unstyled">
                                    <a href="/home">Biker World</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="/about">About us</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="/blogs">My Blogs</a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                        &copy; {new Date().getFullYear()} Copyright: <Link to='/'> Bikers World </Link>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Footer;