// [1] ========================> Selector all elments

let inp_Day = document.querySelector(".inp-day");

let inp_Date = document.querySelector(".inp-date");

let inp_Hours = document.querySelector(".inp-hours");

let inp_Works = document.querySelector(".inp-category");

let inp_Type = document.querySelector(".inp-type");

let btn = document.querySelector(".add");

let set_data = document.querySelector(".set-data");

let errorMess = document.querySelector(".error");

let search_input = document.querySelector(".search");

let h2 = document.querySelector(".data h2");

let arrayOfItems = [];

let currentId;


// ============================================>  Calling Function If LocalStroge Have Items

if(localStorage.getItem("data")) checkLocal();

// [2]  ========================> Active Button to can Create New One

btn.addEventListener("click" , e => {

    btn.value = "Add";

    if(inp_Day.value && inp_Date.value && inp_Hours.value && inp_Works.value && inp_Type.value) {

        if(document.querySelector(".edit") === null) {

            // Calling function to add tasks to array

            arrOfTasks();

            // Calling function to add tasks to LocalStorage

            addToLocal(arrayOfItems);

        }else {

            // Calling function to Set New Data When User edit

            newData();

        // Change name attrubite if user change it when hi's edit


        document.querySelector(".edit").setAttribute("data-name" , inp_Day.value);

            // Remover all edit calss after Change data to Can add a new task

            document.querySelectorAll(".edit").forEach(div => div.classList.remove("edit"));
        }


        // Calling Function To Set A new Data 

        changeDataFromLoaclStorage(currentId);

        // Calling Function To add Icone

        editIcone();


    }else {

        // add active calss to error massage to Show it

        errorMess.classList.add("active-err");

    };

    // Remover All Value From All inputs

    document.querySelectorAll(".data input").forEach(inp => inp.value = "");

    // add Value For Only Button input

    btn.value = "Add";

    h2.innerHTML = "Create";

});

// ============================================>  Hide Erorr Message When user Foucs on input

function errorHider(input) {
    input.addEventListener("input" , _ => {

        errorMess.classList.remove("active-err");
    
    });
};

// ============================================> Array Of All inputs to add a function for it

let arrOfInputs = [inp_Day , inp_Date , inp_Hours , inp_Works , inp_Type ];

for (let i = 0; i < arrOfInputs.length; i++) errorHider(arrOfInputs[i]);

//  ========================>  Create function to add item to page

