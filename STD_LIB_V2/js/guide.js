/*-------------------------------------------------------------------
    STD_LIB_V2 Guide JS
    Description: Navigation logic
-------------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', function() {
    var guide = {
        init: function() {
            this.nav.init();
            this.mobile.init();
        },
        
        nav: {
            init: function() {
                var navLinks = document.querySelectorAll('.g-nav-link');
                
                navLinks.forEach(function(link) {
                    link.addEventListener('click', function(e) {
                        // Check if it has a sub-menu
                        var nextEl = this.nextElementSibling;
                        if (nextEl && (nextEl.classList.contains('g-nav-depth2') || nextEl.classList.contains('g-nav-depth3'))) {
                            e.preventDefault();
                            this.classList.toggle('is-active');
                            // Optional: Accordion behavior (close others)
                            // var siblings = this.parentElement.parentElement.children;
                            // ... implementation for exclusive open if needed
                        } else {
                            // It's a page link
                            var allLinks = document.querySelectorAll('.g-nav-link');
                            allLinks.forEach(function(l) { l.classList.remove('is-current'); });
                            this.classList.add('is-current');
                            
                            // On mobile, close sidebar after click
                            if (window.innerWidth <= 768) {
                                document.querySelector('.g-sidebar').classList.remove('is-open');
                                document.querySelector('.g-dimmed').classList.remove('is-active');
                            }
                        }
                    });
                });
            }
        },
        
        mobile: {
            init: function() {
                var btnMenu = document.querySelector('.g-btn-menu');
                var sidebar = document.querySelector('.g-sidebar');
                var dimmed = document.querySelector('.g-dimmed');
                
                if(btnMenu) {
                    btnMenu.addEventListener('click', function() {
                        sidebar.classList.toggle('is-open');
                        dimmed.classList.toggle('is-active');
                    });
                }
                
                if(dimmed) {
                    dimmed.addEventListener('click', function() {
                        sidebar.classList.remove('is-open');
                        this.classList.remove('is-active');
                    });
                }
            }
        }
    };
    
    guide.init();
});
