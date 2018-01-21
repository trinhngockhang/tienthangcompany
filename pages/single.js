import React from 'react';
import PageWrapper from '../layouts';
import { addProduct } from '../actions';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BreadCrumbs from '../components/BreadCrumbs';
import SingleContent from '../components/Single/SingleContent';

class Single extends React.Component { 
    render() {
        return (
            <PageWrapper>
                <BreadCrumbs/>
                <SingleContent/>
            </PageWrapper>
        )
    }
}

export default Single;