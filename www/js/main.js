function renderPersons(persons) {

    // empty person-list
    $('#person-list').empty();
    //A counter that we will add 1 to for each loop iteration
    let co = 0;

    for (let person of persons) {
        $('#person-list').append(` 
                <div class="card">
                <div class="card-header" role="tab" id="heading${co}">
                <h5 class="mb-0">
                    <a data-toggle="collapse" href="#collapse${co}" aria-expanded="true" aria-controls="collapse${co}">
                    ${person.firstName} ${person.lastName}
                    </a>
                </h5>
                </div>
                <div id="collapse${co}" class="collapse" role="tabpanel" aria-labelledby="heading${co}" data-parent="#accordion">
                <div class="card-body">
                <div class="detailed-info">
                </div>
                </div>
                </div>
            </div>
        `);
        for (let key in person) {
            let val = person[key];

            // without .last() shows all the obj array 
            $('.detailed-info').last().append(`
            <div>${key}: ${val}</div>`);
        }
        co++;

    }
}
//jQuery: please read the contents of persons.json and convert to a JS array (provided it is valid JSON).
//Then call a function- in this renderPersons a use the data (the array) as an argument. 
//(argument = inparameter)


//a function is needed to change key for persons
$.getJSON('/json/persons.json', renderPersons);

$("#la").click(function () {
    $(".lg_bt").toggleClass("d-none");
    let lgNotThisOne= document.querySelector('.d-none').textContent; 
    if(lgNotThisOne=="EN"){
        console.log("en");
    }else{
        console.log("sv");
    }
});

