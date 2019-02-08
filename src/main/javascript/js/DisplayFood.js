var foodDisplayer = (function () {
    function showFood() {
        $(document).ready(function () {
            var selectedDate = localStorage.getItem("selectedDate");

            if (selectedDate) {
                $('#calendar').datepicker('setDate', selectedDate);
            }
            localStorage.removeItem("selectedDate");
            var dateText = $("#calendar").datepicker({dateFormat: 'yyyy-mm-dd'}).val();
            foodGetter.getFood(dateText);
        });
    }

    return {
        displayFood: showFood
    }
})();