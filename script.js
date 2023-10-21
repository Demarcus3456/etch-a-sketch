const box = document.querySelector('.container');
const gridBtn = document.querySelector('.grid-btn');
const gridSettings = document.querySelector('.grid-settings');
const fourBtn = document.getElementById('four');
const eightBtn = document.querySelector('.eight');
const sixteenBtn = document.querySelector('.onesix');
const thirtyTwoBtn = document.querySelector('.threetwo');
const sixthyFourBtn = document.querySelector('.sixfour');
const oneTwentyEightBtn = document.querySelector('.oneeight');

// Defalut grid
function makeDivs(divnum) {
    for (let i = 0; i < divnum; i++) {
        let cells = document.createElement('div');
        box.appendChild(cells);

        cells.addEventListener("mouseover", function () {
            cells.style.backgroundColor = 'red';
        });
    }
}



// 4 x 4 Grid
fourBtn.addEventListener('change', function () {
    function makeDivs(divnum) {
        for (let i = 0; i < divnum; i++) {
            let cells = document.createElement('div');
            box.appendChild(cells);

            cells.addEventListener("mouseover", function () {
                cells.style.backgroundColor = 'red';
            });

            cells.style.width = '120px';
            cells.style.height = '128px';
        }
    }
    makeDivs(16);
    fourBtn.value = 'four';
});

// 8 x 8 Grid
eightBtn.addEventListener('change', function () {
    function makeDivs(divnum) {
        for (let i = 0; i < divnum; i++) {
            let cells = document.createElement('div');
            box.appendChild(cells);

            cells.addEventListener("mouseover", function () {
                cells.style.backgroundColor = 'red';
            });

            cells.style.width = '60px';
            cells.style.height = '64px';
        }
    }
    makeDivs(64);
});

// 16 x 16 Grid
sixteenBtn.addEventListener('change', function () {
    function makeDivs(divnum) {
        for (let i = 0; i < divnum; i++) {
            let cells = document.createElement('div');
            box.appendChild(cells);

            cells.addEventListener("mouseover", function () {
                cells.style.backgroundColor = 'red';
            });

            cells.style.width = '30px';
            cells.style.height = '32px';
        }
    }
    makeDivs(256);
});

// 32 x 32 Grid
thirtyTwoBtn.addEventListener('change', function () {
    function makeDivs(divnum) {
        for (let i = 0; i < divnum; i++) {
            let cells = document.createElement('div');
            box.appendChild(cells);

            cells.addEventListener("mouseover", function () {
                cells.style.backgroundColor = 'red';
            });

            cells.style.width = '15px';
            cells.style.height = '16px';
        }
    }
    makeDivs(1024);
});

// 64 x 64 Grid
sixthyFourBtn.addEventListener('change', function () {
    function makeDivs(divnum) {
        for (let i = 0; i < divnum; i++) {
            let cells = document.createElement('div');
            box.appendChild(cells);

            cells.addEventListener("mouseover", function () {
                cells.style.backgroundColor = 'red';
            });

            cells.style.width = '7.5px';
            cells.style.height = '8px';
        }
    }
    makeDivs(4096);
});

// 128 x 128 Grid
oneTwentyEightBtn.addEventListener('change', function () {
    function makeDivs(divnum) {
        for (let i = 0; i < divnum; i++) {
            let cells = document.createElement('div');
            box.appendChild(cells);

            cells.addEventListener("mouseover", function () {
                cells.style.backgroundColor = 'red';
            });

            cells.style.width = '3.75px';
            cells.style.height = '4px';
        }
    }
    makeDivs(16384);
});

// Opens and hides grid options
gridBtn.addEventListener('click', function () {
    gridSettings.classList.toggle('hidden');
});

if (fourBtn.value === "four") {
    alert('yup');
}