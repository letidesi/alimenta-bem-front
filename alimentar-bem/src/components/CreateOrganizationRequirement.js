import React, { useState } from 'react';
import axios from 'axios';
import '../css/Style.css';

const CreateOrganizationRequirement = () => {
    const [requirementData, setRequirementData] = useState({
        organizationId: '',
        itemName: '',
        quantity: 0,
        type: ''
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRequirementData({
            ...requirementData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage('');
        setErrorMessage('');
        try {
            await axios.post(`${process.env.REACT_APP_API_BASE_URL}/organization-requirement`, requirementData);
            setSuccessMessage('Item necessário para a instituição foi criado com sucesso!');
        } catch (error) {
            setErrorMessage('Ocorreu um erro ao criar item necessário para a instituição.');
        }
    };

    return (
        <div>
            <form className="create-user-form" onSubmit={handleSubmit}>
                <h2>Registrar de Necessidades de Doações </h2>
                <div className="form-group">
                    <label>Id da instituição</label>
                    <input
                        type="text"
                        name="organizationId"
                        value={requirementData.organizationId}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Nome do item</label>
                    <input
                        type="text"
                        name="itemName"
                        value={requirementData.itemName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Quantidade</label>
                    <input
                        type="number"
                        name="quantity"
                        value={requirementData.quantity}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Prioridade</label>
                    <input
                        type="text"
                        name="type"
                        value={requirementData.type}
                        onChange={handleChange}
                        required
                    />
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

export default CreateOrganizationRequirement;
