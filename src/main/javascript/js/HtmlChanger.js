var HTMLChanger = (function () {
    return {
        initApp:
            function () {
                calendarDispatcher.displayCalendar();
                foodDisplayer.displayFood();
                popupDisplayer.displayPopup();
            }
    }
})();
$(document).ready(function () {
    HTMLChanger.initApp();
});