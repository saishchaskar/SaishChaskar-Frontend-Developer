import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Navbars from "./components/Navbars";
import Carousels from "./components/carousel";
import SearchBar from "./components/SearchBar";
import DataLayout from "./components/DataLayout";
import Footer from "./components/Footer";

export const CapsuleContext = createContext();

function App() {
  const [capsuleData, setCapsuleData] = useState([]);
  const value = { capsuleData, setCapsuleData };

  const getData = async () => {
    try {
      const customToken = '12345678w';
      const headers = { 'Authorization': customToken };
      const { data } = await axios.post("https://funny-pink-elk.cyclic.app/auth", {}, { headers });
      setCapsuleData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  useEffect(() => {
    getData();
  }, []);


  return (
    <div style={{ backgroundColor: "Transparent" }}>
      <CapsuleContext.Provider value={value}>
        <Navbars />
        <Carousels />
        <SearchBar />
        <DataLayout />
        <Footer />
      </CapsuleContext.Provider>
    </div>
  );
}

export default App;

