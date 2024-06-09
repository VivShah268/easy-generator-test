import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { StateContext } from './store/StateContext';
import { validateEmail, validatePassword } from './helper';

function SignUp() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const context = useContext(StateContext);

    const handleSubmit = async () => {
        let error = "";
        if (!validatePassword(password)) error = "Password must be at least 8 characters long and contain at least one letter, one number, and one special character.";

        if (!validateEmail(email)) error = error + " Please enter a valid email address.";

        if (name.trim().length == 0) error = error + " Please enter a valid name.";

        if (!error) {
            fetch("http://localhost:3000/users", {
                method: "POST",
                body: JSON.stringify({ email, password, name })
            })
                .then(response => response.json())
                .then(json => {
                    context.updateUserDetails(email, name);
                    navigate("/home");
                })
        }
        else setError(error);
    };

    return (
        <div>
            <h2>SignUp</h2>
            {error && <p>{error}</p>}
            <div>
                <label>Name:</label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit" onClick={(_) => handleSubmit()}>SignUp</button>
        </div>
    );
}

export default SignUp;