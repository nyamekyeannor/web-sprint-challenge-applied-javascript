import axios from 'axios'
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

const Card = (article) => {
  let cd = document.createElement ("div");
  let headline = document.createElement ("div");
  let auth = document.createElement ("div");
  let imgContainer = document.createElement ("div");
  let authorImg = document.createElement ("img");
  let authorName = document.createElement ("span");

  cd.appendChild(headline);
  cd.appendChild(auth);
  auth.appendChild(imgContainer);
  imgContainer.appendChild(authorImg);
  auth.appendChild(authorName);

  cd.classList.add("card");
  headline.classList.add("headline");
  auth.classList.add("author");
  imgContainer.classList.add("img-container")

  headline.textContent = article.headline;
  authorName.textContent = article.authorName;
  authorImg.setAttribute("src", article.authorPhoto);

  cd.addEventListener("click", () => {
    cd.classList.toggle(console.log(headline));
  })
  
  return cd;}

const cardAppender = (selector) => {
    let results = axios.get(`http://localhost:5000/api/articles`)
  
    results.then((value)=>{
  
    let list = value.data.articles
    for(let key in list){
      list[key].forEach(element => {
        let test = Card(element)
        let cardContainer = document.querySelector(selector)
        cardContainer.appendChild(test)
      });
    }
  
    })
   
}
  
export { Card, cardAppender }