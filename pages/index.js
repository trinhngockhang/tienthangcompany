import React from 'react';
import PageWrapper from '../hoc';
import style from '../static/css/style.css';
// import style from '../static/css/animate.min.css';
// import style from '../static/css/popuo-box.css';
import { addProduct } from '../actions';
import Header from '../components/Header';
import HomeBody from '../components/HomeBody';

class Home extends React.Component {
    
    render() {
        return (
            <div>
                <Header/>
                <HomeBody/>
                <style dangerouslySetInnerHTML={{ __html: style }} />
            </div>
        )
    }
}

export default PageWrapper(Home);