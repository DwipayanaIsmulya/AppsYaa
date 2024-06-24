import data from '../../data/data.json';
import PropType from 'prop-types';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../Assets/icon.png';

const InputKhodam = ({ name, setName, setKhodam }) => {
  const navigate = useNavigate();

  const handleButton = () => {
    let len = data.length + 1; // panjang array
    let rand = 1 + Math.floor(Math.random() * (len - 1)); // random min - max
    setKhodam(data[rand].name);
    navigate('/result');
  };
  return (
    <div className="absolute inset-0 bg-custom-bg2 size-full z-[1] flex flex-col gap-[50px] items-center justify-center">
      <form
        onSubmit={handleButton}
        className="w-[512px] h-[298px] bg-custom-bg rounded-[15px] border border-black shadow-custom-shadow py-[50px] px-[32px] flex flex-col items-center gap-5 z-20"
      >
        <div className="flex flex-col gap-[14px] items-center">
          <h1 className="text-[24px] font-bold text-black">
            Cek <span className="text-[#FF0000]">Khodam</span>
          </h1>
          <h2 className="text-[14px] font-bold text-white">by: @Muhbarr</h2>
        </div>
        <div className="flex flex-col gap-[15px] w-full">
          <label htmlFor="name" className="text-[24px] font-bold text-white">
            Masukkan Nama
          </label>
          <div className="flex items-center gap-[10px]">
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama disini ..."
              required
              className="rounded-[8px] bg-custom-gray h-[56px] w-[372px] px-[15px] py-[10px] shadow-custom-shadow2 border-none ring-0 focus:ring-0 focus:border-none focus:outline-none text-white/80 font-semibold"
            />
            <button
              type="submit"
              className="w-[100px] h-[56px] rounded-lg bg-custom-gray text-[24px] font-bold text-white/70 shadow-custom-shadow2 hover:text-white active:scale-90 transition-all duration-150"
            >
              Cek
            </button>
          </div>
        </div>
      </form>
      <a
        href="https://saweria.co/muhbar"
        className="w-[372px] h-[68px] rounded-[15px] bg-[#FFA401] gap-[13px] flex items-center justify-center text-[20px] font-bold text-white cursor-pointer active:scale-95 transition-all duration-300"
      >
        <img src={backgroundImage} alt="" className="w-[48px] h-[50px]" />
        Donate
      </a>
      <h1 className="text-white/70 text-[20px] font-bold mt-10  ">
        Made with ❤️ by Yaaa
      </h1>
    </div>
  );
};

InputKhodam.propTypes = {
  name: PropType.any,
  khodam: PropType.any,
  setName: PropType.any,
  setKhodam: PropType.any,
};

export default InputKhodam;
