for(var a=0; a<document.querySelectorAll(".notion-selectable.notion-page-block.notion-timeline-item").length; a++)
{
    var firstSplit = document.querySelectorAll(".notion-timeline-item-properties .notranslate")[a].innerHTML.split("[");
    if(firstSplit.length <= 1) continue;
    
    var secondSplit = firstSplit[1].split("]")[0];

    document.querySelectorAll(".notion-selectable.notion-page-block.notion-timeline-item")[a].style.backgroundColor = "rgb("+secondSplit+")";
}
