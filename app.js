

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

});

ind=-1;
arr.forEach(item => {
   ind++;
    let current = document.getElementById("dialpad"+ind);
    current.onclick = function () {
        let dialpadInput = document.getElementById('dialpad-input');
        let val = dialpadInput.value;
        console.log(dialpadInput.selectionStart);
        let prev = dialpadInput.selectionStart;
        dialpadInput.value = val.slice(0, dialpadInput.selectionStart) + item.title + val.slice(dialpadInput.selectionStart,val.length);
        console.log(dialpadInput.selectionStart);
        //dialpadInput.selectionStart = prev;
        //dialpadInput.value += item.title;
        //console.log(dialpadInput.scrollLeft);
        //dialpadInput.scrollLeft = dialpadInput.scrollWidth;
    }

});




function addDialpadInput(item){
    
}