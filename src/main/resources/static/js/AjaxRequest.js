var ajaxRequest = (function () {

    function run(requestType, uri, data, successHandler) {
        $.ajax({
            url: 'http://localhost:8080' + uri,
            dataType: "json",
            type: requestType,
            contentType: "application/json; charset=utf-8",
            data: data,
            success: successHandler
        });
    }

    return {
        run: run
    }
})();