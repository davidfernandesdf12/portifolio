$(function() {


    // toggle sidebar
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        $('#nav-icon').toggleClass('open');

        if($('#sidebar-wrapper').css('margin-left') == '-240px')
        {
            $('#sidebar-wrapper').css('margin-left', '0px');
            $('#nav-icon').css('margin-left', '15rem');
        }
        else
        {
            $('#sidebar-wrapper').css('margin-left', '-15rem');
            $('#nav-icon').css('margin-left', '1rem');
        }

    });

    // ajustando tamanho sidebar para mobile
    $(window).on('resize', function(e){
        e.preventDefault();
        var win = $(this);

        if (win.width() < 1300) {
            $('#sidebar-wrapper').css('margin-left', '-15rem');
        }else if(win.width() >= 1300){
            $('#sidebar-wrapper').css('margin-left', '0px');
        }
    });

    checkUrl();

    //change active menus itens
    $('li a').on('click', function(){
        //remove itens active
        $("li .active").each(function( index ) {
            $(this).removeClass('active');
        });
        //active item
        $(this).addClass('active');

        if(window.innerWidth <= 768){
            $('#nav-icon').toggleClass('open');
            $('#sidebar-wrapper').css('margin-left', '-15rem');
            $('#nav-icon').css('margin-left', '1rem');
        }
    })

    $('.education .card-header').on('click', function (){
        const card = $(this).closest( ".card" );

        if(!card.hasClass('collapsed')){
            card.find('.card-header').addClass('active-panel');
            card.find('i').removeClass('fa-plus');
            card.find('i').addClass('fa-minus');
        }else
        {
            card.find('i').addClass('fa-plus');
            card.find('i').removeClass('fa-minus');
            card.find('.card-header').removeClass('active-panel');
        }
    });

    // wow js
    const wow = new WOW().init();

    $(window).scroll(function () {

        if ($(this).scrollTop() < 580) {
            removeItemsActive();
            $('a.description').addClass('active');
        }

        if ($(this).scrollTop() > 580) {
            removeItemsActive();
            $('a.education').addClass('active');
        }

        if ($(this).scrollTop() > 1000) {
            removeItemsActive();
            $('a.experience').addClass('active');
        }

        if ($(this).scrollTop() > 1800) {
            removeItemsActive();
            $('a.skills').addClass('active');
        }

    });

    function removeItemsActive(){
        $("li .active").each(function( index ) {
            $(this).removeClass('active');
        });
    }

    function checkUrl(){
        const url = window.location.href;
        if(url.includes('#education')){
            removeItemsActive();
            $('a.education').addClass('active');
        }
        if(url.includes('#experience')){
            removeItemsActive();
            $('a.experience').addClass('active');
        }
        if(url.includes('#skills')){
            removeItemsActive();
            $('a.skills').addClass('active');
        }
    }
});