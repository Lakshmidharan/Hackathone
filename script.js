//HTML using DOM
document.body.innerHTML=`                                                    
<section class="user-container"></section>`

async function allusers(){                                                
    const data= await fetch ("https://api.openbrewerydb.org/breweries",   
    {method:"GET"})                                                        
    const users= await data.json()                                        
    const Container=document.querySelector(".user-container")      
    

    users.forEach((brewerie) => {
        Container.innerHTML +=`
        <div class="list">
          <h1 class="name">Name:${brewerie.name}</h1><br>
          <h4 class="type">Brewery_type:${brewerie.brewery_type}</h4><br>
            <div class="info">
                <p class="address_1">Address_2:${brewerie.address_2}</p><br>
                <p class="address_2">Address_3:${brewerie.address_3}</p><br>
                <p class="url">Website_url:${brewerie.website_url}</p><br>
                <p class="phone">Phone:${brewerie.phone}</p><br>
            </div>  
        </div>  
        `;
    });
        console.log(users)
}
allusers(); 
{
    try{
        console.log("No Erroes");
    }
    catch(err){
        console.log("Erroes",err);
    }
}