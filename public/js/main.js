setInterval(changeBackground, 5000);

function changeBackground() {
    var array = [1, 2, 3, 4];
    if (window.innerWidth < 500) {
        array = [1, 2];
    }
    var bg = array[Math.floor(Math.random() * array.length)];
    var selector = 'bg' + bg;
    var posters = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg'];
    var existing_keys = [];

    $(".poster").not('.transparent').get().map(function (el) {
        existing_keys.push(el.src.replace(/^.*[\\\/]/, ''));
    });

    posters = posters.filter(function (el) {
        return existing_keys.indexOf(el) < 0;
    });

    var poster = posters[Math.floor(Math.random() * posters.length)];
    if ($('#' + selector + '-top').hasClass('transparent')) {
        $('#' + selector + '-top').attr("src", "assets/" + poster);
    } else {
        $('#' + selector + '-bottom').attr("src", "assets/" + poster);
    }
    $('#' + selector + '-top').toggleClass('transparent');
    $('#' + selector + '-bottom').toggleClass('transparent');
}

function btnUp(e) {
    console.log('up');
}

function btnDown() {
    console.log('down');
}

