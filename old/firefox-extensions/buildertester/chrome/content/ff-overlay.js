buildertester.onFirefoxLoad = function(event) {
  document.getElementById("contentAreaContextMenu")
          .addEventListener("popupshowing", function (e){ buildertester.showFirefoxContextMenu(e); }, false);
};

buildertester.showFirefoxContextMenu = function(event) {
  // show or hide the menuitem based on what the context menu is on
  document.getElementById("context-buildertester").hidden = gContextMenu.onImage;
};

window.addEventListener("load", buildertester.onFirefoxLoad, false);
