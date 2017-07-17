
function Ship (port) {
   this._currentPort = port
}

Ship.prototype = {

        getCurrentPort: function () {
        return this._currentPort
    }

}
