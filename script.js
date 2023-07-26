const body = document.body
const annually_text = document.getElementById("annually_text")
const monthly_text = document.getElementById("monthly_text")
const toggle_button = document.getElementById("toggle_button")
const card_prices = document.getElementsByClassName("card_prices")

let activated = false

function toggleEvent() {
    body.classList.toggle("toggle_activated")
    if (activated == false) {
        activated = true
        annually_text.style.color = "hsl(237, 63%, 64%)"
        setTimeout(function() {
            annually_text.style.color = "hsl(234, 14%, 74%)"
        }, 1000)
        card_prices[0].innerHTML = "<span>$</span>199.99"
        card_prices[1].innerHTML = "<span>$</span>249.99"
        card_prices[2].innerHTML = "<span>$</span>399.99"
    }
    else {
        activated = false
        monthly_text.style.color = "hsl(237, 63%, 64%)"
        setTimeout(function() {
            monthly_text.style.color = "hsl(234, 14%, 74%)"
        }, 1000)
        card_prices[0].innerHTML = "<span>$</span>19.99"
        card_prices[1].innerHTML = "<span>$</span>24.99"
        card_prices[2].innerHTML = "<span>$</span>39.99"
    }
}

toggle_button.addEventListener("click", toggleEvent)
toggle_button.addEventListener("keyup", function(char) {
    if (char.key == "Enter") {
        toggleEvent()
})
