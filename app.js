const body = document.querySelector('body'); 
const colors = ["#b6fbb6","#b6fbcd", "#b6fbe4", "#b6fbfb", "#b6e4fb"]; 
const numbers = ["ett", "två", "tre", "fyre", "fem", "sex", "sju", "åtta", "nio", "tio"]; 

const boxChild_1 = document.createElement('div'); 
const boxChild_2 = document.createElement('div'); 
const boxChild_3 = document.createElement('div'); 

const boxParent = document.createElement('div'); 

// RAD SECTION     
for(let i = 0; i <= 5; i++){
    const container = document.createElement('div'); 
    container.style.cssText = `
        text-align: center;
        font-size: calc(2rem * (${i} / 2));
        color:#6e6ef7;
        margin-bottom: 2rem; 
        background: ${colors[i - 1]};
    `;

    container.innerHTML = "Rad " + i; 

    body.append(container)
}



// FIRST LIST OF NUMBER 


for(let i = 0; i <= 9; i++){
    const item = document.createElement('div'); 

    boxChild_1.style.cssText = `
    width: 50px;
    padding: 10px; 
    background: #a8a8f0
    `

    
    if(i % 2 == 0){
        item.style.cssText = `
            color: white;
            background: black; 
         `;
    } else {
        item.style.cssText = `
         background: white
    `;
    }

    if(i == 4){
        item.style.background = "none"
    }

    item.innerHTML = i; 
    boxChild_1.append(item);
    boxParent.append(boxChild_1);
    body.append(boxParent);
}


// SECOND LIST OF NUMBER 


for(let i = 9; i >= 0; i--){
    const item = document.createElement('div'); 

    boxChild_2.style.cssText = `
    width: 50px;
    text-align: center;
    padding: 10px; 
    background: #a8a8f0
    `
    
    if(i % 2 == 0){
        item.style.cssText = `
            color: white;
            background: black; 
         `;
    } else {
        item.style.cssText = `
         background: white
    `;
    }

    if(i == 8){
        item.style.background = "none"
    }


    item.innerHTML = i; 
    boxChild_2.append(item);
    boxParent.append(boxChild_2);
    body.append(boxParent);
}
 

// THIRD LIST OF NUMBER 

for(let i = 0; i <= 9; i++){
    const item = document.createElement('div'); 

    boxChild_3.style.cssText = `
    width: 50px;
    text-align: right;
    padding: 10px; 
    background: #a8a8f0
    `
    
    if(i % 2 == 0){
        item.style.cssText = `
            color: white;
            background: black; 
         `;
    } else {
        item.style.cssText = `
         background: white
    `;
    }

    if(i == 6 - 1){
        item.style.background = "none"
    }

    item.innerHTML = numbers[i]; 
    boxChild_3.append(item);
    boxParent.append(boxChild_3);
    body.append(boxParent);
}


boxParent.style.cssText = `
    display: flex; 
    justify-content: space-around
`;
