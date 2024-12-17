const idArray = [];

$('.video-list-slider').on('click', '.more', function () {
    var id = $(this).attr('href');
    if (!isValidId(id)) {
        console.error("Invalid ID:", id);
        return;
    }
    $('.popup_outer').removeClass('active');
    $('body').addClass('active_popup');
    $(id).addClass('active');
    let playerUUID = $(id).find('.vidyard-player-container').attr('uuid');
    let imagePath = $(id).find('.img img');
    let source = $(imagePath).attr('data-src');
    let playContainerID = id.split('_');
    let playerID = "pid_" + playContainerID[1];

    if (playerUUID) {
        var players = VidyardV4.api.getPlayersByUUID(playerUUID);
        players.forEach(player => {
            if (player.placeholder.classList.contains(playerID)) {
                player.play();
            }
        });
    } else if (source && isValidUrl(source)) {
        $(imagePath).attr('src', source);
    } else {
        console.error("Invalid or missing source:", source);
    }
});

$('.popup_container').on('click', '.close_popup', function () {
    $('body').removeClass('active_popup');
    $('.popup_outer').removeClass('active');
    var playerUUID = $(this).parent().find('.vidyard-player-container').attr('uuid');
    var closePath = $(this).parent().find('.img img');
    var parentID = $(this).parent().parent().attr('id');
    let playContainerID = parentID ? parentID.split('_') : [];
    let playerID = "pid_" + (playContainerID[1] || '');

    if (playerUUID) {
        var players = VidyardV4.api.getPlayersByUUID(playerUUID);
        players.forEach(player => {
            if (player.placeholder.classList.contains(playerID)) {
                player.pause();
            }
        });
    } else {
        $(closePath).removeAttr('src');
    }
});

$('.more').click(function () {
    $('.popup_outer').addClass('active');
});
