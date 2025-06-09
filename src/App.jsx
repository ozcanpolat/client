import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import UserSyncHandler from "./components/UserSyncHandler";

const App = () => {
  return (
    <div >
      <UserSyncHandler />
      <MenuBar />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />     
      </Routes>
      <Footer />
    </div>
  )
} 

export default App;
