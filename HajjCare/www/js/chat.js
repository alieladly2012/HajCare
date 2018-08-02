/*Chat*/
$(function () {
    $('.chat-input').keypress(function (ev) {
        var p = ev.which;
        var chatTime = moment().format("h:mm");
        var chatText = $('.chat-input').val();
        if (p == 13) {
            if (chatText == "") {
                alert('Empty Field');
            } else {
                $('<li class="clearfix"><div class="chat-avatar"> <img src="images/user.png" alt="male" width="40" height="42"><i>' + chatTime + '</i></div><div class="conversation-text"><div class="ctext-wrap"><i>John Carry</i><p>' + chatText + '</p></div></div></li>').appendTo('.conversation-list');
            }
            $(this).val('');
            $('.conversation-list').scrollTo('100%', '100%', {
                easing: 'swing'
            });
            return false;
            ev.epreventDefault();
            ev.stopPropagation();
        }
    });


    $('.chat-send .btn').click(function () {
        var chatTime = moment().format("h:mm");
        var chatText = $('.chat-input').val();
        if (chatText == "") {
            alert('Empty Field');
            $(".chat-input").focus();
        } else {
            $('<li class="clearfix"><div class="chat-avatar"> <img src="images/user.png" alt="male" width="40" height="42"><i>' + chatTime + '</i></div><div class="conversation-text"><div class="ctext-wrap"><i>John Carry</i><p>' + chatText + '</p></div></div></li>').appendTo('.conversation-list');
            $('.chat-input').val('');
            $(".chat-input").focus();
            $('.conversation-list').scrollTo('100%', '100%', {
                easing: 'swing'
            });
        }
    });
});