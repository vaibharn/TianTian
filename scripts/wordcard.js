$.ajax({
    url: "../content/test.csv",
    async: false,
    success: function (csvd) {
        data = $.csv.toArrays(csvd);
    },
    dataType: "text",
    complete: function () {
        // call a function on complete 
    }
});

function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1]
        }
    }
}

function GetCurrentWord()
{
    var word = decodeURIComponent(GetURLParameter('word'));
    for (var i=1; i < data.length; i++)
    {
        if (data[i][0] == word)
        {
            return data[i]
        }
    }
    return 0
}

var curr = GetCurrentWord()
const wordchinese = document.getElementById("wordcard-chinese");
const wordcard = document.getElementById("wordcard")
wordchinese.innerHTML = curr[0];

if (curr[0].length == 1) {
    wordchinese.style.fontSize = "220px";
} else if (curr[0].length == 2) {
    wordchinese.style.fontSize = "150px";
} else if (curr[0].length == 3) {
    wordchinese.style.fontSize = "100px";
}
document.getElementById("wordcard-pinyin").innerHTML = curr[1];
document.getElementById("wordcard-meaning").innerHTML = `Meaning:  ${curr[2]}`;

document.getElementById("goback").onclick = function () {
    location.href = "/TianTian/search/";
};