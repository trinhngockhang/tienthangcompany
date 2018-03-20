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
                <div class="fb-customerchat"
                    page_id="1235453253253754"
                    ref="<OPTIONAL_WEBHOOK_PARAM>"
                    theme_color="<HEX_COLOR_CODE>"
                    logged_in_greeting="<GREETING_MESSAGE_FOR_LOGGED_IN_USERS>"
                    logged_out_greeting="<GREETING_MESSAGE_FOR_LOGGED_OUT_USERS>">
                </div>
            </PageWrapper>
        )
    }
}

export default Home;