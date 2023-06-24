//Késleltetett Popup doboz, mely kattintásra eltűnik
setTimeout(function() {
    var popupOverlay = document.querySelector('.popup-overlay');

    popupOverlay.classList.add('active');

    popupOverlay.addEventListener('click', function() {
        popupOverlay.classList.remove('active');
    });

    var popup = document.querySelector('.popup');

    popup.addEventListener('click', function(event) {
        event.stopPropagation();
    });
}, 1000);

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

  //slider 
var counter = 1;
let intervalID;
let intervalFunction = () => setInterval(function () {
  document.getElementById('radio' + counter).checked = true;
  counter++;

  if (counter > 5) {
    counter = 1;
  }
}, 3000);

//ha ráhúzod az egeret megáll a slider
function stopShow() {
  clearInterval(intervalID);
}

//ha elhúzod a kurzort, tovább megy a slider
function runShow() {
  intervalID = intervalFunction();
}

//ha kattintasz egy radio gombra,onnantól fut tovább majd a slider
function updateCounter(newValue) {
  counter = newValue;
}

var allvanyok = [
  {
    id: 1,
    imagename:"HAMA-Star-61",
    image:"képek/kategoriák/állványok/1.jpg",
    imagetxt:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
  },
  {
    id: 2,
    imagename:"manfrotto-190-alu-tripod-allvany",
    image:"képek/kategoriák/állványok/2.jpg",
    imagetxt:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
  },
  {
    id: 3,
    imagename:"manfrotto-543gbk",
    image:"képek/kategoriák/állványok/3.jpg",
    imagetxt:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
  },
  {
    id: 4,
    imagename:"manfrotto-546gbk",
    image:"képek/kategoriák/állványok/4.jpg",
    imagetxt:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
  },
  {
    id: 5,
    imagename:"dw-manfrotto-546gb",
    image:"képek/kategoriák/állványok/5.jpg",
    imagetxt:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
  },
  {
    id: 6,
    categoryname: "allvanyok",
    imagename:"dw-manfrotto-547gb",
    image:"képek/kategoriák/állványok/6.jpg",
    imagetxt:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
  },
  {
    id: 7,
    categoryname: "allvanyok",
    imagename:"dw-manfrotto-512gb",
    image:"képek/kategoriák/állványok/dw-manfrotto-546gb-280px.png",
    imagetxt:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
  }

]

var objektivek = [
  {
    id: 1,
    imagename:"2x",
    image:"képek/kategoriák/objektívek/2x.jpg",
    imagetxt:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
  },
  {
    id: 2,
    imagename:"14-35",
    image:"képek/kategoriák/objektívek/14-35.jpg",
    imagetxt:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
  },
  {
    id: 3,
    imagename:"24-105",
    image:"képek/kategoriák/objektívek/24-105.jpg",
    imagetxt:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
  },
  {
    id: 4,
    imagename:"35",
    image:"képek/kategoriák/objektívek/35.jpg",
    imagetxt:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
  },
  {
    id: 5,
    imagename:"70-200",
    image:"képek/kategoriák/objektívek/70-200.jpg",
    imagetxt:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
  },
  {
    id: 6,
    imagename:"100",
    image:"képek/kategoriák/objektívek/100.jpg",
    imagetxt:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
  },
  {
    id: 7,
    imagename:"100-300",
    image:"képek/kategoriák/objektívek/100-300.jpg",
    imagetxt:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
  },
  {
    id: 8,
    imagename:"100-500",
    image:"képek/kategoriák/objektívek/100-500.jpg",
    imagetxt:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
  }

]

var fenykepezok = [
  {
    id: 1,
    imagename:"r",
    image:"képek/kategoriák/fényképezőgépek/r.png",
    imagetxt:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
  },
  {
    id: 2,
    imagename:"r3",
    image:"képek/kategoriák/fényképezőgépek/r3.jpg",
    imagetxt:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
  },
  {
    id: 3,
    imagename:"r5",
    image:"képek/kategoriák/fényképezőgépek/r5.jpeg",
    imagetxt:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
  },
  {
    id: 4,
    imagename:"r6",
    image:"képek/kategoriák/fényképezőgépek/r6.jpg",
    imagetxt:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
  },
  {
    id: 5,
    imagename:"r7",
    image:"képek/kategoriák/fényképezőgépek/r7.png",
    imagetxt:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
  },
  {
    id: 6,
    imagename:"r10",
    image:"képek/kategoriák/fényképezőgépek/r10.png",
    imagetxt:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
  },
  {
    id: 7,
    imagename:"rp",
    image:"képek/kategoriák/fényképezőgépek/rp.jpeg",
    imagetxt:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
  }
]

