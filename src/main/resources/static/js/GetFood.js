var foodGetter = (function () {

    function initFoodList(dateText) {
        ajaxRequest.run('GET', '/meal', '', function (data) {
            var mealDate;
            $.each(data, function (index, meal) {
                if (meal.mealTime == dateText) {
                    mealDate = dateText.toString();
                    $.each(meal.food, function (index, food) {
                        foodDisplayer.addFoodToPageContent(meal, food);
                    });
                }
            });
        });

    }

    return {
        initFoodList: initFoodList
    }
})();

$(document).ready(function () {
    foodGetter.initFoodList();
});