'use client';
import { useContext } from 'react';
import Button from '../UI/Button';
import CartContext from '../Context/CreateContext.jsx';
import currencyFormatter from '../util/formating.js';

export default function MealsItems({ meal }) {
  const cartCtx = useContext(CartContext);

  function handleAddItems() {
    cartCtx.addItems(meal);
  }

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:4000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddItems}>Add To Cart</Button>
        </p>
      </article>
    </li>
  );
}
