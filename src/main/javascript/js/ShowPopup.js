var popupDisplayer = (function () {

    var mealType;

    function showPopup() {
        $(function () {
            var appendthis = ("<div class='modal-overlay js-modal-close'></div>");
            $('button[data-modal-id]').click(function (e) {
                e.preventDefault();
                mealType = $(this).attr('id');
                $("body").append(appendthis);
                $(".modal-overlay").fadeTo(500, 0.7);
                var modalBox = $(this).attr('data-modal-id');
                $('#' + modalBox).fadeIn($(this).data());
            });
            $(".js-modal-close, .modal-overlay").click(function () {
                $(".modal-box, .modal-overlay").fadeOut(500, function () {
                    $(".modal-overlay").remove();
                });
            });
            $(window).resize(function () {
                $(".modal-box").css({
                    top: ($(window).height() - $(".modal-box").outerHeight()) / 2,
                    left: ($(window).width() - $(".modal-box").outerWidth()) / 2
                });
            });
            $(window).resize();
        });
    }

    function returnMealType() {
        return mealType;
    }

    return {
        displayPopup: showPopup,
        mealType: returnMealType
    }
})();