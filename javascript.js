//Reservation validation

function inputvali(input) {
    var name = input.value;
    if (name.match(/^[a-zA-Zç '-]+$/)) {
        input.value = name.toUpperCase();
    }
    else {
        console.log(input.value)
        alert('Digite apenas caracteres de a-z !');
        input.value = "";
    }
}

function slideoverlay() {
    const btnbook = document.getElementById('btnbook');
    console.log(btnbook);
    const overlay = document.getElementById('overlay');
    overlay.style.backgroundColor = 'rgba(0,0,0,.75)';
    overlay.style.zIndex = '1';
    btnbook.addEventListener('mouseout', function (e) {
        overlay.style.backgroundColor = '';
        overlay.style.zIndex = '';

    })

}

function subform() {
    Array.from(nameinput).forEach(function (item) {
        console.log(item.value);
        if (item.value == " ") {
            e.preventDefault;
            alert("Não deixe espaços em branco");
        }
    })

}


function menuclick(h2) {
    var ul = h2.nextElementSibling;
    if (ul.style.display == "block") {
        ul.style.display = "none";
    }
    else {
        ul.style.display = "block";
    }
}



