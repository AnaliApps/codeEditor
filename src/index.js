import './style.css'
import codeEditorUI from './views/codeEditorUI';
document.body.appendChild(codeEditorUI())

let textArea = document.querySelectorAll('.codeArea')
let output = document.querySelector('#output') 
textArea.forEach((item)=>{
    item.addEventListener('keyup',()=>{
        let htmlCode = ""
        let cssCode = ""
        if(item.getAttribute('id')==='htmlCode'){
            htmlCode += item.value
            output.contentDocument.body.innerHTML = htmlCode
        }else if(item.getAttribute('id')==='cssCode'){
            cssCode += item.value
            output.contentDocument.body.innerHTML += "<style>"+cssCode+"</style>"
        }else if(item.getAttribute('id')==='jsCode'){
            output.contentWindow.eval(item.value)
        }
        
    })
})