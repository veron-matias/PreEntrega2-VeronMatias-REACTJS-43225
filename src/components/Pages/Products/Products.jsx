import React, { useEffect, useState } from 'react';
import axios from "axios";
import CardProduct from '../../Cards/CardProduct/CardProduct';
import {Link} from "react-router-dom";
import "./Products.css";
import ItemCount from '../../ItemCount/ItemCount';

const Products = () => {
    const [users, setUsers] = useState([]);
    useEffect( () => {
            axios ('https://my-json-server.typicode.com/veron-matias/ApiArcadeTP/Arcade').then((res)=>
            setUsers(res.data)

            );
    },[]);

return (
<div>
    <h1 className="HeroH1">
        - Listado de Nuestros Productos -
    </h1>
    <div className='ProductsSection'>
            {users.map((user) => {
                return (
                
                <div key={user.id}>
                    <Link to={`../ProductsDetails/${user.id}`}>
                    <CardProduct  props={user}/>
                    </Link>
                    <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada ', quantity)}/>
                </div>
                )
            })}
    </div>
</div>
);
};

export default Products;