var HTMLChanger = (function () {
    return {
        initApp:
            function () {
                calendarDispatcher.showCalendar();
                foodDisplayer.displayFood();
                popupDisplayer.displayPopup();
            }
    }
})();
$(document).ready(function () {
    HTMLChanger.initApp();
});