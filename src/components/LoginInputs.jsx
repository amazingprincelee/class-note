import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {admin, students, teachers} from "../dataBase"


const AdminLoginInput = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Check if email and password match an admin in the database
        const match = admin.find(admin => admin.email === email && admin.password === password);
        if (match) {
          // Redirect to the admin area
          navigate('/admin-area');
        } else {
          alert('Invalid credentials');
        }
      };

    return (
        <form onSubmit={handleLogin}>
        <div>
           <p>email: user1@email.com</p>
           <p>password: 123456</p>
        </div>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    );
  };
  
  const TeacherLoginInput = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Check if email and password match an admin in the database
        const match = teachers.find(teacher => teacher.email === email && teacher.password === password);
        if (match) {
          // Redirect to the admin area
          navigate('/teacher-area');
        } else {
          alert('Invalid credentials');
        }
      };

    return (
        <form onSubmit={handleLogin}>
        <div>
           <p>email: user1@email.com</p>
           <p>password: 123456</p>
        </div>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    );
  };

  
  const StudentLoginInput = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Check if email and password match an admin in the database
        const match = students.find(student => student.email === email && student.password === password);
        if (match) {
          // Redirect to the admin area
          navigate('/student-area');
        } else {
          alert('Invalid credentials');
        }
      };

    return (
        <form onSubmit={handleLogin}>
        <div>
           <p>email: user1@email.com</p>
           <p>password: 123456</p>
        </div>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    );
  };
  
  
  const TeacherRegisterInput = () => {
    return (
      <form>
        <div className="mb-3">
          <input type="text" name="fullname" className="form-control" placeholder="Full Name" required />
        </div>
        <div className="mb-3">
          <input type="text" name="username" className="form-control" placeholder="Username" required />
        </div>
        <div className="mb-3">
          <input type="password" name="password" className="form-control" placeholder="Password" required/>
        </div>
        <button type="submit" className="btn btn-success">Register</button>
      </form>
    );
  };
  
  const StudentRegistrationInput = () => {
    return (
      <form>
        <div className="mb-3">
          <input type="text" name="fullname" className="form-control" placeholder="Full Name" required />
        </div>
        <div className="mb-3">
          <input type="text" name="username" className="form-control" placeholder="Username" required />
        </div>
        <div className="mb-3">
          <input type="password" name="password" className="form-control" placeholder="Password" required/>
        </div>
        <button type="submit" className="btn btn-success">Register</button>
      </form>
    );
  };
  
  export { AdminLoginInput, TeacherLoginInput, TeacherRegisterInput, StudentLoginInput, StudentRegistrationInput };
  