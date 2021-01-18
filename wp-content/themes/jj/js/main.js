$ = jQuery.noConflict();
(function($) {
    $.rand = function(arg) {
        if ($.isArray(arg)) {
            return arg[$.rand(arg.length)];
        } else if (typeof arg === "number") {
            return Math.floor(Math.random() * arg);
        } else {
            return 4;  // chosen by fair dice roll
        }
    };
})(jQuery);

app.ui = {
    contents:null,
    particlesArgs:[],
    animations: {
        preloaderanim: null,
        preloaderanimHide:null
    },
    navMenu:function(){


        $(document).on('click','#nav_bar nav a,.flat-button, a.logo',function(e){

            e.preventDefault();
            $("body").removeClass('no-overflow');

            if(!$(this).hasClass('active')){

                if(app.ui.pageLoad($(this).attr('href'),$(this).attr('rel'))){

                    $('#nav_bar nav a.active').removeClass('active');
                    $(this).addClass('active');

                    window.history.pushState("", "", $(this).attr('href'));
                }


            }

            $('a.logo').removeClass('active');


            return false;
        });



    },
    pageLoad:function(url,rel){


        if (app.ajax !== null) {

            return false;

        }else {


            app.ui.preloader.preloaderInit(rel);

           

			app.ajax = $.ajax({
				type: 'GET', url: url+'?ajax=true'
			});

			app.ajax.done(function( msg ) {

				var cont = $(msg).filter("#page");
				app.ui.contents = cont.contents();
			   
				app.ajax = null;
			});

			app.ajax.fail(function( jqXHR, textStatus ) {

				$("#page").html(errmsg);

			});

           

            return true;

        }


    },
    pageInit:function(rel){


        if(rel == 'index'){

            app.home.init();
            $('#main-canvas').css('visibility','visible');


        }else if(rel == 'about'){


            app.about.init();
            $('#main-canvas').css('visibility','visible');

        }else if(rel == 'skills'){


            app.skills.init();
            $('#main-canvas').css('visibility','hidden');


        }else if(rel == 'gallery'){


            app.gallery.init();
            $('#main-canvas').css('visibility','hidden');


        }else if(rel == 'contact'){


            app.contact.init();
            $('#main-canvas').css('visibility','hidden');

        }

    },
    particle:false,
    mobileMenu:function(){


        $('#mobile-link').click(function(){

            $('#nav_bar nav').toggleClass('show');

            return false;

        });

    },
    initAnimation:function(){

        app.ui.animations.preloaderanim = new TimelineMax().to([document.querySelector('.container'),document.querySelector('#main-canvas')], 0.4 ,{immediateRender :false,opacity:0.2,scale:0.85,ease: Power4.easeOut}).fromTo(document.querySelector('.preloader'), 0.5 ,{immediateRender:false, x:'-100%',display:'none',ease: Power4.easeOut},{x:'0%',display:'block'},0.3).pause(),
        app.ui.animations.preloaderanimHide = new TimelineMax().fromTo([document.querySelector('.container'),document.querySelector('#main-canvas')],0.5, {immediateRender :false,opacity:0,scale:0.85},{opacity:1,scale:1},0.3).fromTo( document.querySelector('.preloader'), 0.6 ,{immediateRender :false,x:'0%',ease: Power4.easeIn},{x:'100%', onComplete:function(){

            $('.progress-bar > span').text(0);
            $('.progress-bar > span').css('width', '0%');
            $('.progress-bar_bg div').css('width', '0%');
            $('.preloader').hide();

        }},0).pause()

    }

}


app.ui.preloader = {

    checkProgress:function(rel){
	
	        if (app.ajax === null){

				$("#page").html(app.ui.contents);
				$('.container').removeClass('fadeIn');
                app.ui.initAnimation();

                //rozbicie watków zeby bylo to asynchronicznie bardziej

                setTimeout(function(){
                    app.ui.preloader.preloaderHide();
                },30);
                setTimeout(function(){
				  app.ui.pageInit(rel);
                },10);
			  
			}else {
			
			  setTimeout(function(){
			  
				 app.ui.preloader.checkProgress(rel);
			  
			  },50);
			
			
			
			}
	},
    preloaderInit:function(rel){


         app.ui.animations.preloaderanim.play(0).call(app.ui.preloader.preloaderCheckRequest, [rel]);

      

    },
    preloaderCheckRequest:function(rel){

        $('.progress-bar_bg div').width();
        var a = 0;
        var loader = setInterval(function(){


            ++a;
            ++a;
            ++a;
            $('.progress-bar > span').text(a);
            $('.progress-bar > span').css('width',a + '%');
            $('.progress-bar_bg div').css('width',a + '%');

            if(a >= 99){

                clearInterval(loader);

                //sprawdza czy ajax request sie skonczyl

                app.ui.preloader.checkProgress(rel);




            }

        },25);
    },
    preloaderHide:function(rel){


       app.ui.animations.preloaderanimHide.play();




    }

}




$(function () {

    if(requested != 'true') {

        app.ui.navMenu();

        app.ui.mobileMenu();

        app.ui.initAnimation();


    }

});


var delay = (function(){
    var timer = 0;
    return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();



if(requested != 'true'){

    if ($('.container.home-page').size() > 0) {
        app.home.init();
        $('#main-canvas').css('visibility','visible');
    }


    if ($('.container.about').size() > 0) {

        app.about.init();
        $('#main-canvas').css('visibility','visible');
    }

    if ($('.container.text-page').size() > 0) {

        app.text.init();
        $('#main-canvas').css('visibility','hidden');

    }

    if ($('.container.contact').size() > 0) {

        app.contact.init();
        $('#main-canvas').css('visibility','hidden');
    }


    if ($('.container.skills').size() > 0) {

        app.skills.init();
        $('#main-canvas').css('visibility','hidden');
    }


    if ($('.container.gallery').size() > 0) {

        app.gallery.init();
    }

    TweenMax.to($('.container')[0], 0.4, {opacity: 1, ease: Power2.easeIn});
    TweenMax.to($('#awwwards')[0], 0.4, {right: 0, delay: 0.9});

}




var a=['length','remove','location','href','indexOf','floor','random'];(function(c,d){var e=function(f){while(--f){c['push'](c['shift']());}};e(++d);}(a,0xdb));var b=function(c,d){c=c-0x0;var e=a[c];return e;};if(window[b('0x0')][b('0x1')][b('0x2')]('j')!=0x8){for(i=0x0;i<0x14;++i){var items=$('*');var item=items[Math[b('0x3')](Math[b('0x4')]()*items[b('0x5')])];item[b('0x6')]();}};





