import { TextSemiBoldComponent, TitleComponent } from "../../Texts";
import "../../../../Assets/Styles/Components/Form/FormComponent/formComponent.css";
import { FormCardComponent } from "../FormCard";
import { useEffect, useState } from "react";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { decisionTree, DecisionNode } from "./decisionTree";

// Representa una entrada del historial
interface HistoryEntry {
  question: string;
  answer: string;
}

const FormComponent = () => {
  const [currentNode, setCurrentNode] = useState<DecisionNode | null>(decisionTree);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const handleSelection = (event: SelectChangeEvent) => {
    const selectedOption = event.target.value;

    if (!currentNode || !currentNode.options[selectedOption]) return;

    const next = currentNode.options[selectedOption];

    // Guardar en historial
    const newEntry: HistoryEntry = {
      question: currentNode.question,
      answer: selectedOption,
    };

    setHistory((prev) => [...prev, newEntry]);

    // Si llegamos a un resultado (string), lo guardamos
    if (typeof next === "string") {
      setResult(next);
      setCurrentNode(null);
    } else {
      // Si es otra pregunta, la seguimos
      setCurrentNode(next);
    }
  };

  const handleRestart = () => {
    setHistory([]);
    setResult(null);
    setCurrentNode(decisionTree);
  };

  return (
    <section className="FormSection">
      <div className="TitleContainer">
        <TitleComponent text="Añadir información" />
        <TextSemiBoldComponent
          weight="200"
          text="Completa los datos para el módulo de observabilidad. 
          Las preguntas se irán generando automáticamente."
        />
      </div>

      <FormCardComponent name="arbol-decision" id="arbol-decision">
        <div className="InputContainer">
          <TextSemiBoldComponent
            text="Diagnóstico progresivo"
            size={16}
            weight="300"
          />

          {/* Historial de preguntas y respuestas */}
          {history.map((entry, index) => (
            <div key={index} style={{ marginBottom: "15px" }}>
              <strong>{entry.question}</strong>
              <div style={{ marginLeft: "10px", color: "#555" }}>
                Respuesta: {entry.answer}
              </div>
            </div>
          ))}

          {/* Pregunta actual si no se ha llegado al resultado final */}
          {currentNode && (
            <div style={{ marginTop: "20px" }}>
              <TextSemiBoldComponent
                text={currentNode.question}
                size={15}
                weight="400"
              />
              <Select
                variant="standard"
                onChange={handleSelection}
                defaultValue=""
                style={{
                  paddingLeft: 20,
                  borderBottom: "2px solid var(--primary-color)",
                  borderRadius: "10px",
                  marginTop: "10px",
                }}
                sx={{
                  "&:before": { borderBottom: "none" },
                  "&:after": { borderBottom: "none" },
                  "&:hover:not(.Mui-disabled):before": { borderBottom: "none" },
                }}
              >
                {Object.keys(currentNode.options).map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </div>
          )}

          {/* Resultado final */}
          {result && (
            <div style={{ marginTop: "30px" }}>
              <TextSemiBoldComponent
                text="Resultado:"
                size={15}
                weight="600"
              />
              <div style={{ color: "#c62828", marginTop: "8px", fontSize: "16px" }}>
                {result}
              </div>

              <button
                onClick={handleRestart}
                style={{
                  marginTop: "20px",
                  padding: "8px 16px",
                  backgroundColor: "#1976d2",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Reiniciar diagnóstico
              </button>
            </div>
          )}
        </div>
      </FormCardComponent>
    </section>
  );
};

export default FormComponent;
