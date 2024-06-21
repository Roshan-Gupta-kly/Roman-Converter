document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.getElementById('number');
    const convertBtn = document.getElementById('convert-btn');
    const outputDiv = document.getElementById('output');
    const pInvalid = document.querySelector(".invalid");

    convertBtn.addEventListener('click', function() {
        const num = parseInt(inputField.value);

        if (isNaN(num)) {
            pInvalid.textContent = "Please enter a valid number";
            outputDiv.style.display = "block";
            outputDiv.classList.remove("result");
            pInvalid.classList.remove("value");
        } else if (num < 1) {
            pInvalid.textContent = "Please enter a number greater than or equal to 1";
            outputDiv.style.display = "block";
            outputDiv.classList.remove("result");
            pInvalid.classList.remove("value");
        } else if (num >= 4000) {
            pInvalid.textContent = "Please enter a number less than or equal to 3999";
            outputDiv.style.display = "block";
            outputDiv.classList.remove("result");
            pInvalid.classList.remove("value");
        } else {
            pInvalid.textContent = convertToRoman(num);
            outputDiv.style.display = "block";
            outputDiv.classList.add("result");
            pInvalid.classList.add("value");
        }
    });

    function convertToRoman(num) {
        const romanNumerals = [
            { value: 1000, numeral: 'M' },
            { value: 900, numeral: 'CM' },
            { value: 500, numeral: 'D' },
            { value: 400, numeral: 'CD' },
            { value: 100, numeral: 'C' },
            { value: 90, numeral: 'XC' },
            { value: 50, numeral: 'L' },
            { value: 40, numeral: 'XL' },
            { value: 10, numeral: 'X' },
            { value: 9, numeral: 'IX' },
            { value: 5, numeral: 'V' },
            { value: 4, numeral: 'IV' },
            { value: 1, numeral: 'I' }
        ];

        let romanStr = '';

        for (let i = 0; i < romanNumerals.length; i++) {
            while (num >= romanNumerals[i].value) {
                romanStr += romanNumerals[i].numeral;
                num -= romanNumerals[i].value;
            }
        }

        return romanStr;
    }
});
