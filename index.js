let homecount = 0
document.getElementById("home-content").textContent = homecount
document.getElementById("home-plus1")
document.getElementById("home-plus2")
document.getElementById("home-plus3")

function clickinghomeplus1() {
       homecount+=1
       document.getElementById("home-content").textContent = homecount


}
function clickinghomeplus2() {  
         homecount+=2
            document.getElementById("home-content").textContent = homecount
}

function clickinghomeplus3() {
         homecount+=3
            document.getElementById("home-content").textContent = homecount
}

let guestcount = 0
document.getElementById("guest-content").textContent = guestcount
document.getElementById("guest-plus1")
document.getElementById("guest-plus2")
document.getElementById("guest-plus3")


function clickingguestplus1() {
       guestcount+=1
       document.getElementById("guest-content").textContent = guestcount

}
function clickingguestplus2() {
       guestcount+=2
       document.getElementById("guest-content").textContent = guestcount
}

function clickingguestplus3() {
       guestcount+=3
       document.getElementById("guest-content").textContent = guestcount
}               


