function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});  
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/617UYRCZw/model.json",mickey_el_pug_gordito);     
}
function mickey_el_pug_gordito () {
classifier.classify(ok) ;   
}
function ok (error,ambrozionoob) {
if (error) {
 console.log (error);   
} else {
console.log (ambrozionoob);
document.getElementById ("result_label").innerHTML=ambrozionoob[0].label;
document.getElementById ("result_confidence").innerHTML=ambrozionoob[0].confidence ;
}
}



