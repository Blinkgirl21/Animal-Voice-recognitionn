var dog=0;
var cat=0;
var lion=0;
var cow=0;

function startClassification(){
   navigator.mediaDevices.getUserMedia({audio:true});
   classifier=ml5.soundClassification{'(https://teachablemachine.withgoogle.com/models/1bherhays/model.json',modelready);

   }
   function modelready(){
    classifier.classify(gotResult);
   }
   functtion gotResults(error,results){
    if(error){
        console.error(error)
    }
    else
    console.log(results)
     random_number_r=Math.floor(Math.random()*255)+1;
     random_number_g=Math.floor(Math.random()*255)+1;
     random_number_b=Math.floor(Math.random()*255)+1;
     document.getElementById('defected').innerHTML="Defected Dog"-"+dog", Defected cat-"+cat""Defected lion"-"+lion", Defected cow-"+cow"
     document.getElementById('defected').style.color="rgb("+random_number_r+","+random_number_g,+random_number_b+")";
     img-document.getElementById("animal_images");
    
   }
}