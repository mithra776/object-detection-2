img = "";
staatuus = "";

function setup()
{
    canvas = createCanvas(640 , 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects"
} 

function modelLoaded()
{
    console.log("Model Loaded")
    staatuus = true;
    objectDetector.detect(img , gotResult);
}

function preload()
{
    img = loadImage('dog_cat.jpg');
}

function draw()
{
    image(img , 0 , 0 , 640 , 420);
    fill("#f54248");
    text("Cat" , 65 , 75);
    noFill();
    stroke("#f54248");
    rect(50 , 60 , 210 ,350);
    
    
    fill("#0004fa");
    text("Dog" , 260 , 75);
    noFill();
    stroke("#0004fa");
    rect(245 , 60 , 320 , 349);
}

function gotResult(error , results)
{
   if(error)
   {
       console.error(error);
   }

   else
   {
     console.log(results);
   }
}