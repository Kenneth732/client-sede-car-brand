import { useEffect, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import CyborgCard from "./CyborgCard";

function CarList() {
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
    return (
        <div >
            <Sidebar>
                <CategoryFilter
                    categories={["All", ...categories]}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
            </Sidebar>
            <section>
                {displayedCyborg.map((cyborg) => (
                    <CyborgCard key={cyborg.id} movie={cyborg} />
                ))}
            </section>
        </div>
    )
}