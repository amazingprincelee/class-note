import React, { useState } from 'react';
import { Modal} from 'react-bootstrap';
import {
    AdminLoginInput,
    TeacherLoginInput, 
    TeacherRegisterInput, 
    StudentLoginInput, 
    StudentRegistrationInput
} from '../components/LoginInputs';

function Login() {
    const [showModal, setShowModal] = useState({
        adminLogin: false,
        teacherLogin: false,
        teacherRegister: false,
        studentLogin: false,
        studentRegister: false
    });

    const openModal = (modalName) => {
        setShowModal(prevState => ({ ...prevState, [modalName]: true }));
    };

    const closeModal = (modalName) => {
        setShowModal(prevState => ({ ...prevState, [modalName]: false }));
    };

    const renderModalContent = (modalName) => {
        switch (modalName) {
            case 'adminLogin':
                return <AdminLoginInput />;
            case 'teacherLogin':
                return <TeacherLoginInput />;
            case 'teacherRegister':
                return <TeacherRegisterInput />;
            case 'studentLogin':
                return <StudentLoginInput />;
            case 'studentRegister':
                return <StudentRegistrationInput />;
            default:
                return null;
        }
    };

    const renderModal = (modalName, title) => (
        <Modal show={showModal[modalName]} onHide={() => closeModal(modalName)}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {renderModalContent(modalName)}
            </Modal.Body>
            {/* <Modal.Footer>
                <Button variant="secondary" onClick={() => closeModal(modalName)}>
                    Close
                </Button>
                <Button variant="primary">
                    Login
                </Button>
            </Modal.Footer> */}
        </Modal>
    );

    return (
        <div>
        <div className='author'>
            <p>Author: Prince Lee Nna | <a href='https://www.linkedin.com/in/amazingprincelee/'>Linkedin</a></p>
            
        </div>
        <div className="container text-center mt-5">
            <div className="row align-items-start">
                <div className="col d-grid">
                    <button onClick={() => openModal('adminLogin')} className="btn btn-warning m-2 text-white">Admin Login</button>
                    {renderModal('adminLogin', 'Admin Login')}
                </div>
                <div className="col d-grid">
                    <button onClick={() => openModal('teacherLogin')} className="btn btn-warning m-2 text-white">Teacher Login</button>
                    {renderModal('teacherLogin', 'Teacher Login')}
                    <button onClick={() => openModal('teacherRegister')} className="btn btn-warning m-2 text-white">Teacher Register</button>
                    {renderModal('teacherRegister', 'Teacher Register')}
                </div>
                <div className="col d-grid">
                    <button onClick={() => openModal('studentLogin')} className="btn btn-warning m-2 text-white">Student Login</button>
                    {renderModal('studentLogin', 'Student Login')}
                    <button onClick={() => openModal('studentRegister')} className="btn btn-warning m-2 text-white">Student Register</button>
                    {renderModal('studentRegister', 'Student Register')}
                </div>
            </div>
        </div>
        </div>
    );
}

export default Login;
