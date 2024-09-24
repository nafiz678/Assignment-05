

function donateNowButton (id, amount, title)
{
    const mainBalance = document.getElementById("main-balance").innerText;
    const mainBalanceNumber = parseFloat(mainBalance);
    const inputAmount = document.getElementById(id).value;
    const inputAmountNumber = parseFloat(inputAmount);
   
   
    if(!isNaN(inputAmount) && inputAmountNumber < mainBalanceNumber && inputAmountNumber > 0)
    {
        const newBalance = mainBalanceNumber - inputAmountNumber;
    document.getElementById("main-balance").innerText = newBalance;
    const cardDonationAmount = document.getElementById(amount).innerText;
    const cardAmountNumber = parseFloat(cardDonationAmount);
   
    document.getElementById(amount).innerText = cardAmountNumber + inputAmountNumber;
   
    const donateTitle = document.getElementById(title).innerText;

    // time values
    let n = new Date()
    const weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let i = n.getDay();
    let week = weeks[i];
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let j = n.getMonth();
        let month = monthNames[j];
        let date = n.getDate();
        let year = n.getFullYear();
        let hours = n.getHours();
        let minutes = n.getMinutes();
        let seconds = n.getSeconds();



    //Adding transaction to history
    const div = document.createElement("div");
    div.classList.add("w-4/5", "mx-auto", "p-7", "border", "rounded-2xl");
    div.innerHTML = `
    <h2 class="text-xl font-extrabold pb-4">${inputAmountNumber} Taka is ${donateTitle}</h2>
    
    <p class="font-light text-[#111111b3]"> Date : ${week} ${month} ${date} ${year} ${hours}:${minutes}:${seconds} GMT +0600 (Bangladesh Standard Time)</p>
    `
    document.getElementById("history-section").appendChild(div);

    document.getElementById('my_modal_1').showModal();
    }
    else{
        alert("Invalid Input")
        document.getElementById('my_modal_1').close();
    }
    

}

