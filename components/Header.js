import React from 'react';


export default () => {
	return <div>
		<div className="header">
			<div className="header-top">
				<div className="container">
					<div className="col-sm-4 logo animated wow fadeInLeft" data-wow-delay=".5s">
						<h1><a href="index.html">Tiến <span>Thăng</span></a></h1>
					</div>
					<div className="col-sm-4 world animated wow fadeInRight" data-wow-delay=".5s">
						<div className="cart box_1">
							<a href="checkout.html">
								<h3> <div className="total">
									<span className="simpleCart_total"></span></div>
									<img src="/static/images/cart.png" alt="" /></h3>
							</a>
							<p><a href="javascript:;" className="simpleCart_empty">Làm mới</a></p>

						</div>
					</div>
					<div className="col-sm-2 number animated wow fadeInRight" data-wow-delay=".5s">
						<span><i className="glyphicon glyphicon-phone" style={{color:'#d72033'}}></i>01656577666</span>
						<p>Gọi cho chúng tôi</p>
					</div>
					<div className="col-sm-2 search animated wow fadeInRight" data-wow-delay=".5s">
						<a className="play-icon popup-with-zoom-anim" href="#small-dialog"><i className="glyphicon glyphicon-search" style={{color:'#d72033'}} > </i> </a>
					</div>
					<div className="clearfix"> </div>
				</div>
			</div>
			<div className="container">
				<div className="head-top">
					<div className="n-avigation">
						<nav className="navbar nav_bottom color" role="navigation">

							<div className="navbar-header nav_2">
								<button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
									<span className="sr-only">Toggle navigation</span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
								<a className="navbar-brand" href="#"></a>
							</div>

							<div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
								<ul className="nav navbar-nav nav_1">
									<li><a href="index.html">Trang Chủ</a></li>
									<li className="dropdown mega-dropdown active">
										<a href="#" className="dropdown-toggle" data-toggle="dropdown">Các Sản Phẩm<span className="caret"></span></a>
										<div className="dropdown-menu mega-dropdown-menu">
											<div className="container-fluid">
												<div className="tab-content">
													<div className="tab-pane active" id="men">
														<ul className="nav-list list-inline">
															<li><a href="women.html"><img src="/static/images/t7.jpg" className="img-responsive" alt="" /></a></li>
															<li><a href="women.html"><img src="/static/images/t8.jpg" className="img-responsive" alt="" /></a></li>
															<li><a href="women.html"><img src="/static/images/t9.jpg" className="img-responsive" alt="" /></a></li>
															<li><a href="women.html"><img src="/static/images/t11.jpg" className="img-responsive" alt="" /></a></li>
															<li><a href="women.html"><img src="/static/images/t1.jpg" className="img-responsive" alt="" /></a></li>
															<li><a href="women.html"><img src="/static/images/t12.jpg" className="img-responsive" alt="" /></a></li>
														</ul>
													</div>
												</div>
											</div>

										</div>
									</li>
									<li className="dropdown mega-dropdown active">
										<a href="#" className="dropdown-toggle" data-toggle="dropdown">Men<span className="caret"></span></a>
								<div className="dropdown-menu mega-dropdown-menu">
											<div className="container-fluid">
												<div className="tab-content">
													<div className="tab-pane active" id="men">
														<ul className="nav-list list-inline">
															<li><a href="men.html"><img src="/static/images/t10.jpg" className="img-responsive" alt="" /></a></li>
															<li><a href="men.html"><img src="/static/images/t2.jpg" className="img-responsive" alt="" /></a></li>
															<li><a href="men.html"><img src="/static/images/t3.jpg" className="img-responsive" alt="" /></a></li>
															<li><a href="men.html"><img src="/static/images/t4.jpg" className="img-responsive" alt="" /></a></li>
															<li><a href="men.html"><img src="/static/images/t5.jpg" className="img-responsive" alt="" /></a></li>
															<li><a href="men.html"><img src="/static/images/t6.jpg" className="img-responsive" alt="" /></a></li>
														</ul>
													</div>

												</div>
											</div>

										</div>
									</li>
									<li><a href="products.html">Các Dự Án</a></li>
									<li><a href="products.html">Products</a></li>
									<li><a href="account.html">Sign In</a></li>
									<li className="last"><a href="contact.html">Contact</a></li>
								</ul>
							</div>

						</nav>
					</div>


					<div className="clearfix"> </div>


					<div id="small-dialog" className="mfp-hide">
						<div className="search-top">
							<div className="login">
								<form action="#" method="post">
									<input type="submit" value="" />
									<input type="text" name="search" value="Type something..." onfocus="this.value = '';" onblur="if (this.value == '') {this.value = '';}" />

								</form>
							</div>
							<p>	Shopping</p>
						</div>
					</div>
					{/* <script>
						$(document).ready(function() {
						$('.popup-with-zoom-anim').magnificPopup({
							type: 'inline',
							fixedContentPos: false,
							fixedBgPos: true,
							overflowY: 'auto',
							closeBtnInside: true,
							preloader: false,
							midClick: true,
							removalDelay: 300,
							mainclassName: 'my-mfp-zoom-in'
						});

						});
				</script> */}
				</div>
			</div>
		</div>
	</div>
}