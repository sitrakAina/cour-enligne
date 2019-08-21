import React, { Component } from 'react';
import './home.css';
import Login from '../popup/login'

class Home extends Component {
	constructor(props){
	  super(props);
	  this.state = { showPopup: true };
	  }

	  togglePopup() {
	   this.setState({
	     showPopup: !this.state.showPopup
	   });
	 }

    render() {
    	var img_url2 = 'image/2.jpeg';
	    const style = {
	      backgroundImage: 'url("'+img_url2+'")', 
	      backgroundPosition: 'center center no-repeat',
	      backgroundSize: 'cover',    
	    };
        return ( 
        	<div className='body'>
        		<div id="preloder">
					<div className="loader"></div>
				</div>

				<header className="header-section">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-md-3">
								<div className="site-logo">
									<img src="img/logo.png" alt=""/>
								</div>
								<div className="nav-switch">
									<i className="fa fa-bars"></i>
								</div>
							</div>
							<div className="col-lg-9 col-md-9">
								<a href="" className="site-btn header-btn" onClick={this.togglePopup.bind(this)}>Login</a>
								{this.state.showPopup ?
						         <Login
						          text='Click "Close Button" to hide popup'
						          closePopup={this.togglePopup.bind(this)}
						         />
						         : null
						       }
								<nav className="main-menu">
									<ul>
										<li><a href="#">Acceul</a></li>
										<li><a href="#">A propos</a></li>
										<li><a href="#">Service</a></li>
										<li><a href="#">Promotion</a></li>
										<li><a href="#">Contacte</a></li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</header>
				<section class="hero-section set-bg" style={style}>
					<div class="container">
						<div class="hero-text text-white">
							<h2>Mahazoana fampianarana maimaim-poana</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris 
							scelerisque, at rutrum nulla <br/> dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
						</div>
					</div>
				</section>
				<section class="categories-section spad">
					<div class="container">
						<div class="section-title">
							<h2>Service</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
						</div>
						<div class="row">
						
							<div class="col-lg-4 col-md-6">
								<div class="categorie-item">
									<div class="ci-thumb set-bg" data-setbg="img/categories/1.jpg"></div>
									<div class="ci-text">
										<h5>IT Development</h5>
										<p>Lorem ipsum dolor sit amet, consectetur</p>
										<span id='number'>120 Courses</span>
									</div>
								</div>
							</div>
						
							<div class="col-lg-4 col-md-6">
								<div class="categorie-item">
									<div class="ci-thumb set-bg" data-setbg="img/categories/2.jpg"></div>
									<div class="ci-text">
										<h5>Web Design</h5>
										<p>Lorem ipsum dolor sit amet, consectetur</p>
										<span id='number'>>70 Courses</span>
									</div>
								</div>
							</div>
							
							<div class="col-lg-4 col-md-6">
								<div class="categorie-item">
									<div class="ci-thumb set-bg" data-setbg="img/categories/3.jpg"></div>
									<div class="ci-text">
										<h5>Illustration & Drawing</h5>
										<p>Lorem ipsum dolor sit amet, consectetur</p>
										<span id='number'>55 Courses</span>
									</div>
								</div>
							</div>
							
							<div class="col-lg-4 col-md-6">
								<div class="categorie-item">
									<div class="ci-thumb set-bg" data-setbg="img/categories/4.jpg"></div>
									<div class="ci-text">
										<h5>Social Media</h5>
										<p>Lorem ipsum dolor sit amet, consectetur</p>
										<span id='number'>40 Courses</span>
									</div>
								</div>
							</div>
	
							<div class="col-lg-4 col-md-6">
								<div class="categorie-item">
									<div class="ci-thumb set-bg" data-setbg="img/categories/5.jpg"></div>
									<div class="ci-text">
										<h5>Photoshop</h5>
										<p>Lorem ipsum dolor sit amet, consectetur</p>
										<span id='number'>220 Courses</span>
									</div>
								</div>
							</div>

							<div class="col-lg-4 col-md-6">
								<div class="categorie-item">
									<div class="ci-thumb set-bg" data-setbg="img/categories/6.jpg"></div>
									<div class="ci-text">
										<h5>Cryptocurrencies</h5>
										<p>Lorem ipsum dolor sit amet, consectetur</p>
										<span id='number'>25 Courses</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<footer class="footer-section spad pb-0">
					<div class="footer-top">
						<div class="footer-warp">
							<div class="row">
								<div class="widget-item">
									<h4>Contact Info</h4>
									<ul class="contact-list">
										<li>1481 Creekside Lane <br/>Avila Beach, CA 931</li>
										<li>+26 034 00 000 00</li>
										<li>sitrakaniaina812@gmail.com</li>
									</ul>
								</div>
								<div class="widget-item">
									<h4>Engeneering</h4>
									<ul>
										<li><a href="">Applied Studies</a></li>
										<li><a href="">Computer Engeneering</a></li>
										<li><a href="">Software Engeneering</a></li>
										<li><a href="">Informational Engeneering</a></li>
										<li><a href="">System Engeneering</a></li>
									</ul>
								</div>
								<div class="widget-item">
									<h4>Graphic Design</h4>
									<ul>
										<li><a href="">Applied Studies</a></li>
										<li><a href="">Computer Engeneering</a></li>
										<li><a href="">Software Engeneering</a></li>
										<li><a href="">Informational Engeneering</a></li>
										<li><a href="">System Engeneering</a></li>
									</ul>
								</div>
								<div class="widget-item">
									<h4>Development</h4>
									<ul>
										<li><a href="">Applied Studies</a></li>
										<li><a href="">Computer Engeneering</a></li>
										<li><a href="">Software Engeneering</a></li>
										<li><a href="">Informational Engeneering</a></li>
										<li><a href="">System Engeneering</a></li>
									</ul>
								</div>
								<div class="widget-item">
									<h4>Newsletter</h4>
									<form class="footer-newslatter">
										<input type="email" placeholder="E-mail"/>
										<button class="site-btn">Subscribe</button>
										<p>*We don’t spam</p>
									</form>
								</div>
							</div>
						</div>
					</div>
					<div class="footer-bottom">
						<div class="footer-warp">
							<ul class="footer-menu">
								<li><a href="#">Terms & Conditions</a></li>
								<li><a href="#">Register</a></li>
								<li><a href="#">Privacy</a></li>
							</ul>
							<div class="copyright">
							Copyright &copy;<script>document.write(new Date().getFullYear());</script> Projet personnel| <a href="https://colorlib.com" target="_blank">nom site</a> <i class="fa fa-heart-o" aria-hidden="true"></i> by RAKOTOMALALA Sitrakaniaina
							</div>
						</div>
					</div>
				</footer> 
            </div>
        );
    }
}


export default Home;