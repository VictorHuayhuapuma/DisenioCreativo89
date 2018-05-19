jQuery(document).ready(function(){
    var scripts = document.getElementsByTagName("script");
    var jsFolder = "";
    for (var i= 0; i< scripts.length; i++)
    {
        if( scripts[i].src && scripts[i].src.match(/initslider-3\.js/i))
            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);
    }
    jQuery("#amazingslider-3").amazingslider({
        sliderid:3,
        jsfolder:jsFolder,
        width:559,
        height:466,
        skinsfoldername:"",
        loadimageondemand:false,
        videohidecontrols:false,
        fullwidth:false,
        watermarkstyle:"text",
        donotresize:false,
        enabletouchswipe:true,
        fullscreen:false,
        autoplayvideo:false,
        addmargin:true,
        watermarklinkcss:"text-decoration:none;font:12px Arial,Tahoma,Helvetica,sans-serif;color:#333;",
        watermarktext:"amazingslider.com",
        watermarklink:"http://amazingslider.com?source=watermark",
        randomplay:false,
        isresponsive:true,
        pauseonmouseover:false,
        playvideoonclickthumb:true,
        showwatermark:false,
        slideinterval:5000,
        watermarkpositioncss:"display:block;position:absolute;bottom:4px;right:4px;",
        watermarkimage:"",
        watermarktextcss:"font:12px Arial,Tahoma,Helvetica,sans-serif;color:#333;padding:2px 4px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;background-color:#fff;opacity:0.9;filter:alpha(opacity=90);",
        transitiononfirstslide:false,
        watermarktarget:"_blank",
        scalemode:"fill",
        loop:0,
        autoplay:true,
        navplayvideoimage:"play-32-32-0.png",
        navpreviewheight:60,
        timerheight:2,
        descriptioncssresponsive:"font-size:12px;",
        shownumbering:false,
        skin:"SimpleControls",
        addgooglefonts:true,
        navshowplaypause:true,
        navshowplayvideo:false,
        navshowplaypausestandalonemarginx:8,
        navshowplaypausestandalonemarginy:8,
        navbuttonradius:0,
        navthumbnavigationarrowimageheight:32,
        navpreviewarrowheight:8,
        lightboxshownavigation:false,
        showshadow:false,
        navfeaturedarrowimagewidth:16,
        navpreviewwidth:120,
        googlefonts:"Inder",
        navborderhighlightcolor:"",
        bordercolor:"#ffffff",
        lightboxdescriptionbottomcss:"{color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;}",
        lightboxthumbwidth:80,
        navthumbnavigationarrowimagewidth:32,
        navthumbtitlehovercss:"text-decoration:underline;",
        texteffectresponsivesize:600,
        navcolor:"",
        arrowwidth:32,
        texteffecteasing:"easeOutCubic",
        texteffect:"fade",
        lightboxthumbheight:60,
        navspacing:0,
        navarrowimage:"navarrows-48-48-1.png",
        ribbonimage:"ribbon_topleft-0.png",
        navwidth:48,
        navheight:48,
        arrowimage:"arrows-32-32-0.png",
        timeropacity:0.6,
        arrowhideonmouseleave:1000,
        navthumbnavigationarrowimage:"carouselarrows-32-32-0.png",
        navshowplaypausestandalone:false,
        texteffect1:"slide",
        navpreviewbordercolor:"#ffffff",
        texteffect2:"slide",
        customcss:"",
        ribbonposition:"topleft",
        navthumbdescriptioncss:"display:block;position:relative;padding:2px 4px;text-align:left;font:normal 12px Arial,Helvetica,sans-serif;color:#333;",
        lightboxtitlebottomcss:"{color:#333; font-size:14px; font-family:Armata,sans-serif,Arial; overflow:hidden; text-align:left;}",
        arrowstyle:"none",
        navthumbtitleheight:20,
        textpositionmargintop:24,
        buttoncssresponsive:"",
        navswitchonmouseover:false,
        playvideoimage:"playvideo-64-64-0.png",
        arrowtop:50,
        textstyle:"dynamic",
        playvideoimageheight:64,
        navfonthighlightcolor:"#666666",
        showbackgroundimage:false,
        navpreviewborder:4,
        navshowplaypausestandaloneheight:48,
        shadowcolor:"#aaaaaa",
        navbuttonshowbgimage:true,
        navbuttonbgimage:"navbuttonbgimage-48-48-1.png",
        textbgcss:"display:block; position:absolute; top:0px; left:0px; width:100%; height:100%; background-color:#fff; opacity:0.7; filter:alpha(opacity=70);",
        textpositiondynamic:"bottomleft",
        navpreviewarrowwidth:16,
        playvideoimagewidth:64,
        buttoncss:"display:block; position:relative; margin-top:8px;",
        navshowpreviewontouch:false,
        bottomshadowimagewidth:96,
        showtimer:true,
        navradius:0,
        navmultirows:false,
        navshowpreview:true,
        navmarginy:8,
        navmarginx:16,
        navfeaturedarrowimage:"featuredarrow-16-8-0.png",
        showribbon:false,
        navstyle:"none",
        textpositionmarginleft:0,
        descriptioncss:"display:block; position:relative; font:12px \"Lucida Sans Unicode\",\"Lucida Grande\",sans-serif,Arial; color:#333; white-space:nowrap; margin-top:8px;",
        navplaypauseimage:"navplaypause-48-48-1.png",
        backgroundimagetop:-10,
        timercolor:"#ffffff",
        numberingformat:"%NUM/%TOTAL ",
        navdirection:"horizontal",
        navfontsize:14,
        navhighlightcolor:"",
        texteffectdelay1:1000,
        navimage:"bullet-24-24-0.png",
        texteffectdelay2:1500,
        texteffectduration1:600,
        navshowplaypausestandaloneautohide:false,
        texteffectduration2:600,
        navbuttoncolor:"",
        navshowarrow:true,
        texteffectslidedirection:"left",
        navshowfeaturedarrow:false,
        lightboxbarheight:64,
        titlecss:"display:block; position:relative; font:bold 14px \"Lucida Sans Unicode\",\"Lucida Grande\",sans-serif,Arial; color:#333; white-space:nowrap;",
        ribbonimagey:0,
        ribbonimagex:0,
        texteffectslidedistance1:120,
        texteffectslidedistance2:120,
        navrowspacing:8,
        navshowplaypausestandaloneposition:"center",
        navshowbuttons:true,
        lightboxthumbtopmargin:12,
        titlecssresponsive:"font-size:12px;",
        navshowplaypausestandalonewidth:48,
        navfeaturedarrowimageheight:8,
        navopacity:0.8,
        textpositionmarginright:0,
        backgroundimagewidth:120,
        textautohide:true,
        navthumbtitlewidth:120,
        navpreviewposition:"top",
        texteffectseparate:false,
        arrowheight:32,
        arrowmargin:8,
        texteffectduration:600,
        bottomshadowimage:"bottomshadow-110-95-4.png",
        border:0,
        lightboxshowdescription:false,
        timerposition:"bottom",
        navfontcolor:"#333333",
        navthumbnavigationstyle:"arrow",
        borderradius:0,
        navbuttonhighlightcolor:"",
        textpositionstatic:"bottom",
        texteffecteasing2:"easeOutCubic",
        navthumbstyle:"imageonly",
        texteffecteasing1:"easeOutCubic",
        textcss:"display:block; padding:8px 16px; text-align:left;",
        navbordercolor:"#ffffff",
        navpreviewarrowimage:"previewarrow-16-8-0.png",
        navthumbtitlecss:"display:block;position:relative;padding:2px 4px;text-align:left;font:bold 14px Arial,Helvetica,sans-serif;color:#333;",
        showbottomshadow:true,
        texteffectslidedistance:30,
        texteffectdelay:500,
        textpositionmarginstatic:0,
        backgroundimage:"",
        navposition:"bottom",
        texteffectslidedirection1:"right",
        navborder:4,
        textformat:"Light box",
        texteffectslidedirection2:"right",
        bottomshadowimagetop:96,
        texteffectresponsive:true,
        shadowsize:5,
        lightboxthumbbottommargin:8,
        textpositionmarginbottom:24,
        lightboxshowtitle:true,
        elastic: {
            duration:1000,
            easing:"easeOutElastic",
            checked:true,
            effectdirection:0
        },
        transition:"elastic",
        scalemode:"fill",
        isfullscreen:false,
        textformat: {

        }
    });
});