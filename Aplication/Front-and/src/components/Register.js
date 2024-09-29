import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css';
import icon2 from "../assets/icons/icon2.jpg";

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();  

        if (!username || !password || !email) {
            setError('Preencha todos os campos.');
            return;
        }

        setLoading(true);
        setError('');

        try {
            await axios.post('http://localhost:5000/api/auth/register', { username, password, email });
            alert('Registro realizado com sucesso! Você pode fazer o login agora.');
            navigate('/login');  
        } catch (error) {
            console.error('Erro ao registrar', error);
            setError('Erro ao registrar. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="register-container">
                <form className="register-form" onSubmit={handleRegister}>
                    <h1 className="text-center">
                        <img src={icon2} alt="icon-login" className="icon-login" />
                    </h1>

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nome de Usuário"
                        value={username}  
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input
                        type="email"
                        className="form-control"
                        placeholder="E-mail"
                        value={email}  
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        className="form-control"
                        placeholder="Senha"
                        value={password}  
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit" className="btn btn-primary" disabled={isLoading}>  {}
                        {isLoading ? 'Carregando...' : 'Registrar'}
                    </button>

                    {error && <p className="error-message">{error}</p>}
                </form>
            </div>
        </div>
    );
}

export default Register;
