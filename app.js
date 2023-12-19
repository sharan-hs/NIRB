function dropdownView(){
    let element2 = document.getElementById("dropdown2-content");
    element2.classList.remove("active2");
      let element = document.getElementById("dropdown-content");
      element.classList.toggle("active");
  }
  
  function dropdown2View(){
    let element2 = document.getElementById("dropdown-content");
    element2.classList.remove("active");
    let element = document.getElementById("dropdown2-content");
    element.classList.toggle("active2");
  }
  
  
  function dropdownClose(){
    let element = document.getElementById("dropdown-content");
    element.classList.remove("active");
  }
  
  function dropdown2Close(){
    let element = document.getElementById("dropdown2-content");
    element.classList.remove("active2");
  }
  
  function reveal() {
      var reveals = document.querySelectorAll(".reveal");
    
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }
    
    window.addEventListener("scroll", reveal);
    