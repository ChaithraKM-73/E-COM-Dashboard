import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    async function signUp() {
        console.warn({ name, password, email });

        let item = { name, password, email };

        let result = await fetch('http://localhost:8000/api/register', {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            }
        });

        result = await result.json();

        localStorage.setItem('user-info', JSON.stringify(result));
        navigate('/add');
    }

    return (
        <div className="col-sm-6 offset-sm-3">
            <h1>Register</h1>
            <br />

            <input type="text" className="form-control"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)} />

            <br />

            <input type="password" className="form-control"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />

            <br />

            <input type="email" className="form-control"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />

            <br />

            <button className="btn btn-primary" onClick={signUp}>
                Sign up
            </button>
        </div>
    );
}

export default Register;