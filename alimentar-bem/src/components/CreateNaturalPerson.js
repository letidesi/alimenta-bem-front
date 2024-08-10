import React, { useState } from 'react';
import axios from 'axios';

const CreateNaturalPerson = () => {
    const [personData, setPersonData] = useState({
        userId: '',
        firstName: '',
        lastName: '',
        socialName: '',
        age: '',
        birthdayDate: '',
        gender: '',
        skinColor: '',
        isPcd: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setPersonData({
            ...personData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/natural-person`, personData);
            console.log('Natural Person created:', response.data);
        } catch (error) {
            console.error('There was an error creating the natural person!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>User ID</label>
                <input type="text" name="userId" value={personData.userId} onChange={handleChange} />
            </div>
            <div>
                <label>Nome</label>
                <input type="text" name="firstName" value={personData.firstName} onChange={handleChange} />
            </div>
            <div>
                <label>Sobrenome</label>
                <input type="text" name="lastName" value={personData.lastName} onChange={handleChange} />
            </div>
            <div>
                <label>Nome social</label>
                <input type="text" name="socialName" value={personData.socialName} onChange={handleChange} />
            </div>
            <div>
                <label>Idade</label>
                <input type="number" name="age" value={personData.age} onChange={handleChange} />
            </div>
            <div>
                <label>Data de nascimento</label>
                <input type="date" name="birthdayDate" value={personData.birthdayDate} onChange={handleChange} />
            </div>
            <div>
                <label>Gênero</label>
                <select name="gender" value={personData.gender} onChange={handleChange}>
                    <option value="">Selecione</option>
                    <option value="male">Masculino</option>
                    <option value="female">Feminino</option>
                    <option value="other">Outro</option>
                    <option value="prefer_not_to_say">Prefiro não dizer</option>
                </select>
            </div>
            <div>
                <label>Raça</label>
                <select name="skinColor" value={personData.skinColor} onChange={handleChange}>
                    <option value="">Selecione</option>
                    <option value="white">Branca</option>
                    <option value="black">Preta</option>
                    <option value="asian">Asiática</option>
                    <option value="indigenous">índigena</option>
                    <option value="other">Outro</option>
                </select>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        name="isPcd"
                        checked={personData.isPcd}
                        onChange={handleChange}
                    />
                    É PCD (Person with Disabilities)
                </label>
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default CreateNaturalPerson;