function  addItemToPage(tasks) {

    // Create main div
    set_data.innerHTML = "";

    tasks.forEach(task => {


    let div = document.createElement("div");

    div.classList.add("data-type");

    div.id = task.id;

    div.setAttribute("data-name" , task.search);

//  =============================================

    // Create Day 

    let div_day = document.createElement("div");

    div_day.innerHTML = "Day";

    div_day.classList.add("day");

    // Create Day info

    let day_info = document.createElement("div");

    day_info.classList.add("day-info");

    day_info.innerHTML = task.day;

    // append Day-info to Day

    div_day.appendChild(day_info);

//  =============================================

    //  Create Date Div

    let div_data = document.createElement("div");

    div_data.innerHTML = "Date";

    div_data.classList.add("date");

    // Create Date_info info

    let data_info = document.createElement("div");

    data_info.classList.add("date-info");

    data_info.innerHTML = task.date;

    // append date to main date

    div_data.appendChild(data_info);

//  =============================================

        //  Create hours  Div

        let div_Hours = document.createElement("div");

        div_Hours.innerHTML = "Hours";
    
        div_Hours.classList.add("hours");
    
        // Create hours_info info
    
        let hours_info = document.createElement("div");
    
        hours_info.classList.add("hours-info");
    
        hours_info.innerHTML = task.hours;

        // append hours_info to main div_Hours

        div_Hours.appendChild(hours_info);

//  =============================================

        //  Create Level  Div

        let div_Level = document.createElement("div");

        div_Level.innerHTML = "Level";
    
        div_Level.classList.add("level");
    
        // Create Level info
    
        let level_info = document.createElement("div");
    
        level_info.classList.add("level-info");
    
        level_info.innerHTML = task.level;

        // append level_info to main div_Level

        div_Level.appendChild(level_info);

//  =============================================

        //  Create Works For  Div

        let div_works = document.createElement("div");

        div_works.innerHTML = "Works For";
    
        div_works.classList.add("works");
    
        // Create works info
    
        let works_info = document.createElement("div");
    
        works_info.classList.add("works-info");
    
        works_info.innerHTML = task.works;

        // append works_info to main div_works

        div_works.appendChild(works_info);

//  =============================================

        //  Create type  Div

        let div_type = document.createElement("div");

        div_type.innerHTML = "Type";
    
        div_type.classList.add("type");
    
        // Create type info
    
        let type_info = document.createElement("div");
    
        type_info.classList.add("type-info");
    
        type_info.innerHTML = task.type;

        // append type_info to div_type

        div_type.appendChild(type_info);

//  =============================================

        //  Create Action  Div

        let div_action = document.createElement("div");

        let h2 = document.createElement("h2");

        div_action.classList.add("action");
        
        h2.innerHTML = "Action";
    
        // Create Action info
    
        let action_info = document.createElement("div");

        let icone_one = document.createElement("i");

        icone_one.classList = "fa-regular fa-trash-can";

        let icone_two = document.createElement("i");

        icone_two.classList = "fa-regular fa-pen-to-square";

        // append icone to div

        action_info.appendChild(icone_one);
        action_info.appendChild(icone_two);

        // append Childern to div

        div_action.appendChild(h2);
        div_action.appendChild(action_info);

//  =============================================

    // Append All Data To Main Div

    let arrayToAppend = [div_day, div_data , div_Hours , div_Level , div_works , div_type , div_action];

    for (let i = 0; i < arrayToAppend.length; i++) div.appendChild(arrayToAppend[i])


    // append div to Main Function to add it to page

    set_data.appendChild(div);

});

};

//=================================================================> Create Function To add items in array

function arrOfTasks() {

    // create Object To add it to array

    let tasks = {

        day: inp_Day.value,

        id: Math.random(),

        date: inp_Date.value,

        hours: inp_Hours.value,

        works: inp_Works.value,

        type: inp_Type.value,

        level: inp_Hours.value > 3 && inp_Hours.value <= 5 ? "Good" : false || inp_Hours.value > 5 && inp_Hours.value <= 8 ? "Keep Going Bro" : false || inp_Hours.value <= 3 ? "You Should To Foucs More Then It" : false, 

        search: inp_Day.value
        
    };

    // append task to page
    arrayOfItems.push(tasks);

    addItemToPage(arrayOfItems);

};
// =================================================================> Active All Icones

function activeIcons() {

    let input_icone = document.querySelector(".fa-xmark");

    let hideError = document.querySelector(".x");

    // active click

    input_icone.addEventListener("click" , _ => document.querySelector(".search").value = "");

    hideError.addEventListener("click" , _ => hideError.parentElement.classList.remove("active-err"));


    deleteFromPage();

};
activeIcons();

// ============================================>  Create Functio To Delete Task From Page

function deleteFromPage() {

        let delete_icone = document.querySelector(".data-name");

        delete_icone.addEventListener("click" , function(e) {

            if(e.target.classList.contains("fa-trash-can")) {

                deleteFromLocal(e.target.parentElement.parentElement.parentElement.id);
                
                e.target.parentElement.parentElement.parentElement.remove();

            };
        });
};

//============================================>  Create Edit Icone Function

function editIcone() {

    let edit_icone = document.querySelectorAll(".fa-pen-to-square");

    edit_icone.forEach( i => {

        i.addEventListener("click" , function(e) {
            

            inp_Day.focus();

            // remove all edit from elements
            
            btn.value = "edit";

            if(btn.value == "edit") h2.innerHTML = "Edit";

            document.querySelectorAll(".edit").forEach(div => div.classList.remove("edit"));


            // add edit calss to current element

            e.target.parentElement.parentElement.parentElement.classList.add("edit");

    
            setOldDataToInput();

            // Set Current id to acsess for it when user wanna change data

            currentId = e.target.parentElement.parentElement.parentElement.id;


        });

    });

};

