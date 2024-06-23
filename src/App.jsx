import { useState } from "react";
import "./App.css";
import InputKhodam from "./Components/InputKhodam";
import ResultKhodam from "./Components/ResultKhodam";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [name, setName] = useState("");
  const [khodam, setKhodam] = useState("");
  return (
    <>
      <BrowserRouter>
        <div>
          <h1>Cek Khodam</h1>
        </div>
        <div className="card">
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
        <p>Made with ❤ by Yaa</p>
      </BrowserRouter>
    </>
  );
}

export default App;
