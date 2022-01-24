console.log("Hallo Wereld");
const myTitle = document.getElementById('myTitle')
const myImage = document.getElementById('myImage')

let seizoenen = [
    {
        "titel":"seizoenen",
        "image":"img/seasons.jpg",
        "backGround":"gray"
    },
    {    
        "titel":"lente",
        "image":"img/spring.jpg",
        "backGround":"green"
    },
    {
        "titel":"zomer",
        "image":"img/summer.jpg",
        "backGround":"yellow"
    },
    {    
        "titel":"lente",
        "image":"img/spring.jpg",
        "backGround":"green"
    },
    {
        "titel":"autumn",
        "image":"img/autumn.jpg",
        "backGround":"brown"
    },
    {    
        "titel":"winter",
        "image":"img/winter.jpg",
        "backGround":"white"
    }
];

function showSeason(index){
    console.log(index)
    myTitle.innerHTML = seizoenen[index].titel;
    myImage.src = seizoenen[index].image;
    document.style.backgroundColor = seizoenen[index].backGround;
}


