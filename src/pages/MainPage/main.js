import React from 'react';
import './style.scss';
import NewsBlock from '../../components/NewsBlock';
import CatalogBlock from '../../components/CatalogBlock';
import HotProducts from '../../components/HotProducts';
import DiscountBlock from '../../components/DiscountBlock';
import ReviewsBlock from '../../components/ReviewsBlock';

function Main(){
    return(
        <div>
            <NewsBlock/>
            <CatalogBlock/>
            <HotProducts/>
            <DiscountBlock/>
            <ReviewsBlock/>
        </div>
    )
}

export default Main;
