import React, { useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [pizzaToEdit, setPizzaToEdit] = useState(null); // Track pizza being edited

  // Function to add a new pizza or update an existing pizza
  const handlePizzaSubmit = (pizza) => {
    if (pizzaToEdit) {
      // Update existing pizza
      setPizzas(pizzas.map((p) => (p === pizzaToEdit ? pizza : p)));
      setPizzaToEdit(null); // Reset edit state
    } else {
      // Add new pizza
      setPizzas([...pizzas, pizza]);
    }
  };

  // Set the pizza to be edited
  const handleEditPizza = (pizza) => {
    setPizzaToEdit(pizza);
  };

  return (
    <>
      <Header />
      <PizzaForm onSubmit={handlePizzaSubmit} pizzaToEdit={pizzaToEdit} />
      <PizzaList pizzas={pizzas} onEditPizza={handleEditPizza} />
    </>
  );
}

export default App;
