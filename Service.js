
	var vocabulary = [
	"a","i","k","u","y","ai","am","an","as","at",
  "be","by","dj","do","eh","eq","ew","go","ha","he",
  "hi","if","in","is","it","jk","me","my","no","of",
  "oh","ok","on","or","so","to","thank you","up","us","we",
  "ya","aah","act","add","age","all","and","any","are","ask",
   "bad","big","bit","biz","box","but","buy","can","cdj","cry",
  "cut","day","dev","dry","eat","end","eye","faq","fat","few",
  "fit","fix","fly","for","gap","get","god","her","him","his",
  "how","ifs","its","job","joy","key","kit","law","lie","lol",
  "man","map","max","mix","may","net","new","nil","not","now",
  
  "off","one","out","own","pad","pen","pin","qua","rig","say",
  "see","she","sky","the","tie","too","top","try","two","ups",
  "use","vet","vox","was","way","web","who","why","win","ecstasy",
  "xxx","yes","yet","you","zen","away","base","back","bare","best",
  "bite","both","burn","call","care", "case","coin","cool","cost","down",
  "draw","drop","dust","each","earn","else","even","ever","exec","face",
  "fail","fear","feel","fill","first","fold","form","from","fund","game",
  "gift","give","good","grow","hand","hate","have","help","hold","hope",
  "hurt","idle","join","jump","just","keep","kill","know","land","last",
  "lead","like","list","lock","lose","love","make","many","mark","mean",
	
	"meet","mind","miss","more","most","move","name","near","need","only",
  "open","over","pair","part","pass","pull","push","quit","read","rest",
  "ride","rule","rush","said","save","shop","show","slow","some","stay",
  "step","stop","such","take","talk","tell","test","than","that","then",
  "they","this","tool","true","turn","type","undo","very","view","wait",
   "walk","want","were","what","when","will","with","wire","word","work",
  "xing","yall","zero","about","above","after","again","along","angle","block",
  "board","break","build","carry","catch","chase","class","clean","clear","climb",
  "close","count","cover","crash","cross","dance","dirty","dream","drive","empty",
  "equal","exact","fault","fever","fight","floor","force","front","group","hurry",
  
  "issue","judge","known","leave","light","lower","model","never","offer","order",
  "other","paper","party","people","piece","place","plane","plant","point","power",
  "press","price","prize","quiet","quota","reach","reply","right","round","serve",
  "shade","shake","shape","share","shine","short","shout","small","sound","space",
  "spend","stand","start","still","study","taste","their","there","think","title",
  
  "total","touch","trust","voice","visit","waste","watch","water","where","which",
  "woman","worry","would","write","wrong"
  ];
var synth = window.speechSynthesis;
function synthpulse() {
		var varray = new Uint16Array(1);
		var vcode = Math.floor(Math.random()*256*256);
		if(vcode<3650){
			var utterance = new SpeechSynthesisUtterance(vocabulary[vcode%365]);
			synth.speak(utterance);
		//chrome.tts.speak(vocabulary[vcode%365]);
		
			
			
		}
};


