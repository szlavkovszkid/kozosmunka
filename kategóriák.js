//Azért készítettem a kettes oldalhoz külön js-oldalt, hogy itt ne legyen popup...

//Hamburger-menü
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

//Csevegés gomb
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }


  var categories = [
    {
      category: "Állványok",
      categoryimage: "képek/kategoriák/állványok/dw-manfrotto-546gb-280px.png"
    },
    {
      category: "Objektívek",
      categoryimage: "képek/kategoriák/objektívek/2x.jpg"
    },
    {
      category: "Fényképezők",
      categoryimage: "képek/kategoriák/fényképezőgépek/r.png"
    },
    {
      category: "Memóriakártyák",
      categoryimage: "képek/kategoriák/sd kártya/sd 2.jpeg"
    }

    


  ]

  var categoriesitem1 = [["képek/kategoriák/állványok/1.jpg","képek/kategoriák/állványok/2.jpg","képek/kategoriák/állványok/3.jpg","képek/kategoriák/állványok/4.jpg","képek/kategoriák/állványok/5.jpg","képek/kategoriák/állványok/6.jpg"]["bla","bla","bla","bla","bla","bla"]]

  var idimage = [
    "kep","kep1","kep2","kep3","kep4","kep5"
  ]
  
  var idcateg = [
    "cat","cat1","cat2","cat3"
  ]
  var idbutton =[
    "button","button1","button2","button3",
  ]
  var idimageitem = [
    "kep","kep1","kep2","kep3","kep4","kep5"
  ]
  
  let text = "";
  for (let i = 0; i < categories.length; i++) {
      var newElement = document.createElement('div');
      const categ = document.getElementById("kategóriák2");
  
      categ.appendChild(newElement);
      newElement.classList.add("category_item");
      newElement.setAttribute("id", idimage[i])      
            var newimg = new Image(300,300);
            const img = document.getElementById(idimage[i]);
            newimg.src = categories[i].categoryimage;
            img.appendChild(newimg);
                var newp = document.createElement('p');
                const dives = document.getElementById(idimage[i]);
                dives.appendChild(newp);
                newp.setAttribute("id", idcateg[i]);
                newp.innerHTML = categories[i].category;
                    var newbutton = document.createElement('button');
                    dives.appendChild(newbutton);
                    newbutton.setAttribute("id", idbutton[i]);
                    newbutton.setAttribute("value", categories[i].category);
                    newbutton.innerHTML = categories[i].category;
                    newbutton.onclick = function() {kateg()};
  }

  for (let i = 0; i < categoriesitem1.length; i++) {
    var newElement = document.createElement('div');
    const categ = document.getElementById("itemek");

    categ.appendChild(newElement);
    newElement.classList.add("category_item");
    newElement.setAttribute("id", idimageitem[i])      
          var newimg = new Image(300,300);
          const img = document.getElementById(idimageitem[i]);
          newimg.src = categoriesitem1;
          img.appendChild(newimg);
              var newp = document.createElement('p');
              const dives = document.getElementById(idimage[i]);
              dives.appendChild(newp);
              newp.setAttribute("id", idcateg[i]);
              newp.innerHTML = categories[i].category;
                  var newbutton = document.createElement('button');
                  dives.appendChild(newbutton);
                  newbutton.setAttribute("id", idbutton[i]);
                  newbutton.setAttribute("value", categories[i].category);
                  newbutton.innerHTML = categories[i].category;
                  newbutton.onclick = function() {kateg()};
}
  
  
  function kateg(){
    
    document.addEventListener('click', (e) =>{
    var elementId = e.target.value;
        console.log(elementId);
        for(j = 0; j < categories.length; j++){
            if(elementId == categories[j].category){
  
            }
          }
      }  
    )
  };