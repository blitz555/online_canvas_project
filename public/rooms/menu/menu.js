let rooms_count=4;
let canvas_room_str = "Canvas Room ";
let add_button = $('#btn-add');
let last_button = $('#btn4');

$('#btn').on('click', function(){
    $("#includedContent").load("/rooms/canvas.html");
    setIntent($('#btn').text());
})

$('#btn-make').on('click', function(){
    socket.emit('makeRoom', {
        'name': $('#btn').text(),
        'path': 'stock_image.jpg'
    })
})	

$('#btn2').on('click', function(){
    $("#includedContent").load("/rooms/canvas.html");
    setIntent($('#btn2').text());
})

$('#btn2-make').on('click', function(){
    socket.emit('makeRoom', {
        'name': $('#btn2').text(),
        'path': 'stock_apple.png'
    })
})

$('#btn3').on('click', function(){
    $("#includedContent").load("/rooms/canvas.html");
    setIntent($('#btn3').text());
})

$('#btn3-make').on('click', function(){
    socket.emit('makeRoom', {
        'name': $('#btn3').text(),
        'path': 'stock_image.jpg'
    })
})

$('#btn4').on('click', function(){
    $("#includedContent").load("/rooms/canvas.html");
    setIntent($('#btn4').text());
})

$('#btn4-make').on('click', function(){
    socket.emit('makeRoom', {
        'name': $('#btn4').text(),
        'path': 'stock_apple.png'
    })
})

function gotoroom(room){
    let room_str = room;
    $('#btn4').on('click', function(){
        $("#includedContent").load("/rooms/canvas.html");
        setIntent($('#btn4').text());
    })
}

// $('button').on('click', function(){
//     //if()
//
//     $("#includedContent").load("/rooms/canvas.html");
//     setIntent($('#btn4').text());
// })


$('#btn-add').on('click', function(){
    rooms_count++;//increment rooms count
    console.log(canvas_room_str + rooms_count);

    let element = $('<li>');
    let element_add = $('#btn-add-li');
    let myButton = document.createElement('button');
    let button_id = 'btn' + rooms_count;
    let button_txt = canvas_room_str + rooms_count;
    let button_class = '';
    if(rooms_count%5===0){
        button_class = "\"btn btn-secondary\"";
    }
    else if(rooms_count%5===1){
        button_class = "\"btn btn-primary\"";
    }
    else if(rooms_count%5===2){
        button_class = "\"btn btn-success\"";
    }
    else if(rooms_count%5===3){
        button_class = "\"btn btn-warning\"";
    }
    else{
        button_class = "\"btn btn-danger\"";
    }
    //console.log(button_class);
    myButton = "<button id =" + button_id + " type=\"button\" class="+ button_class +">" + button_txt + "</button>";

    element.append(myButton);
    element.insertBefore(element_add);

    document.getElementById(button_id).addEventListener('click', function(){
        $("#includedContent").load("/rooms/canvas.html");
        setIntent($('#'+button_id).text());
    })

    socket.emit('makeRoom', {
        'name': canvas_room_str + rooms_count,
        'path': 'stock_apple.png'
    })
})

$('#createRoomBtn').on('click', function(){
    let roomName = document.getElementById('roomNameInput').value;
    console.log(roomName);

    rooms_count++;//increment rooms count
    console.log(canvas_room_str + rooms_count);

    let element = $('<li>');
    let element_add = $('#btn-add-li');
    let myButton = document.createElement('button');
    let button_id = 'btn' + rooms_count;
    let button_txt = canvas_room_str + rooms_count;
    let button_class = '';
    if(rooms_count%5===0){
        button_class = "\"btn btn-secondary\"";
    }
    else if(rooms_count%5===1){
        button_class = "\"btn btn-primary\"";
    }
    else if(rooms_count%5===2){
        button_class = "\"btn btn-success\"";
    }
    else if(rooms_count%5===3){
        button_class = "\"btn btn-warning\"";
    }
    else{
        button_class = "\"btn btn-danger\"";
    }
    //console.log(button_class);
    myButton = "<button id =" + button_id + " type=\"button\" class="+ button_class +">" + roomName + "</button>";

    element.append(myButton);
    element.insertBefore(element_add);

    document.getElementById(button_id).addEventListener('click', function(){
        $("#includedContent").load("/rooms/canvas.html");
        setIntent(btn_txt);
    })

    socket.emit('makeRoom', {
        'name': canvas_room_str + rooms_count,
        'path': 'stock_apple.png'
    })
})