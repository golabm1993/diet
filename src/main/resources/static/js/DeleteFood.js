var deleter = (function () {
    function wireOfDeleteClick() {
        $(document).on('click', '.delete', function (event) {
            var foodId = $(event.target).parent().find('.foodName').attr('id');
            ajaxRequest.run('DELETE', '/food/' + foodId, '', function () {
                $(event.target).parent().remove();
            });
        });
    }

    return {
        wireOfDeleteClick: wireOfDeleteClick
    }
})();

$(document).ready(function () {
    deleter.wireOfDeleteClick();
});