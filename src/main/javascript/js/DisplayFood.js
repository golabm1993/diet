var foodDisplayer = (function () {
    function showFood() {
        $(document).ready(function () {
            var selectedDate = localStorage.getItem("selectedDate");

            if (selectedDate) {
                $('#calendar').datepicker('setDate', selectedDate);
            }
            localStorage.removeItem("selectedDate");
            var dateText = $("#calendar").datepicker({dateFormat: 'yyyy-mm-dd'}).val();
            foodGetter.initFoodList(dateText);
        });
    }

    function newFood(food) {
        return "<div class='food'><label>Name: </label><label id='" + food.id +
            "' class='foodName'>" + food.foodName + "</label><label> Amount: </label>" +
            "<label class='foodAmount'>" + food.foodAmount + "</label><button class='delete'>" +
            "Delete</button></div>";
    }

    function addFoodToPageContent(meal, data) {
        if (meal.mealType === "BREAKFAST") {
            $('.breakfast').append(newFood(data));
        }
        if (meal.mealType === "SNACK_I") {
            $('.snackI').append(newFood(data));
        }
        if (meal.mealType === "LUNCH") {
            $('.lunch').append(newFood(data));
        }
        if (meal.mealType === "SNACK_II") {
            $('.snackII').append(newFood(data));
        }
        if (meal.mealType === "DINNER") {
            $('.dinner').append(newFood(data));
        }
    }

    return {
        displayFood: showFood,
        addFoodToPageContent: addFoodToPageContent
    }
})();