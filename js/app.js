// console.log('hellos');
let roundRemaining = 25; // let votingRounds = 0;

let productArray = [] ;
let randomNumbers = [];

// ******* DOM REFERENCES ******************

//assign the conversion so you can use these elements
let imgHolder = document.getElementById('picture_section') ; 
let img_1 = document.getElementById('img_1');
let img_2 = document.getElementById('img_2');
let img_3 = document.getElementById('img_3');
// let results_btn = document.getElementById('results_btn');
// let results_list = document.getElementById("results_list");

let viewArray=[];
let clicksArray = [];
let namesArray =[] ;



// temp insert this into a declanation
// results_btn.addEventListener('click', handleShowResults);
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
// console.log(productArray );
renderImgs() ;


// banana.jpg    boots.jpg      bubblegum.jpg  cthulhu.jpg   dragon.jpg  pet-sweep.jpg  shark.jpg  tauntaun.jpg  water-can.jpg
// bag.jpg    bathroom.jpg  breakfast.jpg  chair.jpg      dog-duck.jpg  pen.jpg     scissors.jpg   sweep.png  unicorn.jpg   wine-glass.jpg




// constructor for the objects 
function product(name , fileExtension = 'jpg' ){
  this.name   = name;
  // console.log(this.name)
  // this.src    =  src ;
  this.image = `img/${name}.${fileExtension}`;
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

// function handleShowResults(){
//   console.log('View button is working correctly');



//   // if(votingRounds === 0){

//   //   for(let i = 0; i < goatArray.length; i++){
//   //     let li = document.createElement('li');

//   //     li.textContent = `${goatArray[i].goatName} was viewed ${goatArray[i].views} times and clicked on ${goatArray[i].clicks} times.`;
//   //     resultsList.appendChild(li);
//   //   }
//   // }
// }


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
  let randomNumber = getRandomIndex();
//fills up the list with random numbers
  while (randomNumbers.length < 6) {
    randomNumber = getRandomIndex();
    // console.log("new random: "+ randomNumber) ;

    if (!randomNumbers.includes(randomNumber)) {
      // console.log("pushing: "+ randomNumber) ;
      randomNumbers.push(randomNumber);
    }
  }


// takes last 3 and makes so that they can be displayed
  let prodOneIndex = randomNumbers[3];
  let prodTwoIndex = randomNumbers[4];
  let prodThreeIndex = randomNumbers[5];

  // console.log(randomNumbers);

  // https://teamtreehouse.com/community/removing-more-than-1-element-using-pop-and-shift-method
  //removes the first 3 indexes when 2 rounds are in the list 
  // this shifts the numbers into the hold position for the next render
  if(randomNumbers.length === 6){  
    // console.log('hit length 6'); 
      randomNumbers.splice(0,2);
  }




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

  // console.log( productArray[prodOneIndex].image) ; 

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
  // console.log(imgClicked);


  for(i=0 ; i < productArray.length ; i++){
    if(imgClicked===productArray[i].name){
      console.log('in the clicker====='+imgClicked +'  '+  productArray[i].name );

      productArray[i].clicks++;
              }
        }//for 

        roundRemaining--;
        if( roundRemaining ===0){
          imgHolder.removeEventListener('click' , handleClick);
            makeChart();
            return; // dont understand why this is here 
        }else{
          renderImgs();
        }


       
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function handleShowResults(){
//   if(roundRemaining===0){
//         for( i =0;i<productArray.length;i++){
//           let li = document.createElement('li');


//           let percentage = productArray[i].clicks / productArray[i].views  *100 ;

//           if(isNaN(percentage)){  
//                       percentage=0;
//                       }
//           li.textContent=(`${productArray[i].name} : views ${productArray[i].clicks} , selection rate:  ${Math.round(percentage)}% `);
//           results_list.appendChild(li) ;
//         }
//    }
// }




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// added for part 2 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////





 function getNumbers(){
console.log(productArray) ; 

  for(let i =0 ; i < productArray.length; i++){
    viewArray.push(productArray[i].views) ; 
    clicksArray.push(productArray[i].clicks) ;

    namesArray.push(productArray[i].name) ;
            }

    // console.log(viewArray);
}




function makeChart(){

  getNumbers() ;

const ctx = document.getElementById('myChart').getContext('2d');

const data = {
  labels: namesArray,
  datasets: [{
    label: 'Likes',
    data: viewArray,
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)'
    ],
    borderWidth: 1
  },
  {
    label: 'Clicks',
    data: clicksArray,
    backgroundColor: [
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgb(255, 159, 64)'
    ],
    borderWidth: 1
  }]
};

const config = {
  type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
};
let canvasChart = document.getElementById('myChart');
const myChart = new Chart(canvasChart, config);




// const myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: namesArray,
//         datasets: [{
//             label: '# of Views',
//             data: viewArray,
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     data: {
//       labels: namesArray,
//       datasets: [{
//           label: '# of Clicks',
//           data: clicksArray,
//           backgroundColor: [
//               'rgba(255, 99, 132, 0.2)',
//               'rgba(54, 162, 235, 0.2)',
//               'rgba(255, 206, 86, 0.2)',
//               'rgba(75, 192, 192, 0.2)',
//               'rgba(153, 102, 255, 0.2)',
//               'rgba(255, 159, 64, 0.2)'
//           ],
//           borderColor: [
//               'rgba(255, 99, 132, 1)',
//               'rgba(54, 162, 235, 1)',
//               'rgba(255, 206, 86, 1)',
//               'rgba(75, 192, 192, 1)',
//               'rgba(153, 102, 255, 1)',
//               'rgba(255, 159, 64, 1)'
//           ],
//           borderWidth: 1
//       }]
//   },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });

 

} // make chart








//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
