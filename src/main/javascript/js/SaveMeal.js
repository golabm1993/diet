var mealSaver = (function () {
    function addMeal() {
        $('.saveButton').click(function () {
            var meal = {
                mealType: popupDispatcher.mealType(),
                mealDate: new Date($("#calendar").datepicker("getDate")),
                foodName: $('#popup').find('.name').val(),
                foodAmount: $('#popup').find('.number').val(),
                foodList: new Array()
            };

            meal.foodList.push({foodName: meal.foodName, foodAmount: meal.foodAmount});

            // workaround
            meal.mealDate.setHours(meal.mealDate.getHours() - meal.mealDate.getTimezoneOffset() / 60);

            $.ajax({
                url: 'http://localhost:8080',
                dataType: "json",
                type: 'post',
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(
                    {
                        "mealTime": meal.mealDate,
                        "mealType": meal.mealType,
                        "food": meal.foodList
                    }),
                success: function () {
                    location.reload();
                }
            });
        });
    }

    return {
        saveMeal: addMeal
    }
})();