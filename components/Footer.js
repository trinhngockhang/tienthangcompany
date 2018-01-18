import React from 'react';

export default () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="col-md-6 top-footer animated wow fadeInLeft" data-wow-delay=".5s">
                        <h3>Follow Us On</h3>
                        <div className="social-icons">
                            <ul className="social">
                                <li><a href="#"><i></i></a> </li>
                                <li><a href="#"><i className="facebook"></i></a></li>
                                <li><a href="#"><i className="google"></i> </a></li>
                                <li><a href="#"><i className="linked"></i> </a></li>
                            </ul>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <div className="col-md-6 top-footer1 animated wow fadeInRight" data-wow-delay=".5s">
                        <h3>Newsletter</h3>
                        <form action="#" method="post">
                            <input type="text" name="email" value="" />
                            <input type="submit" value="SUBSCRIBE" />
                        </form>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="col-md-3 footer-bottom-cate animated wow fadeInLeft" data-wow-delay=".5s">
                        <h6>Categories</h6>
                        <ul>
                            <li><a href="products.html">Curabitur sapien</a></li>
                            <li><a href="single.html">Dignissim purus</a></li>
                            <li><a href="men.html">Tempus pretium</a></li>
                            <li><a href="products.html">Dignissim neque</a></li>
                            <li><a href="single.html">Ornared id aliquet</a></li>

                        </ul>
                    </div>
                    <div className="col-md-3 footer-bottom-cate animated wow fadeInLeft" data-wow-delay=".5s">
                        <h6>Feature Projects</h6>
                        <ul>
                            <li><a href="products.html">Dignissim purus</a></li>
                            <li><a href="men.html">Curabitur sapien</a></li>
                            <li><a href="single.html">Tempus pretium</a></li>
                            <li><a href="men.html">Dignissim neque</a></li>
                            <li><a href="products.html">Ornared id aliquet</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 footer-bottom-cate animated wow fadeInRight" data-wow-delay=".5s">
                        <h6>Top Brands</h6>
                        <ul>
                            <li><a href="products.html">Tempus pretium</a></li>
                            <li><a href="single.html">Curabitur sapien</a></li>
                            <li><a href="men.html">Dignissim purus</a></li>
                            <li><a href="single.html">Dignissim neque</a></li>
                            <li><a href="men.html">Ornared id aliquet</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 footer-bottom-cate cate-bottom animated wow fadeInRight" data-wow-delay=".5s">
                        <h6>Our Address</h6>
                        <ul>
                            <li><i className="glyphicon glyphicon-map-marker" aria-hidden="true"></i>Address : 12th Avenue, 5th block, <span>Sydney.</span></li>
                            <li><i className="glyphicon glyphicon-envelope" aria-hidden="true"></i>Email : <a href="mailto:info@example.com">info@example.com</a></li>
                            <li><i className="glyphicon glyphicon-earphone" aria-hidden="true"></i>Phone : +1234 567 567</li>
                        </ul>
                    </div>
                    <div className="clearfix"> </div>
                    <p className="footer-class animated wow fadeInUp animated" data-wow-delay=".5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }}> © 2016 Youth Fashion . All Rights Reserved | Design by <a href="http://w3layouts.com/" target="_blank">W3layouts</a> </p>
                </div>
            </div>
        </div>
    )
}