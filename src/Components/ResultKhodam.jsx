import PropType from "prop-types";
const ResultKhodam = ({ name, khodam }) => {
  return (
    <>
      <h3>Khodam {name} hari ini adalah...</h3>
      <h1>{khodam}</h1>
    </>
  );
};

ResultKhodam.propTypes = {
  name: PropType.any,
  khodam: PropType.any,
};

export default ResultKhodam;
