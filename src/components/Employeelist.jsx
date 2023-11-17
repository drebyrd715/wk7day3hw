import React from 'react'
import Employeelistitem from "./Employeelistitem"
import data from "../models/data";

function Employeelist() {
  return (
    <div>
      <div>
      <Employeelistitem />
      </div>
      <div>
       <div>
      <img src="" />
      </div>
      <div>
        <h4>{data[0].name}</h4>
        <h4>{data[0].title}</h4>
      </div>
      <div>
      <img src="" />
      </div>
      <div>
        <h4>{data[1].name}</h4>
        <h4>{data[1].title}</h4>
      </div>
      <div>
      <img src="" />
      </div>
      <div>
        <h4>{data[2].name}</h4>
        <h4>{data[2].title}</h4>
      </div>
      <div>
      <img src="" />
      </div>
      <div>
        <h4>{data[3].name}</h4>
        <h4>{data[3].title}</h4>
      </div>
      <div>
      <img src="" />
      </div>
      <div>
        <h4>{data[4].name}</h4>
        <h4>{data[4].title}</h4>
      </div>
      <div>
      <img src="" />
      </div>
      <div>
        <h4>{data[5].name}</h4>
        <h4>{data[5].title}</h4>
      </div>
    </div>
    </div>
  )
}

export default Employeelist