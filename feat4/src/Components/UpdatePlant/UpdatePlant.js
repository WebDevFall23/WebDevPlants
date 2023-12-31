import React from "react";
import UpdatePlantList from "./UpdatePlantList";
import { Link } from "react-router-dom";
import "./UpdatePlantDesign.css"


//page for updating the plant info
const UpdatePlant = () => {
  return (
    <div>
      <UpdatePlantList />
      <br />
      <Link to="/profile">
        <button className="back-button">Back</button>
      </Link>
    </div>
  );
};

export default UpdatePlant;