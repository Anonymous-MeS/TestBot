/*var express=require('express');
var bodyParser = require('body-parser');
var expressSession=require("express-session");

var app=express();
app.set('view engine','ejs');
app.use('/assets',express.static('assets'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',function(req,res){
		res.sendFile(__dirname+'/index.html')
});

app.get('/login',function(req,res){
	res.sendFile(__dirname+'/LoginForm.html');
});

app.get('/taketest/:id',function(req,res){
	var q=[["a","b"],["c","d"]];
	var id=parseInt(req.params.id);
	var arr=q[id];
	//res.send({'data':'heie'});
	res.sendFile(__dirname+'/botindex.html');
})
app.get('/courses',function(req,res){
	res.sendFile(__dirname+'/courses.html');
});

app.post('/getresponse',function(req,res){
	console.log("req body--"+req.body.str);
	res.send({'data':'heie'});
})

app.get('/regForm', function(req,res){
	res.sendFile(__dirname+'/RegForm.html');
})

app.listen(7008);
console.log('listening...!!! port 7008');
*/
var express=require('express');
var bodyParser = require('body-parser');
var expressSession=require("express-session");
var mysql = require('mysql');

var app=express();
app.set('view engine','ejs');
app.use('/assets',express.static('assets'));
app.use(bodyParser.urlencoded({ extended: true }));

var icourse;
var result=0;

app.get('/',function(req,res){
		res.sendFile(__dirname+'/index.html')
});

app.get('/login',function(req,res){
	res.sendFile(__dirname+'/LoginForm.html');
});

app.get('/taketest/:id',function(req,res){
	icourse =parseInt(req.params.id);
	res.sendFile(__dirname+'/botindex.html');
	
})
app.get('/courses',function(req,res){        
	res.sendFile(__dirname+'/courses.html');
});

