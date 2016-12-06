var ryanIpsum = {};

ryanIpsum.quotes = [
	'scoot', 
	'woof', 
	'oopsy doodle',
	'milk, bread, cheese',
	'international coffee time',
	'very important time',
	'art', 
	'just like how the call is coming from inside the apartment',
	'rude monkey tho',
	'full hog',
	'angry threatened swan',
	'wheres the bears',
	'woof indeed!',
	'bonkers',
	'NAILED IT!',
	'git it?',
	'do a clearfix on that badboy',
	'doo dod o oooo dooolooo',
	'we made a boo boo',
	'kids on the bench, waiting for the cheese',
	'What the heck is it?',
	'this fun coloured one… I can’t wait for the day',
	'you ready for this',
	'whaaaaaat?!',
	'were gonna write this in es6, is that okay?',
	'baaaaahbel... baybel?',
	'people call it es6 forever and always',
	'jumping the gun',
	'six in one, half a dozen in the other',
	'this hotdogs really come through today',
	'and there will be no fanfare because that’s how the command line treats you',
	'git collabo',
	'*fart noise* oops hit the wrong button',
	'welcome to the danger zone',
	'neato',
	'burgunday',
	'there’s a wave in this screen',
	'blamo',
	'hit me with a pwd',
	'Get cider, get footer',
	'loopyloop',
	'THERE ARE SO MANY NAMES OF THINGS',
	'dive into the loop',
	'it’s like solving a dungeons and dragons problem',
	'no? nah, it’s cool whatever',
	'sorry, texting my mom',
	'oh that\'s my mom calling',
	'lets add an image, whoa I’m so excited',
	'I\'m gonna write a book on that I think',
	'doo doo',
	'an array!',
	'* hand claps *',
	'password very strong, 10/10, would use again',
	'lets connect this badboy up',
	'let\’s connect all this bad stuff up! I dont know what that meant',
	'should have cleaned out my downloads, feel so bad',
	'anyone like this jam?',
	'crushed it',
	'...no? ... okay... MOVING ON',
	'lets google "how often do babies barf?"',
	'he did go pretty hog on that bottle',
	'BLAMO',
	'clap clap clap clap clap',
	'badboy',
	'WILDCARD!'
]

//plus konami code for ryan vid


//http://jsfiddle.net/gabrieleromanato/khx7w/
//https://github.com/f/loremjs/blob/master/lorem.js
//https://gist.github.com/rviscomi/1479649
//http://dev-notes.com/code.php?q=37


const number = parseInt($('.num').val());
const size = parseInt($('.size').val())*3;

//basically the HTML range slider is useless to get the correct value, so we need to use either http://jqueryui.com/slider/ or http://rangeslider.js.org/

function sentenceConstruct() {
	ryanIpsum.quotes.sort(function() { 
		return 0.2 - Math.random(); 
	});
	const sentences = ryanIpsum.quotes.slice(0,3).join(' ')+'.';
	return sentences;
};

//length of paragraph
function paragraphSize() {
	console.log(size);
	for (var i = i; i <= size; i++) {
		console.log(size);
		console.log(i);
		sentenceConstruct(i);
	}
}

//number of paragraphs
function paragraphNumber() {
	for (var i = i; i <= number; i++) {
		paragraphSize(i);
	}
}

$(function() {
	$('form').submit(function(e) {
		e.preventDefault();
		console.log(size);
		console.log(number);
		// $('.ipsumResult').html(ryanIpsum.text);
	});
});