var memoriakartyak = [
  {
    id: 1,
    imagename:"sd 2",
    image:"képek/kategoriák/sd kártya/sd 2.jpeg",
    imagetxt:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
  },
  {
    id: 2,
    imagename:"sd 3",
    image:"képek/kategoriák/sd kártya/sd 3.jpeg",
    imagetxt:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
  },
  {
    id: 3,
    imagename:"sd 4",
    image:"képek/kategoriák/sd kártya/sd 4.jpeg",
    imagetxt:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
  },
  {
    id: 4,
    imagename:"sd 5",
    image:"képek/kategoriák/sd kártya/sd 5.jpeg",
    imagetxt:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
  },
  {
    id: 5,
    imagename:"sd 6",
    image:"képek/kategoriák/sd kártya/sd 6.jpeg",
    imagetxt:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
  },
  {
    id: 6,
    imagename:"sd 7",
    image:"képek/kategoriák/sd kártya/sd 7.jpeg",
    imagetxt:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
  },
  {
    id: 7,
    imagename:"sd",
    image:"képek/kategoriák/sd kártya/sd.jpeg",
    imagetxt:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
  }
]

var categories = [
  {
    categoryname: "allvanyok",
    category: "Állványok",
    categoryimage: "képek/kategoriák/állványok/dw-manfrotto-546gb-280px.png"
  },
  {
    categoryname: "objektivek",
    category: "Objektívek",
    categoryimage: "képek/kategoriák/objektívek/2x.jpg"
  },
  {
    categoryname: "fenykepezok",
    category: "Fényképezők",
    categoryimage: "képek/kategoriák/fényképezőgépek/r.png"
  },
  {
    categoryname: "memoriakartyak",
    category: "Memóriakártyák",
    categoryimage: "képek/kategoriák/sd kártya/sd 2.jpeg"
  }
]


let text = "";
for (let i = 0; i < categories.length; i++) {
    var newElement = document.createElement('div');
    const categ = document.getElementById("kategoria");

    categ.appendChild(newElement);
    newElement.classList.add("category_item");
    newElement.setAttribute("id", categories[i].category);      
          var newimg = new Image(300,300);
          const img = document.getElementById(categories[i].category);
          newimg.src = categories[i].categoryimage;
          img.appendChild(newimg);
              var newp = document.createElement('p');
              const dives = document.getElementById(categories[i].category);
              dives.appendChild(newp);
              newp.innerHTML = categories[i].category;
                  var newbutton = document.createElement('button');
                  dives.appendChild(newbutton);
                  newbutton.setAttribute("id", categories[i].categoryname);
                  newbutton.setAttribute("value", categories[i].category);
                  newbutton.innerHTML = categories[i].category;
                  newbutton.onclick = function() {kateg()};
}






function itemclass (){
  document.getElementById("kategoria").style.display = "none";
  document.getElementById("itemek").style.display = "flex";
}

function itemback (){
  document.getElementById("kategoria").style.display = "flex";
  document.getElementById("itemek").style.display = "none";
}


function reszletekclass (){
  document.getElementById("itemek").style.display = "none";
  document.getElementById("reszletek").style.display = "flex";
}

function reszletekback (){
  document.getElementById("itemek").style.display = "flex";
  document.getElementById("reszletek").style.display = "none";
}





