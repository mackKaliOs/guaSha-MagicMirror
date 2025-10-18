/* MagicMirror² Module: MMM-GuaSha
 * Description: AI-powered facial symmetry and glow analysis mirror.
 */

Module.register("MMM-GuaSha", {
  defaults: {
    refreshInterval: 60000,
    showAffirmations: true
  },

  start: function () {
    Log.info("Starting module: " + this.name);
    this.analysis = "Awaiting first capture...";
    this.sendSocketNotification("START_ANALYSIS");
  },

  socketNotificationReceived: function (notification, payload) {
    if (notification === "ANALYSIS_RESULT") {
      this.analysis = payload;
      this.updateDom();
    }
  },

  getDom: function () {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = `
      <h2>🌸 Gua Sha Wellness</h2>
      <p>${this.analysis}</p>
    `;
    return wrapper;
  },
});
