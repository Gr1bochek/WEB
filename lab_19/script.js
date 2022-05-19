//zavd 1
$('a[href ^= "https://"]').attr('target', '_blank');

//Завдання 2
$('h2.head').css('background-color', '#00ff00');
$('h2.head>.inner').css('font-size', '35px');

//zavd 3
function swap() {
    let divs = $("h3+div");
    let headers = $("h3");

    headers.each((index, header) =>
        divs.eq(index)
            .insertBefore(header)
    );
    $('#button1').attr('disabled', true);
}

//zavd 4
let checkboxes=$('input[type = "checkbox"]');

checkboxes.on('change', function () {
    if (checkboxes.filter(':checked').length === 3) {
        checkboxes.attr('disabled', true);
    }
});