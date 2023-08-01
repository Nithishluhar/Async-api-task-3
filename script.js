async function foo(){
 
   var api = await fetch("https://kontests.net/api/v1/all")
   var res = await api.json();
console.log(res);
for (let i = 0; i < res.length; i++) {
    var arr = res[i];
   console.log(arr.name);

     
    var div = document.createElement("div"); 

           div.innerHTML =`
           
  <div class="wrapper">
  <div class="card">
          <h5>${arr.name}</h5>
      <div class="poster"><img src="https://cutewallpaper.org/21/javascript-wallpaper/JavaScript-Wallpapers-Wallpaper-Cave.jpg"></div>
      <div class="details">
          <h1 class="card-title">${arr.site}</h1>
          <h2 class="card-title">Duration: ${arr.duration} </h2>
          <h2 class="card-title">Status: ${arr.status }</h2>
                  
          <p class="card-text"><a href="${arr.url}">Link</a></p>

          <div class="tags">
              <span class="tag">Starting Time- ${arr.start_time }</span>
              <span class="tag"> Ending Time-${arr.end_time} </span>
              
          </div>
          <p class="desc">
              Website:-${arr.url}
          </p>
          
          </div>
      </div>
  </div>
  
</div>  
  </div>`
           document.body.append(div);

}           

}
foo();



