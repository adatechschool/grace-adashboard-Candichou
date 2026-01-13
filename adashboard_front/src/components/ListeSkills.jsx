import { TitresThemes } from "./TitresThemes";

export const ListeSkills = ({ elem }) => {
  return (
    <div>
      {elem.skills.map((e) => {
        return (
          <div>
            <p>{e.label}</p>
          </div>
        );
      })}
    </div>
  );
};
