jQuery(function() {
    var
        result_outptut = jQuery("#revenue span"),
        revenue = 0,
        click = 5000,
        convers = 20;
        Math.round(revenue);

    function recount() {
        revenue = ((click / 100) * convers);
        Math.round(revenue);
        result_outptut.html(revenue);
    };

    $(document).on("change keyup", "#amount", function() {
        click = +$(this).val();
        $("#slider-range-min").slider("value", click);
        recount();
    });
    $(document).on("change keyup", "#amount2", function() {
        convers = +$(this).val();
        $("#slider-range-min2").slider("value", convers);
        recount();
    });
});


$(function() {
    $("#slider-range-min").slider({
        range: "min",
        value: 5000,
        min: 0,
        max: 6000,
        step: 1000,
        slide: function(event, ui) {
            $('#amount').val(ui.value).trigger("change");
        }
    });
    $("#amount").val($("#slider-range-min").slider("value"));
});

$(function() {
    $("#slider-range-min2").slider({
        range: "min",
        value: 20,
        min: 0,
        max: 30,
        step: 5,
        slide: function(event, ui) {
            $("#amount2").val(ui.value).trigger("change");
        }
    });
    $("#amount2").val($("#slider-range-min2").slider("value"));
});

