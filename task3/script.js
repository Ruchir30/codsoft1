document.addEventListener("DOMContentLoaded", function () {
    var inputBox = document.getElementById("inputbox");

    var buttons = document.querySelectorAll("button");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            var buttonText = button.textContent;

            
            switch (buttonText) {
                case "AC":
                    
                    inputBox.value = "";
                    break;
                case "DEL":
                    
                    inputBox.value = inputBox.value.slice(0, -1);
                    break;
                case "=":
                    
                    try {
                        inputBox.value = eval(inputBox.value);
                    } catch (error) {
                        inputBox.value = "Error";
                    }
                    break;
                default:

                    inputBox.value += buttonText;
            }
        });
    });
});
