import {
  CommonText,
  CommonButton,
} from "../../Components";
import "../../../Assets/Styles/UI/Chat/chatbot.css";

const ChatbotComponent = () => {
  return (
    <>
      <div className="chatbot-container">
        <div className="chatbot-window">
          <div className="chatbot-header">Diagnóstico Preliminar</div>

          <div className="chatbot-messages">
            <div className="message bot-message">
              Continuamos tu consulta, según tu anterior respuesta.
            </div>
            <div className="message bot-message">
              Tu primer síntoma es:
            </div>
            <div className="message user-message">
              Dolor de cabeza
            </div>
            <div className="message bot-message">
              ¿Tienes tos?
            </div>
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              className="chat-input-field"
              placeholder="Escribe tu mensaje..."
              disabled
            />
            <CommonButton title="Enviar" url="#" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatbotComponent;
