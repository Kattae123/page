const body = document.querySelector('div.toggle-switch'),
      hide = document.querySelector('div span.switch')
      modeSwitch = body.querySelector(".switch"),
      active = body.querySelector(".remember-me-ball");


      
modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("checked-remember-me");
});

active.addEventListener("click" , () =>{
    hide.classList.toggle("toggle");
});