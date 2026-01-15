import { useEffect, useState } from "react";
import { TitresThemes } from "./components/TitresThemes";

import "./App.css";

function App() {
  const [value, setValue] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    async function loadData() {
      const res = await fetch("http://localhost:3000/themes");
      const data = await res.json();
      console.log(data);
      setValue(data);
    }
    loadData();
  }, []);
  const removeThemes = async (id) => {
    await fetch(`http://localhost:3000/themes/${id}`, {
      method: "DELETE",
    });
    setValue((event) => event.filter((elem) => elem.id !== id));
  };

  return (
    <>
      <button onClick={() => setOpenModal(true)}> AJOUTER THEMES</button>
      {openModal && (
        <div onClick={() => setOpenModal(false)}>
          <div
            onClick={(e) => {
              if (e.target === e.currentTarget) closeModal();
            }}
          >
            <h2 style={{ color: "red" }}>Créer un thème</h2>

            <input placeholder="Nom du thème" />

            <div>
              <button onClick={() => setOpenModal(false)}>Fermer</button>
              <button>Valider</button>
            </div>
          </div>
        </div>
      )}
      <div>
        <TitresThemes value={value} removeThemes={removeThemes} />
      </div>
    </>
  );
}
export default App;
