var STORE_NAME = "gears_test";

var MANIFEST_FILENAME = "manifest.json";

var localServer;
var store;

function init() {
  if (!window.google || !google.gears) {
    alert("NOTE:  You must install Gears first.");
  } else {
    localServer = google.gears.factory.create("beta.localserver");
    store = localServer.createManagedStore(STORE_NAME);
    store.manifestUrl = MANIFEST_FILENAME;
    store.checkForUpdate();
  }
}