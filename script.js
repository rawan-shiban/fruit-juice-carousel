const SilderImg = document.querySelector('.silder-img');
const SilderInfo = document.querySelector('.slider-info');

const fruitImg = document.querySelectorAll('.fruit');
const NextBtn = document.querySelector('.next-btn');
const PrevBtn = document.querySelector('.prev-btn');
const bgs = document.querySelectorAll('.bg');
const colors = [    'rgb(14 103 211)','rgb(227 133 21)','rgb(105 173 11)','rgb(215 11 51)'];


let SliderIndex = 0;
let index = 0;
let diraction;



// =========== Next Event ================
NextBtn.addEventListener('click', () => {

    SliderIndex++;
 console.log(SliderIndex);
    // if (SliderIndex > SilderImg.length - 1) {
        
    //     SliderIndex = 0;
        
    //     console.log('i am 0');

    // }

    SilderImg.style.transform = `rotate(${SliderIndex * -90}deg)`;

    index++;
    if (index > fruitImg.length - 1) {
        index = 0;
    }

    document.querySelector('.fruit.active').classList.remove('active');
    fruitImg[index].classList.add('active');
    
    document.querySelector('.bg.active').classList.remove('active');
    bgs[index].classList.add('active');

    if (diraction == -1) {

        SilderInfo.appendChild(SilderInfo.firstElementChild);
        console.log('hallo');

    }

    diraction = 1;



    SilderInfo.style.transform = 'translateY(-25%)';
    document.body.style.background = colors[index];


});

// =========== prev Event ================
PrevBtn.addEventListener('click', () => {

      SliderIndex--;
       console.log(SliderIndex);

//     if (SliderIndex <  SilderImg.length - 1) {
// console.log('i am silder')
//         SliderIndex = SilderImg.length - 1;
        
//     }
  



    SilderImg.style.transform = `rotate(${SliderIndex * -90}deg)`;

    index--;

    if (index < 0) {
        index = fruitImg.length - 1;
    }

    document.querySelector('.fruit.active').classList.remove('active');
    fruitImg[index].classList.add('active');
    
    document.querySelector('.bg.active').classList.remove('active');
    bgs[index].classList.add('active');

    diraction = -1;

    if (diraction == 1) {
        SilderInfo.appendChild(SilderInfo.firstElementChild);

        console.log('-   hallo');
    }




    SilderInfo.style.transform = 'translateY(-25%)';
})




SilderInfo.addEventListener('transitionend', () => {
    if (diraction == 1) {
        console.log('I am 1')
        SilderInfo.appendChild(SilderInfo.firstElementChild);
    }

    else if (diraction == -1) {
        console.log('I am -1')
        SilderInfo.prepend(SilderInfo.lastElementChild)
    }

    SilderInfo.style.transition = 'none';

    SilderInfo.style.transform = 'translateY(0)';

    setTimeout(() => {
        SilderInfo.style.transition = '.1s cubic-bezier(0.075, 0.82, 0.165, 1)';
    })
})