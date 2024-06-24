import { useState } from 'react';
import './App.css';
import InputKhodam from './Components/InputKhodam';
import ResultKhodam from './Components/ResultKhodam';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import backgroundImage from './Assets/bg-img.png';

function App() {
  const [name, setName] = useState('');
  const [khodam, setKhodam] = useState('');

  return (
    <>
      <BrowserRouter>
        <div
          className="relative flex items-center justify-center h-full min-h-screen bg-top bg-cover font-poppins"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <Routes>
            <Route
              path="/result"
              element={<ResultKhodam name={name} khodam={khodam} />}
            />
            <Route
              path="/"
              element={
                <InputKhodam
                  setName={setName}
                  setKhodam={setKhodam}
                  khodam={khodam}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
