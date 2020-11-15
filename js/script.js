$(document).ready(function () {
    //Initialize tooltips
    $('.nav-tabs > li a[title]').tooltip();
    
    //Wizard
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

        var $target = $(e.target);
    
        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".next-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);

    });
    $(".prev-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        prevTab($active);

    });
    $(".firstheading").on("click",function(){
        $(".firstpara").toggle(1000);
    });
    $(".secondheading").on("click",function(){
        $(".secondpara").toggle(1000);
    });
    $(".thirdheading").on("click",function(){
        $(".thirdpara").toggle(1000);
    });
    $(".fourthheading").on("click",function(){
        $(".fourthpara").toggle(1000);
    })
});

function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}