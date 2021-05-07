import React from "react";
import {BrowserRouter as AppRouter, Route, Link} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import ServiceDetails from "./Components/ServiceDetails"


const Router = () => {
    return (
        <AppRouter>
            <Link>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/services">Services</Link>
            </Link>

            <hr />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/services" component={Services} />
            <Route path="/services/:id" component={ServiceDetails}/> 
        </AppRouter>
    )
}

export default Router;