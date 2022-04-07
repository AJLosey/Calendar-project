$("#current-time").text(
    moment().format("dddd")
);

var thisHour = moment().hour();

var h9 = $("#9");
var h10 = $("#10");
var h11 = $("#11");
var h12 = $("#12");
var h13 = $("#13");
var h14 = $("#14");
var h15 = $("#15");

$(".description").each(function () {
    console.log($(this).attr("id"));
    $(this).val(localStorage.getItem($(this).attr("id")));
});

if (thisHour < 9) {
    $("#9").addClass("future")
};
if (thisHour == 9) {
    $("#9").addClass("preset")
};
if (thisHour > 9) {
    $("#9").addClass("past")
};

if (thisHour < 10) {
    $("#10").addClass("future")
};
if (thisHour == 10) {
    $("#10").addClass("preset")
};
if (thisHour > 10) {
    $("#10").addClass("past")
};

if (thisHour < 11) {
    $("#11").addClass("future")
};
if (thisHour == 11) {
    $("#11").addClass("preset")
};
if (thisHour > 11) {
    $("#11").addClass("past")
};

if (thisHour < 12) {
    $("#12").addClass("future")
};
if (thisHour == 12) {
    $("#12").addClass("preset")
};
if (thisHour > 12) {
    $("#12").addClass("past")
};

if (thisHour < 13) {
    $("#13").addClass("future")
};
if (thisHour == 13) {
    $("#13").addClass("preset")
};
if (thisHour > 13) {
    $("#13").addClass("past")
};

if (thisHour < 14) {
    $("#14").addClass("future")
};
if (thisHour == 14) {
    $("#14").addClass("preset")
};
if (thisHour > 14) {
    $("#14").addClass("past")
};

if (thisHour < 15) {
    $("#15").addClass("future")
};
if (thisHour == 15) {
    $("#15").addClass("preset")
};
if (thisHour > 15) {
    $("#15").addClass("past")
};

$(".saveBtn").on("click", function () {
    localStorage.setItem($(this).siblings(".description").attr("id"), $(this).siblings(".description").val())
});
