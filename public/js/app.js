$(document).ready(function () {
    console.log("ready")
    var Red, Green, Blue;

    $('#R').on("change mousemove", function () {
        Red = $(this).val();
        $("#r").html(Red)
    });

    $('#G').on("change mousemove", function () {
        Green = $(this).val();
        $("#g").html(Green)

    });

    $('#B').on("change mousemove", function () {
        Blue = $(this).val();
        $("#b").html(Blue);
    });

})