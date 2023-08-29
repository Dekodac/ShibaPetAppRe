import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from './LoginContext';

export default function AccountPage() {

  const {loginStatus,handleLogInSubmit,handlePasswChange,handleEmailChange,email,passw} = useContext(LoginContext);

  const navigate = useNavigate();

  const [userProfile, setUserProfile] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/account/details/', {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        setUserProfile(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, [token]);

  const handleLogout = () => {
    //Remove token from session
    localStorage.removeItem('token');
    // Redirect to login or home page
    // loginStatus = null; <---- was giving issues not going back to homepage for some reason... anomaly..
    window.location.reload();
    navigate("/");
  };

  const handleChangeUsername = async () => {
    try {
      const response = await axios.put(
        'http://127.0.0.1:8000/account/profileUpdate/',
        { new_username: newUsername },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      setUserProfile({ ...userProfile, username: newUsername });
      setShowModal(false);
    } catch (error) {
      console.error('Error changing username:', error);
    }
  };



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
              <Button variant="primary" className="mt-3" onClick={() => setShowModal(true)}>
                Change Username
              </Button>
              <Button variant="danger" className="mt-2" onClick={handleLogout}>
                Logout
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Change Username Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Change Username</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="newUsername">
              <Form.Label>New Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter new username"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleChangeUsername}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