console.log(categories[0].categoryname);
function kateg(){
  
  document.addEventListener('click', (e) =>{
  var elementId = e.target.id;
      //console.log(elementId);
        if(elementId === "allvanyok"){
          itemclass()
          const button = document.getElementById("itemek");
          var backbutton = document.createElement('button');
          button.appendChild(backbutton);
          backbutton.setAttribute("id", "vissza");
          backbutton.setAttribute("value", "Vissza");
          backbutton.innerHTML =  "Vissza";
          backbutton.onclick = function() {itemback ()};
          for (let i = 0; i < allvanyok.length; i++) {
            var newElement = document.createElement('div');
            const categ = document.getElementById("itemek");
            console.log(i);
            categ.appendChild(newElement);
            newElement.classList.add("category_item2");
            newElement.setAttribute("id", allvanyok[i].id)
              console.log(allvanyok[i].id);      
                  var newimg = new Image(300,300);
                  const img = document.getElementById(allvanyok[i].id);
                  newimg.src = allvanyok[i].image;
                  img.appendChild(newimg);
                      var newp = document.createElement('p');
                      const dives = document.getElementById( allvanyok[i].id);
                      dives.appendChild(newp);
                      newp.innerHTML =  allvanyok[i].imagename;
                          var newbutton = document.createElement('button');
                          dives.appendChild(newbutton);
                          newbutton.setAttribute("id", allvanyok[i].imagename);
                          newbutton.setAttribute("value", allvanyok[i].imagename);
                          newbutton.innerHTML =  allvanyok[i].imagename;
                          newbutton.onclick = function() {};
        }

        

       }
       else if(elementId === "objektivek"){
       itemclass()
       const button = document.getElementById("itemek");
          var backbutton = document.createElement('button');
          button.appendChild(backbutton);
          backbutton.setAttribute("id", "vissza");
          backbutton.setAttribute("value", "Vissza");
          backbutton.innerHTML =  "Vissza";
          backbutton.onclick = function() {itemback ()};
          for (let i = 0; i < objektivek.length; i++) {
            var newElement = document.createElement('div');
            const categ = document.getElementById("itemek");
            console.log(i);
            categ.appendChild(newElement);
            newElement.classList.add("category_item2");
            newElement.setAttribute("id", objektivek[i].id)
              console.log(objektivek[i].id);      
                  var newimg = new Image(300,300);
                  const img = document.getElementById(objektivek[i].id);
                  newimg.src = objektivek[i].image;
                  img.appendChild(newimg);
                      var newp = document.createElement('p');
                      const dives = document.getElementById( objektivek[i].id);
                      dives.appendChild(newp);
                      newp.innerHTML =  objektivek[i].imagename;
                          var newbutton = document.createElement('button');
                          dives.appendChild(newbutton);
                          newbutton.setAttribute("id", objektivek[i].imagename);
                          newbutton.setAttribute("value", objektivek[i].imagename);
                          newbutton.innerHTML =  objektivek[i].imagename;
                          newbutton.onclick = function() {};
          }
        }
        else if(elementId === "fenykepezok"){
          itemclass()
          const button = document.getElementById("itemek");
          var backbutton = document.createElement('button');
          button.appendChild(backbutton);
          backbutton.setAttribute("id", "vissza");
          backbutton.setAttribute("value", "Vissza");
          backbutton.innerHTML =  "Vissza";
          backbutton.onclick = function() {itemback ()};
             for (let i = 0; i < fenykepezok.length; i++) {
               var newElement = document.createElement('div');
               const categ = document.getElementById("itemek");
               console.log(i);
               categ.appendChild(newElement);
               newElement.classList.add("category_item2");
               newElement.setAttribute("id", fenykepezok[i].id)
                 console.log(fenykepezok[i].id);      
                     var newimg = new Image(300,300);
                     const img = document.getElementById(fenykepezok[i].id);
                     newimg.src = fenykepezok[i].image;
                     img.appendChild(newimg);
                         var newp = document.createElement('p');
                         const dives = document.getElementById( fenykepezok[i].id);
                         dives.appendChild(newp);
                         newp.innerHTML =  fenykepezok[i].imagename;
                             var newbutton = document.createElement('button');
                             dives.appendChild(newbutton);
                             newbutton.setAttribute("id", fenykepezok[i].imagename);
                             newbutton.setAttribute("value", fenykepezok[i].imagename);
                             newbutton.innerHTML =  fenykepezok[i].imagename;
                             newbutton.onclick = function() {};
          }
        }
        else if(elementId === "memoriakartyak"){
          itemclass()
          const button = document.getElementById("itemek");
          var backbutton = document.createElement('button');
          button.appendChild(backbutton);
          backbutton.setAttribute("id", "vissza");
          backbutton.setAttribute("value", "Vissza");
          backbutton.innerHTML =  "Vissza";
          backbutton.onclick = function() {itemback ()};
             for (let i = 0; i < memoriakartyak.length; i++) {
               var newElement = document.createElement('div');
               const categ = document.getElementById("itemek");
               console.log(i);
               categ.appendChild(newElement);
               newElement.classList.add("category_item2");
               newElement.setAttribute("id", memoriakartyak[i].id)
                 console.log(memoriakartyak[i].id);      
                     var newimg = new Image(300,300);
                     const img = document.getElementById(memoriakartyak[i].id);
                     newimg.src = memoriakartyak[i].image;
                     img.appendChild(newimg);
                         var newp = document.createElement('p');
                         const dives = document.getElementById( memoriakartyak[i].id);
                         dives.appendChild(newp);
                         newp.innerHTML =  memoriakartyak[i].imagename;
                             var newbutton = document.createElement('button');
                             dives.appendChild(newbutton);
                             newbutton.setAttribute("id", memoriakartyak[i].imagename);
                             newbutton.setAttribute("value", memoriakartyak[i].imagename);
                             newbutton.innerHTML =  memoriakartyak[i].imagename;
                             newbutton.onclick = function() {};
          }
        }

    }  
  )
};