app.post('/getresponse',function(req,res){
        var count=req.body.count;
       	console.log("req body--"+req.body.str+" count: "+count);
       var q=[["1)Which of the following is used to create Web Page? a)CSS b)HTML c)DTD d)None","2)HTML Stands for _____________ a)Hyper Text Markup Language b)Hyper Text Makeup Language c)Both d)None","3)Page Designed in HTML is called as ________a)Front page b)Web page c)Blank page d) Undefined","4)HTML is platform independent a)True b)False ",
       "5)In order to write HTML code we need to have active internet connection, Are you agree with this statement. a)YES b)NO ","6)A webpage displays a picture. What tag was used to display that picture?a)picture b)imagec)img d)src",
       "7) Choose the correct HTML tag to make a text bold? a)\<b\> b)\<bold\> c)\<bb\> d)\<bld\>","8)What is the correct HTML for adding a background color?a. <body color=\”yellow\”> b. <body bgcolor=\”yellow\”> c. <background>\"yellow\"</background> d. <body background=\”yellow\”>","9)What does vlink attribute mean? a. visited link b. virtual link c. very good link d. active link",
       "10)The _____ character tells browsers to stop tagging the text a.\ ? b. \ / c. \ > d.\ %","11)There are ____ different of heading tags in HTML a )4 b) 5 c)6 d) 7","12)Which of the following tag is used to link the URL. a)<Hyperlink> b)<a> c)<href> d)All","13)Following tag Stands for - <a> a)Active Tag b)Anchor Tag c)Action Tag d)Additional Tag ","14)URL in HTML stands for ____________ a)Uni Resource Locatorb)Uniform Resource Locator c)Universal Resource Locator d)None","15)________ attribute is used to specify MIME type of linked document ? a)Rev Attributeb)Type Attribute  c)Media Attribute d)MIME Attribute"],
        [" 	1)_______________ is the complex of mental characteristics that makes each of us unique from other people.a)heredity b)emotional tone c)personality ","2) Our personalities developed as a result of _____________a)genetic inheritance b)environmental influences c)both of the above ","3) Which of the following things can have an effect on the development of an individual's personality? a)physical and mental capabilities b)health and physical appearance c)skin color, gender, and sexual orientation d)all of the above ","4) In China, children are usually taught to _________ a)think and act independently of other family members b)be self-reliant rather than dependent on other family members c)think and act as a member of their family and to suppress their own wishes when they are in conflict with the needs of the family d)a and b e)none of the above ","5) Which of the following statements is true?a) 	Ruth Benedict argued that national personality types do not exist.b) 	We often share personality traits with others, especially members of our own family and community. c) 	The term modal personality refers to the personality traits shared by all members of a society. d) 	b and c ","6)Which of the following is not a characteristic of a Protestant Work Ethic? a) hard work b)high in delay of gratification c)do not value leisure d)spend a lot of money e)none of the above ","7)A ____ word is used instead of noun a)Pronoun b)Verb c)Adverb d)Proposion","8)It is possible to communicate using the single way process a)True b)False","9)___________ context refers to the relationship between the sender and the receiver  a) social b)physical c)cultural d) chronological","10) Our dress code is an example of ________communication.a)Verbal b)Spoken c)Non-verbal d)None"],
       ["1)Which of these best describes an array?a) A data structure that shows a hierarchical behavior b) Container of objects of similar types c) Container of objects of mixed types d) All of the mentioned","2)How do you initialize an array in C? a) int arr[3] = (1,2,3) b) int arr(3) = {1,2,3} c) int arr[3] = {1,2,3} d) int arr(3) = (1,2,3)","3)When does the ArrayIndexOutOfBoundsException occur? a) Compile-time b) Run-time c) Not an error d) None of the mentioned","4)What are the advantages of arrays? a) Easier to store elements of same data type b) Used to implement other data structures like stack and queue c) Convenient way to represent matrices as a 2D array d) All of the mentioned","5)What is the time complexity of inserting at the end in dynamic arrays? a) O(1) b) O(n) c) O(logn) d) Either O(1) or O(n)","6)What is the time complexity to count the number of elements in the linked list? a) O(1) b) O(n)c) O(logn) d) None of the mentioned","7)what is stack ? a)FIFO b)LIFO c)Both d)None ","8)What is the space complexity for deleting a linked list? a)O(1) b)O(n)c)Either O(1) or O(n) d) O(logn)",
       "9)Process of inserting an element in stack is called ____________ a) Create b) Push c) Evaluation d) Pop",
       "10)In a stack, if a user tries to remove aIn element from empty stack it is called _________a) Underflow b) Empty collection c) Overflow d) Garbage Collection",
       "11)The data structure required for Breadth First Traversal on a graph is? a) Stack b) Arrayc) Queue d) Tree",
       "12) A data structure in which elements can be inserted or deleted at/from both the ends but not in the middle is? a) Queue b) Circular queue c) Dequeue d) Priority queue",
       "13)Which data structure can be used suitably to solve the Tower of Hanoi problem? a) Tree b) Heap c) Priority queue d) Stack",
       "13)What is the number of moves required in the Tower of Hanoi problem for k disks? a) 2k – 1 b) 2k + 1 c) 2k + 1 d) 2k – 1"],
       ["1)What is class?a) member of the classb) associate of the classc) attribute of the classd) instance of the class",
       "2)CPP follows...a)top down approachb)bottom up approach c)None",
       "3)What is this operator called ?: ?a) conditionalb) relationalc) casting operatord) none ",
       "4)Which reference modifier is used to define reference variable?a) &b) $c) #d) none ",
       "5)Which value we cannot assign to reference?a) integerb) floatingc) unsignedd) null",
       "6)How many objects can present in a single class?a) 1b) 2 c)3 d) as many as possible",
       "7)Which special character is used to mark the end of class?a) ;b) :c) #d) $",
       "8)Which keyword is used to declare the friend function?a) firend b) friends c) classfriend d) myfriend",
       "9)Where does keyword friend should be placed?a) function declarationb) function definitionc) main functiond) none ",
       "10)Which keyword is used to define the user defined data types?a) defb) unionc) typedefd) type",
       "11)Which operator is used to signify the namespace?a) conditional operator b) ternary operatorc) scope operatord) none",
       "12)Which keyword is used to access the variable in namespace?a) usingb) dynamicc) constd) static",
       "13)Which is also called as abstract class?a) virtual functionb) pure virtual functionc) derived classd) none",
       "14)Which operator works only with integer variables?a) increment b) decremenc) both increment & decrementd) none ",
       "15)Which is used to tell the computer that where a pointer is pointing to?a) dereference b) reference c) heap operationsd) none"],
       ["1)Which of following data types is not in C?a)int b)bool c)both d)none","2)Which of the following are storage classes in C? a)auto b)extern c)register d)static e)all",
       "3)What will be the output of the following program? #include <stdlib.h> #include <stdio.h> enum {false, true}; int main(){int i = 1;do{printf(\"%d \", i);i++;if (i < 15)continue;} while (false);getchar();return 0; a)1 b)2 c)3 d)4 ",
       "4)What is the output of this C code?#include <stdio.h>int main(){int c = 2 ^ 3;printf(\"%d\", c);} a)1 b)2 c)3 d)none","5)How many types of arithmetic operators in C?List the number a)1 b)2 c)3 d)4","6) Can we use string value/variable in switch test condition? a)yes b)no","7)What in C++ is similar to stdin in C?a)cin b)cout","8)Which library provides utility functions: atoi, atol ? a)stdlib b)stdbool c)stdio d)none","You are done"],
       ["1)Which of following data types is not in C?a)int b)bool c)both d)none","2)Which of the following are storage classes in C? a)auto b)extern c)register d)static e)all",
       "3)What will be the output of the following program? #include <stdlib.h> #include <stdio.h> enum {false, true}; int main(){int i = 1;do{printf(\"%d \", i);i++;if (i < 15)continue;} while (false);getchar();return 0; a)1 b)2 c)3 d)4 ",
       "4)What is the output of this C code?#include <stdio.h>int main(){int c = 2 ^ 3;printf(\"%d\", c);} a)1 b)2 c)3 d)none","5)How many types of arithmetic operators in C?List the number a)1 b)2 c)3 d)4","6) Can we use string value/variable in switch test condition? a)yes b)no","7)What in C++ is similar to stdin in C?a)cin b)cout","8)Which library provides utility functions: atoi, atol ? a)stdlib b)stdbool c)stdio d)none","You are done"]]; 


        var arr=q[icourse]

        var ans=[["b","a","b","a","b","c","a","d","a","c","c","b","b","b","b"],["c","c","d","c","b","d","a","b","a","b","c"],
        		  ["b","c","b","d","d","b","b","a","b","a","c","c","c","d","d"],["d","b","a","a","d","d","a","a","a","c","c","a","b","c","a"],
        		  ["d","e","a","c","b","b","a","a"],["d","e","a","c","b","b","a","a"]]

        if(count>0||count<ans[icourse].length)
        {
        	var answer= ans[icourse][count-1];
        	if(answer==req.body.str)
        		result++;
        }
        if(count==ans[icourse].length)
        {
        	var tmp=result;
        	result=0;
        	var str="Result is "+tmp+" out of "+ ans[icourse].length+" ";
        	res.send({'data': str});
        }

	res.send({'data': arr[count]});

})

