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
	'what the heck is it?',
	'this fun coloured one… I can’t wait for the day',
	'you ready for this',
	'whaaaaaat?!',
	'were gonna write this in ES6, is that okay?',
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
	'scoot',
	'that badboy',
	'hit me with a pwd',
	'get cider, get footer',
	'loopyloop',
	'there are so many names of things',
	'dive into the loop',
	'it\'s like solving a dungeons and dragons problem',
	'no? nah, it’s cool whatever',
	'sorry, texting my mom',
	'oh that\'s my mom calling',
	'lets add an image, whoa I\'m so excited',
	'I\'m gonna write a book on that I think',
	'doo doo',
	'an array!',
	'* hand claps *',
	'password very strong, 10/10, would use again',
	'lets connect this badboy up',
	'let\’s connect all this bad stuff up! I don\'t know what that meant',
	'should have cleaned out my downloads, feel so bad',
	'anyone like this jam?',
	'crushed it',
	'... no? ... okay ... MOVING ON',
	'lets google "how often do babies barf?"',
	'he did go pretty hog on that bottle',
	'BLAMO',
	'clap clap clap clap clap',
	'badboy',
	'WILDCARD!',
	'woof woof, woof woof',
	'now, we\'re saying fat, but is he just jacked?',
	'swole, swole, alright swole',
	'ALRIGHT let\'s go get rraaaaaameeeeennnn',
	'*clap*',
	'👏🏻',
	'👏🏻',
	'👏🏻',
	'👏🏻',
	'*clap*',
	'*clap*',
	'*clap*',
]

//plus konami code for ryan vid

// create array to store sentences
var paragraph = ['Ryan ipsum ',];
var allParagraphs = [];

function sentenceConstruct() {
	ryanIpsum.quotes.sort(function() { 
		return 0.1 - Math.random(); 
	});
	var sentences = ryanIpsum.quotes.slice(0,3).join(' ')+'. ';
	// run function based on 'size' value and store sentences in paragraph array
	paragraph.push(sentences);
};

// sentenceConstruct() needs to run as many times as size's value and return one paragraph of different sentences.
function paragraphSize(size, number) {
	// console.log(size);
	var woof = size * number;
	for (var i = 1; i <= woof; i++) {
		console.log('hell world');
		sentenceConstruct();
	}
	var i,j,temparray;
	for (i=0,j=paragraph.length; i<j; i+=size) {
	    temparray = paragraph.slice(i,i+size).join('');
	    allParagraphs.push(temparray);
	}
}


const colours = [
	'#FF0000',
	'#FF7F00',
	'#FFFF00',
	'#00FF00',
	'#0000FF',
	'#4B0082',
	'#8F00FF'
]

function colourLoop(colours) {
	setInterval(function() {
		for (const colour of colours) {
			$('h1').velocity({
				color: colour
			});
		}
	});
}



$(function() {
	colourLoop(colours);

	$('form').submit(function(e) {
		e.preventDefault();
		const number = parseInt($('select#number option:selected').val());
		const size = parseInt($('select#size option:selected').val())*3;
		$('.ipsumResult').css('display','block');
		$('form').fadeOut();
		console.log(size);
		console.log(number);
		paragraphSize(size, number);
		$('.ipsum').html('<p>' + allParagraphs + '</p>');
	});

	$('.again').on('click', function(){
		location.reload(true);
	});

	var clipboard = new Clipboard('.copy');

});