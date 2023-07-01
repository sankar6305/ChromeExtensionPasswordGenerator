

const fun = () => {
    var st = "abcdefghijklmnopqrstuvwxyz"
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var num = "0123456789"
    var symb = "!@#$%^&*()_+~`|}{[]:;?><,./-="
    let pass = ""
    st = st + upper + num + symb
    var len = document.getElementById("length").value
    for (let i = 0; i < len; i++) {
        pass += st.charAt(Math.random() * st.length)
    }
    const r = document.getElementById("Password")
    let temp = pass
    if (pass.length != len) {
        fun();
    }
    if (r) {
        r.style.display = "block"
        r.innerHTML = pass
        pass = ""
    }

}

window.addEventListener("DOMContentLoaded", function () {
    var el = document.getElementById('btn');
    if (el) {
        el.addEventListener('click', fun);
    }
});



//git functions to push code from vs code to github
// git init
// git add .
// git commit -m "first commit"
// git branch -M main
// git remote add origin
// git@github...
// git push -u origin main
