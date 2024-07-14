document.addEventListener('DOMContentLoaded', function () {
    const result = document.getElementById('result');
    const buttons = document.querySelectorAll('button');

    let currentInput = '';
    let currentOperator = '';
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default button behavior
            const value = this.textContent;

            if (this.classList.contains('number') || this.classList.contains('decimal')) {
                currentInput += value;
                result.value = currentInput;
            } else if (this.classList.contains('operator')) {
                if (currentInput !== '') {
                    if (previousInput !== '') {
                        calculate();
                    } else {
                        previousInput = currentInput;
                    }
                    currentInput = '';
                }
                currentOperator = value;
            } else if (this.classList.contains('equals')) {
                calculate();
            } else if (this.classList.contains('clear')) {
                clear();
            }
        });
    });

    function calculate() {
        let calculation;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        if (isNaN(prev) || isNaN(current)) return;

        switch (currentOperator) {
            case '+':
                calculation = prev + current;
                break;
            case '-':
                calculation = prev - current;
                break;
            case '*':
                calculation = prev * current;
                break;
            case '/':
                calculation = prev / current;
                break;
            default:
                return;
        }

        result.value = calculation;
        previousInput = calculation.toString();
        currentInput = '';
    }

    function clear() {
        result.value = '';
        currentInput = '';
        previousInput = '';
        currentOperator = '';
    }
});