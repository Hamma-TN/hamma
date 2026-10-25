function valid1() {
    var idt=document.getElementById("idt").value 
    var prv=Number(document.getElementById("pv").value)
    var btn1=document.getElementById("btn1").Checked
    var btn2=document.getElementById("btn2").Checked
    var btn3=document.getElementById("btn3").Checked
    if (idt.length!=5 || verif(idt)==false) {
        alert("identifiant invalid")
        return false
    }else if(prv<100){
        alert("prix de vente invalid ")
        document.getElementById("pv").style.background="red"
        return false
    }
    else if (!(btn1) && !(btn2) && !(btn3)) {
        alert("choisir une composition SVP")
        return false
    }else{
        alert("enregistrer avec succés")
    }
}
function verif(ch) {
    p1=ch.substring(0,2)
    p1=p1.toUpperCase()
    p2=ch.substring(2,5)
    v=true
    if (ch.length!=5) {
        v=false
    } else {
        for(i=0;i<p1.length;i++){
            if (!("A"<=p1[i] && p1[i]<="Z")) {
                v=false
            }
        }for(i=0;i<p2.length;i++){
            if (!("0"<=p2[i] && p2[i]<="9")) {
                v=false
            }
        }
    }
    return v
}
function valid2() {
    var idt=document.getElementById("idt").value 
    var exp=document.getElementById("exp").selectedIndex
    var fini=Number(document.getElementById("fin").value)
    var com=document.getElementById("com").value 
    var btn1=document.getElementById("btn1").Checked
    var btn2=document.getElementById("btn2").Checked
    if (idt.length!=5 || verif(idt)==false) {
        alert("identifiant invalid")
        return false
    }
    else if (exp==0) {
        alert("choisir un expert SVP")
        return false
    }
    else if (!(1<=fini && fini<=5)) {
        alert("finition invalid")
    }else if(btn1==false && btn2==false){
        alert("choisir un option")
        return false
    }else if(!(com!="") || nbmot(com)==false){
        alert("saisir un commaintaire")
        return false 
    }
}
/*function nbmot(ch) {
    ch1=nettoyage(com)
       nb=0
       mot1=ch1.substring(0,indexOf(" "))
       mot2=ch1.substring(indexOf(" ")+1," ")
       v=true
       for(i=0;i<mot1.length;i++){
        if (!("A"<=mot1[i] && mot1[i]<="Z")) {
            v=false
        }
       }
       for(i=0;i<mot2.length;i++){
        if (!("A"<=mot2[i] && mot2[i]<="Z")) {
            v=false
        }
    }
}*/
function nbmot(ch) {
    ch1=nettoyage(ch)
    nb=0
    for(i=0;i<ch1.length;i++){
        mot=ch1.substring(0,ch1.indexOf(" "))
        if (alpha(mot)==true) {
            nb=nb+1
        }
        ch1=ch1.replace(mot,"")
    }
    if (nb!=2) {
        return false
    }else{
        return true
    }
}
function nettoyage(ch)
{
  ch = ch.trim()
  while(ch.indexOf("  ") != -1 )
   {
     ch = ch.replace("  ", " ")
   }
  return ch
}
function alpha(ch) {
    ch=ch.toUpperCase()
    v=false
    for(i=0;i<ch.length;i++){
        if ("A"<=ch[i] || ch[i]<="Z") {
            v=true
        }
    }
    return v
}