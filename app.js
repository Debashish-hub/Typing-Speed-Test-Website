const setOfWords = [
	"ASCII stupid question, get stupind ANSI.",
	"What did the JAVA code say to C code? A: You have no class.",
	"Hardware: The part of a computer you can kick."
];

const msg = document.getElementById('msg');
var typedWords = document.getElementById('mywords');
const btn = document.getElementById('btn');
let startTime, endTime;


const playGame = () =>{
	let randomNumber = Math.floor(Math.random()*setOfWords.length);
	msg.innerText = setOfWords[randomNumber];
	let date = new Date();
	startTime = date.getTime();
	btn.innerText = "Done";
}

const endPlay = () =>{
	let date = new Date();
	endTime = date.getTime();
	let totalTime = Math.round(((endTime - startTime)/ 1000));

	let totalStr = typedWords.value;
	let wordCount = wordCounter(totalStr);

	let speed = Math.round((wordCount / totalTime) * 60);

	let finalMsg = "Total Time : "+totalTime+ " seconds  WPM : " +speed+ "  ";

	finalMsg += compareWords(msg.innerText, totalStr);
	finalMsg += "\n \n 𝘗𝘭𝘦𝘢𝘴𝘦 𝘳𝘦𝘧𝘳𝘦𝘴𝘩 𝘵𝘩𝘦 𝘱𝘢𝘨𝘦 𝘵𝘰 𝘴𝘵𝘢𝘳𝘵 𝘢𝘨𝘢𝘪𝘯"
	msg.innerText = finalMsg;
}

const compareWords = (str1, str2) =>{
	let words1 = str1.split(" ");
	let words2 = str2.split(" ");
	let count = 0;

	words1.forEach(function (item, index) {
		if(item == words2[index]){
			count++;
		}
	})

	let accuracy = Math.round(((count / words1.length) * 100));
	return ("Accuracy : " +accuracy+ "% ");
}

const wordCounter = (str) =>{
	let response = str.split(" ").length;
	return response;
}

function clearContents(element) {
  element.value = '';
}

// function reset() {
//     if (!typedWords.value || typedWords.value != typedWords.defaultValue && confirm("Do You Want to get your results?")) {
//         typedWords.value = typedWords.defaultValue;
//     }
// }

btn.addEventListener('click', function(){
	if(this.innerText == 'Start'){
		typedWords.disabled = false;
		playGame();
	}else if(this.innerText == "Done"){
		typedWords.disabled = true;
		btn.innerText = "Start";
		endPlay();
	}
})