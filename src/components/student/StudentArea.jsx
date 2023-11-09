import React from 'react';
import { Link } from 'react-router-dom';


const StudentArea = ({ user }) => {
    // Define your inline styles
    const linkStyle = {
        textDecoration: 'none',
    };




    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                    <div className="position-sticky pt-3">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" >
                                    Account
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >
                                    Notes
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >
                                    Courses
                                </a>
                            </li>

                        </ul>
                        <div className="m-5 nav-item" style={{ textAlign: 'center' }}>
                            <Link to="/" style={linkStyle}>Log out</Link>
                        </div>
                    </div>
                </nav>

                {/* Page Content */}
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2" style={{ borderBottom: "5px solid orange" }}>Student Area</h1>
                    </div>

                    {/* Replace with your content */}
                    <div className="container">
                        <h2>Welcome to The Student Area</h2>
                        <p>Please use the form below to submit your course tile and file.</p>
                    </div>
                    <form className="my-4">
                        <div className="row">
                            <div className="col-lg-6 col-md-8 col-12 mb-3">
                                <input className="form-control" placeholder='Course Title' />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-8 col-12 mb-3">
                                <input className="form-control" type="file" name="myFile" />
                            </div>
                        </div>
                        <button className="btn btn-warning" type="submit">Submit</button>
                    </form>
                </main>
            </div>
        </div>
    );
};

export default StudentArea;



