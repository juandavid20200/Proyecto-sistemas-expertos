import { ReactNode, useState } from "react";
import { TextSemiBoldComponent } from "../../Texts";
import {
  InputImageComponent,
  InputLongTextComponent,
  InputTextComponent,
} from "../Inputs";
import { TransferList } from "../FormComponent";
import AllIconsSelectComponent from "../../ImagesContainer/IconComponent/AllIconsSelect/allIconsSelectComponent";
import { PostInfo } from "../../../../interfaces/PostInfo";
import PostInfoService from "../../../../service/info/PostInfoService";
import { useNavigate } from "react-router-dom";
import { CommonButton } from "../../Buttons";
import axios from "axios";
import { SuccessModal } from "../../Modal";


type Props = {
  name: string;
  children: ReactNode;
  id: string;
};

const SintomaMap: Record<string, string[]> = {
  "Dificultad para respirar": ["dificultad_respirar"],
  "Fiebre": ["fiebre"],
  "Dolor de pecho": ["dolor_pecho"],
  "Dolor abdominal": ["dolor_abdominal"],
  "Mareo debilidad": ["mareo_debilidad"],
  "Nauseas o Vomito": ["nausea_vomito"],
  "Perdida de Concienca": ["perdida_conciencia"],
  "Brote en la piel": ["brote_piel"],
  "Accidente o Golpe": ["accidente_golpe"]
};

// Transforma los síntomas en "algo_algo"
function transformarSintomas(sintomasSeleccionados: string[]) {
  const resultado: Record<string, boolean> = {};

  sintomasSeleccionados.forEach((sintoma) => {
    const claves = SintomaMap[sintoma];
    if (claves) {
      claves.forEach((clave) => {
        resultado[clave] = true;
      });
    }
  });

  return resultado;
}

const FormCardComponent = ({ children, name, id }: Props) => {
  const navigate = useNavigate();
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false); // Estado para el modal

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("access_token");

      if (!token) {
        throw new Error("No hay token de autenticación");
      }

      const claves = transformarSintomas(selectedSymptoms);
      const razones = Object.keys(claves).filter((clave) => claves[clave]).join(", ");
      const dataToSend = { razon: razones };  

      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      console.log("Enviando datos:", dataToSend);
      console.log("Con headers:", headers);

      const response = await axios.post("http://localhost:8000/consultas", dataToSend, { headers });

      console.log("Respuesta del backend:", response.data);

      setShowModal(true); // Mostrar modal de éxito
    } catch (error) {
      console.error("Error al enviar la petición:", error);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="FormCard">
        <div className="CardText">
          <TextSemiBoldComponent
            text="Información de la consulta"
            weight="700"
            size={24}
          />
        </div>

        {children}

        <div style={{ marginBottom: 20 }}>
          <TransferList onChange={setSelectedSymptoms} />
        </div>

        <CommonButton title="Enviar" onClick={handleSubmit} />
      </div>

      {/* Modal de éxito */}
      <SuccessModal
        isOpen={showModal}
        onClose={handleModalClose}
        autoCloseTime={3000}
      />
    </>
  );
};

export default FormCardComponent;
