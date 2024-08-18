import '../style.css'
export default function codeEditorUI(){
    let mainDiv = document.createElement('div');
    mainDiv.setAttribute('class','main-container');
    mainDiv.innerHTML=`
    <div class="left">
            <label><i class="fa fa-html5" aria-hidden="true"></i>HTML</label>
            <textarea id="htmlCode" class="codeArea"></textarea>

            <label> <i class="fa fa-css3" aria-hidden="true"></i>CSS</label>
            <textarea id="cssCode" class="codeArea"></textarea>

            <label><i class="fa fa-jsfiddle" aria-hidden="true"></i>JS</label>
            <textarea id="jsCode" class="codeArea"></textarea>
    </div>
    <div class="right">
            <label><i class="fa fa-play" aria-hidden="true"></i>OUTPUT</label>
            <iframe id="output"></iframe>
    </div>
    `
    return mainDiv;
}