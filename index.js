// card1
// Function to load data asynchronously
function signin() {
    // Get the input elements with the id "username" and "password"
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
  
    // Get the element with the id "output"
    const outputElement = document.getElementById("result");
  
    // Check if the user has entered a username and password
    if (!usernameInput.value || !passwordInput.value) {
      // If the user hasn't entered a username and password, show an error message
      outputElement.innerHTML = "Please enter both username and password.";
    } else {
      // If the user has entered a username and password, show the "Loading..." message
      outputElement.innerHTML = "Loading...";
  
      // Wait for 3 seconds (3000 milliseconds)
      setTimeout(() => {
        // Set the text of the element to "Logged In"
        outputElement.innerHTML = "Logged In";
      }, 3000);
    }
  }
  
//end of card 1

//card 2
function greet(){
     // Get the input elements
     const FirstName= document.getElementById("FirstName").value;
     const LastName= document.getElementById("LastName").value;
     const YourYear= document.getElementById("YourYear").value;
     const NowYear= document.getElementById("NowYear").value;
     const age = (NowYear-YourYear);

     //Get the Element with id of "greetnow"
     const greetnow = document.getElementById("greetnow");
    greetnow.innerHTML = "Hi, " + FirstName + " "+LastName + "<br>" +
                        "Your Year of Birth is " + YourYear + "<br>" +
                        "and your Age is " + age ;
}
  
//end of card 2 

//card 3
function average(){
    // Get the input elements
    let cardFirstname= document.getElementById("FirstNamec").value;
    let html=  parseFloat(document.getElementById("html").value);
   let css= parseFloat(document.getElementById("css").value);
   let javascript= parseFloat(document.getElementById("javascript").value);
    let average = Math.round((html+css+javascript)/3);

   
    //if condition for passed and failed
    if (average >= 75){
        //if average is higher of 75 
        let averageOutput = document.getElementById("average");

        //display the average and passed
    averageOutput.innerHTML = "Hi, "+ cardFirstname + "<br> The average score is:" + average + "<br>You Passed!";
    } else{
        //else the average is lower than 75 
        let averageOutput = document.getElementById("average");
        //display the average and failed
    averageOutput.innerHTML =  "Hi, "+ cardFirstname + "<br>The average score is:" + average + "<br>You Failed!";
    }
}
 
//end of card 3
//card 4

// Define the heroes array
const heroes = [
    { name: "Shield Hero", type: "Defender" },
    { name: "Spear Hero", type: "Attacker" },
    { name: "Bow Hero", type: "Ranger" },
    { name: "Sword Hero", type: "Warrior" }
  ];
  
  // Function to display the hero's information
  function gameon() {
    // Get the selected hero's index
    const selectedIndex = document.getElementById("heroSelector").selectedIndex - 1;
    const player = document.getElementById("UID").value;
    // Check if a hero was selected
    if (selectedIndex >= 0) {
      // Get the selected hero's information
      const hero = heroes[selectedIndex];
      
      // Display the hero's information in the "herostatus" div
      document.getElementById("herostatus").innerHTML = `Welcome, ${document.getElementById("UID").value}. You have chosen ${hero.name} as your hero. He is a ${hero.type}.`;
    } else {
      // If no hero was selected, display an error message
      document.getElementById("herostatus").innerHTML =  "You missing something, please enter your Name or select a hero";
    }
  }
//end of card 4

//card-7
// Class for creating Task objects
// The `Task` class has a constructor that takes in a task description as its argument
// It also has a property `isCompleted` that is set to false by default
class Task {
    constructor(task) {
      this.task = task;
      this.isCompleted = false;
    }
  }
  
  // Class for creating ToDoList objects
// The `ToDoList` class has a constructor that initializes an empty tasks array
  class ToDoList {
    constructor() {
      this.tasks = [];
    }
  
  // Method for completing a task
  // The `completeTask` method takes in an index as its argument
  // It finds the task at the specified index in the `tasks` array
  // And sets the `isCompleted` property of that task object to true
 
    addTask(task) {
      this.tasks.push(new Task(task));
    }
  
    // Method for completing a task
    completeTask(index) {
      this.tasks[index].isCompleted = true;
    }
   // Method for rendering the To-Do list
  // The `render` method finds the `#task-list` element in the HTML document
  // Then it empties the inner HTML of that element
  // Then it loops through the `tasks` array and for each task object, it:
  //  1. creates a new `li` element
  //  2. sets its inner HTML to the task description
  //  3. if the task is completed, it sets the text decoration to `line-through`
  //  4. if the task is not completed, it sets the text decoration to `none`
  //  5. adds a click event listener to the `li` element, so that when it's clicked,
  //     the `completeTask` method is called with the index of the task in the `tasks` array
  //  6. adds the `li` element to the `#task-list` element
  render() {
      const taskList = document.querySelector("#task-list");
      taskList.innerHTML = "";
      this.tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = task.task;
         // If the task is completed, strike through the text
        if (task.isCompleted) {
          listItem.style.textDecoration = "line-through";
        } else {
          listItem.style.textDecoration = "none";
        }
            // Attach a click event handler to the list item
        listItem.addEventListener("click", () => {
        // When the list item is clicked, complete the task and re-render the list
       
          this.completeTask(index);
          this.render();
        });
            // Append the list item to the task list
        taskList.appendChild(listItem);
      });
    }
  }
  
  // Initializing the To-Do list
  const toDoList = new ToDoList();
  toDoList.render();
  
  // Event handling for adding a task
  const addTaskButton = document.querySelector("#add-task-button");
  addTaskButton.addEventListener("click", () => {
     // When the add task button is clicked, get the value of the new task input
    const newTaskInput = document.querySelector("#new-task-input");
      // If the input is empty, show an alert to the user
    if (!newTaskInput.value) {
      alert("Please add a task!");
      return;
    }
     // Add the task and clear the input
    toDoList.addTask(newTaskInput.value);
    newTaskInput.value = "";
    // Re-render the task list
    toDoList.render();
  });
            //end of card 7
//card-8


//end of card-8
//Direct Link in DOM and Browser API
function directlink(){
    alert("You will Direct in Other Link");
}
//end ofDirect Link in DOM and Browser API

// <!-- See more script -->
     // Get a reference to the toggle button and more group elements
  var toggleButton = document.getElementById("toggleButton");
   var toggleBtns = document.querySelectorAll(".toggle-btn");
  toggleBtns.forEach(function(btn) {
     // Add a click event listener to the toggle button
    btn.addEventListener("click", function() {
          // Check the current state of the more group
      var moreText = this.nextElementSibling;
      if (moreText.style.display === "none") {
           // Show the more group
        moreText.style.display = "block";
        this.innerHTML = "Click to see less";
      } else {
            // Hide the more group
        moreText.style.display = "none";
        this.innerHTML = "Click to see more";
      }
    });
  });
