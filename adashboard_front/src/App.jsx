import { useEffect, useState } from "react";
import { TitresThemes } from "./components/TitresThemes";

import "./App.css";

function App() {
  const [value, setValue] = useState([]);

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
      <div>
        <TitresThemes value={value} removeThemes={removeThemes} />
      </div>
    </>
  );
}
export default App;
