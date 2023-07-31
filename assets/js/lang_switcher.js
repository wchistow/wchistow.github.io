function switchLangFromRuToEn() {
    var curUrl = document.location.href
    document.location.href = curUrl.replace('wchistow.github.io/ru', 'wchistow.github.io/en')
}

function switchLangFromEnToRu() {
    var curUrl = document.location.href
    document.location.href = curUrl.replace('wchistow.github.io/en', 'wchistow.github.io/ru')
}


$('document').ready(function() {
    $('select #en').click(switchLangFromRuToEn)
    $('select #ru').click(switchLangFromEnToRu)
})
