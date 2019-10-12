window.addEventListener('load', () => {

    var form = document.querySelector('form');
    var ul=document.querySelector('ul');
    var cars=new Array();
    var order=document.querySelector('ordenamiento');
    var i=0;
    form.addEventListener('submit', function(event){
        event.preventDefault();

        // transforma el formulario como DOM (lo que el usuario puede ver)
        // a una colección de datos (variables con valores)
        var formInfo = new FormData(form);
        // agrego esos datos a lo que vamos a enviar
        var data = new URLSearchParams(formInfo);
        data.append('adittional', 'algo adicional');
        data.append('date', Date.now());

        var promise = fetch('/api/people', {
                method: 'POST',
                body: data
            });
        
        promise.then((raw) => {
                return raw.json();
            })
            .then((info) => {
                form.reset();
                console.log(info);
                var newLi = document.createElement("li"); 
                var newContent = document.createTextNode("Modelo: "+data.get('model')+" Año de fabricación: "+data.get('yearFabrication')+" Color: "+data.get('color')); 
                ul.appendChild(newLi);
                newLi.appendChild(newContent)
                var actualCar=[{
                    model:data.get('model'),
                    yearFabrication:data.get('yearFabrication'),
                    color:data.get('color')
                }]
               cars[i]=actualCar[0];
                console.log(cars[i].model);
          
                console.log(cars[i].yearFabrication);

                i++;
            });



    
        

    });


  


    
});