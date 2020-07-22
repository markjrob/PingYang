let current_page = "blank";
load("promotion");
var newElement = document.createElement("tr");
var total = 0;
var i = 0;

function load(select){
    if (select == current_page){
        return;
    }
    else{
        current_page = select;
        console.log("Change to " + current_page);
    }
    let requestURL = 'json/' + select + '.json';
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            show(JSON.parse(request.responseText));
        }
    };
    request.open("GET", requestURL, true);
    request.send();
}

function show(json) {
    let detail = document.getElementById("detail");
    let title_msg = json.title;
    detail.innerHTML = "";
    let temp = "";
    for (let i = 0; i < json.detail.length; i++) {
        temp += "<p>" + json.detail[i] + "</p>";
    }
    detail.innerHTML = temp;
    document.title = "PingYang" + " : " + title_msg;
}

function click_sound() {
    var snd = new Audio("sound/click.mp3");
    snd.play();
}

function select(id) {
    switch (id) {
        case 1:
            nameth = "ชุดครอบครัวรวมมิตรสุขสันต์"
            break;
        case 2:
            nameth = "ชุดครอบครัวหมูสุขสันต์"
            break;
        case 3:
            nameth = "ชุดครอบครัวเนื้อสุขสันต์"
            break;
        case 4:
            nameth = "ชุดพิเศษรวมมิตรภาพ"
            break;   
        case 5:
            nameth = "เนื้อหมู"
            break;  
        case 6:
            nameth = "หมูสามชั้น"
            break;
        case 7:
            nameth = "เบคอน"
            break;  
        case 8:
            nameth = "เนื้อติดมัน"
            break;  
        case 9:
            nameth = "เนื้อสไลด์"
            break;
        case 10:
            nameth = "เนื้อไก่"
            break;
        case 11:
            nameth = "กุ้ง"
            break;  
        case 12:
            nameth = "ตับหมู"
            break;
        case 13:
            nameth = "แซลมอน"
            break;  
        case 14:
            nameth = "หนวดปลาหมึก"
            break;  
        case 15:
            nameth = "ปลาหมึก"
            break;   
        case 16:
            nameth = "กะหล่ำปลี"
            break;
        case 17:
            nameth = "ข้าวโพดอ่อน"
            break;  
        case 18:
            nameth = "แครอท"
            break;  
        case 19:
            nameth = "ฟักทอง"
            break;
        case 20:
            nameth = "เห็ดออรินจิ"
            break;
        case 21:
            nameth = "เห็ดเข็มทอง"
            break;  
        case 22:
            nameth = "โค๊ก"
            break;
        case 23:
            nameth = "ชามะนาว"
            break;
        case 24:
            nameth = "น้ำส้ม"
            break;  
        case 25:
            nameth = "ไอศครีม ช็อคโกแลต"
            break;   
        case 26:
            nameth = "ไอศครีม ชาเขียว"
            break;
        case 27:
            nameth = "ไอศครีม วานิลา"
            break;  
        case 28:
            nameth = "น้ำแข็งใสถั่วแดง"
            break;
    }
    return nameth;
}

function add(id,cost) {
    name = select(id);
    total += cost;
    document.getElementById("total").innerHTML="ราคารวม "+total+" บาท";
    var del = "del("+i+","+cost+")";
    newElement = document.createElement("tr");
    newElement.setAttribute("id", "tr-"+i);
    newElement.innerHTML = "&nbsp&nbsp"+name+"<td align = 'right'><button type='button' class='btn btn-outline-danger' onclick='click_sound();"+del+"'>ยกเลิก</button></td>";
    console.log(newElement);
    var list = document.getElementById("list");
    list.insertBefore(newElement,list.childNodes[i]);
    i++;
    console.log(i)
}

function del(id,cost) {
    total -= cost
    document.getElementById("total").innerHTML="ราคารวม "+total+" บาท";
    console.log(id);
    var list = document.getElementById("tr-"+id);
    console.log(list);
    list.remove();
    i--;
    console.log(i)
}

function pay() {
    document.getElementById("pay").innerHTML="<img src='img/qrcode.jpg' style='width:350px;'>"
}