app.get('/regForm', function(req,res){
	res.sendFile(__dirname+'/RegForm.html');
})


// Old Entry.js



var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Bot1"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  });

app.get('/login',function(req,res){
	res.sendFile(__dirname+'/LoginForm.html');
});

app.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html');
});

/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  });*/

app.get('/regForm', function(req,res){
	res.sendFile(__dirname+'/index.html');
})


app.post('/submitaction', function(req,res){
	console.log(req.body.u_name+" "+req.body.f_name+" "+req.body.l_name+" "+req.body.email+" "+req.body.year+" "+req.body.branch+" "+req.body.clg+" "+req.body.psw);
	var sql = "insert into student (u_name,f_name,l_name,email,year,branch,clg,psw) values ?";
	var values = [
	[req.body.u_name,req.body.f_name,req.body.l_name,req.body.email,req.body.year,req.body.branch,req.body.clg,req.body.psw]
	];
	con.query(sql, [values], function (err, result) {
		if (err) throw err;
		console.log("Number of records inserted: " + result.affectedRows);
	});
	res.sendFile(__dirname+'/LoginForm.html');
});



app.post('/loginAction', function(req,res){
	console.log('Hii baby');
	con.query('SELECT * FROM student WHERE u_name = ?', [req.body.uname], function (err, rows) {
  	if (err) 
  	{
  		return done(err);
  	}
});
	res.sendFile(__dirname+'/courses.html');
});





// itha paryant
app.listen(7008);
console.log('listening...!!! port 7008');