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

$(document).ready(function () {
    $('#btn_expand_wn').click(function () {
        const div = $('#wn_div');
        if (div.hasClass('hidden')) {
            div.removeClass('hidden');
        } else {
            div.addClass('hidden');
        }
    });
});


$(document).ready(function () {
    $('#btn_expand_cn').click(function () {
        const div = $('#cn_div');
        if (div.hasClass('hidden')) {
            div.removeClass('hidden');
        } else {
            div.addClass('hidden');
        }
    });
});