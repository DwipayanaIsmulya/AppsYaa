import data from "../../data/data.json";
import PropType from "prop-types";
import { useNavigate } from "react-router-dom";

const InputKhodam = ({ name, setName, setKhodam }) => {
  const navigate = useNavigate();

  const handleButton = () => {
    // e.preventDefault();
    let len = data.length + 1; // panjang array
    let rand = 1 + Math.floor(Math.random() * (len - 1)); // random min - max
    setKhodam(data[rand].name);
    navigate("/result");
    // setName(e.target.value);
  };
  return (
    <>
      {/* <p>{khodam}</p> */}
      <form onSubmit={handleButton}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Cek</button>
      </form>
    </>
  );
};

InputKhodam.propTypes = {
  name: PropType.any,
  khodam: PropType.any,
  setName: PropType.any,
  setKhodam: PropType.any,
};

export default InputKhodam;
