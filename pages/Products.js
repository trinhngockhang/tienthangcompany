import React from 'react';
import PageWrapper from '../layouts';
import { addProduct } from '../actions';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BreadCrumbs from '../components/BreadCrumbs';
import ProductsContents from '../components/Products/ProductsContent';


class Products extends React.Component { 
    render() {
        return (
            <PageWrapper>
                <BreadCrumbs/>
                <ProductsContents/>
            </PageWrapper>
        )
    }
}

export default Products;