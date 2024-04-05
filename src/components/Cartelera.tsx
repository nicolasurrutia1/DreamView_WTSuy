import React from "react";
import { useDataContext } from "../context/dataContext";

const Cartelera: React.FC = () => {
    const { data } = useDataContext();

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <section className="grid-wrapper">
            <h2>En Cartelera</h2>
            <div className="grid-container">
                {data.results.map((item) => (
                    <div key={item.id} className="grid-item">
                        <h3>{item.title}</h3>
                        <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} />
                        <button>Dejar reseña</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Cartelera;
