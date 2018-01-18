import React from 'react';
import Head from 'next/head';

export default ({ children, title = 'Vật liệu xây dựng', description = 'mua hang online' }) => {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <link href="/static/css/bootstrap-3.1.1.min.css" rel='stylesheet' type='text/css' />
                <script src="/static/js/jquery.min.js"></script>
                <link href="/static/css/style.css" rel="stylesheet" type="text/css" media="all" />
                <link href="/static/css/popuo-box.css" rel="stylesheet" type="text/css" media="all" />
                <script src="/static/js/jquery.magnific-popup.js" type="text/javascript"></script>    
                <link href='http://fonts.googleapis.com/css?family=Raleway' rel='stylesheet' type='text/css' />
                <link href='http://fonts.googleapis.com/css?family=Poiret+One' rel='stylesheet' type='text/css' />
                <script src="/static//js/bootstrap.min.js"></script>
                <script src="/static/js/simpleCart.min.js"> </script>
                <script src="/static/js/responsiveslides.min.js"></script>
                <link href="/static/css/animate.min.css" rel="stylesheet" />
                <script src="/static/js/wow.min.js"></script>
                <script>
                    new WOW().init();
                </script>
            </Head>
            {children}
            {/* <script>
                    $(window).on('load', function() {
                        $("#slider").responsiveSlides({
                            auto: true,
                            speed: 500,
                            namespace: "callbacks",
                            pager: true,
                        })
                    });
            </script> */}
        </div>
    )
}