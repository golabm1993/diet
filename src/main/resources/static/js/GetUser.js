var userGetter = (function () {

    function initUserName() {

        ajaxRequest.run('text', 'GET', '/user', '', function (data) {
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