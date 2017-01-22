 //function to load results
    function loadXMLDoc() {
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == XMLHttpRequest.DONE ) { 
           if (xmlhttp.status == 200) {
               var text=xmlhttp.responseText;
               localStorage.setItem("myData", text);
               // Retrieve
               text2=localStorage.getItem("myData");                   
               obj = JSON.parse(text2);
               var title= "";
               for(var j=1;j<=10;j++){
                  title+=j+". <a href='"+obj[j].url+"' target='_blank'>"+obj[j].title+"</a> <p id='grey'>"+obj[j].num_points+" points by "+obj[j].author+" | created at "+ obj[j].created_at+ " | "+obj[j].num_comments+"  comments</p><br>";
              }
               document.getElementById("title").innerHTML =title;
               
           }
           else if (xmlhttp.status == 400) {
              alert('There was an error 400');
           }
           else {
               alert('something else other than 200 was returned');
           }
        }
    };

    xmlhttp.open("GET", "http://starlord.hackerearth.com/cleartrip/hackernews", true);
    xmlhttp.send();
}

//end of loadXMLDoc function

//pagination functions
document.getElementById("1").onclick = function() {pages(1)};
document.getElementById("2").onclick = function() {pages(11)};
document.getElementById("3").onclick = function() {pages(21)};
document.getElementById("4").onclick = function() {pages(31)};
document.getElementById("5").onclick = function() {pages(41)};
document.getElementById("6").onclick = function() {pages(51)};
document.getElementById("7").onclick = function() {pages(61)};
document.getElementById("8").onclick = function() {pages(71)};
document.getElementById("9").onclick = function() {pages(81)};
document.getElementById("10").onclick = function() {pagesend()};

//for search by author name
document.getElementById("searchButton").onclick = function() {
    var x= document.getElementById("searchtext").value;
    // Retrieve
             text2=localStorage.getItem("myData");                   
               obj = JSON.parse(text2);
    search(x,obj)};

function search(name,arr){
    for(var j=0; j<arr.length;j++){
        if(arr[j].author === name){
            var title=j+". <a href='"+obj[j].url+"' target='_blank'>"+obj[j].title+"</a> <p id='grey'>"+obj[j].num_points+" points by "+obj[j].author+" | created at "+ obj[j].created_at+ " | "+obj[j].num_comments+"  comments</p><br>";
            document.getElementById("searchtitle").innerHTML = name;
        }
            
    }
}

//for displaying the pages
function pages(val) {
        // Retrieve
             text2=localStorage.getItem("myData");                   
               obj = JSON.parse(text2);
               
              var title= "";
                
              for(var j=val;j<val+10;j++){
                  title+=j+". <a href='"+obj[j].url+"' target='_blank'>"+obj[j].title+"</a> <p id='grey'>"+obj[j].num_points+" points by "+obj[j].author+" | created at "+ obj[j].created_at+ " | "+obj[j].num_comments+"  comments</p><br>";
              }
               
               document.getElementById("title").innerHTML =title;
    }

//for displaying the last page
function pagesend() {
        // Retrieve
             text2=localStorage.getItem("myData");                   
               obj = JSON.parse(text2);
             
               
              var title= "";
                
              for(var j=91;j<obj.length;j++){
                  title+=j+". <a href='"+obj[j].url+"' target='_blank'>"+obj[j].title+"</a> <p id='grey'>"+obj[j].num_points+" points by "+obj[j].author+" | created at "+ obj[j].created_at+ " | "+obj[j].num_comments+"  comments</p><br>";
              }
               
               document.getElementById("title").innerHTML =title;

    }



