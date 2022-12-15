var baseURL="https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json";
var apiURL=`${baseURL}`;
let arr=[];

async function getData(){
    const response=await fetch(apiURL);
    const user=await response.json();
    arr=user;
    console.log(arr)
}
getData();
let title_element=document.getElementById("title")
  title_element.classList.add("fs-1", "text-uppercase", "fw-bold", "text-center","title")
  title_element.innerText= "students";
  let description_element=document.getElementById("description")
  description_element.classList.add("m-5","fs-4", "text-center")
  let list_element =document.getElementById("table");
  let pagination_element=document.getElementById("buttons");
  pagination_element.classList.add("d-flex", "justify-content-center")
  let currentpage=1;
  let rows=10 ;
  let page_count=Math.ceil(arr.length / rows);
  function Displaylist(items,list_element,rows_per_page,page) {
    list_element.innerHTML="";
    page--;
    let from = page * rows_per_page;
    let to = from + rows_per_page;
    let paginated_items=items.slice(from,to)
  let content=document.getElementById("div")
  content.classList.add("table-responsive","table-bordered", "table")
    for(let i=0;i<paginated_items.length;i++){
      let item =paginated_items[i];
  
      let itemelement=document.createElement("tr")
      let itemelement1=document.createElement("td")
      let itemelement2=document.createElement("td")
      let itemelement3=document.createElement("td")
      itemelement.setAttribute("class","item");
      itemelement1.innerHTML=item.id;
      itemelement2.innerHTML=item.name;
      itemelement3.innerHTML=item.email;
      itemelement.appendChild(itemelement1)
      itemelement.appendChild(itemelement2)
      itemelement.appendChild(itemelement3)
      table.appendChild(itemelement);
    }
  }
  
  function setup_pagination(items,pagination_element){
    pagination_element.innerHTML="";
    firstbutton(arr,pagination_element)
    previous_button(arr,pagination_element);
    for(let i=1;i<=page_count;i++){
      let btn= paginationbutton(i,items);
      pagination_element.appendChild(btn);
    }
    nextbutton(arr,pagination_element)
    lastbutton(arr,pagination_element)
  }
  function paginationbutton(page,items){
   
    let button=document.createElement("button");
        button.innerText=page;
        if(currentpage==page) {
        button.classList.add("active")
      }
  
      button.addEventListener("click",()=>{
      currentpage=page;
      Displaylist(items,list_element,rows,currentpage)
  
      let current_btn=document.querySelector(".pagination button.active");
      current_btn.classList.remove("active");
      button.classList.add("active")
      })
     
    return button;
    }
    
    Displaylist(arr,list_element,rows,currentpage);
    
    setup_pagination(arr,pagination_element,rows);
  
    function previous_button(items,pagination_element){
      let prevbtn=document.createElement("button");
      prevbtn.innerText= "Prev" ;
      pagination_element.appendChild(prevbtn);
      prevbtn.addEventListener("click", ()=>{
        if(currentpage==1){
    document.querySelector(".pagination prevbtn").disabled= true;
        }
      else{
        currentpage=currentpage-1;
        Displaylist(items,list_element,rows,currentpage)
        let current_btn=document.querySelector(".pagination button.active");
      // current_btn.classList.remove("active");
      }
    })
    }
    
    function nextbutton(items,pagination_element) {
      nextbtn =document.createElement("button")
      nextbtn.innerText="Next"
      pagination_element.appendChild(nextbtn)
      nextbtn.addEventListener("click", ()=>{
        if(currentpage==page_count){
    document.querySelector(".pagination prevbtn").disabled= true;
        }
      else{
        let current_btn=document.querySelector(".pagination button.active");
      // current_btn.classList.remove("active");
        currentpage=currentpage+1;
        Displaylist(items,list_element,rows,currentpage)
        // current_btn.target.classList.add('active')
      }
    })
  }
    
  
    function firstbutton(items,pagination_element){
      let firstbtn =document.createElement("button")
      firstbtn.innerText=" First"
      pagination_element.appendChild(firstbtn)
      firstbtn.addEventListener("click", ()=>{
        currentpage= 1;
        Displaylist(items,list_element,rows,currentpage)
        let current_btn=document.querySelector(".pagination button.active");
      // current_btn.classList.remove("active");
      
    })
    }
  
    function lastbutton(items,pagination_element){
      let lastbtn =document.createElement("button")
      lastbtn.innerText=" Last"
      pagination_element.appendChild(lastbtn)
      lastbtn.addEventListener("click", ()=>{
        currentpage= page_count;
        Displaylist(items,list_element,rows,currentpage)
        let current_btn=document.querySelector(".pagination button.active");
      // current_btn.classList.remove("active");  
    })
    }  