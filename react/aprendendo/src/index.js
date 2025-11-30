import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Nav from "./components/Nav";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";


function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <Header />
            <Nav open={isOpen} onToggle={toggleNav} />
            <Content />
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.querySelector(".corpo"));
root.render(<App />);
