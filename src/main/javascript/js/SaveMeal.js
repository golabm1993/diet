var mealSaver = (function () {

    // function newFood(food) {
    //     return "<div class='food'><label>Name: </label><label id='" + food.id +
    //         "' class='foodName'>" + food.foodName + "</label><label> Amount: </label>" +
    //         "<label class='foodAmount'>" + food.foodAmount + "</label><button class='delete'>" +
    //         "Delete</button></div>";
    // }

    function init() {
        $('.saveButton').click(function () {
            var meal = {
                mealType: popupDisplayer.mealType(),
                mealDate: new Date($("#calendar").datepicker("getDate")),
                foodName: $('#popup').find('.name').val(),
                foodAmount: $('#popup').find('.number').val(),
                foodList: new Array()
            };

            meal.foodList.push({foodName: meal.foodName, foodAmount: meal.foodAmount});

            // workaround
            meal.mealDate.setHours(meal.mealDate.getHours() - meal.mealDate.getTimezoneOffset() / 60);

            var data =
                JSON.stringify(
                    {
                        "mealTime": meal.mealDate,
                        "mealType": meal.mealType,
                        "food": meal.foodList
                    });

            ajaxRequest.run('POST', '', data, function (data) {

                foodDisplayer.addFoodToPageContent(meal, data.food[0]);
            });
        });
    }

    return {
        init: init
    }
})();

$(document).ready(function () {
    mealSaver.init();
});