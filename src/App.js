import react from "react";
import "./App.css";
import MarsBot from "./components/MarsBot/MarsBot";
import MarsBotContent from "./components/MarsBotContent/MarsBotContent";
import Navbar from "./components/navbar/Navbar";
import Cards from "./components/ListCard/Cards";
import MainBlock from "./components/MainBlock/MainBlock";
function App() {
  return (
    <div className="App h-screen max-h-screen overflow-hidden">
      <header>
        <Navbar />
      </header>

        <div className="w-[5%] h-[100vh] bg-[#17233B] flex justify-center sidebar mt-[-20px]">
          <div className="bg-[#E3391B] max-h-[73px] mt-5 flex justify-center items-center w-full">
            <img src="./icons/dashboard-1-svgrepo-com 1 (1).png" alt="" />
          </div>
        </div>
      
      <main className="flex mt-[84px]">
        <div className="Mars_bot p-10 w-3/5 max-h-[278px]">
          <MarsBot />
          <Cards />
          <MainBlock />
        </div>

        <div className="MarsBotContent">
          <MarsBotContent />
        </div>
         
      </main>
    </div>
  );
}

export default App;
