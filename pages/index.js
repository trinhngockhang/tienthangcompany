import React from 'react';
import PageWrapper from '../hoc';
import style from '../static/css/refresh.css';
import { addProduct } from '../actions';

class Home extends React.Component {
    
    render() {
        return (
            <div>
                <div>Hello, An lan can</div>
                <style dangerouslySetInnerHTML={{ __html: style }} />
            </div>
        )
    }
}

export default PageWrapper(Home);