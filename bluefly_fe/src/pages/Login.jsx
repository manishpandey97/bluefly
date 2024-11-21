import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile_no, setMobile] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { email, password, mobile_no, role };
    console.log(email, password, mobile_no, role);
    try {
      const response = await fetch(`https://bluefly-be.onrender.com/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        const user = data.user;
        const token = data.accesstoken;
        console.log('login successfully!')

        if (token) {
          localStorage.setItem('token', token);
          console.log('Token stored successfully:', token);

          if (role == "buyer" || role == "visitor") {
            console.log("role", role);
            console.log('going to home');
            const buyer = user;
            navigate('/', { state: { buyer } });

          } else if (role == "seller") {
            console.log('going to create product')
            // console.log(user)
            const seller = user;
            navigate('/createproduct', { state: { seller } });

          } else {
            // console.log(role)
            console.log('going to see list of users')
            const admin = user;
            navigate('/listuser', { state: { admin } });
          }
        } else {
          console.error('No token received from the server');
        }

      } else {
        console.error('Failed to login', response.status);
      }
    } catch (error) {
      console.log(`${error}`)
    }

  }


  return (
    <div className='register'>
      <h1>LOG IN</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="email" placeholder='Email' required
          onChange={(e) => setEmail(e.target.value)} /> <br />
        <input type="mobile" placeholder='Contact' required
          onChange={(e) => setMobile(e.target.value)} /> <br />
        <input type="password" placeholder='Password' required visiable
          onChange={(e) => setPassword(e.target.value)} /> <br />
        <div onChange={(e) => setRole(e.target.value)}>
          <div><label>Buyer</label>
            <input type="radio" id="javascript" name="Role" value="buyer" /></div>
          <div><label>Seller</label>
            <input type="radio" id="Seller" name="Role" value="seller" /></div>
          <div>
            <label>Admin</label>
            <input type="radio" id="css" name="Role" value="admin" /></div>
        </div>
        <input type="submit" value="Sign in" />
        <p style={{ cursor: 'pointer' }} onClick={() => navigate('/register')}>Create account</p>
      </form>

    </div>
  )
}

export default Login