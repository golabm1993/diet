var foodGetter = (function () {

    function newFood(food) {
        return "<div class='food'><label>Name: </label><label id='" + food.id +
            "' class='foodName'>" + food.foodName + "</label><label> Amount: </label>" +
            "<label class='foodAmount'>" + food.foodAmount + "</label><button class='delete'>" +
            "Delete</button></div>";
    }

    function getFood(dateText) {
        $.get("http://localhost:8080", function (data) {
            var mealDate;
            $.each(data, function (index, meal) {
                if (meal.mealTime == dateText) {
                    mealDate = dateText.toString();
                    $.each(meal.food, function (index, food) {
                        if (meal.mealType === "BREAKFAST") {
                            $('.breakfast').append(newFood(food));
                        }
                        if (meal.mealType === "SNACK_I") {
                            $('.snackI').append(newFood(food));
                        }
                        if (meal.mealType === "LUNCH") {
                            $('.lunch').append(newFood(food));
                        }
                        if (meal.mealType === "SNACK_II") {
                            $('.snackII').append(newFood(food));
                        }
                        if (meal.mealType === "DINNER") {
                            $('.dinner').append(newFood(food));
                        }
                    });
                }
            });
        });
    }

    return {
        getFood: getFood
    }
})();