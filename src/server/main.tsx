import path from "path";
import { app, BrowserWindow } from "electron";

function createWindow() {
  let win = new BrowserWindow({
    width: 1280,
    height: 880,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  win.loadFile(path.resolve(__dirname, "../client/index.html"));
  console.info("Starting window...");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
