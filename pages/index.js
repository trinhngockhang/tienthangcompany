import React from 'react';
import PageWrapper from '../layouts';
import { addProduct } from '../actions';
import HomeBody from '../components/HomeBody';


class Home extends React.Component { 
    render() {
        return (
            <PageWrapper>
                <HomeBody/>
            </PageWrapper>
        )
    }
}

export default Home;