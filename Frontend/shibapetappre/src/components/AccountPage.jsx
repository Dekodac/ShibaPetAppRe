import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function AccountPage() {
  const [userProfile, setUserProfile] = useState({});
  const token = localStorage.getItem('token'); 
  

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/account/', {
          headers: {
            Authorization: `Token ${token}`, // Use the retrieved token
          },
        });
        setUserProfile(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, [token]); // Make sure to include token in the dependency array


  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Header className="text-center bg-primary text-white">
              <h3>Account Information</h3>
            </Card.Header>
            <Card.Body>
              <div className="mb-3">
                <strong>Username:</strong> {userProfile.username}
              </div>
              <div>
                <strong>Email:</strong> {userProfile.email}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
