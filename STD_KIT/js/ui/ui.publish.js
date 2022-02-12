var pub = {	
	init: function(){
		this.setHeader();
		this.setFooter();
	},
	setHeader: function(){	
		var headerHtml = ''
		+'<div class="in-sec">'
		+'	<div class="header-brand">'
		+'		<a href="/" class="brand">Standard UI</a>'
		+'	</div>'
		+'<div class="header-nav">'
		+'<nav class="gnb">'
		+'	<ul class="node1-list">'
		+'		<li>'
		+'			<div class="drop down">'
		+'				<button type="button" aria-controls="gnbMenu1" class="btn drop-toggle"><span><i class="material-icons">apps</i>COMPONENTS</span></button>'
		+'				<div class="drop-menu" id="gnbMenu1">'
		+'					<ul class="drop-list">'
		+'						<li class="drop-item"><a href="../Components/Elements.html" class="btn"><span><i class="material-icons">line_style</i>Elements</span></a></li>'
		+'						<li class="drop-item"><a href="../Components/Groups.html" class="btn"><span><i class="material-icons">line_style</i>Groups</span></a></li>'
		+'						<li class="drop-item"><a href="../Components/Structure.html" class="btn"><span><i class="material-icons">line_style</i>Extends</span></a></li>'
		+'					</ul>'
		+'				</div>'
		+'			</div>'
		+'		</li>'
		+'		<li>'
		+'			<div class="drop down">'
		+'				<button type="button" aria-controls="gnbMenu2" class="btn drop-toggle"><span><i class="material-icons">view_day</i>SECTIONS</span></button>'
		+'				<div class="drop-menu" id="gnbMenu2">'
		+'					<ul class="drop-list">'
		+'						<li class="drop-item"><a href="../Section/Headers.html" class="btn"><span><i class="material-icons">dns</i>Headers</span></a></li>'
		+'						<li class="drop-item"><a href="../Section/Features.html" class="btn"><span><i class="material-icons">build</i>Features</span></a></li>'
		+'						<li class="drop-item"><a href="../Section/Blogs.html" class="btn"><span><i class="material-icons">list</i>Blogs</span></a></li>'
		+'						<li class="drop-item"><a href="../Section/Teams.html" class="btn"><span><i class="material-icons">people</i>Teams</span></a></li>'
		+'						<li class="drop-item"><a href="../Section/Projects.html" class="btn"><span><i class="material-icons">assignment</i>Projects</span></a></li>'
		+'						<li class="drop-item"><a href="../Section/Pricing.html" class="btn"><span><i class="material-icons">monetization_on</i>Pricing</span></a></li>'
		+'						<li class="drop-item"><a href="../Section/Testimonials.html" class="btn"><span><i class="material-icons">chat</i>Testimonials</span></a></li>'
		+'						<li class="drop-item"><a href="../Section/Contacts.html" class="btn"><span><i class="material-icons">call</i>Contacts</span></a></li>'
		+'					</ul>'
		+'				</div>'
		+'			</div>'
		+'		</li>'
		+'		<li>'
		+'			<div class="drop down">'
		+'				<button type="button" aria-controls="gnbMenu3" class="btn drop-toggle"><span><i class="material-icons">view_carousel</i>PAGES</span></button>'
		+'				<div class="drop-menu" id="gnbMenu3">'
		+'					<ul class="drop-list">'
		+'						<li class="drop-item"><a href="../Pages/AboutUs.html" class="btn"><span><i class="material-icons">account_balance</i>About Us</span></a></li>'
		+'						<li class="drop-item"><a href="../Pages/BlogPost.html" class="btn"><span><i class="material-icons">art_track</i>Blog Post</span></a></li>'
		+'						<li class="drop-item"><a href="../Pages/BlogPosts.html" class="btn"><span><i class="material-icons">view_quilt</i>Blog Posts</span></a></li>'
		+'						<li class="drop-item"><a href="../Pages/ContactUs.html" class="btn"><span><i class="material-icons">location_on</i>Contact Us</span></a></li>'
		+'						<li class="drop-item"><a href="../Pages/LandingPage.html" class="btn"><span><i class="material-icons">view_day</i>Landing Page</span></a></li>'
		+'						<li class="drop-item"><a href="../Pages/LoginPage.html" class="btn"><span><i class="material-icons">fingerprint</i>Login Page</span></a></li>'
		+'						<li class="drop-item"><a href="../Pages/PricingPage.html" class="btn"><span><i class="material-icons">attach_money</i>Pricing Page</span></a></li>'
		+'						<li class="drop-item"><a href="../Pages/ShoppingCart.html" class="btn"><span><i class="material-icons">shopping_basket</i>Shopping Cart</span></a></li>'
		+'						<li class="drop-item"><a href="../Pages/EcommercePage.html" class="btn"><span><i class="material-icons">store</i>Ecommerce Page</span></a></li>'
		+'						<li class="drop-item"><a href="../Pages/ProductPage.html" class="btn"><span><i class="material-icons">shopping_cart</i>Product Page</span></a></li>'
		+'						<li class="drop-item"><a href="../Pages/ProfilePage.html" class="btn"><span><i class="material-icons">account_circle</i>Profile Page</span></a></li>'
		+'						<li class="drop-item"><a href="../Pages/SigupPage.html" class="btn"><span><i class="material-icons">person_add</i>Sigup Page</span></a></li>'
		+'						<li class="drop-item"><a href="../Pages/ErrorPage.html" class="btn"><span><i class="material-icons">error</i>Error Page</span></a></li>'
		+'					</ul>'
		+'				</div>'
		+'			</div>'
		+'		</li>'
		+'	</ul>'
		+'</nav>'
		+'		<div class="download">'
		+'			<button type="button" class="btn demo1 primary"><span>Download</span></button>'
		+'		</div>'
		+'	</div>'
		+'</div>';

		$('.only-pub .header').each(function(){
			$(this).html(headerHtml);
		})
	},
	setFooter: function(){	
		var footerHtml = ''
		+ '<p class="copyright">ⓒ 2021, made with by Standard UI</p>';
		$('.only-pub .footer').each(function(){
			$(this).html(footerHtml);
		})
	}
}
$(function(){
	pub.init();
});
