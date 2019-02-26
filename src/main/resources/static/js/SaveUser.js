var userSaver = (function () {
    function init() {
        ajaxRequest.run('POST', '/user', '', 'json', function (data) {
        });
    }

    return {
        init: init
    }
})();

$(document).ready(function () {
    userSaver.init();
});