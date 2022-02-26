import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CategoryPage from "./components/pages/CategoryPage";
import StartPage from "./components/pages/StartPage";
import ChangeMoodPage from "./components/pages/ChangeMoodPage";

function App() {
  const [value, setValue] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<StartPage handleName={(name) => setValue(name)} />}
        />
        <Route path="/category" element={<CategoryPage name={value} />} />
        <Route path="/category/:mood" element={<ChangeMoodPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
