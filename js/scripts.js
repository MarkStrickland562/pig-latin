var pigLatin = function(sentence) {
  var sentenceArray = sentence.split(" ");
  var finishedSentence = "";
  sentenceArray.forEach(function(word){
    if(word.toUpperCase().replace(/[A-Z]/g, '') != ""){
      finishedSentence += word + " ";
    }
    else if (word.length === 1 && word.toUpperCase().match(/[AEIOU]/) != null) {
      finishedSentence += word + "way ";
    }
    else if (word.toUpperCase().match(/[AEIOU]/) === null &&
             word.toUpperCase().match(/[Y]/) != null){
      finishedSentence += word.substring(word.toUpperCase().indexOf("Y"), word.length) +  word.substring(0, word.toUpperCase().indexOf("Y")) + "ay ";
    }
    else if(word.charAt(0).toUpperCase().match(/[AEIOU]/) === null){
      for(var i = 1; i < word.length; i++){
        var partWord;
        if(word.charAt(i).toUpperCase().match(/[AEIOU]/) != null){
          if(word.charAt(i - 1).toUpperCase() === "Q" && word.charAt(i).toUpperCase() === "U"){
            partWord = word.substring(i + 1, word.length) + word.substring(0, i + 1) + "ay ";
            finishedSentence += partWord;
            break;
          }
          else{
            partWord = word.substring(i, word.length) + word.substring(0, i) + "ay ";
            finishedSentence += partWord;
            break;
          }
        }
      }
    }
    else if (word.charAt(0).toUpperCase() === "Y") {
      finishedSentence += word.substring(1, word.length) + "yay ";
    }
  });
  return finishedSentence;
}

$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();

    var sentence = $("input#sentence").val();
    var result = pigLatin(sentence);
    $("#result").text(result);
	});
});
