// Common Function Reuseable
function getInput(inputId){
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    return inputValue;
}

function setAreaShow(areaShowId, area){
    const areaShow = document.getElementById(areaShowId);
    areaShow.innerText = area;
}

function allCalculationEntry(shapeName, area){
    const calculationEntry = document.getElementById('total-calculation-entry');
    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `
    ${count}. ${shapeName} : ${area}
    `
    calculationEntry.appendChild(p);
}

// Event Handlers & Functionality
function calculateTriangleArea(){
    const base = getInput('base-field');
    const height = getInput('height-field');
    const area = 0.5 * base * height;
    setAreaShow('triangle-show', area);
    allCalculationEntry('Triangle', area);
}

function calculateRectangleArea(){
    const base = getInput('rectangle-base');
    const height = getInput('rectangle-height');
    const area = base * height;
    setAreaShow('rectangle-show', area);
    allCalculationEntry('Rectangle', area);
}

function calculateParalleogramArea(){
    const base = getInput('parallelogram-base');
    const height = getInput('parallelogram-height');
    const area = base * height;
    setAreaShow('parallelogram-show', area);
    allCalculationEntry('Parallelogram', area);
}

function calculateRhombusArea(){
    const diameter1 = getInput('rhombus-diameter-one');
    const diameter2 = getInput('rhombus-diameter-two');
    const area = 0.5 * diameter1 * diameter2;
    setAreaShow('rhombus-show', area);
    allCalculationEntry('Rhombus', area);
}

function calculatePentagonArea(){
    const perimeter = getInput('pentagon-perimeter');
    const base = getInput('pentagon-base');
    console.log(perimeter, base);
    const area = 0.5 * base * perimeter;
    setAreaShow('pentagon-show', area);
    allCalculationEntry('Pentagon', area);
}

function calculateEllipseArea(){
    const radius1 = getInput('ellipse-radius-one');
    const radius2 = getInput('ellipse-radius-two');
    const area = 3.1416 * radius1 * radius2;
    const areaPrecision = area.toFixed(2);
    setAreaShow('ellipse-show', areaPrecision);
    allCalculationEntry('Ellipse', area);
}


