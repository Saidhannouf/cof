

fetch('http://localhost:3000/')
    .then(response => response.json())
    .then(json => {
        console.log(json);
        for (let i = 0; i < json.length; i++) {
            var div = document.createElement('div');
            div.innerHTML = `<div class="card" style="width: 18rem;">
            <img src="images/blog1.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title"style="color:#000;">${json[i].Name}--${json[i].price}</h5>
              
            </div>
          </div>`;
            document.getElementById('json').appendChild(div);
        }
    });
//<select id="json"></select>
//<script src="app.js"></script>
// fetch('http://localhost:3000/')
//     .then(response => response.json())
//     .then(json => {
//         json.forEach(element => {
//             var _current_Card =`<div class="card" style="width: 18rem;">
//             <img src="..." class="card-img-top" alt="...">
//             <div class="card-body">
//               <h5 class="card-title">${json[i].Name}--${json[i].price}</h5>
//               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//               <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//           </div>
            
            
                
            
           
            
            
           
//                 `
//                 var div = document.createElement('span')
//                 div.innerHTML = _current_Card;
//                 document.getElementById('al').appendChild(div);
//             });

//       })