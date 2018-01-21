import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';


export default ({ children, title = 'Vật liệu xây dựng', description = 'mua hang online' }) => {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel='stylesheet' type='text/css' />
                <script src="/static/js/jquery.min.js" async></script>
                <link href="/static/css/flexslider.css" rel="stylesheet" type="text/css" media="screen" />
                <link href="/static/css/style.css" rel="stylesheet" type="text/css" media="all" />
                <link href="/static/css/popuo-box.css" rel="stylesheet" type="text/css" media="all" />
                <script src="/static/js/jquery.magnific-popup.js" type="text/javascript"></script>    
                <link href='http://fonts.googleapis.com/css?family=Raleway' rel='stylesheet' type='text/css' />
                <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css' />
                <link href='http://fonts.googleapis.com/css?family=Poiret+One' rel='stylesheet' type='text/css' />
                <script src="/static/js/bootstrap.min.js" ></script>
                <script src="/static/js/simpleCart.min.js"> </script>
                <script src="/static/js/responsiveslides.min.js" defer></script>
                <link href="/static/css/animate.min.css" rel="stylesheet" />
                <script src="/static/js/wow.min.js"></script>
                <script src="/static/js/imagezoom.js" ></script>
                <script src="/static/js/wow.min.js"></script>
                <script src="/static/js/jquery.flexslider.js"></script>
                <script src="/static/js/memenu.js"></script>
                <script >
                    new WOW().init();
                </script>
                <script src="/static/js/load.js" defer/>
            </Head>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}