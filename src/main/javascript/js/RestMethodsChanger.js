var RESTMethods = (function () {
    return {
        callRestMethods:
            function () {
                foodGetter.getFood();
                mealSaver.saveMeal();
                deleter.deletingFood();
            }
    }
})();
$(document).ready(function () {
    RESTMethods.callRestMethods();
});