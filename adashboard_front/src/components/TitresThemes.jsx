import { ListeSkills } from "./ListeSkills";
import { BtnRemove } from "./BtnRemove";
export const TitresThemes = ({ value, removeThemes }) => {
  return (
    <div>
      {value.map((elem) => {
        return (
          <div key={elem.id}>
            <h2>
              {elem.name}
              <BtnRemove removeThemes={removeThemes} id={elem.id} />
            </h2>
            <ListeSkills elem={elem} />
          </div>
        );
      })}
    </div>
  );
};
