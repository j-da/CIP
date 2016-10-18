'use strict';
var me = '',
    om = '';
var now = new Date();
var nma = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function d2(i) {
    return (i < 10 ? "0" + i : i);
}

function updateNow() {
    now = new Date();
    $('#time').html('&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <span class="icon">T</span>&nbsp;' + d2(now.getHours()) + ':' + d2(now.getMinutes()));
    setTimeout('updateNow()', 30000);
}
$.urlParam = function(name) {
    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return (results ? results[1] : null);
};
$(document).ready(function() {
    $('.yes-js').show().removeClass('yes-js');
    $('.no-js').hide();
    $('#date').html('<span class="icon">D</span>&nbsp' + d2(now.getDate()) + '&nbsp;' + nma[now.getMonth()]);
    updateNow();

    $.getJSON('data/messages.js', function(datam) {
        console.log('working');
        me = '<div class="row">';
        console.log('working2');
        $.each(datam.messages, function(i, it) {
            var z = it.icon;
            var j = (z === '~' ? 'red' : (z === '+' ? 'green' : 'orange'));
            var t = (it.title ? it.title : 'Note:');
            var c = it.body;
            var p = it.pill;
            me += '<div class="span1 ilf"><h3><span class="' + j + ' icon">' + z + '</span>' + t + '</h3><p>' + (p ? '<span class="label label-inverse">' + p + '</span>' : '') + ' ' + c + '</p></div>';
            console.log('workingloop');
        });
        console.log('working3');
        me += '</div>';
        console.log('working4');
        $('#os').html(me);

        if ($.urlParam('q') !== null) {
            var gotgs, gotl = false;
            var q = decodeURIComponent(($.urlParam('q')).replace(/\+/g, '%20'));
            $('#q').attr('placeholder', q);
            $.getJSON('https://www.googleapis.com/customsearch/v1?key=AIzaSyCHBxc5LHk1-OGwMvOfoCEufMI_R2ZWP6c&cx=009668512034893213500:y20bzwtk0jc&num=5&q=' + encodeURI(q) + '&callback=?', function(datag) {
                if (!datag.error) {
                    gotgs = true;
                    om = '';
                    $.each(datag.items, function(i, it) {
                        var v = it.displayLink;
                        var u = it.link;
                        var t = it.title;

                        om += '<li><a href="' + u + '">' + t + '</a> <span class="shy">(' + v + ')</span></li>';
                    });
                    om += '<li>+ ' + datag.searchInformation.formattedTotalResults + ' pages; <a href="http://google.co.uk/search?q=' + datag.queries.request[0].searchTerms + '">view more Google results.</a></div>';
                } else {
                    om = '<li>There was an error getting results from google: ' + datag.error.code + ' / ' + datag.error.message + '</li>';
                }
                $('#google').html(om);
                $.getJSON('data/links.js', function(datal) {
                    var om = '';
                    $.each(datal.links, function(i, it) {
                        var u = it.link;
                        var t = it.name;
                        var s = it.subj;
                        if (t.toLowerCase().indexOf(q.toLowerCase()) !== -1 || s.toLowerCase().indexOf(q.toLowerCase()) !== -1) {
                            om += '<li><a href="' + u + '">' + t + '</a> <span class="shy">(' + s + ')</span></div>';
                        }
                    });
                    om += '<li><span class="shy">...and that is all.</span></li>';
                    $('#local').html(om);
                    $('#searcht').html(q);
                    $('#r').slideDown('slow');
                });
            });
        }
    }).error(function(ono){$('#os').html(ono.responseStatus + " " + ono.responseText);});
});

$('.close').click(function() {
    $('#r').slideUp('slow');
});