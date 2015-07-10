$(function ($){
        $(".outer").css({
            width  : "1024px",
            border : "1px solid gray",
            padding:"8",
            margin :"0"
            });

        $("*").css({
            fontSize:"small"
        });

        $("ul").css({
            borderTop   : "1px dotted gray",
            borderRight   : "opx dotted gray",
            borderLeft   : "1px dotted gray",
            borderBottom   : "0px dotted gray",
            listStyle:"none",
            margin   :"0" ,
            borderCollapse :"collapse",
            borderSpacing: "0px",
            backgroundColor:"#EEEEEE"
        });


        $("li").css({
            listStyle:"none",
            margin   :"0"
        });
//ul li  using thirdparty-class
        $("#folder*").addClass("fa fa-folder-open");
        $("#file*").addClass("fa fa-file-text-o");

        $("#wrap*").css({
            overflow:"hidden",
            padding :"1px",
            margin  :"0px",
            clear   :"both",
//            overflow : "hidden;"
        });

        $("#file*").css({
            width  :"45%",
            float  : "left",
            padding:"1px",
            margin :"0px"
        });

        $("#folder*").css({
            width:"45%",
            float: "left",
            padding:"1px",
            margin:"0px"
        });

        $("#text*").css({
            width   :"50%",
            float   : "left",
            fontSize:"xx-small",
            padding :"1px",
            margin  :"0px"
        });
        $("#wrap*").mouseover(function(event) {
            /* Act on the event */
            $(this).css("background-color","gray");
        });
        $("#wrap*").mouseleave(function(event) {
            /* Act on the event */
            $(this).css("background-color","#EEEEEE");
        });
});