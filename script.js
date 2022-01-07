// function btnclick(val)
// {
//     document.getElementById("screen").value+=val
// }
// function  cleardisplay()
// {
//     document.getElementById("screen").value=""
// }
// function equalclick()
// {
//     var text=document.getElementById("screen").value
//     var result=eval(text)
//     document.getElementById("screen").value=result
// }

function btnclick(val)
{
    console.log(val);
  result.value+=val
}
function  cleardisplay()
{
    //document.getElementById("screen").value=""
    result.value=""
}
function equalclick()
 {
     result.value=eval(result.value)
 }
 function deldisplay()
 {
    var res=result.value
    //  //console.log(res);
     // var v=res.split("")
     // console.log(res);
         //v=v.slice(0,v.length-1)
       //v=v.join("")
      //console.log(v);
     //result.value=v;
   
    // console.log(typeof(res));
     var c=res.slice(0,length-1)
   
     result.value=c;
     console.log(c);
  
    }