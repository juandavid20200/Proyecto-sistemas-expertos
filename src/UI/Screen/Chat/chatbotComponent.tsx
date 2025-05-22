import { useEffect, useState, useRef } from "react";
import { CommonButton } from "../../Components";
import "../../../Assets/Styles/UI/Chat/chatbot.css";

// Helper para simular delay
const esperar = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const ChatbotComponent = () => {
  const [primerSintoma, setPrimerSintoma] = useState<string>("");
  const [messages, setMessages] = useState<any[]>([]);
  const [botTyping, setBotTyping] = useState(false);
  const [mensajesCargados, setMensajesCargados] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [inputEnabled, setInputEnabled] = useState(false);

  const yaMostroMensajes = useRef(false);

  useEffect(() => {
    const sintoma = localStorage.getItem("primer_sintoma");

    if (sintoma && !mensajesCargados && !yaMostroMensajes.current) {
      yaMostroMensajes.current = true;
      setPrimerSintoma(sintoma);
      setMensajesCargados(true);

      const mostrarMensajes = async () => {
        setBotTyping(true);
        await esperar(1000);
        setBotTyping(false);
        setMessages([
          { from: "bot", text: "Continuamos tu consulta, según tu anterior respuesta." }
        ]);

        setBotTyping(true);
        await esperar(1000);
        setBotTyping(false);
        setMessages(prev => [
          ...prev,
          { from: "bot", text: "Tu primer síntoma es:" }
        ]);

        await esperar(1000);
        setMessages(prev => [
          ...prev,
          { from: "user", text: sintoma }
        ]);

        setBotTyping(true);
        await esperar(1000);
        setBotTyping(false);
        setMessages(prev => [
          ...prev,
          { from: "bot", text: "¿Quieres continuar con la consulta? (Si/No)" }
        ]);
        setInputEnabled(true);
      };

      mostrarMensajes();
    }
  }, [mensajesCargados]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleEnviar = async () => {
    const respuesta = inputValue.trim().toLowerCase();

    if (respuesta !== "si" && respuesta !== "no") {
      alert("Por favor, responde solo 'Si' o 'No'");
      return;
    }

    setMessages(prev => [
      ...prev,
      { from: "user", text: inputValue.trim() }
    ]);

    setInputEnabled(false);
    setInputValue("");

    setBotTyping(true);
    await esperar(1500);
    setBotTyping(false);

    if (respuesta === "si") {
      setMessages(prev => [
        ...prev,
        { from: "bot", text: "Perfecto, continuamos con la siguiente pregunta..." }
      ]);
    } else {
      setMessages(prev => [
        ...prev,
        { from: "bot", text: "Gracias por tu respuesta, la consulta termina aquí." }
      ]);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-window">
        <div className="chatbot-header">Diagnóstico Preliminar</div>

        <div className="chatbot-messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.from === "bot" ? "bot-message" : "user-message"}`}
            >
              {msg.text}
            </div>
          ))}

          {botTyping && (
            <div className="message bot-message typing-indicator">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          )}
        </div>

        <div className="chatbot-input">
          <input
            type="text"
            className="chat-input-field"
            placeholder="Solo se admite 'Si' o 'No'"
            disabled={!inputEnabled}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={e => {
              if (e.key === "Enter" && inputEnabled) {
                handleEnviar();
              }
            }}
          />
          <CommonButton
            title="Enviar"
            onClick={handleEnviar}
            disabled={!inputEnabled}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatbotComponent;
