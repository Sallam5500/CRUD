

let title = document.getElementById("title")
let price = document.getElementById("price")
let taxes = document.getElementById("taxes")
let ads = document.getElementById("ads")
let discount = document.getElementById("discount")
let total = document.getElementById("total")
let count = document.getElementById("count")
let category = document.getElementById("category")
let addBtn =document.getElementById("addBtn")
let updata =document.getElementById("updata")
let searchInput =document.getElementById("searchInput")




// console.log(title,price,taxes,ads,discount,total,count,category,submit)
// let mood = 'Create';
// let tmp;



//get total                                               
function getTotal(){
    if(price.value !="" && taxes.value !='' && ads.value !='') {
        let result = (+price.value + +taxes.value + +ads.value)
           - +discount.value;
           total.innerHTML = result;
           total.classList.replace('bg-danger','bg-info');  
           console.log("jhhhhh")
    }else{
        total.innerHTML ="";
        total.style.background = "#a00d02"
        console.log("no") 
        total.classList.replace('bg-info','bg-danger');  
    }
    

}


//create
let dataList =[]
if(localStorage.getItem("product")) {
    dataList=JSON.parse(localStorage.getItem("product"))
    showData(dataList);
  }

    function Create(){
    let newPro ={
        title : title.value,
        price : price.value,
        taxes : taxes.value,
        ads : ads.value,
        discount : discount.value,
        total : total.innerHTML,
        count : count.value,
        category : category.value.toLowerCase(),
    }
    ////////////////////////////////////////////////////////////////////////cc
     if(title.value !==''){
        if(newPro.count > 1){
            for(let i = 0; i < newPro.count;i++){
                dataList.push(newPro);
            }
        }else{
            dataList.push(newPro);
        
      }
      localStorage.setItem('product' , JSON.stringify(dataList))
      clearData()
      showData(dataList);
     }
       
      
        
    
  

    }




//clear
function clearData(){
    title.value ="";
    price.value ="";
    taxes.value ="";
    ads.value ="";
    discount.value ="";
    total.innerHTML ="";
    count.value ="";
    category.value ="";
}


//display
function showData(arr){
    let table ="";
    for( let i = 0; i < arr.length; i++){
        table +=`
           <tr class="border-bottom border-dark">
                            <td>${i}</td>
                            <td>${arr[i].title}</td>
                            <td>${arr[i].price}</td>
                            <td>${arr[i].taxes}</td>
                            <td>${arr[i].ads}</td>
                            <td>${arr[i].discount}</td>
                            <td>${arr[i].total}</td>
                      
                            <td>${arr[i].category}</td>
                            <td><button class="rounded-5 text-white border-0" id="update"onclick="updataData(${i})"> <i class="icon-e fa-regular fa-pen-to-square"></i></button></td>
                            <td><button class="rounded-5 text-white  border-0" id="delete"onclick="deletData(${i})"><i class="icon-r fa-solid fa-trash-can"></i></button></td>
                        </tr>`

    }
    document.getElementById('tbody').innerHTML = table;
    let btnDelet =document.getElementById("deleteAll");
    if(dataList.length>0){
        btnDelet.innerHTML = `
         <td><button onclick="deletAll()" class="rounded-5 btn-d text-white mt-3 p-2 border-0 w-100 my-3" >Delete All (${dataList.length})</button></td>
        `
    }else{
        btnDelet.innerHTML ="";
    }
}
showData(dataList)


//Delet
function deletData(i){
    dataList.splice(i,1);
    localStorage.setItem("product",JSON.stringify(dataList));
    showData(dataList)
    
   console.log(i)

}
function deletAll(){
    localStorage.clear();
    dataList.splice(0);
    showData(dataList)
}



//index of edite element
let  index;
//update
function updataData(i){
   

    index = i;
   addBtn.classList.replace('d-block','d-none');
   updata.classList.replace('d-none','d-block');
    title.value =dataList[i].title;
    price.value =dataList[i].price;
    taxes.value =dataList[i].taxes;
    ads.value =dataList[i].ads;
    discount.value =dataList[i].discount;
    getTotal();
    count.style.display = "none"
    category.value =dataList[i].category;
    // console.log(dataList[indexUpdate])

    
}
function updatData(){
    addBtn.classList.replace('d-none','d-blocl');
    updata.classList.replace('d-block','d-none');
    dataList[index].title = title.value;
    dataList[index].price = price.value;
    dataList[index].taxes = taxes.value;
    dataList[index].ads = ads.value;
    dataList[index].category = category.value;
    localStorage.setItem('product' , JSON.stringify(dataList))
    clearData()
    showData(dataList)
}

//search

let searchMood = "tittle";
let search =document.getElementById('searchInput');
function getSearchMood(id){
   if(id =='searchtitle'){
    searchMood = "tittle";
    search.placeholder = 'Search By Title'
   }else{
     searchMood = "category";
     search.placeholder = 'Search By category'
   }
   search.focus()

}

function searchData(){
   let searchArr =[];
   for(let i = 0; i < dataList.length; i++){
    if(dataList[i].title.toLowerCase().includes(searchInput.value.toLowerCase())){
        searchArr.push(dataList[i])
        
    }
   }

   showData(searchArr);
}


























// function searchData(value){
    

//     let table ="";
//     if(searchMood == "tittle")
//         {
//         for(let i = 0; i < dataList.length; i++){
//             if(dataList[i].tittle.includes('value')){
//                 table +=`
//                 <tr>
//                                  <td>${i}</td>
//                                  <td>${dataList[i].title}</td>
//                                  <td>${dataList[i].price}</td>
//                                  <td>${dataList[i].taxes}</td>
//                                  <td>${dataList[i].ads}</td>
//                                  <td>${dataList[i].discount}</td>
//                                  <td>${dataList[i].total}</td>
                           
//                                  <td>${dataList[i].category}</td>
//                                  <td><button class="rounded-5 text-white border-0" id="update"onclick="updataData(${i})"> UpDate</button></td>
//                                  <td><button class="rounded-5 text-white border-0" id="delete"onclick="deletData(${i})">Delete</button></td>
//                              </tr>`;
     
//             }
//         }
//     }
//     else{
//         for(let i = 0; i < dataList.length; i++){
//             if(dataList[i].category.includes('value')){
//                 table +=`
//                 <tr>
//                                  <td>${i}</td>
//                                  <td>${dataList[i].title}</td>
//                                  <td>${dataList[i].price}</td>
//                                  <td>${dataList[i].taxes}</td>
//                                  <td>${dataList[i].ads}</td>
//                                  <td>${dataList[i].discount}</td>
//                                  <td>${dataList[i].total}</td>
                           
//                                  <td>${dataList[i].category}</td>
//                                  <td><button class="rounded-5 text-white border-0" id="update"onclick="updataData(${i})"> UpDate</button></td>
//                                  <td><button class="rounded-5 text-white border-0" id="delete"onclick="deletData(${i})">Delete</button></td>
//                              </tr>`;
     
//             }
//         }
//     }
//     document.getElementById('tbody').innerHTML = table;
// }








// function validateForm(element){
//     let regex = /^[A-z]\w{3,10}\s?\w{0,10}$/
//     if(regex.test(element.value)){
//         element.classList.add()
//         element.classList.remove()
//         nameAlert.classList.add('d-none')
//     }else{
//         element.classList.add()
//         element.classList.remove()
//         nameAlert.classList.remove('d-none')
//     }
// }