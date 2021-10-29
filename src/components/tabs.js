import axios from "axios"
const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //  
  // }

  // ['1','2','3','4','5']
  // <div class="topics">
  //    <div class="tab">1</div>
  //    <div class="tab">2</div>
  //    <div class="tab">3</div>
  //    <div class="tab">4</div>
  //    <div class="tab">5</div>
  //  </div>

  // ['bob','cam']
  // div class="topics">
  //    <div class="tab">bob</div>
  //    <div class="tab">cam</div>
  //  </div>

  let topicsDiv = document.createElement("div")
  topicsDiv.classList.add("topics")

  topics.forEach(topic => {
    let random = document.createElement("div")
    random.classList.add("tab")
    random.textContent = topic
    topicsDiv.appendChild(random)
  });
  return topicsDiv;
}



 
const tabsAppender = (selector) => {


  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  let results = axios.get(`http://localhost:5000/api/topics`)

  results.then((value)=>{
    let tabsContainer = document.querySelector(selector)
    let topicsList = value.data.topics
    let tabsFunc = Tabs(topicsList)
    tabsContainer.appendChild(tabsFunc)
  })
}

export { Tabs, tabsAppender }
