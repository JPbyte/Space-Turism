import React from "react";
import { Routes, Route } from "react-router-dom";

//Pages

import Home from "./home/home";
import Destination from "./destination/destination";
import Crew from "./crew/crew";
import Tech from "./technology/technology";

const Paths = () => {
    return(

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/destination" element={<Destination/>} />
            <Route path="/crew" element={<Crew/>} />
            <Route path="/tech" element={<Tech/>} />
        </Routes>

    )
}

export default Paths;