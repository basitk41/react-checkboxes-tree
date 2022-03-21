const CheckBox = ({ x, z, id }) => {
  return (
    <div style={{ marginLeft: z ? "20px" : "" }} id={x.id}>
      <input
        type="checkbox"
        onChange={(e) => {
          console.log(e.target.checked, x.id, id);
        }}
      />
      <label style={{ marginLeft: "5px" }}>{x.label}</label>
      {x.subClass &&
        x.subClass.map((y) => <CheckBox id={x.id} x={y} z={true} />)}
    </div>
  );
};
export default CheckBox;
