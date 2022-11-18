let expanded = false;

function expandNavbar() {
    expanded = !expanded
    if (expanded) {
        document.getElementById("navbar").classList.add("expanded")
    } else {
        document.getElementById("navbar").classList.remove("expanded")
    }
}

(() => {
    fetch('/navbar')
        .then(response => {
            return response.text()
        })
        .then(body => {
            let element = document.querySelector("body")
            element.innerHTML = body + element.innerHTML
        })
        .then(() => {
            if (page !== "/") {
                let home = document.getElementById("home-link")
                home.setAttribute("href", "../")
                home.classList.remove("active")
            }
            document.querySelector(`a[href="${page}"]`).classList.add("active")
        })
})()