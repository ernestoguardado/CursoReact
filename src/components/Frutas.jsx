export const Frutas = (props) => {
  return (
    <>
      <ul>
        {props.frutasApp.map((fruta, index) => (
          <li key={index}>
            {index + 1}-{fruta}
          </li>
        ))}
      </ul>
      <p>Lorem ipsum dolor sit amet</p>
    </>
  );
};

export default Frutas;
