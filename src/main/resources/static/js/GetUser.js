var userGetter = (function () {

    function initUserName() {

        ajaxRequest.run('GET', '/user', '', 'text', function (data) {
            userDisplayer.addUserToPageContent(data);
        });
    }

    return {
        initUserName: initUserName
    }
})();

$(document).ready(function () {
    userGetter.initUserName();
});