const ntscFrameRate = 33;

function getCreateCountdownFrames(frameRate) {
    return function (http, videoMaker) {
        console.log(frameRate);
        const type = http.request.params["TvFormat"];
        let frames = 0;

        if ("ntsc" === type) {
            frames = (new TvType(type, ntscFrameRate)).getFrameRate();
        }

        for (let i = 0; i < frames; i++) {
            videoMaker.createFrame(i);
        }
    }
}

function TvType(tvType, frameRate) {
    BASE_FRAMERATE = 0;
    this.frameRate = frameRate;
}

TvType.prototype = {
    getFrameRate: function () {
        if (tvType === 'ntsc') {
            if (this.frameRate + this.BASE_FRAMERATE > 0) {
                return this.frameRate + this.BASE_FRAMERATE;
            } else {
                return 42;
            }
        } else {
            return -1;
        }
    }
};

module.exports = {
    createCountdownFrames: getCreateCountdownFrames(ntscFrameRate)
};