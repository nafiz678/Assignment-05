document.getElementById("btn-history").addEventListener("click", function(){
    document.getElementById("card-section").classList.add("hidden");
    document.getElementById("history-section").classList.remove("hidden");
    document.getElementById("btn-card").classList.add("bg-transparent");
    document.getElementById("btn-card").classList.add("border-2");
    document.getElementById("btn-history").classList.add("bg-lime-400")
    document.getElementById("btn-card").classList.remove("bg-lime-400")
    document.getElementById("btn-card").classList.add("text-slate-500")

})


document.getElementById("btn-card").addEventListener("click", function(){
    document.getElementById("card-section").classList.remove("hidden");
    document.getElementById("history-section").classList.add("hidden");
    document.getElementById("btn-card").classList.add("bg-lime-400");
    document.getElementById("btn-history").classList.remove("bg-lime-400");
    document.getElementById("btn-card").classList.remove("text-slate-500");
})


document.getElementById("donate-now").addEventListener("click", function(){
    donateNowButton("input-donate-amount", "card-donation-amount", "donate-title");
})

document.getElementById("donate-now-2").addEventListener("click", function(){
    donateNowButton("input-donate-amount-2", "card-donation-amount-2", "donate-title-2");
})

document.getElementById("donate-now-3").addEventListener("click", function(){
    donateNowButton("input-donate-amount-3", "card-donation-amount-3", "donate-title-3");
})

