let data = [

["Michelle Gregory","Portsmouth, United Kingdom"],
["Milton Chavez","Atlanta, United States"],
["Eino Kinnunen","Enontekiö, Finland"],
["Isabéu Barros","São Paulo, Brazil"],
["Juan Fernandez","Valladolid, Spain"],
["Sieghard Hilbig","Tuttlingen, Germany"],
["Jade Fortin","Charlottetown, Canada"],
["Sedef Kutlay","Kayseri, Turkey"],
["Afşar Okumuş","Şanlıurfa, Turkey"],
["Veeti Leppanen","Nummi, Finland"],
["Ismael Diaz","Murcia, Spain"],
["Jasmine Li","Keswick, Canada"]
]

let tbody = document.getElementById("tbody")
for(let i = 0; i < data.length; i++) {
    let p = "<p>" +
    "<td>" + data[i][0] + "</td>" +
    "<td>" + data[i][1] + "</td>" +
    "</p>"
tbody.innerHTML += p;
}
let p = tbody.childNodes
document.getElementById("search__text").addEventListener("keyup", function() {
    let search = document.getElementById("search__text").value.toLowerCase()

    for(let i = 0; i < tbody.childNodes.length; i++) {
        let find = false
        let p = tbody.childNodes[i]
        let td = p.childNodes
        console.log(tbody.childNodes)
        console.log(p)

        for (let j = 0; j <td.length; j++) {
            let value = td[j].childNodes[0].nodeValue.toLowerCase()
            console.log(value)
            if (value.indexOf(search) >= 0) {
                find = true
            }
        }
        if (find) {
            p.style.display = "table-row"
        } else {
            p.style.display = "none"
        }
    }
})
