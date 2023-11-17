import React from 'react'
import Header from "./Header"
import SearchBar from "./SearchBar"
import Employeelist from './Employeelist'
import data from "../models/data";


function Homepage() {
  return (
    <div>
    <Header text={"Employee Directory"}/>
    <searchBar />
    <Employeelist />
    </div>
  )
}

export default Homepage