var foodDispatcher = (function () {
    function showFood() {
        $(document).ready(function () {
        var selectedDate = localStorage.getItem("selectedDate");

        if(selectedDate) {
            $('#calendar').datepicker('setDate', selectedDate);
        }
        localStorage.removeItem("selectedDate");
        var dateText = $("#calendar").datepicker({dateFormat: 'yyyy-mm-dd'}).val();
        $.get("http://localhost:8080", function (data) {
            console.log("test");
            var mealDate;
            $.each(data, function (index, value) {
                if (value.mealTime == dateText) {
                    mealDate = dateText.toString();
                    $.each(value.food, function (index, value2) {
                        if (value.mealType === "BREAKFAST") {
                            console.log("test");
                            $('.breakfast').append("<div class='food'><label>Name: </label><label id='" + value2.id +
                                "' class='foodName'>" + value2.foodName + "</label><label> Amount: </label>" +
                                "<label class='foodAmount'>" + value2.foodAmount + "</label><button class='delete'>" +
                                "-</button></div>");
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
        });
    }
    return {
        displayFood: showFood
    }
})();