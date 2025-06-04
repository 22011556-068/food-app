import { useEffect, useState } from 'react';
import MealsItems from '../meals/MealsItems.jsx'
export default function HomePage() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchedItems, setSearchedItems] = useState('');
  const [filteredMeals, setFilteredMeals] = useState([]);
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch('http://localhost:4000/meals');
        if (!response.ok) {
          throw new Error('Failed to fetch meals');
        }
        const data = await response.json();
        setMeals(data);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, []);
  useEffect(()=>{
    if(!searchedItems.trim()){
      setFilteredMeals(meals);

    }else{
      const filtered = meals.filter(meal => meal.name.toLowerCase().includes(searchedItems.toLowerCase()));
      setFilteredMeals(filtered);
    }
  },[searchedItems,meals])
  if (loading) return <p>Loading meals...</p>;
  if (error) return <p>Error: {error}</p>;
  
  return (
    <>
   <input type="text"
   className='input'
   placeholder='Search for meal...'
   value={searchedItems}
   onChange={(e)=> setSearchedItems(e.target.value)}

   />

<ul id='meals'>
  {
    filteredMeals.length > 0 ? (
      filteredMeals.map(meal =>  <MealsItems key={meal.id} meal={meal} />)
    ) : (
      <p>No meals found.</p>
    )
  }
   </ul>
 </>
  
  );
}
