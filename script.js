function insert(value) {
    document.getElementById("display").value += value;
  }
  
  function clearDisplay() {
    document.getElementById("display").value = '';
  }
  
  function deleteLast() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
  }
  
  function calculate() {
    const display = document.getElementById("display");
    try {
      display.value = eval(display.value);
    } catch (e) {
      alert("Invalid Expression");
      display.value = '';
    }
  }
  
  function toggleTheme() {
    document.body.classList.toggle("dark");
  }
  