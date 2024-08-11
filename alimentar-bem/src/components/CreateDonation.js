import React, { useState } from 'react';
import axios from 'axios';
import '../css/Style.css'; // Importando o CSS corretamente

const CreateDonation = () => {
    const [donationData, setDonationData] = useState({
        naturalPersonId: '',
        organizationId: '',
        itemName: '',
        amountDonated: 0
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDonationData({
            ...donationData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage('');
        setErrorMessage('');
        try {
            await axios.post(`${process.env.REACT_APP_API_BASE_URL}/donation`, donationData);
            setSuccessMessage('Doação realizada com sucesso!');
        } catch (error) {
            setErrorMessage('Ocorreu um erro ao realizar a doação.');
        }
    };

    return (
        <div>
            <form className="create-user-form" onSubmit={handleSubmit}>
                <h2>Registrar as Doações</h2>
                <div className="form-group">
                    <label>Id do doador</label>
                    <input
                        type="text"
                        name="naturalPersonId"
                        value={donationData.naturalPersonId}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Id da instituição</label>
                    <input
                        type="text"
                        name="organizationId"
                        value={donationData.organizationId}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Nome do item</label>
                    <input
                        type="text"
                        name="itemName"
                        value={donationData.itemName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Quantidade doada</label>
                    <input
                        type="number"
                        name="amountDonated"
                        value={donationData.amountDonated}
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

export default CreateDonation;
