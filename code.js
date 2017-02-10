//
// this is just a stub for a function you need to implement
//
function getStats(txt) {
    return {
        nChars: nChars(txt),
        nWords: nWords(txt),
        nLines: nLines(txt),
        nNonEmptyLines: nNonEmptyLines(txt),
        averageWordLength: averageWordLength(txt),
        maxLineLength: maxLineLength(txt),
        palindromes: palindrome(txt),
        longestWords: longestWords(txt),
        mostFrequentWords: mostFrequentWords(txt)
    };
}

function nChars(txt){
    var words=txt.split("\n");
    var counter=0;
    for(w in words){
        counter=words[w].length+counter;
    }

    return counter;
}

function nWords(txt){
    var words=txt.split(/[^a-zA-Z0-9'-]/g);

    var w;
    var num=0;
    for (w in words){
        if(words[w].length!=0)
            num+=1;
    }
    return num;
}

function nLines(txt) {
    if(txt.length===0){
        return 0;
    }
    var lines=txt.split('\n');
    return lines.length;
}

function nNonEmptyLines(txt){
    var lines=txt.split('\n');
    var result=0;
    var l;
    for(l in lines){
        //starts with an alphanumeric
        if(lines[l].trim().match(/^[A-Za-z0-9]/)){
            result+=1;
        }
    }
    return result;
}

function averageWordLength(txt) {
    var words=txt.split(/[^a-zA-Z0-9'-]/);
    var lengths;
    var empty=0;
    var w;
    var wordAvg = 0;
    for (w in words){
        if (words[w].length===0)
            empty+=1;
        else
            wordAvg += words[w].length;
    }
    var avgLen = wordAvg / (words.length-empty);
    return avgLen;
}

function maxLineLength(txt){
    var line=txt.split("\n");
    var l;
    var max=0;
    for (l in line){
        if(line[l].length>max){
            max=line[l].length;
        }
    }
    return max;
}

function palindrome(txt) {
    var words=txt.toLowerCase().split(/[^a-zA-Z0-9'-]/g);
    var w;
    var pal=[];
    for (w in words){
        if(words[w].length<3){
            continue
        }

        var reverse='';
        for (var i = words[w].length - 1; i >= 0; i--)
            reverse += words[w][i];

        if (!words[w].localeCompare(reverse))
            pal.push(words[w]);
    }
    return pal;
}

function longestWords(txt) {
    var words=txt.toLowerCase().split(/[^a-zA-Z0-9'-]/g);
    words.sort();
    var longest=0;
    var theLongest=[];
    var theLongestChar=[];

    var finalLongest=[];

    for (w in words){
        if (theLongest.indexOf(words[w])==-1) {
            theLongest.push(words[w]);
            theLongestChar.push(words[w].length);
        }
    }


    while (finalLongest.length<10){
        var max = Math.max.apply(null,theLongestChar);
        var index = theLongestChar.indexOf(max);
        if(index===-1){
            break;
        }
        else{
            if(theLongest[index]===""){
                theLongest.splice(index, 1);
                theLongestChar.splice(index, 1);
            }
            else {
                finalLongest.push(theLongest[index]);
                theLongest.splice(index, 1);
                theLongestChar.splice(index, 1);
            }
        }

    }

    return finalLongest;
}

function mostFrequentWords(txt) {
    var words=txt.toLowerCase().split(/[^a-zA-Z0-9'-]/g);
    words.sort();

    var mostFeq=[];
    var uniqueWords=[];
    var uniqueWordsFreq=[];
    var wordCount=0;
    var curentWord="";
    for (w in words){
        if(words[w].length===0) {
            continue;
        }
        else{
            if (words[w] === curentWord) {
                wordCount += 1;
            }
            else {
                uniqueWords.push(curentWord);
                uniqueWordsFreq.push(wordCount);
                curentWord = words[w];
                wordCount = 1;
            }
        }

    }
    uniqueWords.push(curentWord);
    uniqueWordsFreq.push(wordCount);

    while(mostFeq.length<10){
        var max = Math.max.apply(null,uniqueWordsFreq);
        var index = uniqueWordsFreq.indexOf(max);
        if(index===-1){
            break;
        }
        else {
            if(uniqueWords[index]===""){
                uniqueWords.splice(index, 1);
                uniqueWordsFreq.splice(index, 1);
            }
            else{
                mostFeq.push(uniqueWords[index]+'('+uniqueWordsFreq[index]+')');
                uniqueWords.splice(index, 1);
                uniqueWordsFreq.splice(index, 1);
            }
        }
    }

    return mostFeq;
}
