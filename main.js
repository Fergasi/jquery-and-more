//jquery equivalent of document.createElement
//create a new element
let div = $('<div>Hello, world</div>');

//jquery equivalent of document.querySelector
//get an existing element from the DOM
let body = $('body');

//jquery equivalent of appendChild
//insert element in parenthesis() inside of element that you are calling the method on
body.append(div);

//jquery equivalent of addEventListener
div.on('click', function () {
    alert("Hello, world");
    console.log('It is working!');
});


//Challenge 1

let newDiv = $('<div></div>');
body.append(newDiv);
let myChartCanvas = $('<canvas></canvas>');
newDiv.append(myChartCanvas);

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const data = {
    labels: labels,
    datasets: [{
      label: 'My First Dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {}
};

const myChart = new Chart(
    myChartCanvas,
    config
);

//Challenge 2

let newNewDiv = $('<div></di>');
body.append(newNewDiv);
let myCanvas = $('<canvas></canvas>');
newNewDiv.append(myCanvas);

const labels2 = [
    'Mexican',
    'Italian',
    'Thai',
    'BBQ',
    'Indian',
    'Japanese',
    'Spanish',
    'Brazilian',
    'German',

];

const backgoundcolor = [
    'rgb(52, 237, 255, 0.5)',
    'rgb(60, 168, 168, 0.5)',
    'rgb(51, 244, 244, 0.5)',
    'rgb(1, 254, 212, 0.5)',
    'rgb(89, 209, 189, 0.5)',
    'rgb(47, 132, 118, 0.5)',
    'rgb(67, 182, 132, 0.5)',
    'rgb(109, 240, 183, 0.5)',
    'rgb(14, 234, 139, 0.5)',
];

const data2 = {
    labels : labels2,
    datasets: [{
        label: 'My Favourite Foods',
        data: [10,8,9,7,6,8,6,8,3],
        backgroundColor: backgoundcolor,
    }]
};

const config2 = {
    type: 'polarArea',
    data: data2,
    options:{
        r: {},
        plugins:{
            title: {
                display: true,
                text: `My Favourite Foods (Personal rating out of 10)`
            }
        }
    }
}

const myChart2 = new Chart(myCanvas, config2)