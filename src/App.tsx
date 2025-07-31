import React from "react";
import "./App.css";
import { useLocation, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./layout/Layout";

function App() {
    const location = useLocation();

    return (
        <div className={`min-h-screen ${location.pathname === "/about" ? "bg-black text-white" : "bg-white"}`}>
            <Header />
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Layout>
            <Footer />
        </div>
    );
}

export default App;
