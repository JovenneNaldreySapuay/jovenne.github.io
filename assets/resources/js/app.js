var $j = jQuery.noConflict();

/**
* Text effect
*/
$j('.text').typed({
    strings: ["a web designer.", "a web developer.", "a coding teacher.", "Jovenne."],
    typeSpeed: 25,
    callback: function(){
        initShowText();
    }
});

function initShowText(){
    $j('.hero-text').addClass('show-text');
}