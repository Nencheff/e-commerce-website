$(document).ready(function () {
    var productsList = [];
    var categoriesList = [];
    var articlesList = [];
    $.getJSON('./js/search_suggestions.json', function (data) {
        $.each(data, function (key, value) {
            if (key == 'keywords') {
                productsList = value;
            } else if (key == 'categories'){
                categoriesList = value;
            } else {
                articlesList = value;
            }
        });
    });
    // printing arrays
    //setTimeout(function() {
    //    console.log( productsList );
    //    console.log( categoriesList );
    //    console.log( articlesList );
    //}, 1000);
    $('#search-box-input').keyup(function(n) {
        var searchFieldValue = $(this).val().toLowerCase();
        matchingWord(searchFieldValue, productsList, ".keywords_list");
        matchingWord(searchFieldValue, categoriesList, ".category_list");
        matchingWord(searchFieldValue, articlesList, ".article_list");
        if ($('#search-box-input').val().length === 0) {
            $('#result ul').empty().parent('div').hide();
            $('#result').hide();
            $('.btn-clear-search').hide();
        } else {
            $('#result').show('slow');
            $('.btn-clear-search').show();
        };
    });
});
function matchingWord (keyword, source, target) {
    $(target).empty();
    for (var i = 0; i < source.length; i++) {
        if ($(target).has('li').length == 0) {
            $(target).parent('div').hide();
        } else {
            $(target).parent('div').show();
        };
        if (source[i].toLowerCase().indexOf(keyword) >= 0) {
            $(target).append("<li><a href='\/q=" + source[i] + "'>" + source[i] + "</a></li>");
        };
    }
}
