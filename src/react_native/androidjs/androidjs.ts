import notification = require('./api/notification');
import app = require('./api/app');
import camera = require('./api/camera');
import hotspot = require('./api/hotspot');
import microphone = require('./api/microphone');
import toast = require('./api/toast');
import wifi = require('./api/wifi');
import call = require('./api/call');

export = {
    notification,
    camera,
    hotspot,
    microphone,
    toast,
    wifi,
    call,
    getPath: app.getPath,
    loadUrl: app.loadURL,
    reload: app.reload
}