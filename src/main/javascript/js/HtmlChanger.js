var HTMLChanger = (function () {
    return {
        callChangeHTML:
            function () {
            calendarDispatcher.displayCalendar();
            foodDispatcher.displayFood();
            popupDispatcher.displayPopup();
            mealDispatcher.saveMeal();
            deleteDispatcher.deletingFood();
        }
    }
})();

HTMLChanger.callChangeHTML();