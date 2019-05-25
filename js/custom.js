/*global $*/
$(function () {
    'use strict';
    $('html').niceScroll({
        cursorcolor: '#ed1d24',
        cursorborder: '#none',
        zindex: '999',
        cursorwidth: 13,
        cursorfixedheight: 100
    })
    //work img filter
    $(".work li").on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all') {
            $('.shuffle .col-md').css('opacity', 1);
        } else {
            $('.shuffle .col-md').css('opacity', '0.05');
            $($(this).data('class')).css('opacity', 1);
        }
    });
});
