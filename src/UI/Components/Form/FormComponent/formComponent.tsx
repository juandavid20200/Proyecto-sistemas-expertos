import { TextSemiBoldComponent, TitleComponent } from "../../Texts";
import "../../../../Assets/Styles/Components/Form/FormComponent/formComponent.css";
import { FormCardComponent } from "../FormCard";
import { useEffect, useState } from "react";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { decisionTree, DecisionNode } from "./decisionTree";
import SelectAllTransferList from "./transferList";

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
        <TitleComponent text="Consulta" />
        <TextSemiBoldComponent
          weight="200"
          text="Completa los datos para seguir con la consulta.
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
        </div>
        
      </FormCardComponent>
    </section>
  );
};

export default FormComponent;
