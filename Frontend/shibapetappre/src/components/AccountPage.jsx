import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from './LoginContext';
import { LogoutContext } from './LogoutContext';

export default function AccountPage() {

  const {handleLogout} = useContext(LogoutContext);

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
    <>
    <div style={{ position: 'absolute', top: 30, left: "50%",marginLeft: -50, height: 100, width: 200}}>
      <Container>
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
    <div style={{width: 40, left: 40, right: 50, bottom: 40, top: 40, justifyContent: 'center'}}>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
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
    </div>
      </Container>
    </div>
    </>
  );
}