// console.log('hellos');
let roundRemaining = 25; // let votingRounds = 0;

let productArray = [] ;


// ******* DOM REFERENCES ******************

//assign the conversion so you can use these elements
let imgHolder = document.getElementById('picture_section') ; 
let img_1 = document.getElementById('img_1');
let img_2 = document.getElementById('img_2');
let img_3 = document.getElementById('img_3');
let results_btn = document.getElementById('results_btn');
let results_list = document.getElementById("results_list");



// temp insert this into a declanation
results_btn.addEventListener('click', handleShowResults);
imgHolder.addEventListener('click' , handleClick);


new product('banana');
new product('boots');
new product('bubblegum');
new product('cthulhu');
new product('dragon');
new product('shark');
new product('tauntaun');
new product('bag');
// new product('shark');
new product('bathroom');
new product('breakfast');

new product('chair');
new product('dog-duck');
new product('scissors');
new product('sweep','png');
new product('unicorn');
new product('wine-glass');

renderImgs() ;


// banana.jpg    boots.jpg      bubblegum.jpg  cthulhu.jpg   dragon.jpg  pet-sweep.jpg  shark.jpg  tauntaun.jpg  water-can.jpg
// bag.jpg    bathroom.jpg  breakfast.jpg  chair.jpg      dog-duck.jpg  pen.jpg     scissors.jpg   sweep.png  unicorn.jpg   wine-glass.jpg




// constructor for the objects 
function product(name , fileExtension = 'jpg' ){
  this.name   = name;
  // console.log(this.name)
  // this.src    =  src ;
  this.image = `./img/${name}.${fileExtension}`;
  this.views  = 0;
  this.clicks = 0 ;

  productArray.push( this) ;

}






//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//makes a random number so you can cycle thru the images 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getRandomIndex() {
  // return Math.floor(Math.random() * Goat.allGoatsArray.length);
  
  let out = Math.floor(Math.random() * productArray.length)
  return out;
  console.log(out)    
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//this posts the clicks and % once you go past your limit 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function handleShowResults(){
  console.log('View button is working correctly');



  // if(votingRounds === 0){

  //   for(let i = 0; i < goatArray.length; i++){
  //     let li = document.createElement('li');

  //     li.textContent = `${goatArray[i].goatName} was viewed ${goatArray[i].views} times and clicked on ${goatArray[i].clicks} times.`;
  //     resultsList.appendChild(li);
  //   }
  // }
}


function unique(input_array){



  const unique = (value, index, self) => {
    return self.indexOf(value) === index
  }
  
  const ages = input_array;
  const uniqueAges = ages.filter(unique)
  
  // console.log(uniqueAges);
  return uniqueAges.length ;
}//end unique




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function renderImgs(){
  

  console.log('in render');
  let prodOneIndex = getRandomIndex();
  let prodTwoIndex = getRandomIndex();

  // let prodOneIndex = 3
  // let prodTwoIndex =3
  let prodThreeIndex = getRandomIndex();






  // This cycles thru the code to make sure that all 3 of the images are unique 
  
  let temp =  unique( [ prodOneIndex , prodTwoIndex , prodThreeIndex  ] );
  // console.log(temp +'its temp') ;

  while( temp < 3 ){
    
    prodOneIndex = getRandomIndex();
    prodTwoIndex = getRandomIndex();
    prodThreeIndex = getRandomIndex();
    temp =[ prodOneIndex , prodTwoIndex , prodThreeIndex  ] ;
    temp =  unique( [ prodOneIndex , prodTwoIndex , prodThreeIndex  ] );
  }

  console.log( productArray[prodOneIndex].image) ; 

  img_1.src= productArray[prodOneIndex].image ;
  img_1.alt= productArray[prodOneIndex].name ;
  productArray[prodOneIndex].views++;

  img_2.src= productArray[prodTwoIndex].image ;
  img_2.alt= productArray[prodTwoIndex].name ;
  productArray[prodTwoIndex].views++;

  img_3.src= productArray[prodThreeIndex].image ;
  img_3.alt= productArray[prodThreeIndex].name ;
  productArray[prodThreeIndex].views++;

}










//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function handleClick(event){
 
 
  // targets the section and allows you to get the image that is clicked on 
  let imgClicked = event.target.alt;
  console.log(imgClicked);


  for(i=0 ; i < productArray.length ; i++){
    if(imgClicked===productArray[i].name){
      productArray[i].clicks++;
              }
        }//for 

        roundRemaining--;
        if( roundRemaining ===0){
          imgHolder.removeEventListener('click' , handleClick);
            return; // dont understand why this is here 
        }


        renderImgs();
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function handleShowResults(){
  if(roundRemaining===0){
        for( i =0;i<productArray.length;i++){
          let li = document.createElement('li');


          let percentage = productArray[i].clicks / productArray[i].views  *100 ;

          if(isNaN(percentage)){  
                      percentage=0;
                      }
          li.textContent=(`${productArray[i].name} : views ${productArray[i].clicks} , selection rate:  ${Math.round(percentage)}% `);
          results_list.appendChild(li) ;
        }
   }
}




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
