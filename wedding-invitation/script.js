function openInvite(){
const wrapper=document.querySelector(".envelope-wrapper");
const screen=document.getElementById("screen");
const invite=document.getElementById("invite");
const seal=document.getElementById("seal");

seal.classList.add("break");
wrapper.classList.add("open");

setTimeout(()=>{
screen.style.display="none";
invite.classList.remove("hidden");
},1500);
}

const params=new URLSearchParams(window.location.search);
const name=params.get("name");
if(name){document.getElementById("guestName").innerText="Dear "+name;}