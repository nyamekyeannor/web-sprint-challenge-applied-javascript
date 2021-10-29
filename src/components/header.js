const Header = (title, date, temp) => {
const head = document.createElement('div')
 const span = document.createElement('span')
 const titleElement = document.createElement('h1')
 const tempElement = document.createElement('span')
 head.classList.add ('header')
 span.classList.add('date')
 tempElement.classList.add('temp')
 span.textContent = date

 titleElement.textContent = title 
 tempElement.textContent = temp;

 head.appendChild(span)
 head.appendChild(titleElement)
 head.appendChild(tempElement)

 return head;

 

 


  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const headerSpace = document.querySelector(selector)
  headerSpace.append(Header('AnnorCode', '10/29/2021', '64 degrees' ))
}

export { Header, headerAppender }
