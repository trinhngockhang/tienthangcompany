import React from 'react';
import PageWrapper from '../layouts';
import { addProduct } from '../actions';
import Header from '../components/Header';
import HomeBody from '../components/HomeBody';
import Footer from '../components/Footer';

class Home extends React.Component { 
    render() {
        return (
            <PageWrapper>
                <Header/>
                <HomeBody/>
                <Footer/>
            </PageWrapper>
        )
    }
}

export default Home;