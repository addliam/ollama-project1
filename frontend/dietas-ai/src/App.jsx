import { useState } from "react";
import "./App.css";

export default function DietPlanForm() {
  const [formData, setFormData] = useState({
    edad: "",
    sexo: "",
    peso: "",
    talla: "",
    estiloVida: "",
    restricciones: {
      gluten: false,
      lacteos: false,
      vegetariano: false,
    },
    objetivo: "",
    presupuesto: "",
  });

  const [respuesta, setRespuesta] = useState("");

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckbox = (field) => {
    setFormData((prev) => ({
      ...prev,
      restricciones: {
        ...prev.restricciones,
        [field]: !prev.restricciones[field],
      },
    }));
  };

  const handleSubmit = () => {
    console.log("Parámetros seleccionados:", formData);
    setRespuesta(JSON.stringify(formData, null, 2));
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Configuración de dieta</h1>
      <div className="form-grid">
        <label>
          Edad:
          <input
            type="number"
            value={formData.edad}
            onChange={(e) => handleChange("edad", e.target.value)}
          />
        </label>
        <label>
          Sexo:
          <select
            value={formData.sexo}
            onChange={(e) => handleChange("sexo", e.target.value)}
          >
            <option value="">Selecciona sexo</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
          </select>
        </label>
        <label>
          Peso (kg):
          <input
            type="number"
            value={formData.peso}
            onChange={(e) => handleChange("peso", e.target.value)}
          />
        </label>
        <label>
          Talla (cm):
          <input
            type="number"
            value={formData.talla}
            onChange={(e) => handleChange("talla", e.target.value)}
          />
        </label>
        <label className="full-width">
          Estilo de actividad fisica:
          <select
            value={formData.estiloVida}
            onChange={(e) => handleChange("estiloVida", e.target.value)}
          >
            <option value="">Selecciona estilo de vida</option>
            <option value="sedentario">Sedentario</option>
            <option value="moderado">Moderado</option>
            <option value="activo">Activo</option>
            <option value="atleta">Atleta</option>
          </select>
        </label>
        <div className="checkbox-group full-width">
          <span className="restricciones-titulo">Restricciones alimenticias:</span>
          <div className="restricciones-inline">
            {Object.keys(formData.restricciones).map((key) => (
              <label key={key} className="checkbox-inline">
                <input
                  type="checkbox"
                  checked={formData.restricciones[key]}
                  onChange={() => handleCheckbox(key)}
                />
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </label>
            ))}
          </div>
        </div>
        <label>
          Objetivo:
          <select
            value={formData.objetivo}
            onChange={(e) => handleChange("objetivo", e.target.value)}
          >
            <option value="">Selecciona objetivo</option>
            <option value="bajar">Bajar de peso</option>
            <option value="aumentar">Aumentar de peso</option>
            <option value="mantener">Mantener peso</option>
          </select>
        </label>
        <label>
          Presupuesto:
          <select
            value={formData.presupuesto}
            onChange={(e) => handleChange("presupuesto", e.target.value)}
          >
            <option value="">Selecciona presupuesto</option>
            <option value="bajo">Bajo</option>
            <option value="medio">Medio</option>
            <option value="alto">Alto</option>
          </select>
        </label>
      </div>
      <button className="submit-btn" onClick={handleSubmit}>
        Generar mi plan de dieta
      </button>
      {respuesta && <pre className="response-box">{respuesta}</pre>}
    </div>
  );
}
