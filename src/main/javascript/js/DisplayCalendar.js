var calendarDispatcher = (function () {

    function showCalendar() {
        $('#calendar').datepicker({
            dateFormat: 'yy-mm-dd',
            inline: true,
            firstDay: 1,
            showOtherMonths: true,
            dayNamesMin: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            onSelect: function (dateText) {
                $('.food').remove();
                foodGetter.getFood(dateText);
            }
        });
    }

    return {
        displayCalendar: showCalendar
    }
})();


