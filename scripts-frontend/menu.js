$('.list-group-item').click(function (e) {
    $(this).addClass('active').siblings().removeClass('active');
});