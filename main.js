window.addEventListener("scroll",function(){

    let head = document.querySelector(".header");
    if(window.pageYOffset >= 200 && window.pageYOffset <= 330 ){
        head.style.position = "unset";
    }
    else
    head.style.position = "sticky";

});
function push(){
    if(document.getElementById("check").checked)
    {
        if(document.getElementById("check1").checked)
        {
            document.querySelector(".header ul").style.backgroundColor = "black";
        }
        document.querySelector(".header ul").style.left = "52%";
        document.querySelector("body").style.overflow = "hidden";
        

    }
    else
    {
        if(document.getElementById("check1").checked)
        {
            document.querySelector(".header ul").style.backgroundColor = "white";
        }
        document.querySelector(".header ul").style.left = "152%";
        document.querySelector("body").style.overflow = "unset";
    }
}
function changeColor(){
    if(document.getElementById("check1").checked)
    {
       if(document.getElementById("check").checked)  //if both are checked
       {
          document.querySelector(".header ul").style.backgroundColor = "black";
       }
       

        
        
        const li = document.getElementsByTagName("li");//for li
        for(let i =0;i<li.length;i++)
        {
            li[i].style.color = "white";
        }
        document.querySelector(".header").style.backgroundColor = "rgb(17, 2, 36)";
        document.querySelector("body").style.backgroundColor= "rgb(17, 2, 36)";
        document.querySelector(".logo").style.color= "white"; 
        document.querySelector(".main-image-text").style.color= "white";
        const bars = document.getElementsByTagName("span");
        for(let i =0;i<bars.length;i++)            //for bars
        {
            bars[i].style.backgroundColor = "white";
        } 
        const title = document.getElementsByTagName("h1");  //for product title
        for(let i =0;i<title.length;i++)
        {
            title[i].style.color = "white";
        }
        const cate = document.getElementsByTagName("h4");  //for product category
        for(let i =0;i<cate.length;i++)
        {
            cate[i].style.color = "white";
        }
        const price = document.getElementsByTagName("h3");  //for product price
        for(let i =0;i<price.length;i++)
        {
            price[i].style.color = "white";
        }
        let cart = document.getElementsByTagName("i");
        for(let i =0;i<cart.length;i++)
        {
            cart[i].style.color = "rgb(4, 148, 47)";
        }
        
    }
    else{
        
        if(document.getElementById("check").checked)
        document.querySelector(".header ul").style.backgroundColor = "white";
        
        document.querySelector(".header").style.backgroundColor = "white";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector(".logo").style.color= "black"; 
        document.querySelector(".main-image-text").style.color= "black";
        const li = document.getElementsByTagName("li");    //for li
        for(let i =0;i<li.length;i++)
        {
            li[i].style.color = "black";
        }
        const bars = document.getElementsByTagName("span"); //for bars
        for(let i =0;i<bars.length;i++)
        {
            bars[i].style.backgroundColor = "black";
        }
        const title = document.getElementsByTagName("h1");  //for product title
        for(let i =0;i<title.length;i++)
        {
            title[i].style.color = "black";
        }
        const cate = document.getElementsByTagName("h4");  //for product category
        for(let i =0;i<cate.length;i++)
        {
            cate[i].style.color = "black";
        }
        const price = document.getElementsByTagName("h3");  //for product price
        for(let i =0;i<price.length;i++)
        {
            price[i].style.color = "black";
        }
        let cart = document.getElementsByTagName("i");
        for(let i =0;i<cart.length;i++)
        {
            cart[i].style.color = "black";
        }
    }
}

document.addEventListener("DOMContentLoaded",function()
{
    let product = document.querySelector(".content-div");
    async function fetchApi(url){
         let data = await fetch(url);
         let response = await data.json();

         console.log(response);
        for(let i = 0;i<response.length;i++)
        {
            product.innerHTML += `
        <div class="product">
        <img src="${response[i].images[1]}" class="product-img">
        <h1 class="product-title whitecolor">${response[i].title}</h1>
        <h4 class="product-category whitecolor">${response[i].category.name}</h4>
        <div class="product-price-cart">
            <h3 class="product-price whitecolor">$${response[i].price}</h3>
            <i class="fa fa-solid fa-cart-shopping"></i>
        </div>
    </div>
        `;
        }
        
    };
    fetchApi("https://api.escuelajs.co/api/v1/products");
});