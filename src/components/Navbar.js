import React from 'react'
import './css/Navbar.css'
export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg " style={{color : '#fff'}}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"> <h2 style={{color : '#3495eb' , fontWeight: "bold"}}>Hiring Talents</h2> </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">For Job Seekers</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tech Jobs
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Web Developer</a></li>
                                    <li><a class="dropdown-item" href="#">Android Developer</a></li>
                                    <li><a class="dropdown-item" href="#">Java Developer</a></li>
                                    <li><a class="dropdown-item" href="#">Frontend Developer</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Electronic Enineer</a></li>
                                    <li><a class="dropdown-item" href="#">Mechanical Enineer</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div className='btn'>
                    <button class="btn-login">Login</button>
                    <button class="btn-signup">SignUp</button>
                    </div>
                    </div>
                    
                    </div>
                    
                </div>
            </nav>

        </div>
    )
}
