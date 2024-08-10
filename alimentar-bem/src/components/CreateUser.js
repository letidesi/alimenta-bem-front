import React, { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/user`, userData);
            console.log('User created:', response.data);
        } catch (error) {
            console.error('There was an error creating the user!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nome</label>
                <input type="text" name="name" value={userData.name} onChange={handleChange} />
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="email" value={userData.email} onChange={handleChange} />
            </div>
            <div>
                <label>Senha</label>
                <input type="password" name="password" value={userData.password} onChange={handleChange} />
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default CreateUser;
