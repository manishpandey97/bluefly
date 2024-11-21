import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete, MdOutlineSignpost } from "react-icons/md";

function UserList() {
    const [userData, setUserData] = useState([])
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const location = useLocation()
    const { admin, seller } = location.state || {}
    admin.userId = admin._id;

    const getUser = async () => {
        try {
            const res = await fetch(`https://bluefly-be.onrender.com/user/`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                credentials: 'include',
            });

            if (res.ok) {
                const data = await res.json();
                setUserData(data.users);
            } else {
                console.error('Failed to fetch user data', res.status);
            }
        } catch (error) {
            console.log('Error fetching user data:', error);
        }
    }

    useEffect(() => {
        if (token) {
            getUser();
        }
    }, [token]);

    const deleteUser = async (e, id) => {
        try {
            const res = await fetch(`http://localhost:10000/user/delete/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                credentials: "include",
                body: JSON.stringify({ role: "admin" })
            })
            if (res.ok) {
                // console.log('res', res)
                console.log('delete successfully')
                getUser();
            } else {
                const errorData = await res.json();
                console.log('Error:', errorData);
            }

        } catch (error) {
            console.log(error)
        }

    }

    const editUser = (e, name, email, mobile_no, role, _id) => {
        const seller = { name, email, mobile_no, role, id: _id }
        // console.log(user);
        navigate('/edituser', { state: { seller, admin } });
    }

    const userProduct = (e, name, email, mobile_no, role, _id) => {
        const seller = { name, email, mobile_no, role, userId: _id }
        // console.log(user);
        navigate('/userproduct', { state: { seller, admin } });
    }

    return (
        <>
            {
                userData.length === 0 ? (<div className="loader"></div>) : (
                    <div className='register'>
                        <h1>LIST OF USERS</h1>
                        <h3 style={{ fontSize: '12px', color: 'red' }}>You are {admin.role} *</h3>
                        <button onClick={() => navigate('/')}
                            style={{ width: 'content-fit', margin: 'auto', marginBottom: '20px' }} >
                            Home</button>
                        <table>
                            <thead>
                                <tr>
                                    <th>NAME</th>
                                    <th>EMAIL</th>
                                    <th>ROLE</th>
                                    <th>MOBILE</th>
                                    <th>EDIT</th>
                                    <th>DELETE</th>
                                    <th>POST</th>
                                </tr>
                            </thead>

                            <tbody>

                                {userData?.map(({ name, email, mobile_no, role, _id }) => {
                                    // console.log(_id)
                                    return (
                                        <tr key={_id}>
                                            <td>{name}</td>
                                            <td>{email}</td>
                                            <td>{mobile_no}</td>
                                            <td>{role}</td>
                                            <td >< FaRegEdit className='icon' style={{ color: 'yellow' }}
                                                onClick={(e) => editUser(e, name, email, mobile_no, role, _id)}
                                            /></td>
                                            <td ><MdOutlineDelete className='icon' style={{ color: 'red' }}
                                                onClick={(e) => deleteUser(e, _id)} /></td>
                                            <td >< MdOutlineSignpost className='icon' style={{ color: 'lightgreen' }}
                                                onClick={(e) => userProduct(e, name, email, mobile_no, role, _id)}
                                            /></td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>

                    </div>
                )}
        </>
    )
}

export default UserList