import React from 'react';

export default class HomeBody extends React.Component {
    render() {
        return (
            <div className="banner">
            <div className="matter-banner">
                <div className="slider">
                    <div className="callbacks_container">
                        <ul className="rslides" id="slider">
                            <li id="callbacks1_s0">
                                <img src="/static/images/homeslide-1.jpg" alt="" />
                                <div className="tes animated wow'fadeInUp' animated" data-wow-delay=".5s" style={{ visibility: 'visible', animationDelay: 0.5, animationName: 'fadeInUp' }} >
                                    {/* <h2>Gạch Ốp</h2>
                                   <h2> Thiết Bị vệ Sinh </h2>
                                   <h2>  Nhà Bếp</h2>
                                <h3>Cam Kết Chất Lượng</h3>
                                <h4>Giá Cả Phù Hợp</h4>
                                <p>Tiến Thăng</p> */}
                                </div>
                            </li>
                            <li id="callbacks1_s1">
                                <img src="/static/images/3.jpg" alt="" />
                                <div className="tes animated wow'fadeInUp' animated" data-wow-delay=".5s" style={{ visibility: 'visible', animationDelay: 0.5, animationName: 'fadeInUp' }}  >
                                    <h2>MEN & WOMEN</h2>
                                    <h3>Trousers & Chinos</h3>
                                    <h4>UPTO 50%</h4>
                                    <p>OFFER</p>
                                </div>
                            </li>
                            <li id="callbacks1_s2">
                                <img src="/static/images/2.jpg" alt="" />
                                <div className="tes animated wow'fadeInUp' animated" data-wow-delay=".5s" style={{ visibility: 'visible', animationDelay: 0.5, animationName: 'fadeInUp' }}  >
                                    <h2>MEN & WOMEN</h2>
                                    <h3>Trousers & Chinos</h3>
                                    <h4>UPTO 50%</h4>
                                    <p>OFFER</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div >
            <div className="clearfix"> </div>
        </div >
        )
    }
}
