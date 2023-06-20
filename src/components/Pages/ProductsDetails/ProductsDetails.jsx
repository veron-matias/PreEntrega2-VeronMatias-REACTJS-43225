import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CardProduct from "../../Cards/CardProduct/CardProduct";
import Typography from '@mui/material/Typography';
import "./ProductDetails.css";

const ProductsDetails = () => {
const [user, setUser] = useState({});
let { id } = useParams();
    useEffect(() => {
    axios(
        `https://my-json-server.typicode.com/veron-matias/ApiArcadeTP/Arcade/${id}`
    ).then((res) => setUser(res.data));
    }, [id]);
return (
    <div>
        <h1 className="HeroH1"> Detalles del Producto:</h1>
            <div className="ProductsSectionDetails divProducto" >
            <CardProduct props={user}  />
            <Typography variant="body2" color="white">
                
                <div className="descripcionProducto">
                <p> <h2>DESCRIPCION: </h2> {user.description}</p>
                </div>
            </Typography>
            </div>
    </div>
    );
};
export default ProductsDetails;