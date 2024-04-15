const btn= document.querySelector(".btn_ok");
const input_from= document.querySelector(".input_from");
const input_to=document.querySelector(".input_to")
const label=document.querySelector(".label_dollar");
const select =document.querySelector("#exchange");
const select1 =document.querySelector("#exchange1");

const cevir=()=>{

 fetch(`https://v6.exchangerate-api.com/v6/af956424b863d8bbad7e64e6/latest/${select.value}`).then(res=>
   res.json().then(data=>{
     input_to.value=input_from.value*data.conversion_rates[select1.value];
  })
)

}
btn.addEventListener("click",cevir);


fetch("https://v6.exchangerate-api.com/v6/af956424b863d8bbad7e64e6/latest/AZN").then(res=>
res.json().then(data=>{
   for(let i in data.conversion_rates){
    let element = document.createElement("option");
    element.setAttribute("value",`${i}`);
    element.textContent=i;
    select.append(element); 
   }
  })
)

fetch("https://v6.exchangerate-api.com/v6/af956424b863d8bbad7e64e6/latest/USD").then(res=>
res.json().then(data=>{
   for(let i in data.conversion_rates){
    let element = document.createElement("option");
    element.setAttribute("value",`${i}`);
    element.textContent=i;
    select1.prepend(element);
  }
 })
)

