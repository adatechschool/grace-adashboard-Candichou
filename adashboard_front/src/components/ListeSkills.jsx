import { useState } from "react";

export const ListeSkills = ({ elem }) => {
  const [valid, setValid] = useState(elem.skills);

  const loadingStatus = async (id, index, status) => {
    await fetch(
      `http://localhost:3000/themes/${id}/skills/${index}/${status}`,
      {
        method: "PUT",
      }
    );

    setValid((prev) =>
      prev.map((skill, idx) =>
        idx === index ? { ...skill, validation: status } : skill
      )
    );
  };
  return (
    <div>
      {valid.map((e, index) => {
        return (
          <div>
            <p key={index}>
              {e.label}{" "}
              <select
                onChange={(event) =>
                  loadingStatus(elem.id, index, event.target.value)
                }
                value={e.validation}
              >
                <option value="PROGRESS">en cours</option>
                <option value="OK">acquis</option>
                <option value="KO">non acquis</option>
              </select>
            </p>
          </div>
        );
      })}
    </div>
  );
};
