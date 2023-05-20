import { useEffect, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import CybugCard from "./CybugCard";

function CarList(){
    const [selectedCategory, setSelectedCategory] = useState('ALL');
    const [cyborgs, setCyborgs] = useState([]);


    useEffect(() => {
        fetch('/cyborgs')
          .then((res) => res.json())
          .then((dataArrays) => {
            setCyborgs(dataArrays);
          });
      }, []);

      const categories = cyborgs
      .map((cyborg) => cyborg.category)
      .filter(
        (category, index, categories) => categories.indexOf(category) === index)
      .sort();

      const displayedCyborg = cyborgs.filter(
        (cyborg) => selectedCategory === "All" || cyborg.category === selectedCategory
      );
    return(
        <div ></div>
    )
}