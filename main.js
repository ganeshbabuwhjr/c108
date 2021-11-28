function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/V8pyG14Yv/model.json',modelReady);

    
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
  if(error){
      console.error(error);
      
  }
  else{
      console.log(results);
      random_r=Math.floor(Math.random()*255)+1;
      random_g=Math.floor(Math.random()*255)+1;
      random_b=Math.floor(Math.random()*255)+1;

      document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
      document.getElementById("result_confidence").innerHTML = 'accuracy - '+ (results[0].confidence *100).toFixed(2)+"%";
      document.getElementById("result_label").style.color = "rgb("+random_r+","+random_g+","+random_b+")";
      document.getElementById("result_confidence").style.color = "rgb("+random_r+","+random_g+","+random_b+")";

      img = document.getElementById('alien1');
      img1 = document.getElementById('alien2');
      img2 = document.getElementById('alien3');
      img3 = document.getElementById('alien4');

      if (results[0].label == "whistle") 
      {
           img.src = 'giphy.gif';
           img1.src = 'virat.png';
            img2.src = 'rohit.jpg';
             img3.src = 'smith.png';
             }

             else  if (results[0].label == "clap") 
             {
                  img.src = 'dhoni.png';
                  img1.src = 'virat1.gif';
                   img2.src = 'rohit.jpg';
                    img3.src = 'smith.png';
                    }
                    else  if (results[0].label == "shout") 
                    {
                         img.src = 'dhoni.png';
                         img1.src = 'virat.png';
                          img2.src = 'rohit1.gif';
                           img3.src = 'smith.png';
                           }
                           else 
                           {
                                img.src = 'dhoni.png';
                                img1.src = 'virat.png';
                                 img2.src = 'rohit.jpg';
                                  img3.src = 'steve.gif';
                                  }

  }
}

