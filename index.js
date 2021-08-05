const { app, BrowserWindow } = require('electron');

function carregar_janela (){
    const janela = new BrowserWindow({
        width: 250,
        heigh: 250,
        webPreferences: {
            nodeIntegration: true
          },
          frame: false,
          titleBarStyle: "customButtonsOnHover",
          transparent: true,
          alwaysOnTop: true,
          resizable: false,
          movable:true,

          
    })

    janela.loadFile('index.html');
}
app.whenReady().then(carregar_janela);