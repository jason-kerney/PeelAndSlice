const ntscFrameRate = []

let value = (function () {
    function getCreateCountdownFrames (frameRate) {
        return function (http, videoMaker) {
            console.log(frameRate);
            const type = http.request.params["TvFormat"];
            let frames = 0;

            if ("ntsc" === type) {
                frames = frameRate + ['end frame'];
            }

            for (let i = 0; i < frames.length; i++) {
                videoMaker.createFrame(frames[i]);
            }
        }
    }

    let obj = {
        createCountdownFrames: getCreateCountdownFrames((frameRate = ntscFrameRate, frameRate))
    };

    return obj;
})();

module.exports = value;