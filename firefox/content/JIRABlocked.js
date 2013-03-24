
window.addEventListener(
	"load",
	function load(event){
		window.removeEventListener("load", load, false);
		myExtension.init();
	},
	false
);


var myExtension = {
	init: function() {
		var appcontent = document.getElementById("appcontent");
		if(appcontent){
			appcontent.addEventListener("DOMContentLoaded",myExtension.onPageLoad, true);
		}
	},

	onPageLoad: function(aEvent){
		var doc = aEvent.originalTarget;
		if(doc.location.href.indexOf("/secure/TaskBoard.jspa")>=0){
			myExtension.findCard(doc.getElementById("gh"));
		}
	},

	cardToModify: null,

	findCard: function(node){
		if(node){
			node = node.firstChild;
			while(node != null){
				
				if(
					node.className == "issueSummary" || 
					node.className == "issueCard" ||
					node.className == "issueList"
				){
					this.cardToModify = node;
				}
				
				if(node.nodeType == 3) {
					var contents = node.nodeValue;
					if(contents.indexOf("BLOCKED") != -1){
						this.cardToModify.style.borderStyle="dotted";
						this.cardToModify.style.borderColor="red";
					}
				}
				else
					this.findCard(node);
				
				node = node.nextSibling;
			}
		}
	}
};
