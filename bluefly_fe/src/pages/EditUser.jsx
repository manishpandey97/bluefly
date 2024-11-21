import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function EditUser() {
    const navigate = useNavigate();
    const location = useLocation()
    const { seller, admin } = location.state || {};
    const { name, email, role, mobile_no, id } = seller;
    // console.log(user)
    const [nameE, setName] = useState(name);
    const [roleE, setRole] = useState(role);


    const handleSubmit = async (e, id) => {
        e.preventDefault();
        const payload = { name: nameE, role: roleE };
        // console.log(payload);
        try {
            const response = await fetch(`https://bluefly-be.onrender.com/user/update/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
            // console.log(response)
            if (response.ok) {
                navigate('/listuser', { state: { seller, admin } });
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
            <h1>EDIT USER</h1>
            <h3 style={{ fontSize: '12px', color: 'red' }}>You are {admin.role} *</h3>
            <button onClick={() => navigate('/listuser', { state: { seller, admin } })}
                style={{ width: 'content-fit', margin: 'auto', marginBottom: '20px' }} >
                USER LIST</button>

            <form action="" onSubmit={(e) => handleSubmit(e, id)}>
                <input type="text" placeholder='Name' required value={nameE}
                    onChange={(e) => setName(e.target.value)} /> <br />

                <div onChange={(e) => setRole(e.target.value)} >
                    <label>Buyer</label>
                    <input type="radio" id="javascript" name="Role" value="buyer" checked={roleE == 'buyer'} />
                    <label>Seller</label>
                    <input type="radio" id="Seller" name="Role" value="seller" checked={roleE == 'seller'} />
                    <label>Admin</label>
                    <input type="radio" id="css" name="Role" value="admin" checked={roleE == 'admin'} />
                </div>
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    )
}

export default EditUser