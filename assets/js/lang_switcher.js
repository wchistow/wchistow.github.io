function setUp() {
    let url = document.location.href
    let select = $('div#lang-choosing select')
    if (url.includes('wchistow.github.io/ru')) {
        select.val('ru').change()
    } else if (url.includes('wchistow.github.io/en')) {
        select.val('en').change()
    }
}

function changeLang() {
    let curUrl = document.location.href
    if ($(this).val() === 'en') {
        document.location.href = curUrl.replace('wchistow.github.io/ru', 'wchistow.github.io/en')
    } else {
        document.location.href = curUrl.replace('wchistow.github.io/en', 'wchistow.github.io/ru')
    }
}

$('document').ready(function() {
    setUp()
    $('select').change(changeLang)
})
