import React, { useEffect, useMemo, useState } from 'react'; 

import { useAppDispatch, useAppSelector } from '../../../hooks/redux'; 

import { getProducts } from '../../../store/products/products.thunks';
import { selectProductsData, selectProductsError, selectProductsLoading } from '../../../store/products/products.selectors';
import RatingChart from '../../Common/RatingChart/RatingChart';
import Spinner from '../../Common/Spinner/Spinner';

import style from './_home.module.scss';

const Home = () => { 
    const [filter, setFilter] = useState('smartphones');
    const dispatch = useAppDispatch();
    const products = useAppSelector(selectProductsData);
    const isLoading = useAppSelector(selectProductsLoading);
    const error = useAppSelector(selectProductsError);

    const selectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(event.target.value); 
    };

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    const filteredProducts = useMemo(() => {
        return products.filter(product => (product.category === filter))
    }, [filter, products]); 

    return (
        <main>
            <select value={filter} onChange={selectHandler}>
                <option value="smartphones">Smartphones</option>
                <option value="laptops">Laptops</option> 
            </select>
            
            {isLoading? 
            <Spinner/>
            :!error && <RatingChart data={filteredProducts} filter={filter}/>
            }

            {!!error &&  
            <p className={style.error}> {error} </p>}
        </main>
    )
}

export default Home