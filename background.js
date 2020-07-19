chrome.contextMenus.create({
  title: "メルカリで「%s」を検索",
  type: "normal",
  contexts: ["selection"],
  onclick: function(info){
    var selection = info.selectionText;
    var url = "https://www.mercari.com/jp/search/?keyword="+selection;
    chrome.tabs.create({url : url});
  }
});
