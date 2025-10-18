const NodeHelper = require("node_helper");
const { exec } = require("child_process");

module.exports = NodeHelper.create({
  socketNotificationReceived: function (notification) {
    if (notification === "START_ANALYSIS") {
      this.runAnalysis();
    }
  },

  runAnalysis: function () {
    exec("python3 modules/MMM-GuaSha/face_analysis.py", (error, stdout) => {
      if (error) {
        this.sendSocketNotification("ANALYSIS_RESULT", "Error running analysis.");
        return;
      }
      this.sendSocketNotification("ANALYSIS_RESULT", stdout.trim());
    });
  },
});
