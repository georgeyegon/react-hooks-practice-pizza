import React, { useState, useEffect } from "react";

function PizzaForm({ onSubmit, pizzaToEdit }) {
  const [topping, setTopping] = useState("");
  const [size, setSize] = useState("Small");
  const [vegetarian, setVegetarian] = useState("Vegetarian");

  // Populate form with pizza data when editing
  useEffect(() => {
    if (pizzaToEdit) {
      setTopping(pizzaToEdit.topping);
      setSize(pizzaToEdit.size);
      setVegetarian(pizzaToEdit.vegetarian);
    } else {
      // Clear form when not editing
      setTopping("");
      setSize("Small");
      setVegetarian("Vegetarian");
    }
  }, [pizzaToEdit]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const pizza = { topping, size, vegetarian };
    onSubmit(pizza);

    // Clear form after submit
    setTopping("");
    setSize("Small");
    setVegetarian("Vegetarian");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={topping}
            onChange={(e) => setTopping(e.target.value)}
          />
        </div>
        <div className="col">
          <select
            className="form-control"
            name="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={vegetarian === "Vegetarian"}
              onChange={() => setVegetarian("Vegetarian")}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={vegetarian === "Not Vegetarian"}
              onChange={() => setVegetarian("Not Vegetarian")}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            {pizzaToEdit ? "Update Pizza" : "Submit"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
