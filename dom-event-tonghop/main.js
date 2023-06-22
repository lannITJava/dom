//Bien toan cuc mang 2 chieu chua tat ca cac hoc vien
let listStudent =[
    ["SV001", "Nguyen Van A", "abc@gmail.com","0348585949","Ha Noi", "Nam"]
];
let action = "create";
//Ham render du lieu tu listStudent ra table
function renderData() {
    // lay ra phan tu se dc render du lieu
    let tbody = document.getElementById("content");
    // dat tbody chua chua du lieu
    tbody.innerHTML = "";
    for (let index = 0; index < listStudent.length; index++) {
       //render du lieu tung tr cua tbody
       tbody.innerHTML+=`<tr>
                            <td>${index+1}</td>
                            <td>${listStudent[index][0]}</td>
                            <td>${listStudent[index][1]}</td>
                            <td>${listStudent[index][2]}</td>
                            <td>${listStudent[index][3]}</td>
                            <td>${listStudent[index][4]}</td>
                            <td>${listStudent[index][5]}</td>
                            <td>
                                <button onclick="functionABC()" >Edit </button>
                                <button onclick="functionABC()" >Delete </button>
                            </td>
                        </tr>`
                    
    }
}
//Ham validate du lieu khach hang nhap vao khi them moi hoac cap nhat
function validateForm() {
    // 1. Lay du lieu tu form
    let studentId = document.getElementById("studentId").value;
    let studentName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let sex = document.querySelector("input[name='gender']:checked").value;
    // 2. Thuv hien validate, neu thoa man --> true, co loi thong bao --> false
    // Validate studentId
    if (studentId=="") {
        alert=("vui lòng nhập mã sinh viên");
        return false;
    }
    // validate studentNamee
    if (fullName=="") {
        alert("vui lòng nhập vào họ và tên");
    }
    // Validate email
    let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(emailPattern)) {
        alert("vui lòng nhập email đúng định dạng");
        return false;
    }
    //  Validate phoner
    let phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    if (!phone.match(phonePattern)) {
        alert("vui lòng nhập phone đúng định dạng");
        return false;
    }
    // validate address
    if (address=="") {
        alert("vui lòng nhập đúng địa chỉ");
        return false;
    }
    return true;
}
//Ham thuc hien them moi hoac cap nhat sinh vien
function createOrEdit() {
    if (validateForm()) {
        let studentId = document.getElementById("studentId").value;
        let studentName = document.getElementById("fullName").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let address = document.getElementById("address").value;
        let sex = document.querySelector("input[name='gender']:checked").value;
        if (action=="create") {
            //thuc hien them moi sinh vien
              //1.lay du lieu tu form
              //2. push sinh vien vao mang 2 chieu liststudent
              listStudent.push([studentId,studentName,])
        }else{
            //thuc hien cap nhat sinh vien
        }
    }
}

//Khi trinh duyet load thif se load du lieu student va hien thi tren tabla
document.onload = renderData();
//truy cap vao phan tu save va gan su kien click
let btnSave = document.getElementById("btnSave");
btnSave.addEventListener("click" ,createOrEdit())