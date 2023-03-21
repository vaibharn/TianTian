

var dataset;
var curr = 0;
var corr = 0;
var incorr = 0;
var prev = [];

d3.tsv("../content/test.tsv", function(data){
   dataset=data;
   });

const wrong = document.getElementById('wrong');
const undo = document.getElementById('undo');
const correct = document.getElementById('correct');

var chinese_large = document.getElementById('chinese-text');
var chinese_small = document.getElementById('chinese-text-small');
var pinyin = document.getElementById('pinyin-text-small');
var meaning = document.getElementById('english-meaning-small');
var chinese_sentence = document.getElementById('chinese-sentence');
var pinyin_sentence = document.getElementById('pinyin-sentence');
var english_sentence = document.getElementById('english-sentence');

correct.addEventListener('click',()=>{
    console.log('correct')
    for (var i = curr+1;i<dataset.length;i++){
        if (i == dataset.length - 1){
            i = 0;
        }
        if (dataset[i].Status == ""){
            dataset[i].Status = "Learnt"
            prev.push(curr)
            curr = i;
            break;
        }
    }
    update(curr);
})

wrong.addEventListener('click',()=>{
    console.log('incorrect')
    for (var i = curr+1;i<dataset.length;i++){
        if (i == dataset.length - 1){
            i = 0;
        }
        if (dataset[i].Status == ""){
            dataset[i].Status = "Incorrect"
            prev.push(curr)
            curr = i;
            break;
        }
    }
    update(curr);
})

undo.addEventListener('click',()=>{
    console.log('undo')
    if (prev.length > 0){
        dataset[curr].Status = ""
        curr = prev.pop()
        update(curr);
    }
})

function update(i){
    console.log(dataset[i])
    if (dataset[i].Chinese.length == 1) {
        chinese_small.style.fontSize = "220px";
        chinese_large.style.fontSize = "220px";

    } else if (dataset[i].Chinese.length == 2) {
        chinese_small.style.fontSize = "150px";
        chinese_large.style.fontSize = "150px";

    } else if (dataset[i].Chinese.length == 3) {
        chinese_small.style.fontSize = "100px";
        chinese_large.style.fontSize = "100px";

    }
    chinese_large.innerHTML=dataset[i].Chinese;
    chinese_small.innerHTML=dataset[i].Chinese;
    pinyin.innerHTML=dataset[i].Pinyin;
    meaning.innerHTML=`Meaning: ${dataset[i].Meaning}`;
    chinese_sentence.innerHTML=dataset[i].Sentence;
    pinyin_sentence.innerHTML=dataset[i].Sentence_Pinyin;
    english_sentence.innerHTML=dataset[i].Sentence_English;

}