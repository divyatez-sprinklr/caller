

let dialpadBtnContainer = document.getElementById('dialpad-btn-container');

let arr =[
    {title:"1",subtitle:"_"},
    {title:"2",subtitle:"ABC"},
    {title:"3",subtitle:"DEF"},
    {title:"4",subtitle:"GHI"},
    {title:"5",subtitle:"JKL"},
    {title:"6",subtitle:"MNO"},
    {title:"7",subtitle:"PQRS"},
    {title:"8",subtitle:"TUV"},
    {title:"9",subtitle:"WXYZ"},
    {title:"*",subtitle:"-"},
    {title:"0",subtitle:"+"},
    {title:"#",subtitle:"-"},
];

console.log(arr);
let ind=-1;
arr.forEach(item => {
    ind++;
    dialpadBtnContainer.innerHTML += 
    `<div class="dialbtn-wrapper">
        <div class="dialpad-btn flexCol centerRow centerCol" id="dialpad${ind}">
            <p class="title-text removeDefaultPara fontColor">${item.title}</p>
            <p class="subline-text removeDefaultPara fontColor">${item.subtitle}</p>
        </div>
    </div>`;
    console.log(ind);
});

ind=-1;
setTimeout(()=>{
arr.forEach(item => {
   ind++;
    let current = document.getElementById("dialpad"+ind);
    console.log(current);
    current.onclick = function () {
        console.log('clicked');
        let dialpadInput = document.getElementById('dialpad-input');
        let val = dialpadInput.value;
        console.log("BEFORE "+dialpadInput.selectionStart);
        let prev = dialpadInput.selectionStart;
        dialpadInput.value = val.slice(0, dialpadInput.selectionStart) + item.title + val.slice(dialpadInput.selectionStart,val.length);
        dialpadInput.selectionStart = prev+1;
        console.log("AFTER "+dialpadInput.selectionStart);
        //dialpadInput.selectionStart = prev;
        //dialpadInput.value += item.title;
        //console.log(dialpadInput.scrollLeft);
        console.log(dialpadInput.scrollWidth + " " + dialpadInput.value.length);
        if(dialpadInput.value.length===dialpadInput.selectionStart)
        {
            dialpadInput.scrollLeft = dialpadInput.scrollWidth;
        }
    }

    console.log(ind);

});
},500);


dialpadBtnContainer.innerHTML += 
    `<div class="dialbtn-wrapper">
        <div class="dialpad-btn dialpad-btn-empty flexCol centerRow centerCol">
            <p class="title-text removeDefaultPara fontColor"></p>
            <p class="subline-text removeDefaultPara fontColor"></p>
        </div>
    </div>`;

dialpadBtnContainer.innerHTML += 
    `<div class="dialbtn-wrapper">
        <div class="dialpad-btn-caller flexCol centerRow centerCol">
            <img class='dialpad-btn-caller-icon' src="phone.png"/>
        </div>
    </div>`;


document.getElementById('dialpad-input-btn-backspace').addEventListener('click',function (event){
    event.preventDefault();
    console.log('backspace');
});

