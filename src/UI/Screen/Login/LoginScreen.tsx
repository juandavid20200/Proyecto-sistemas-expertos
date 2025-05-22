import axios from 'axios';
import { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom'; 
type Props = {
    acces_token?: string,
    token_type?: string
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f9fafb',
    fontFamily: 'Arial, sans-serif',
  },
  loginBox: {
    width: '100%',
    maxWidth: '480px',      
    padding: 40,          
    backgroundColor: 'white',
    borderRadius: 12,    
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.30)', 
    textAlign: 'center',
    transition: 'box-shadow 0.3s ease',  
  },
  loginBoxHover: {
    boxShadow: '0 12px 36px rgba(0, 0, 0, 0.50)', 
  },
  title: {
    fontSize: 26,  
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 12, 
  },
  subtitle: {
    fontSize: 16,  
    color: '#6b7280',
    marginBottom: 32, 
  },
  form: {
    marginTop: 24, 
  },
  inputGroup: {
    marginBottom: 22,
    position: 'relative',
  },
  label: {
    position: 'absolute' as 'absolute',
    left: '-9999px',
  },
  input: {
    width: '100%',
    padding: '14px 14px 14px 44px', 
    border: '1px solid #d1d5db',
    borderRadius: 6, 
    fontSize: 15,
    boxSizing: 'border-box',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  },
  inputFocus: {
    borderColor: '#d90429',
    boxShadow: `0 0 0 3px #d904294D`, 
  },
  icon: {
    position: 'absolute' as 'absolute',
    left: 14,
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#9ca3af',
    width: 18,
    height: 18,
  },
  rememberContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 28,
    fontSize: 15,
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: 10,
  },
  forgotPassword: {
    color: '#d90429',
    textDecoration: 'none',
    fontSize: 15,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 14,
    backgroundColor: '#d90429',
    color: 'white',
    border: 'none',
    borderRadius: 6,
    fontSize: 16,
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'background-color 0.3s, box-shadow 0.3s',
    boxShadow: '0 4px 12px rgba(217, 4, 41, 0.4)', 
  },
  buttonHover: {
    backgroundColor: '#a00320',
    boxShadow: '0 6px 18px rgba(160, 3, 32, 0.6)', 
  },
  registerText: {
    fontSize: 15,
    color: '#6b7280',
    marginTop: 28,
  },
  registerLink: {
    color: '#d90429',
    textDecoration: 'none',
  },
  iconSvg: {
    display: 'inline-block',
    width: 18,
    height: 18,
    stroke: 'currentColor',
    strokeWidth: 2,
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
};

export default function MinimalistLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [loginBoxHovered, setLoginBoxHovered] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const data = {
      'correo': email,
      'contraseña': password,
    };
  
    try {
      const response = await axios.post('http://localhost:8000/login', data);
      const { access_token } = response.data;
  
      // Guardamos el token en localStorage para usarlo después
      localStorage.setItem('access_token', access_token);
  
      console.log("Token guardado:", access_token);
  
      navigate('/consultas');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  const EmailIcon = () => (
    <svg
      style={styles.icon}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );

  const LockIcon = () => (
    <svg
      style={styles.icon}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );

  const LoginIcon = () => (
    <svg
      style={{ ...styles.iconSvg, marginRight: 8 }}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>
  );

  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.loginBox,
          ...(loginBoxHovered ? styles.loginBoxHover : {}),
        }}
        onMouseEnter={() => setLoginBoxHovered(true)}
        onMouseLeave={() => setLoginBoxHovered(false)}
      >
        <h2 style={styles.title}>Iniciar Sesión</h2>
        <p style={styles.subtitle}>Ingresa tus credenciales para acceder</p>

        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>
              Correo electrónico
            </label>
            <EmailIcon />
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              style={{
                ...styles.input,
                ...(emailFocused ? styles.inputFocus : {}),
              }}
              placeholder="Correo electrónico"
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>
              Contraseña
            </label>
            <LockIcon />
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
              style={{
                ...styles.input,
                ...(passwordFocused ? styles.inputFocus : {}),
              }}
              placeholder="Contraseña"
            />
          </div>

          <div style={styles.rememberContainer}>
            <div style={styles.checkboxContainer}>
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                style={styles.checkbox}
              />
              <label htmlFor="remember-me">Recordarme</label>
            </div>

            <a href="#" style={styles.forgotPassword}>
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <button
            type="submit"
            style={{
              ...styles.button,
              ...(isHovered ? styles.buttonHover : {}),
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <LoginIcon />
            Iniciar Sesión
          </button>
        </form>

        <div style={styles.registerText}>
          ¿No tienes una cuenta?{' '}
          <a href="#" style={styles.registerLink}>
            Regístrate
          </a>
        </div>
      </div>
    </div>
  );
}
