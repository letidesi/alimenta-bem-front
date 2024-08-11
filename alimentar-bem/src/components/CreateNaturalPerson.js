import React, { useState } from 'react';
import axios from 'axios';
import '../css/Style.css';

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

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setPersonData({
            ...personData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage('');
        setErrorMessage('');
        try {
            await axios.post(`${process.env.REACT_APP_API_BASE_URL}/natural-person`, personData);
            setSuccessMessage('Doador criado com sucesso!');
        } catch (error) {
            setErrorMessage('Ocorreu um erro ao criar o doador.');
        }
    };

    return (
        <div>
            <form className="create-user-form" onSubmit={handleSubmit}>
                <h2>Registrar o Doador</h2>
                <div className="form-group">
                    <label>User ID</label>
                    <input
                        type="text"
                        name="userId"
                        value={personData.userId}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Nome</label>
                    <input
                        type="text"
                        name="firstName"
                        value={personData.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Sobrenome</label>
                    <input
                        type="text"
                        name="lastName"
                        value={personData.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Nome social</label>
                    <input
                        type="text"
                        name="socialName"
                        value={personData.socialName}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Idade</label>
                    <input
                        type="number"
                        name="age"
                        value={personData.age}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Data de nascimento</label>
                    <input
                        type="date"
                        name="birthdayDate"
                        value={personData.birthdayDate}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Gênero</label>
                    <select
                        name="gender"
                        value={personData.gender}
                        onChange={handleChange}
                    >
                        <option value="">Selecione</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                        <option value="PessoaNaoBinaria">Pessoa não-binária</option>
                        <option value="PrefiroNaoDizer">Prefiro não dizer</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Raça</label>
                    <select
                        name="skinColor"
                        value={personData.skinColor}
                        onChange={handleChange}
                    >
                        <option value="">Selecione</option>
                        <option value="Branca">Branca</option>
                        <option value="Preta">Preta</option>
                        <option value="Amarela">Amarela</option>
                        <option value="Parda">Parda</option>
                        <option value="Asiatica">Asiática</option>
                        <option value="Indigena">Indígena</option>
                        <option value="PrefiroNaoDizer">Prefiro não dizer</option>
                    </select>
                </div>
                <div className="form-group form-group-checkbox">
                    <label>
                        <input
                            type="checkbox"
                            name="isPcd"
                            checked={personData.isPcd}
                            onChange={handleChange}
                        /> É PCD
                    </label>
                </div>

                <button type="submit" className="submit-btn">Enviar</button>
            </form>

            {successMessage && (
                <div className="success-message">
                    {successMessage}
                </div>
            )}

            {errorMessage && (
                <div className="error-message">
                    {errorMessage}
                </div>
            )}
        </div>
    );
};

export default CreateNaturalPerson;
