//Bài 1

function short(){
    var  a = Number(document.getElementById("number1").value) ;
    var  b = Number(document.getElementById("number2").value) ;
    var  c = Number(document.getElementById("number3").value) ;
    var n;
    if(a > b){
        if(b > c){
         n = c +"<"+ b +"<"+ a;
        }else if( a > c){
         n = b +"<"+ c +"<"+ a;
        }else{
          n =b +"<"+ a +"<"+ c;
        }
    }else if(b > c){
        if(a > c){
         n = c +"<"+ a +"<"+ b;
        }else{
        n =a +"<"+ c +"<"+ b;
        }
    }else{
         n = a +"<"+ b +"<"+ c;
    } 
    document.getElementById("textb1").innerHTML =  n;
}
document.getElementById("shortNumber").onclick = short;


//B2


function sendMessage() {
  var member =  document.getElementById("selectMember").value;
  var title;
 if( member =="dad"){
    title = "Xin Chào Bố";
 }else if(member == "mom"){
    title = "Xin Chào Mẹ";
 }else if(member == "brother"){
    title = "Xin Chào Anh Trai";
 }else if(member == "sister"){
    title = "Xin Chào Em Gái";
 }else{
    title = " Xin Chào Người Lạ Ơi!"
 }
    document.getElementById("textb2").innerHTML = title;
}
document.getElementById("sendTitle").onclick = sendMessage;

//B3


function countNumber(){
    var n1 = (Number(document.getElementById("number01").value))%2;
    var n2 = (Number(document.getElementById("number02").value))%2;
    var n3 = (Number(document.getElementById("number03").value))%2;
    var count = 0;
    var logCount;
 

    if (n1 == 0){
        count++; 
    } 
    if(n2 == 0)
    {
        count++; 
    } 
    if(n3 == 0){
        count++; 
    }

    if (count == 1){
        logCount ="Có  1 chẵn, 2 lẻ";
    }
    else if(count == 2){
        logCount = "Có  2 chẵn, 1 lẽ";
    }
    else if (count == 3){
        logCount = "Có 3 chẵn, 0 lẽ";
    }
    else{
        logCount = "Có  0 chẵn, 3 lẽ";
    }
  
    document.getElementById("textb3").innerHTML = logCount;
}
document.getElementById("logB3").onclick = countNumber;


// B4

function triangle(){
    var c1 = document.getElementById("edge1").value;
    var c2 = document.getElementById("edge2").value;
    var c3 = document.getElementById("edge3").value;
    var nameTriangle;

    if( c1 == c2 && c2 == c3){
        nameTriangle = " Tam Giác Đều";
    }else if( c1 == c2 || c2 == c3 || c3 == c1){
        nameTriangle = " Tam Giác Cân";
    }else if (c3*c3 == ( c1* c1) + (c2 *c2) ||c1*c1 == ( c2* c2) + (c3 *c3) || c2*c2 == ( c1* c1) + (c3 *c3)  ){
        nameTriangle = " Tam Giác Vuông";
    }else{
        nameTriangle = " Tam Giác Khác";
    }
    document.getElementById("textb4").innerHTML = nameTriangle;
}
document.getElementById("printTriangle").onclick = triangle;

