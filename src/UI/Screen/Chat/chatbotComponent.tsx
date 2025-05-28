import { useEffect, useState, useRef } from "react";
import { CommonButton } from "../../Components";
import "../../../Assets/Styles/UI/Chat/chatbot.css";
import axios from "axios";

const esperar = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

interface Mensaje {
  from: "bot" | "user";
  text: string;
  isTyping?: boolean;
}

const ChatbotComponent = () => {
  const [messages, setMessages] = useState<Mensaje[]>([]);
  const [botTyping, setBotTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputEnabled, setInputEnabled] = useState(false);
  const [sintomaActual, setSintomaActual] = useState<string>(""); // Lo puedes usar si backend devuelve algo para identificar la pregunta
  const [respuestas, setRespuestas] = useState<Record<string, boolean>>({});
  const yaMostroMensajes = useRef(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll automático al final cuando cambian los mensajes
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Función para "escribir" mensaje del bot simulando tipeo
  const escribirMensaje = async (texto: string, velocidad: number = 30): Promise<void> => {
    return new Promise(resolve => {
      setMessages(prev => [...prev, { from: "bot", text: "", isTyping: true }]);
      let i = 0;

      const interval = setInterval(() => {
        if (i <= texto.length) {
          setMessages(prev =>
            prev.map((msg, idx) =>
              idx === prev.length - 1 && msg.isTyping
                ? { ...msg, text: texto.substring(0, i) }
                : msg
            )
          );
          i++;
        } else {
          clearInterval(interval);
          setMessages(prev =>
            prev.map((msg, idx) =>
              idx === prev.length - 1 && msg.isTyping ? { ...msg, isTyping: false } : msg
            )
          );
          resolve();
        }
      }, velocidad);
    });
  };

  // Función para añadir mensaje bot con un delay y mostrar el typing (opcional)
  const añadirMensajeBot = async (texto: string, mostrarTyping: boolean = true) => {
    if (mostrarTyping) {
      setBotTyping(true);
      await esperar(800);
      setBotTyping(false);
    }

    await escribirMensaje(texto);
  };

  // Consulta al backend pasando respuestas acumuladas
  const preguntas = async (respuestasEnviadas: Record<string, boolean>) => {
    try {
      const ruta = localStorage.getItem("ruta") || "";
      const response = await axios.post(`http://localhost:8000/diagnostico/${ruta}`, respuestasEnviadas);
      return response.data;
    } catch (error) {
      console.error("Error al consultar el diagnóstico:", error);
      return { error: true };
    }
  };

  // Iniciar conversación solo una vez con el primer síntoma si existe
  useEffect(() => {
    const sintoma = localStorage.getItem("primer_sintoma");

    const iniciarChat = async () => {
      if (sintoma && !yaMostroMensajes.current) {
        yaMostroMensajes.current = true;

        await añadirMensajeBot("Continuamos tu consulta, según tu anterior respuesta.");
        await esperar(500);
        await añadirMensajeBot(`Tu primer síntoma es: ${sintoma}`);
        await esperar(500);

        // Primera consulta sin respuestas para obtener primera pregunta del backend
        const resultado = await preguntas({});
        if (resultado && !resultado.error) {
          // Backend devuelve: { respuesta: "¿Sientes dolor en el pecho? (yes/no)" }
          if (typeof resultado.respuesta === "string") {
            await añadirMensajeBot(resultado.respuesta);
            setSintomaActual(resultado.respuesta); // Guardamos la pregunta para referencia
            setInputEnabled(true);
          } else if (resultado.respuesta?.mensaje) {
            await añadirMensajeBot(resultado.respuesta.mensaje);
            setSintomaActual(resultado.respuesta.sintoma || "");
            setInputEnabled(true);
          } else {
            await añadirMensajeBot("No hay más preguntas.");
            setInputEnabled(false);
          }
        } else {
          await añadirMensajeBot("No fue posible iniciar el diagnóstico.");
          setInputEnabled(false);
        }
      }
    };

    iniciarChat();
  }, []);

  // Control de input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Validación y envío de respuesta del usuario
  const handleEnviar = async () => {
    let respuestaTexto = inputValue.trim().toLowerCase();

    // Validar solo respuestas 'si', 'no', 'yes', 'no'
    if (
      respuestaTexto !== "si" &&
      respuestaTexto !== "no" &&
      respuestaTexto !== "yes"
    ) {
      alert("Por favor, responde únicamente con 'Si', 'No' o 'Yes'.");
      return;
    }

    // Normalizar yes -> si
    if (respuestaTexto === "yes") {
      respuestaTexto = "si";
    }

    // Mostrar respuesta del usuario en el chat
    setMessages(prev => [...prev, { from: "user", text: respuestaTexto }]);

    // Actualizar respuestas acumuladas con la pregunta actual como clave
    const valorBooleano = respuestaTexto === "si";
    const nuevasRespuestas = { ...respuestas, [sintomaActual]: valorBooleano };
    setRespuestas(nuevasRespuestas);

    // Limpiar input y deshabilitar para evitar múltiples envíos
    setInputValue("");
    setInputEnabled(false);

    // Mostrar typing bot mientras procesa
    setBotTyping(true);
    await esperar(1000);

    try {
      // Enviar respuestas acumuladas al backend
      const resultado = await preguntas(nuevasRespuestas);
      setBotTyping(false);

      if (resultado && !resultado.error) {
        // Backend puede devolver:
        // 1) { respuesta: "Pregunta siguiente..." }
        // 2) { resultado: "Diagnóstico final" }
        // 3) { diagnostico: "Diagnóstico final" }
        // 4) { respuesta: { mensaje: "...", sintoma: "..." } }

        if (typeof resultado.respuesta === "string") {
          await escribirMensaje(resultado.respuesta);
          setSintomaActual(resultado.respuesta); // Guardar nueva pregunta
          setInputEnabled(true);
        } else if (resultado.respuesta?.mensaje) {
          await escribirMensaje(resultado.respuesta.mensaje);
          setSintomaActual(resultado.respuesta.sintoma || "");
          setInputEnabled(true);
        } else if (resultado.resultado || resultado.diagnostico) {
          await escribirMensaje(resultado.resultado || resultado.diagnostico);
          setInputEnabled(false);
        } else {
          await escribirMensaje("Consulta completada.");
          setInputEnabled(false);
        }
      } else {
        throw new Error("Error en el diagnóstico.");
      }
    } catch (error) {
      setBotTyping(false);
      console.error("Error al procesar la respuesta:", error);
      await escribirMensaje("Ha ocurrido un error. Intenta nuevamente.");
      setInputEnabled(true);
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
              {msg.isTyping && <span className="typing-cursor">|</span>}
            </div>
          ))}

          {botTyping && (
            <div className="message bot-message typing-indicator">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <div className="chatbot-input">
          <input
            type="text"
            className="chat-input-field"
            placeholder="Responde 'Si' o 'No'"
            disabled={!inputEnabled}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "Enter" && inputEnabled) handleEnviar();
            }}
            autoFocus={inputEnabled}
          />
          <CommonButton title="Enviar" onClick={handleEnviar} disabled={!inputEnabled} />
        </div>
      </div>
    </div>
  );
};

export default ChatbotComponent;
