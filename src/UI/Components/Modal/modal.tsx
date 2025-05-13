import { useState, useEffect } from 'react';
interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    autoCloseTime?: number;
  }

export default function SuccessModal({ isOpen, onClose}: SuccessModalProps) {
  // Estado para la animación de entrada/salida
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      
      // Auto-cerrar después del tiempo especificado
    }
  }, [isOpen]);
  
  // Función para manejar el cierre con animación
  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300); // Tiempo para que termine la animación
  };
  
  if (!isOpen) return null;
  
  const modalContainerStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
    opacity: isVisible ? 1 : 0,
    transition: 'opacity 0.3s ease'
  };
  
  const modalStyle: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '24px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
    transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
    transition: 'transform 0.3s ease',
    position: 'relative'
  };
  const iconContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '16px'
  };
  
  const iconStyle: React.CSSProperties = {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    backgroundColor: '#4ade80',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  };
  
  const titleStyle: React.CSSProperties = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#1f2937',
    margin: '8px 0'
  };
  
  const messageStyle: React.CSSProperties = {
    fontSize: '16px',
    color: '#6b7280',
    margin: '8px 0 16px'
  };
  
  const buttonStyle: React.CSSProperties = {
    padding: '10px 20px',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  };
  
  const closeButtonStyle: React.CSSProperties = {
    position: 'absolute',
    top: '12px',
    right: '12px',
    background: 'none',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
    color: '#9ca3af'
  };
  
  // SVG para el ícono de éxito (checkmark)
  const CheckmarkIcon = () => (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
  
  // SVG para el botón de cerrar
  const CloseIcon = () => (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );

  return (
    <div style={modalContainerStyle} onClick={handleClose}>
      <div 
        style={modalStyle} 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          style={closeButtonStyle} 
          onClick={handleClose} 
          aria-label="Cerrar"
        >
          <CloseIcon />
        </button>
        
        <div style={iconContainerStyle}>
          <div style={iconStyle}>
            <CheckmarkIcon />
          </div>
        </div>
        
        <h2 style={titleStyle}>¡Éxito!</h2>
        <p style={messageStyle}>Consulta enviada exitosamente</p>
        
        <button 
          style={buttonStyle} 
          onClick={handleClose}
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}

// Ejemplo de uso del componente:
function App() {
  const [showModal, setShowModal] = useState(false);
  
  const openModal = () => {
    setShowModal(true);
  };
  
  const closeModal = () => {
    setShowModal(false);
  };
  
  return (
    <div style={{ padding: '20px' }}>
      <button 
        onClick={openModal}
        style={{
          padding: '10px 20px',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        Enviar consulta
      </button>
      
      <SuccessModal 
        isOpen={showModal} 
        onClose={closeModal} 
        autoCloseTime={3000} // Se cerrará automáticamente después de 3 segundos
      />
    </div>
  );
}