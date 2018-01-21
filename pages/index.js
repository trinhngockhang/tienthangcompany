import React from 'react';
import PageWrapper from '../layouts';
import { addProduct } from '../actions';
import Header from '../components/Header';
import HomeBody from '../components/Home/HomeBody';
import Footer from '../components/Footer';
import ImageContent from '../components/Home/ImageContent';
import Content from '../components/Home/Content';
import Cbtm from '../components/Home/Cbtm';

class Home extends React.Component { 
    render() {
        return (
            <PageWrapper>
                <HomeBody/>
                <Content/>
                <ImageContent/>
                <Cbtm/>
            </PageWrapper>
        )
    }
}

export default Home;