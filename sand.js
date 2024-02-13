// Add Event listners when DOM is ready
document.addEventListener("DOMContentLoaded", function () {

    // check for buttons exist
    if (document.querySelectorAll('.button') !== null) {
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('click', processForm))
    }

    // optionally update when fields update
    // tbd
    document.getElementById('name').addEventListener('change', function (eventData) {
        let nameOutput = document.getElementById('nameOutput');
        // console.log(eventData.target.value);
        nameOutput.innerText = eventData.target.value;
    });

    let selectedOptionText = "";

    document.getElementById('type').addEventListener('change', function (eventData) {
        selectedOptionText = eventData.target.options[eventData.target.selectedIndex].text;
        changeCert(eventData.target.value);
    });

    document.getElementById("myForm").addEventListener("submit", function (eventData) {
        eventData.preventDefault(); //stop page reload when form is submitted
        console.log(eventData.target);
        var formData = new FormData(eventData.target);
        formData = Object.fromEntries(formData);
        let nameOutput = document.getElementById('nameOutput');
        nameOutput.innerText = formData.name;
        let info = document.getElementById('type');
        let selectedOptionIndex = info.selectedIndex;
        info.options[selectedOptionIndex].text = selectedOptionText;
        changeCert(info.value);
    });
    // Log readiness to console
    console.log("Ready");

    // let info = document.getElementById('info');
    // info.classList.add('test');

    // certificate.classList.add('number1');

    function changeCert(value) {
        let certificate = document.getElementById('certificate');
        certificate.classList = ""; // clear classes on each function call
        switch (value) {
            case 'A':
                certificate.classList.add('number1');
                break;
            case 'B':
                certificate.classList.add('number2');
                break;
            case 'C':
                certificate.classList.add('number3');
                break;
            default:
                break;
        }
    }

    //adding button to print certificate
    //setup print event listener

    if (document.getElementById('print') !== null) {
        let printElement = document.getElementById('print');
        printElement.addEventListener('click', function (e) {
            window.print();
            console.log('invoke print');
        });
    }

    let theDate = new Date().toLocaleDateString('en-us', {
        weekday: "long",
        year: "numeric", month: "short", day: "numeric"
    })
    let dateBox = document.getElementById('theDate');
    dateBox.innerText = theDate;
});

/* Additional things to be aware of */

function processForm(form) {

}