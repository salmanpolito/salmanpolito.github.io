$(document).ready(function () {
    $('#btn_expand_compnetw').click(function () {
        const div = $('#compnetw_div');
        if (div.hasClass('hidden')) {
            div.removeClass('hidden');
        } else {
            div.addClass('hidden');
        }
    });
});
