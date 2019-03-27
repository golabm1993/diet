var ajaxRequest = (function () {

    function run(requestType, uri, data, dataType, successHandler) {
        $.ajax({
            url: 'http://localhost:8080/diet' + uri,
            dataType: dataType,
            type: requestType,
            contentType: "application/json; charset=utf-8",
            data: data,
            success: successHandler,
            error: function (data) {
                console.log(data);
            }
        });
    }

    return {
        run: run
    }
})();