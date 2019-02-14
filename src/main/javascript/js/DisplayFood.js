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
            $('#BREAKFAST').before(newFood(data));
        }
        if (meal.mealType === "SNACK_I") {
            $('#SNACK_I').before(newFood(data));
        }
        if (meal.mealType === "LUNCH") {
            $('#LUNCH').before(newFood(data));
        }
        if (meal.mealType === "SNACK_II") {
            $('#SNACK_II').before(newFood(data));
        }
        if (meal.mealType === "DINNER") {
            $('#DINNER').before(newFood(data));
        }
    }

    return {
        displayFood: showFood,
        addFoodToPageContent: addFoodToPageContent
    }
})();