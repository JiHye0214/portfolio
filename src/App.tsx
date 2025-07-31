import React, { useEffect, useState } from "react";
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
    const [bgImg, setBgImg] = useState("");
    const [bgColor, setBgColor] = useState("#fff");
    const [textColor, setTextColor] = useState("");

    useEffect(() => {
        if (location.pathname === "/about") {
            setBgImg("url('/assets/bg.jpg')");
            setBgColor("#000")
            setTextColor("#fff");
        } else {
            setBgImg("");
            setBgColor("#fff")
            setTextColor("");
        }
    }, [location.pathname]);

    return (
        <div style={{ backgroundImage: bgImg, backgroundColor: bgColor, color: textColor, transition: "background-color 0.3s ease", minHeight: "100vh" }} className="bg-cover bg-center">
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
