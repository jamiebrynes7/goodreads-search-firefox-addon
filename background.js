var goodreads_search_now_id = "goodreads-search-later";
var goodreads_search_later_id = "goodreads-search-now";

/*
Create the context menu items.
*/
browser.menus.create({
  id: goodreads_search_now_id,
  title: "Goodreads: Search Now",
  contexts: ["selection"]
});

browser.menus.create({
  id: goodreads_search_later_id,
  title: "Goodreads: Search Later",
  contexts: ["selection"]
});

/*
Open goodreads search tab.
*/
function openGoodreadsSearch(search_query, active) {
  var escaped_uri_search = encodeURIComponent(search_query);
  var goodreads_search_url = "https://www.goodreads.com/search?q=" + escaped_uri_search;

  browser.tabs.create({
    url: goodreads_search_url,
    active: active
  });
}


/*
Handle clicking on the menu items
*/
browser.menus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case goodreads_search_now_id:
      openGoodreadsSearch(info.selectionText, true);
      break;
    case goodreads_search_later_id:
      console.log("goodreads-search-later");
      openGoodreadsSearch(info.selectionText, false);
      break;
  }
});