editIcone();

// ============================================>  Function set new Data

function newData() {

    // Setting New Data 

    document.querySelector(".edit .day .day-info").innerHTML = inp_Day.value;

    document.querySelector(".edit .date .date-info").innerHTML = inp_Date.value;

    document.querySelector(".edit .hours .hours-info").innerHTML = inp_Hours.value;

    document.querySelector(".edit .level .level-info").innerHTML = parseInt(inp_Hours.value) > 3 && parseInt(inp_Hours.value) <= 5 ? "Good" : false || parseInt(inp_Hours.value) > 5 && parseInt(inp_Hours.value) <= 8 ? "Keep Going Bro" : false || parseInt(inp_Hours.value) <= 3 ? "You Should To Foucs More Then It" : false, 

    document.querySelector(".edit .works .works-info").innerHTML = inp_Works.value;

    document.querySelector(".edit .type .type-info").innerHTML = inp_Type.value;

};

//============================================>  Create Function To set Old For Input to change it

function setOldDataToInput() {

    // Set Old Data

    inp_Day.value = document.querySelector(".edit .day .day-info").innerHTML;

    inp_Date.value = parseInt(document.querySelector(".edit .date .date-info").innerHTML);

    inp_Hours.value = parseInt(document.querySelector(".edit .hours .hours-info").innerHTML);

    inp_Works.value = document.querySelector(".edit .works .works-info").innerHTML;

    inp_Type.value = document.querySelector(".edit .type .type-info").innerHTML;

};

//============================================>  Change data When user edit

function changeDataFromLoaclStorage(itemId) {

     arrayOfItems.filter(item => {   

        if(item.id == itemId) {

            item.day = inp_Day.value;

            item.date = inp_Date.value;

            item.hours = inp_Hours.value;

            item.works = inp_Works.value;

            item.type = inp_Type.value;

            item.search = inp_Day.value;

            item.level = item.hours > 3 && item.hours <= 5 ? "Good" : false || item.hours > 5 && item.hours <= 8 ? "Keep Going Bro" : false || item.hours <= 3 ? "You Should To Foucs More Then It" : false;
        };
    });

    addToLocal(arrayOfItems);

};

// ======================================> Set Data For LocalStorage

function addToLocal(arrayOfItems) {

    let data = JSON.stringify(arrayOfItems);

    // add data to localStroge

    localStorage.setItem("data" , data);


};

// ============================================> Delete item From LocalStroge

function deleteFromLocal(itemId) {

    let data = JSON.parse(localStorage.getItem("data"));


    arrayOfItems = data.filter(item => item.id != itemId);


    addToLocal(arrayOfItems);

};

// ============================================> Set Data To Page If LocalStroge Have Item

function checkLocal() {

    let data = JSON.parse(localStorage.getItem("data"));

    arrayOfItems = data;

    addItemToPage(arrayOfItems);

};

// Create Function To add Active Class To Div When User Type it Day on search

function getDiv() {

    search_input.addEventListener("input" , _ => {

        let divs = document.querySelectorAll(".data-type");

        divs.forEach(div => {

            div.classList.remove("active");

            if(div.getAttribute("data-name") == search_input.value) {

                div.classList.add("active");

                // set Number of Scrolling

                let place = div.getClientRects()[0].y;

                // Scrolling To Get active element

                window.scrollBy({
                    left: 0 ,
                    top : place,
                    behavior: "smooth"
                })

            }

        });

    })


};
getDiv()


//============================================>  Set Keypord Keys

window.addEventListener("keyup" , function(e) {
        if(e.key == "Enter") btn.click();

        if(e.key == "Delete") document.querySelector(".fa-trash-can").click();

        if(e.key == "Escape") errorMess.classList.remove("active-err");

});
