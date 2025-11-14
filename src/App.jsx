import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Profil from "./components/Profil";


export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white-500 text-white">


      <Header />

      <main className="flex-1 p-10">
        <Home />
      </main>

      <Footer />


    </div>
  );
}
