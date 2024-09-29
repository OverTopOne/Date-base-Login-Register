import { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css';
import icon2 from "../assets/icons/icon2.jpg";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        
        if (!username || !password) {
            setError('Preencha ambos os campos.');
            return;
        }

        setIsLoading(true);
        setError(''); 

        try {
            const { data } = await axios.post('http://localhost:5000/api/auth/login', { username, password });
            localStorage.setItem('token', data.token);
            navigate('/home');
        } catch (error) {
            console.error('Erro ao fazer login', error);
            setError('Usuário ou senha incorretos.');
        } finally {
            setIsLoading(false); 
        }
    };

    const handleRegister = () => {
        navigate('/register');
    };

    return (
        <div>
            <Navbar />
            <div className="login-container">
                <form className="login-form" onSubmit={handleLogin}>
                    <h1 className="text-center"> {}
                        <img src={icon2} alt="icon-login" className="icon-login" />
                    </h1>

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} 
                    />

                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                    />

                    <div className="button-container">
                        <button type="submit" className="btn btn-primary" disabled={isLoading}>
                            {isLoading ? 'Carregando...' : 'Login'}
                        </button>

                        <button type="button" className="btn btn-secondary" onClick={handleRegister}>
                            Register
                        </button>
                    </div>

                    {error && <p className="error-message">{error}</p>}
                </form>
            </div>
        </div>
    );
}

export default Login;
