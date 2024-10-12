import React, { useState, useEffect, useCallback, useMemo } from "react";
import "./productos.css";
import jsonData from "./data.json";
import { Link, useParams } from 'react-router-dom';

export function Filter() {
    const { marca, year } = useParams();
    const [productos, setProductos] = useState([]);

    // Memoriza el valor de prod para evitar que cambie en cada render
    const prod = useMemo(() => jsonData || [], []); // Eliminar jsonData de las dependencias

    // Filtra los productos según las selecciones de marca y año
    const filter = useCallback(() => {
        let filterProducts = [];

        if (year === "Todos") {
            if (marca !== "Todos") {
                filterProducts = prod.filter((i) => i.marca === marca);
            } else {
                filterProducts = prod;
            }
        }

        if (marca === "Todos") {
            if (year !== "Todos") {
                filterProducts = prod.filter((producto) => {
                    const productoYear = Number(year);
                    return producto.year === productoYear;
                });
            }
        }

        if (marca !== "Todos" && year !== "Todos") {
            filterProducts = prod.filter((producto) => {
                const productoYear = Number(year);
                return producto.year === productoYear && producto.marca === marca;
            });
        }

        setProductos(filterProducts);
    }, [marca, year, prod]); // 'prod' ahora es estable debido al useMemo

    // Ejecuta el filtro cuando cambian marca, año o filter
    useEffect(() => {
        filter();
    }, [marca, year, filter]);

    return (
        <>
            <div className="info">
                <h3>{marca} {year}</h3>
            </div>

            <div className="contenedor">
                {productos && productos
                    .map((prod) => (
                        <div key={prod.id}
                            className="card" style={{ width: "14rem" }}>
                            <img src={prod.img[0]} className="card-img-top" alt={`${prod.marca} ${prod.modelo}`} />
                            <div className="card-body">
                                <h5 className="card-title">{prod.marca}</h5>
                                <p className="card-text">{prod.modelo} - {prod.year}</p>
                                <Link to={`/detalles/${prod.id}`}>Ver más</Link>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
}

export default Filter;
