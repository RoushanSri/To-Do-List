let but=document.getElementById("button")
let list=document.getElementById("list")
but.addEventListener('click', function () {
    let input = document.getElementById("input")
    if(input.value===''){
        alert("Not valid Task")
    }
    else{
    let data = document.createElement("li")
    data.innerHTML = `${input.value}`
    let sp=document.createElement('span')
    sp.innerHTML='<p>&#10006</p>'
    document.getElementById('list').appendChild(data)
    data.appendChild(sp)
    input.value=""
    }
})
    list.addEventListener("click",function(e){
        if(e.target.tagName==="LI"){
           e.target.classList.toggle("clicked")
        }
        else if(e.target.tagName==="P"){
           e.target.parentElement.parentElement.remove();
        }
})