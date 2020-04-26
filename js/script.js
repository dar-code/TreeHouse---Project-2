// Variables

const fullList = document.getElementsByClassName('student-item');
const page = document.querySelector('.page');
const perPage = 10;
let currentPage = 1;

// ShowPage Function

const showPage = (list, page) => {
   const startIndex = (page * perPage) - perPage;
   const endIndex = (page * perPage) - 1;
    for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i <= endIndex) {
         list[i].style.display = '';
      } else {
         list[i].style.display = 'none'; 
      }
   };

};


//Creating the pagination links dynamically

const appendPageLinks = (fullList) => {
   
//Variable pagesCount will included the rounded number of needed pages. I've used Math.ceil to round the number up to the next highest whole number (if we have 54 students, we should have 6 pages instead of 5). 

   const pageCount = Math.ceil(fullList.length / perPage);
   
//Created a div element within a variable called 'div', stored it in the .page, and added a class 'pagination' to it.

   const newDiv = document.createElement('div');
   page.appendChild(newDiv);
   newDiv.className = 'pagination';

//Appended ul to the 'pagination' class div.

   const ul = document.createElement('ul');
   newDiv.appendChild(ul);
   
//Created 'a' and 'li' elements

   for (let i = 0; i < pageCount; i++) {
      //const ul = newDiv.getElementsByTagName('ul')[0];
      const a = document.createElement('a');
      const li = document.createElement('li');

      li.appendChild(a);
      ul.appendChild(li);

      let pageLinks = document.getElementsByTagName('a');

      a.setAttribute = ("href", "#");
      
      if (i===0){
   
      a.className = 'active';
      
       }

      a.textContent = i + 1;

//Created the click event listener
      newDiv.addEventListener('click', (event) => {
         
         showPage(fullList, parseInt(event.target.textContent));

         for (j = 0; j < pageLinks.length; j++){
            pageLinks[j].className = '';
         }
         event.target.className = 'active';
         });     
      };

      };

      showPage(fullList, 1);
      appendPageLinks(fullList);

