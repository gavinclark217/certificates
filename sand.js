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
        // console.log(eventData);
        nameOutput.innerText = eventData.target.value;
    });

    document.getElementById('type').addEventListener('change', function (eventData) {
        let nameOutput = document.getElementById('nameOutput');
        // console.log(eventData);
        // let info = document.getElementById('info');
        // info.innerText = eventData.target.value;
        changeCert(eventData.target.value);
    });

    // process form Data
    document.getElementById("myForm").addEventListener("submit", function (eventData) {
        eventData.preventDefault(); //stop page reload when form is submitted
        console.log(eventData.target);
        var formData = new FormData(eventData.target);
        formData = Object.fromEntries(formData);

        //update certificate information when form is submitted:
        let nameOutput = document.getElementById('nameOutput');
        // let info = document.getElementById('info');
        nameOutput.innerText = formData.name;
        // info.innerText = formData.type;
        changeCert(formData.type);

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
        }
    }

    //adding button to print certificate
    //setup print event listener

    if (document.getElementById('print') !== null) {
        let printElement = document.getElementById('print');
        printElement.addEventListener('click', function(e) {
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

//generating a date


/* Additional things to be aware of */






function processForm(form) {

}