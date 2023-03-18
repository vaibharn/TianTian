$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "../content/test.csv",
    dataType: "text",
    success: function(data) {
      processData(data);
    }
  });
});


const word_box = document.getElementById('word_list')

function processData(allText) {
  var allTextLines = allText.split(/\r\n|\n/);
  
  for (var i = 1; i < allTextLines.length; i++) {
    var data = allTextLines[i].split(',');
    console.log(data)
    var iDiv = document.createElement('div');
    iDiv.id = data[0];
    iDiv.className = 'word-box mt-3';
    word_box.appendChild(iDiv);
  }
}

