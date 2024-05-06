import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Alert } from 'react-bootstrap';

function ViewComplain() {
    const { id } = useParams(); // Get the ID from route parameters
    const [complain, setComplain] = useState({
        query: 'AC mounting',
        created_by: 'Ramu',
        status: 'pending',
        technicianID: 'null',
        technicianName: 'Sonu',
        acquire: true,
        working_date: '12 March',
        id: '1',
    });

    return (
        <Container>
            {complain.id ? (
                <Card>
                    <Card.Header>Complaint Details</Card.Header>
                    <Card.Body>
                        <Row>
                            <Col>
                                <p>
                                    <strong>ID:</strong> {complain.id}
                                </p>
                                <p>
                                    <strong>Query:</strong> {complain.query}
                                </p>
                            </Col>
                            <Col>
                                <p>
                                    <strong>Created By:</strong> {complain.created_by}
                                </p>
                                <p>
                                    <strong>Status:</strong> {complain.status}
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>
                                    <strong>Technician Name:</strong> {complain.technicianName}
                                </p>
                            </Col>
                            <Col>
                                <p>
                                    <strong>Working Date:</strong> {complain.working_date}
                                </p>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            ) : (
                <Alert variant="warning">No complaint found with this ID.</Alert>
            )}
        </Container>
    );
}

export default ViewComplain;
