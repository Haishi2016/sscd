var lexicon = require('./data/lexicon/lexicon-0.json');

function tokenize(statement) {
    var tokens = statement.split(" ");
    var words = [];
    for (var i in tokens) {
        var word = findWord(lexicon, tokens[i]);
        if (!word)
            return;
        else
            words.push(word);
    }
    return words;
}

function findWord(json, word) {
    word = word.toLowerCase();
    var word = json.words.find(item => item.id == word || item.alias.indexOf(word)>=0);
    return word;   
}

function parseWords(words) {
    if (words.length != 2)
        return;
    if (words[0].type == "predicate" && words[1].type == "object")
        return {
            "predicate": words[0].id,
            "object": words[1].id
        };
    else if (words[0].type == "object" && words[1].type == "predicate")
        return {
            "predicate": words[1].id,
            "object": words[0].id
        };
    else 
        return;
}
module.exports = {
    parse: function(statement) {
        console.log(statement);
        var words = tokenize(statement);
        if (!words || words.length == 0)
            return;
        return parseWords(words);        
    }
}