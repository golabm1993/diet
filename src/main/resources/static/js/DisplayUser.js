var exclamationMark = "!";

var userDisplayer = (function () {
    function addUserToPageContent(data) {
            $('.userData').append(data, exclamationMark);
    }

    return {
        addUserToPageContent: addUserToPageContent
    }
})();