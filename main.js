function preload() {

}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier("MobileNet", modelisloadednow);
}
function modelisloadednow() {
  console.log("Is there anything to do?");
}

function draw() {
  image(video, 0, 0, 400, 300);
  classifier.classify(video, obtainedresult);

}
function obtainedresult(error, result) {
  if (error) {
    console.error(error);
  }
  else{
    console.log(result);
    document.getElementById("result_object_name").innerHTML=result[0].label;
    document.getElementById("result_accuracy_number").innerHTML=result[0].confidence.toFixed(3);
  }
}



