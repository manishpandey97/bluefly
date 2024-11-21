import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [mobile_no, setMobile] = useState(null);

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = { name, email, password, role, mobile_no };
        console.log(name, email, password, role, mobile_no);
        try {
            const response = await fetch(`https://bluefly-be.onrender.com/user/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                navigate('/login');
            } else {
                console.error('Failed to register', response.status);
            }
        } catch (error) {
            console.log(`${error}`)
        }

    }
    // https://bluefly-be.onrender.com
    // http://localhost:10000
    return (
        <div className='register'>
            <h1>CREATE ACCOUNT</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='Name' required
                    onChange={(e) => setName(e.target.value)} /> <br />
                <input type="email" placeholder='Email unique' required
                    onChange={(e) => setEmail(e.target.value)} /> <br />
                <input type="mobile" placeholder='Contact unique' required
                    onChange={(e) => setMobile(e.target.value)} /> <br />
                <input type="password" placeholder='Password' required
                    onChange={(e) => setPassword(e.target.value)} /> <br />

                <div onChange={(e) => setRole(e.target.value)}>
                    <div>  <label>Buyer</label>
                    <input type="radio" id="javascript" name="Role" value="buyer" /></div>
                    <div>  <label>Seller</label>
                    <input type="radio" id="Seller" name="Role" value="seller" /></div>
                    <div><label>Admin</label>
                    <input type="radio" id="css" name="Role" value="admin" /> </div>
                </div>
                <br />
                <input type="submit" value="Create" />
                <p>Already register?
                    <span style={{ cursor: 'pointer', textDecoration: 'underline' }}
                        onClick={() => navigate('/login')}>  LOGIN</span></p>
            </form>
        </div>
    )
}

export default Register