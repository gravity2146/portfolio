app.gallery = {

    init:function(){




            $(".magicwall").magicWall({
                maxItemHeight: 350,
                maxItemWidth: 350,
                delay: 400,
                preloadBeforeSwitch: true,
                loadingMode:"chain",
                pauseOnHover: "item",
                animations: "flipY,rollOutX,-rollOutX,rollOutY,-rollOutY,slideColumn,-slideColumn,slideRow,-slideRow,fade",
                duration:800

            });

            $(".colorbox").colorbox({
                maxWidth:"70%",
                maxHeight:"250%",
                scrolling:true,
                onOpen: function(){
                    $(".magicwall").magicWall("stop");
                },

                onClosed: function(){
                    $(".magicwall").magicWall("start");
                }
            });

              alertify.log(msg5);

              setTimeout(function(){
                  alertify.log(msg6);
              },2000);




    }

}
