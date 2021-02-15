$('document').ready(function(){
    $(".mobileMenu").click(function(){
        $(".navbarMainDesign").toggleClass("open")
        $(".mobileMenu").toggleClass("fa-times")
        $(".mobileMenu").toggleClass("fa-bars")
    })

    const windowW = $(window).width()
    const headerH = $('header').height()
    $(window).scroll(function(){
        if( windowW>920 ){
            let scrollTop = $(window).scrollTop()
            let menuTop = headerH - scrollTop
            menuTop = (menuTop<=0)?0:menuTop;
            $('.navbarMainDesign').css('top', menuTop)
        }
    })
})