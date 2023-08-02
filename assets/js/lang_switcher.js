function setUp() {
    var url = document.location.href
    var select = $('div#lang-choosing select')
    if (url.includes('wchistow.github.io/ru')) {
        select.val('ru').change()
    } else if (url.includes('wchistow.github.io/en')) {
        select.val('en').change()
    }
}

function switchLangFromRuToEn() {
    var curUrl = document.location.href
    document.location.href = curUrl.replace('wchistow.github.io/ru', 'wchistow.github.io/en')
}

function switchLangFromEnToRu() {
    var curUrl = document.location.href
    document.location.href = curUrl.replace('wchistow.github.io/en', 'wchistow.github.io/ru')
}


$('document').ready(function() {
    setUp()
    $('select #en').click(switchLangFromRuToEn)
    $('select #ru').click(switchLangFromEnToRu)
})
