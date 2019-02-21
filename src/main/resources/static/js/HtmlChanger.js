var HTMLChanger = (function () {
    return {
        initApp:
            function () {
                userDisplayer.addUserToPageContent();
                calendarDispatcher.showCalendar();
                foodDisplayer.displayFood();
                popupDisplayer.displayPopup();
            }
    }
})();
$(document).ready(function () {
    HTMLChanger.initApp();
});
