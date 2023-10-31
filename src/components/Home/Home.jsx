import React, { useEffect } from 'react';
import Poster from '../Poster/Poster';
import Products from '../Products/Products';
import { useDispatch, useSelector } from 'react-redux';
import Categories from '../Categories/Categories';
import { filterByPrice } from '../../features/products/productSlice';

const Home = () => {
    const dispatch = useDispatch();
    const {products: {list, filtered}, categories} = useSelector((state) => state);

    useEffect(() => {
        if(!list.length) return;
        dispatch(filterByPrice(100));
    }, [])

    return (
       <>
        <Poster/>
        <Products products={list} amount={5} title="Trending"/>
        <Categories products={categories.list} amount={5} title="Worth seeing"/>
        <Products products={filtered} amount={5} title="Less then $1000"/>
       </>
    );
};

export default Home;