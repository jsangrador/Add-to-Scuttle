var buildertester = {
  onLoad: function() {
    // initialization code
    this.initialized = true;
    this.strings = document.getElementById("buildertester-strings");
  },

  onMenuItemCommand: function(e) {
    var promptService = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
                                  .getService(Components.interfaces.nsIPromptService);
    promptService.alert(window, this.strings.getString("helloMessageTitle"),
                                this.strings.getString("helloMessage"));
  },

  onToolbarButtonCommand: function(e) {
    // just reuse the function above.  you can change this, obviously!
    buildertester.onMenuItemCommand(e);
  }
};

window.addEventListener("load", buildertester.onLoad, false);
