var data = [
    {
        cardTitle: "Card Title",
        cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat accusamus eius rerum optio est! Sit cumque sunt non possimus! Ipsam ut corporis natus quae? Vel ex quo quia quam consequuntur?"
    },
    {
        cardTitle: "Card Title",
        cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat accusamus eius rerum optio est! Sit cumque sunt non possimus! Ipsam ut corporis natus quae? Vel ex quo quia quam consequuntur?"
    },
    {
        cardTitle: "Card Title",
        cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat accusamus eius rerum optio est! Sit cumque sunt non possimus! Ipsam ut corporis natus quae? Vel ex quo quia quam consequuntur?"
    },
    {
        cardTitle: "Card Title",
        cardText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat accusamus eius rerum optio est! Sit cumque sunt non possimus! Ipsam ut corporis natus quae? Vel ex quo quia quam consequuntur?"
    }
]



function bindText(data, template){
    for (var prop in data) {
           template = template.replace("{{"+prop+"}}", data[prop]);
    }
    return template;
}


var cardHtml = '<div class="col-md-4"><div class="card flex-row bg-primary align-items-center"><div class="card-body"><div class="card-title text-light">{{cardTitle}}</div><div class="card-text p-1 text-light">{{cardText}}</div></div><button class="btn bg-danger text-light mx-2">delete</button></div></div>';
var row = document.getElementsByClassName('add-here')[0];
for(var i = 0; i < data.length; i++){
    var cardTemplate = bindText(data[i], cardHtml);
    row.innerHTML += cardTemplate;
}

function onClick(e){
    e.target.parentNode.parentNode.remove();
}

buttons = document.getElementsByClassName("btn");
for(var i = 0; i< buttons.length; i++) {
    button = buttons[i];
    button.addEventListener('click', onClick);
};

function changeTheme(e){
    console.log(e.target.classList[0])
    cards = document.getElementsByClassName('card')
    for(var i = 0; i < cards.length; i++){
        cards[i].classList.replace(cards[i].classList[2], e.target.classList[0])
    }
}
colorButtons = document.getElementsByClassName("button-div");

for(var i = 0; i < colorButtons.length; i++){
    var colorButton = colorButtons[i];
    colorButton.addEventListener('click', changeTheme);
}