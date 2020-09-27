function sec(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function newUrl(){
    var harfler = "qwertyuopasdfghjklizxcvbnm".split("")
    var random_harfler = sec(harfler) + sec(harfler) + sec(harfler) + sec(harfler) + Math.floor((Math.random() * 10)).toString() + Math.floor((Math.random() * 10)).toString()

    return random_harfler
}

var x = newUrl()
Swal.fire({
    title: 'Yeni oyun açılacak',
    text: x + " kodlu yeni taşkağıtmakas oyunu oluşturulacak",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#007bff',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes!'
  }).then((result) => {
    if (result.isConfirmed) {
        window.location = "/game/" + x;
    }
    else {
        Swal.fire({title : 'O zaman niye giriyon ki' }).then((result) => {
            window.location = "";
        });
    }
  })