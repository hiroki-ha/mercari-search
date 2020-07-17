chrome.contextMenus.create({
  "title" : "メルカリで検索",
  "type"  : "normal",
  "contexts" : ["all"],
  "onclick" : function(info){
    var selection = info.selectionText;
    var url = "https://www.mercari.com/jp/search/?keyword="+selection;
    chrome.tabs.create({url : url});
}
});