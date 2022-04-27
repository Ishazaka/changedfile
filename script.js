

isadult = false;
ispediatric = false;

var Q2yes = document.getElementById("Q1-option1")
var Q2no = document.getElementById("Q1-option2")

var next = document.getElementById("next");

next.addEventListener("click", function () {
    if (Q2yes.checked) {
        document.getElementById("q-past").classList.add("d-none")
        document.getElementById("congrat").classList.remove("d-none");
        ispediatric = true;
    } else {
        document.getElementById("q-past").classList.add("d-none")
        document.getElementById("congrat").classList.remove("d-none")
        isadult = true;
    }
})

let boxcard = document.getElementsByClassName("box-card");
Array.from(boxcard).forEach(function (element) {

    element.addEventListener("click", function () {
        if (element.classList.contains("Pediatric") && ispediatric) {
            // document.getElementsByTagName("p")[0].classList.remove("d-none")
            // document.getElementsByTagName("a")[0].classList.remove("d-none")
            console.log(" yeah pediatirc")
        } else if (element.classList.contains("Adult") && isadult) {
            console.log("adult data availabe")
            // document.getElementsByTagName("p")[0].classList.remove("d-none")
            // document.getElementsByTagName("a")[0].classList.remove("d-none")
        }
    })

})



var checkadult = document.getElementById("adult");



checkadult.addEventListener("click", function () {

    // if (checkadult.checked) {
    checkpediat.checked = false;
    let adultvalue = checkadult.getAttribute("value")
    let boxcard = document.getElementsByClassName("box-card");
    Array.from(boxcard).forEach(function (element) {
        let cardtext = element.getElementsByTagName("h6")[0].innerHTML;


        if (cardtext !== adultvalue && checkadult.checked) {
            element.style.display = "none";
        }
        else {
            element.style.display = "block";
        }
    })

    // }
})

var checkpediat = document.getElementById("pediatric");

checkpediat.addEventListener("click", function () {

    checkadult.checked = false;
    let pediatvalue = checkpediat.getAttribute("value")
    let boxcard = document.getElementsByClassName("box-card");
    Array.from(boxcard).forEach(function (element) {
        let cardtext = element.getElementsByTagName("h6")[0].innerHTML;

        if (cardtext !== pediatvalue && checkpediat.checked) {
            element.style.display = "none";
        }
        else {
            element.style.display = "block";
        }

    })

})



var checkboxes = document.querySelectorAll('.checkbox');

for (var checkbox of checkboxes) {
    checkbox.addEventListener('click', function () {
        let boxcard = document.getElementsByClassName("box-card");
        if (this.checked) {

//             console.log(this.value)
            var realval = this.getAttribute("value")
            // let boxcard = document.getElementsByClassName("box-card");
            Array.from(boxcard).forEach(function (element) {
                let cardtext = element.getElementsByTagName("p")[0].innerHTML;

                if (cardtext === realval) {
                    element.style.display = "block";

                }
                else {
                    element.style.display = "none";

                }

            })

        } else if (!this.checked) {
            Array.from(boxcard).map(function (mov) {
                mov.style.display = "block"
            })

        }

    })
}

