import React from 'react';


export default () => {
    return <div>
        <div class="breadcrumbs">
		<div class="container">
			<ol class="breadcrumb breadcrumb1 animated wow slideInLeft animated" data-wow-delay=".5s" style={{visibility: 'visible', animationDelay: 0.5, animationName: 'slideInLeft'}}>
				<li><a href="index.html"><span class="glyphicon glyphicon-home" aria-hidden="true"></span>Home</a></li>
				<li class="active">Products</li>
			</ol> 
		</div>
	</div>
    </div >
}