var deleter = (function () {
    function deleteFood() {
        $(document).on('click', '.delete', function (event) {
            var foodId = $(event.target).parent().find('.foodName').attr('id');
            $.ajax({
                url: 'http://localhost:8080/food/' + foodId,
                dataType: "json",
                type: 'DELETE',
                contentType: "application/json; charset=utf-8",
                success: function () {
                    localStorage.setItem("selectedDate", $('#calendar').datepicker('getDate'));
                    location.reload();
                }
            });
        });
    }

    return {
        deletingFood: deleteFood
    }
})();