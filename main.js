var btnatras = document.getElementById('atras');

btnatras.addEventListener('click', ()=> {
    history.back(-1);
});



// btnatras.addEventListener('click', ()=> {
        function getAllGetParams() {
            var result = [];
            var parts = [];
        
            location.search
            .substr(1)
            .split("&")
            .forEach(function (item) {
              parts = item.split("=");
              if(parts[0]!=""){     
                result.push(parts);
              }
            });
        
            return result;
          }
          
          params = getAllGetParams();
        // var dened = document.getElementById('dened');
        
        // if(dened == null) {
        //     window.location.href = "index.html";
        // }
        
        
        for(var i in params){  
            var namepage = params[i][1];
            var sumar =++ namepage;
        if( params[i][0] === "p") {
            console.log(sumar);
            document.getElementById('avanzar').innerHTML=`<a style='text-decoration:none;border:none;' href="p/${sumar}.html?p=${sumar}">Avanzar</a>`;
        }
        else {
            document.getElementById('avanzar').innerText=`NO ES POSIBLE AVANZAR`;
        }
        }
    //});
        