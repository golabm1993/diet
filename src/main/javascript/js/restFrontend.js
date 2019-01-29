var HTMLchanger = (function () {
    $(document).ready(function () {
        var selectedDate = localStorage.getItem("selectedDate");

        if(selectedDate) {
            $('#calendar').datepicker('setDate', selectedDate);
        }
        localStorage.removeItem("selectedDate");
        var dateText = $("#calendar").datepicker({dateFormat: 'yyyy-mm-dd'}).val();
        $.get("http://localhost:8080/all/", function (data) {
            var mealDate;
            $.each(data, function (index, value) {
                if (value.mealTime == dateText) {
                    mealDate = dateText.toString();
                    $.each(value.food, function (index, value2) {
                        if (value.mealType === "BREAKFAST") {
                            $('.breakfast').append("<div class='food'><label>Name: </label><label id='" + value2.id +
                                "' class='foodName'>" + value2.foodName + "</label><label> Amount: </label>" +
                                "<label class='foodAmount'>" + value2.foodAmount + "</label><button class='delete'>" +
                                "-</button></div>");
                        }
                        if (value.mealType === "SNACK_I") {
                            $('.snackI').append("<div class='food'><label>Name: </label><label id='" + value2.id +
                                "' class='foodName'>" + value2.foodName + "</label><label> Amount: </label>" +
                                "<label class='foodAmount'>" + value2.foodAmount + "</label><button class='delete'>" +
                                "Delete</button></div>");
                        }
                        if (value.mealType === "LUNCH") {
                            $('.lunch').append("<div class='food'><label>Name: </label><label id='" + value2.id +
                                "' class='foodName'>" + value2.foodName + "</label><label> Amount: </label>" +
                                "<label class='foodAmount'>" + value2.foodAmount + "</label><button class='delete'>" +
                                "Delete</button></div>");
                        }
                        if (value.mealType === "SNACK_II") {
                            $('.snackII').append("<div class='food'><label>Name: </label><label id='" + value2.id +
                                "' class='foodName'>" + value2.foodName + "</label><label> Amount: </label>" +
                                "<label class='foodAmount'>" + value2.foodAmount + "</label><button class='delete'>" +
                                "Delete</button></div>");
                        }
                        if (value.mealType === "DINNER") {
                            $('.dinner').append("<div class='food'><label>Name: </label><label id='" + value2.id +
                                "' class='foodName'>" + value2.foodName + "</label><label> Amount: </label>" +
                                "<label class='foodAmount'>" + value2.foodAmount + "</label><button class='delete'>" +
                                "Delete</button></div>");
                        }
                    });
                }
            });
        });
    });

    $('#calendar').datepicker({
        dateFormat: 'yy-mm-dd',
        inline: true,
        firstDay: 1,
        showOtherMonths: true,
        dayNamesMin: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        onSelect: function (dateText, inst) {
            $('.food').remove();
            $.get("http://localhost:8080/all/", function (data, status) {
                var mealDate;
                $.each(data, function (index, value) {
                    if (value.mealTime == dateText) {
                        mealDate = dateText.toString();
                        $.each(value.food, function (index, value2) {
                            if (value.mealType === "BREAKFAST") {
                                $('.breakfast').append("<div class='food'><label>Name: </label><label id='" + value2.id +
                                    "' class='foodName'>" + value2.foodName + "</label><label> Amount: </label>" +
                                    "<label class='foodAmount'>" + value2.foodAmount + "</label><button class='delete'>" +
                                    "Delete</button></div>");
                            }
                            if (value.mealType === "SNACK_I") {
                                $('.snackI').append("<div class='food'><label>Name: </label><label id='" + value2.id +
                                    "' class='foodName'>" + value2.foodName + "</label><label> Amount: </label>" +
                                    "<label class='foodAmount'>" + value2.foodAmount + "</label><button class='delete'>" +
                                    "Delete</button></div>");
                            }
                            if (value.mealType === "LUNCH") {
                                $('.lunch').append("<div class='food'><label>Name: </label><label id='" + value2.id +
                                    "' class='foodName'>" + value2.foodName + "</label><label> Amount: </label>" +
                                    "<label class='foodAmount'>" + value2.foodAmount + "</label><button class='delete'>" +
                                    "Delete</button></div>");
                            }
                            if (value.mealType === "SNACK_II") {
                                $('.snackII').append("<div class='food'><label>Name: </label><label id='" + value2.id +
                                    "' class='foodName'>" + value2.foodName + "</label><label> Amount: </label>" +
                                    "<label class='foodAmount'>" + value2.foodAmount + "</label><button class='delete'>" +
                                    "Delete</button></div>");
                            }
                            if (value.mealType === "DINNER") {
                                $('.dinner').append("<div class='food'><label>Name: </label><label id='" + value2.id +
                                    "' class='foodName'>" + value2.foodName + "</label><label> Amount: </label>" +
                                    "<label class='foodAmount'>" + value2.foodAmount + "</label><button class='delete'>" +
                                    "Delete</button></div>");
                            }
                        });
                    }
                });
            });
        }
    });

    var mealType;

    $(function () {
        var appendthis = ("<div class='modal-overlay js-modal-close'></div>");
        $('button[data-modal-id]').click(function (e) {
            e.preventDefault();
            mealType = $(this).attr('id');
            $("body").append(appendthis);
            $(".modal-overlay").fadeTo(500, 0.7);
            var modalBox = $(this).attr('data-modal-id');
            $('#' + modalBox).fadeIn($(this).data());
        });
        $(".js-modal-close, .modal-overlay").click(function () {
            $(".modal-box, .modal-overlay").fadeOut(500, function () {
                $(".modal-overlay").remove();
            });
        });
        $(window).resize(function () {
            $(".modal-box").css({
                top: ($(window).height() - $(".modal-box").outerHeight()) / 2,
                left: ($(window).width() - $(".modal-box").outerWidth()) / 2
            });
        });
        $(window).resize();
    });

    $('#test').click(function () {
        var date = $("#calendar").datepicker("getDate");
        var newFood;
        var mealType2 = mealType;
        var food = new Array();
        var name = $('#popup').find('.name').val();
        var amount = $('#popup').find('.number').val();
        newFood = {foodName: name, foodAmount: amount};
        food.push(newFood);
        var date2 = new Date(date);

        // workaround
        date2.setHours(date2.getHours() - date2.getTimezoneOffset() / 60);

        $.ajax({
            url: 'http://localhost:8080/newMeal',
            dataType: "json",
            type: 'post',
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(
                {
                    "mealTime": date2,
                    "mealType": mealType2,
                    "food": food
                }),
            success: function () {
                location.reload();
            }
        });
    });

    $(document).on('click', '.delete', function (event) {
        var foodId = $(event.target).parent().find('.foodName').attr('id');
        $.ajax({
            url: 'http://localhost:8080/food/' + foodId,
            dataType: "json",
            type: 'DELETE',
            contentType: "application/json; charset=utf-8",
            success: function () {
                localStorage.setItem("selectedDate",$('#calendar').datepicker('getDate'));
                location.reload();
            }
        });
    });

    function displayData(className, value2) {
        return "$('." + className + "').append(" + "<div class='food'><label>Name: </label><label id='" + value2.id +
            "' class='foodName'>" + value2.foodName + "</label><label> Amount: </label>" +
            "<label class='foodAmount'>" + value2.foodAmount + "</label><button class='delete'>" +
            "Delete</button></div>";
    }
});