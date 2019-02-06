var calendarDispatcher = (function () {

    function breakfastLabel(value2) {
        $('.breakfast').append("<div class='food'><label>Name: </label><label id='" + value2.id +
            "' class='foodName'>" + value2.foodName + "</label><label> Amount: </label>" +
            "<label class='foodAmount'>" + value2.foodAmount + "</label><button class='delete'>" +
            "Delete</button></div>");
    }

    function showCalendar() {
        console.log("test");
        $('#calendar').datepicker({
            dateFormat: 'yy-mm-dd',
            inline: true,
            firstDay: 1,
            showOtherMonths: true,
            dayNamesMin: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            onSelect: function (dateText) {
                $('.food').remove();
                $.get("http://localhost:8080", function (data) {
                    var mealDate;
                    $.each(data, function (index, value) {
                        if (value.mealTime == dateText) {
                            mealDate = dateText.toString();
                            $.each(value.food, function (index, value2) {
                                if (value.mealType === "BREAKFAST") {
                                    breakfastLabel(value2);
                                }
                                if (value.mealType === "SNACK_I") {
                                    $('.snackI').append("<div class='food'><label>Name: </label><label id='" + value2.id +
                                        "' class='foodName'>" + value2.foodName + "</label><label> Amount: </label>" +
                                        "<label class='foodAmount'>" + value2.foodAmount + "</label><button class='delete'>" +
                                        "Delete</button></div>");
                                }
                                if (value.mealType === "LUNCH") {
                                    $('.lunch').append("<div class='food'><label>Name: </label><label id='" + value2.id +
                                        "' class='foodName'>" + value2.foodName + "</label><label> Amount: </label>" +
                                        "<label class='foodAmount'>" + value2.foodAmount + "</label><button class='delete'>" +
                                        "Delete</button></div>");
                                }
                                if (value.mealType === "SNACK_II") {
                                    $('.snackII').append("<div class='food'><label>Name: </label><label id='" + value2.id +
                                        "' class='foodName'>" + value2.foodName + "</label><label> Amount: </label>" +
                                        "<label class='foodAmount'>" + value2.foodAmount + "</label><button class='delete'>" +
                                        "Delete</button></div>");
                                }
                                if (value.mealType === "DINNER") {
                                    $('.dinner').append("<div class='food'><label>Name: </label><label id='" + value2.id +
                                        "' class='foodName'>" + value2.foodName + "</label><label> Amount: </label>" +
                                        "<label class='foodAmount'>" + value2.foodAmount + "</label><button class='delete'>" +
                                        "Delete</button></div>");
                                }
                            });
                        }
                    });
                });
            }
        });
    }
    return {
        displayCalendar: showCalendar
    }
})();


