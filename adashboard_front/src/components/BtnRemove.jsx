export const BtnRemove = ({ removeThemes, id }) => {
  return (
    <>
      <button onClick={() => removeThemes(id)}>remove</button>
    </>
  );
};
