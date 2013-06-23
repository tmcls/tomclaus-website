function lifePercentage(a, b, c, d) {
    var e = percentageTime(a, b, c, 2);
    var f = absoluteTime(a, b);
    $(".life-stats .days span").html(f.days);
    $(".life-stats .percentage span").html(e + "%")
}

function percentageTime(a, b, c, d) {
    var e = c.getTime() - a.getTime();
    var f = b.getTime() - a.getTime();
    var g = c.getTime() - b.getTime();
    var h = (f / e * 100).toFixed(d);
    return h
}

function absoluteTime(a, b) {
    var c = b.getTime() - a.getTime();
    var d = {
        years: Math.floor(c / 1e3 / 60 / 60 / 24 / 365),
        days: Math.floor(c / 1e3 / 60 / 60 / 24),
        hours: Math.floor(c / 1e3 / 60 / 60),
        minutes: Math.floor(c / 1e3 / 60),
        seconds: Math.floor(c / 1e3),
        milliseconds: a.getTime() - b.getTime()
    };
    return d
}

function loadNotes() {
    $.ajax({
        type: "GET",
        url: "/js/timeline-notes.json",
        dataType: "json",
        error: function (a) {},
        success: function (a) {
            var a = a;
            timelineSetup(a)
        }
    })
}

function timelineSetup(a) {
    $("#about #progress-bar-container .knotch").remove();
    $("#about #progress-bar-container .notes").empty();
    containerWidth = parseInt($("#about #progress-bar-container").width());
    progressWidth = containerWidth - 140;
    notesWidth = progressWidth - 30;
    $("#about .progress-bar").css({
        width: progressWidth
    });
    $("#about .progress-bar .notes").css({
        width: notesWidth
    });
    $("#about").css("overflow", "visible");
    addNotes(a)
}

function addNotes(a) {
    results = a;
    var b = "";
    for (var c = 0; c < results.notes.note.length; c++) {
        b += "<li";
        if (c % 2 == 0) {
            b += ' class="top"'
        } else {
            b += ' class="bottom"'
        }
        b += ">";
        b += '<div class="caption">';
        b += '<div class="arrow"></div>';
        b += '<h4 class="heading">' + results.notes.note[c].title + "</h4>";
        b += '<p class="date">' + results.notes.note[c].date + "<p>";
        b += '<p class="description">' + results.notes.note[c].description + "</p>";
        b += "</div>";
        b += "</li>"
    }
    $("#about .progress-bar .notes").prepend(b);
    $("#about .progress-bar .notes li").each(function () {
        var a = new Date($(this).find(".date").html());
        var b = percentageTime(birth, a, present, 20);
        var c = $(".progress-bar .notes").width();
        var b = c * (b / 100) - 14;
        var d = c - 120;
        if (parseInt(b) > d) {
            var e = parseInt(b) - d;
            $(this).find(".caption").css({
                left: -e
            });
            $(this).find(".caption .arrow").css({
                left: e + 10
            })
        } else {}
        $(this).css("left", b);
        if ($(this).attr("class") == "top") {
            var f = $(this).find(".caption").height();
            $(this).find(".caption").css("top", -f - 30)
        }
    });
    for (var d = 0; d < a.notes.note.length; d++) {
        var e = '<span class="knotch ';
        if (d % 2 == 0) {
            e += "top"
        } else {
            e += "bottom"
        }
        e += '">';
        e += '<p class="date">' + a.notes.note[d].date + "</p>";
        e += "</span>";
        $("#about .progress-bar").prepend(e)
    }
    $("#about .progress-bar .knotch").each(function () {
        var a = new Date($(this).find(".date").html());
        var b = percentageTime(birth, a, present, 20);
        var c = $(".progress-bar .notes").width();
        var b = c * (b / 100) - 7;
        $(this).css("left", b)
    });


    $("#about .progress-bar .notes li.bottom").on("mouseenter singletap", function () {
        $(this).animate({
            top: 24
        }, 200, function () {
            $(this).find(".caption").stop(true, true).fadeIn(200)
        })
    }).on("mouseleave", function () {
        $(this).stop(true, true).find(".caption").stop(true, true).delay(200).fadeOut(400, function () {
            $(this).parents("li").animate({
                top: 30
            }, 200)
        })
    });
    $("#about .progress-bar .notes li.top").on("mouseenter singletap", function () {
        $(this).animate({
            top: -48
        }, 200, function () {
            $(this).find(".caption").stop(true, true).fadeIn(200)
        })
    }).on("mouseleave", function () {
        $(this).stop(true, true).find(".caption").stop(true, true).delay(200).fadeOut(400, function () {
            $(this).parents("li").animate({
                top: -55
            }, 200)
        })
    });
}
var birth = new Date("1988/12/12 10:00:00");
var present = new Date;
var death = new Date("2073/06/02 12:00:00");
$(document).ready(function () {
    lifePercentage(birth, present, death, 10);
    loadNotes()
});
$(window).resize(function () {
    loadNotes()
})