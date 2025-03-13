import React from 'react'
import "../../assets/Buttons.css"
const Buttons = ({ selectedButton }) => {
  const allButtons = {
    save: <button className="btn btn-success">Save</button>,
    delete: <button className="btn btn-danger">Delete</button>,
    edit: <button className="btn btn-warning">Edit</button>,
  };

  return allButtons[selectedButton] || null;
};

export default Buttons;