import React from "react";

function Pizza({ pizza, onEdit }) {
  return (
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian === "Vegetarian" ? "Yes" : "No"}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={onEdit}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
