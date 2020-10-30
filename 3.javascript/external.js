 /*internal js*/
    /*alert is in comments we can change*
        alert('page is hacked')

    /*singleline cmts*/
    
    /*multi
    line 
    cmts
    */
    
    
    /*accessing elements
    remove comment to see the accelements output*/
    document.getElementById("accelements").innerHTML = "elements accessed"
    
    /*responding to click*/
        document.getElementById("button").onclick=function(){
            /*remove cmt symbols
            alert("button clicked")/*gives alert msg as button clicked*/
            document.getElementById("respond").innerHTML = "text changes sucessfully"
        }
    
    /*changing website content*/
        document.getElementById("button0").onclick=function(){
            document.getElementById("p1").innerHTML="The devloper is mr.jaikishore"
        }
        document.getElementById("button1").onclick=function(){
            document.getElementById("p2").innerHTML=document.getElementById("p2").innerHTML+"biryani"
            /*try + and = on above js script*/
        }
        document.getElementById("button2").onclick=function(){
            document.getElementById("p3").innerHTML="i think_" +document.getElementById("p3").innerHTML+".js"
        }
        document.getElementById("button3").onclick=function(){
            document.getElementById("empty").innerHTML="<h1>i think i love javascript<h1>"
        /*h1 tags can be used and try with some ex of tags*/
        }

    /*manuplating styles with js*/
        /* document.getElementById("style").onclick=function(){
             document.getElementById("style text").style.color="red"
        }
        /* or */
        /* document.getElementById("style").onclick=function(){
             document.getElementById("style text").style.fontSize="50px red"
        }
        /* or */
        document.getElementById("style").onclick=function(){
            document.getElementById("style text").style.display="none"
        /* remove cmts and see the results*/
        }

    /*disappearing circles*/
        document.getElementById("red-circle").onclick=function(){
            document.getElementById("red-circle").style.display="none"
        }
        document.getElementById("orange-circle").onclick=function(){
            document.getElementById("orange-circle").style.display="none"
        }
        document.getElementById("green-circle").onclick=function(){
            document.getElementById("green-circle").style.display="none"
        }

    /*variables*/
    /* var x=5
        alert(x) it alerts the value of x */
        document.getElementById("text-change").onclick=function(){
            /*alert("text changed")  remove cmt to see the result*/
            var textEntered=""
            textEntered=document.getElementById("textinsert").value
            /*alert(textEntered)*/
            document.getElementById("textappend").innerHTML=textEntered
        }

    /* arrays */
      /* var myArray = new Array()
        myArray[0]="apple"
        myArray[1]="chocolate"
        alert(myArray)
        console.log(myArray)
        var tweets=["pple","happy","sir"]
        tweets.push("sad")
        tewwts.splice(1,1) it will delete happy from the array
        tweets.splice(1,0,apple) it will add the apple in bw pple and happy
        tweets.splice(1,1,"apple","keep") it will replace happy whin is inside the string
        alert(tweets)
        console.log(tweets)
       */

    /* if stratements */
        /*var x=1
        if (x == 1){ if x is 1 it shows x is 1
            alert(" x is 1") if statement defines x==1 true
        }else{  if defined x==1 , x=4 it is false
            alert("x is not 1") if x has an other value it shows x is not 1
        }  example of if state ment*/

        document.getElementById("enter").onclick=function(){
            var nameEntered=document.getElementById("name").value
            /*alert(nameEntered)*/
            var name="jaikishore"
            if(nameEntered == name){
                alert("jaikishore is defined")
            }else{
                alert("jaikishore is not defined")
            }
        }

    /* js game : how many fingers*/
        //alert(Math.floor(Math.random()*5))
        document.getElementById("Enter").onclick=function(){
            var randomNumber = Math.random()
            randomNumber = randomNumber *6
            randomNumber = Math.floor(randomNumber)
            if (document.getElementById("Name").value==randomNumber){
                alert("well done")
            }else{
                alert("sorry! try again")
            }
        }

    /*loops */
        /*for(i=0; i<5; i++){
            alert(i)
        }increase loop*/ 
        /*for(i=5; i>0; i--){
            alert(i)
        }decrease loop*/
        /*var tweets=["hi","how","are","you","jai"]
        for(var i=0; i<tweets.length;i++){
            alert(tweets[i])
        }array loop*/
        var tweetString= ""
        var tweets=["hi","how","are","you","jai"]
        for(var i = 0; i < tweets.length; i++){
            //alert(tweets[i])
            tweetString = tweetString +"<p>"+tweets[i]+"</p>"
        document.getElementById("tweets").innerHTML=tweetString
        //display on screen
        }

    /* while loop */
       // var tweetString=""
       // var tweets=["hi","mr",".","x","&","y"]
       // var i = 0
       // while (i<tweets.length){
       //alert(tweets[i])
       // tweetString = tweetString +"<p>"+tweets[i]+"</p>"
       //i++
       //document.getElementById("tweet").innerHTML=tweetString
       //display on screen
       //similar like loops but divides seperately
       // }

       document.getElementById("guess").onclick=function(){
           var myNumber = document.getElementById("mynumber").value
           var gotIt = false
           var numberOfGuesses =1
           while(gotIt == false){
           var guess = Math.random()
           guess = guess*6
           guess = Math.floor(guess)
           if(guess == myNumber){
               gotIt = true
               alert("got it" + guess + "it took" + numberOfGuesses + "guesses")
               //computer is correct
           }else{
               numberOfGuesses++
               //computer is wrong
           }
        }
        }

        /* functions */
       /* function alertMe(){
            alert("hai JK")
        }
        alertMe()*/
        /*function average(a ,b){
                return ((a + b) / 2)
        }
        var x = 5
        var y = 13
        alert(average(x , y))*/
        /*function add(a,b){
            return a+b
        }
        var x = 5
        var y = 5
        alert(add(x,y))*/
        function myGuess(correctAnswer){
            var guess = Math.random()
           guess = guess*6
           guess = Math.floor(guess)
           if(guess == correctAnswer){
               return(true)
           }else{
               return(false)
           }
        }
        document.getElementById("guess").onclick=function(){
           var myNumber = document.getElementById("mynumber").value
           var gotIt = false
           var numberOfGuesses =1
           while(gotIt == false){
           var guess = Math.random()
           guess = guess*6
           guess = Math.floor(guess)
           if(myGuess(myNumber) == true){
               gotIt = true
               alert("got it" + myNumber + "it took" + numberOfGuesses + "guesses")
               //computer is correct
           }else{
               numberOfGuesses++
               //computer is wrong
           }
        }
        }


        /*javascript project - reaction tester*/
        var start = new Date().getTime()
        function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
        function makeShapeAppear(){
            var top = Math.random()*400
            var left = Math.random()*400
            var right = Math.random()*400
            var bottom = Math.random()*400
            var width = Math.random()*300
            var height = Math.random()*300
            if (Math.random()>0.5){
                document.getElementById("shape").style.borderRadius = "50%"
            }else{
                document.getElementById("shape").style.borderRadius="0"
            }
            document.getElementById("shape").style.backgroundColor=getRandomColor()
            document.getElementById("shape").style.width=top+"px"
            document.getElementById("shape").style.height=top+"px"
            document.getElementById("shape").style.top=top+"px"
            document.getElementById("shape").style.left=top+"px"
            document.getElementById("shape").style.right=top+"px"
            document.getElementById("shape").style.bottom=top+"px"
            document.getElementById("shape").style.display="block"
            start = new Date().getTime()
        }
        function appearAfterDelay(){
            setTimeout(makeShapeAppear,Math.random*(2000))
        }
        appearAfterDelay()
        document.getElementById("shape").onclick= function(){
            document.getElementById("shape").style.display="none" 
            var end = new Date().getTime()
            var timeTaken = (end-start)/1000
            document.getElementById("timeTaken").innerHTML=timeTaken+"seconds"
           // makeShapeAppear()//it will appear the shape continously
           appearAfterDelay()
        }