//sumTxt.clr.fdt is the title
//summary_REDBGWTV-xxx is the div to modify


deepText(document.getElementById("gh"));

var nodeToModify = null;

function deepText(node){
    if(node){
        node = node.firstChild;
        while(node != null){
        
        	if(
        		node.className == "issueSummary" || 
        		node.className == "issueCard" ||
        		node.className == "issueList"
        	){
        		nodeToModify = node;
        	}
        
            if(node.nodeType == 3) {
            	var contents = node.nodeValue;
            	if(contents.indexOf("BLOCKED") != -1){
            		nodeToModify.style.borderStyle="dotted";
            		nodeToModify.style.borderColor="red";
            	}
            }
            else deepText(node);
            
            node = node.nextSibling;
        }
    }
}