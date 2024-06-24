import PropType from 'prop-types';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../Assets/icon.png';

const ResultKhodam = ({ name, khodam }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="absolute inset-0 bg-custom-bg2 size-full z-[1] flex flex-col gap-6 items-center justify-center">
        <div className="w-[512px] h-fit bg-custom-bg rounded-[15px] border border-black shadow-custom-shadow py-[50px] px-[32px] flex flex-col items-center gap-5 z-20">
          <div className="flex flex-col gap-[14px] items-center">
            <h1 className="text-[24px] font-bold text-black">
              Cek <span className="text-[#FF0000]">Khodam</span>
            </h1>
            <h2 className="text-[14px] font-bold text-white">by: @Muhbarr</h2>
          </div>
          <div className="flex flex-col items-center w-full gap-3">
            <h3 className="text-[24px] font-bold text-white">
              Khodam <span className="text-[#FF0000]">{name}</span> hari ini
              adalah ...
            </h3>
            <h1 className="text-[24px] font-bold text-[#FF4874]">
              🚀 {khodam} ✨
            </h1>
          </div>
        </div>
        <button
          onClick={() => navigate('/')}
          className="w-fit h-[56px] flex items-center justify-center text-[24px] font-bold text-[#FF4874] bg-custom-bg shadow-custom-shadow2 rounded-lg px-[44px] active:scale-90 transition-all duration-150"
        >
          Coba Nama Lain
        </button>
        <h1 className="text-[14px] font-bold text-white">#Safetycanbefun</h1>
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
    </>
  );
};

ResultKhodam.propTypes = {
  name: PropType.any,
  khodam: PropType.any,
};

export default ResultKhodam;
