'use client';
import '../app/styles/index.css'; 
import Meals from '../app/meals/Meals.jsx';
import Headers from '../app/meals/Header.jsx';
import { CartContextProvider } from '../app/Context/CreateContext.jsx';

export default function Home() {
  return (
    <CartContextProvider>
      <Headers />
      <Meals />
    </CartContextProvider>
  );
}
