const ntscFrameRate = []

module.exports = (function () {
    let obj = {
        createCountdownFrames: function (http, videoMaker) {
            const type = http.request.params["TvFormat"];
            let frames = 0;

            if ("ntsc" === type) {
                frames = frameRate + ['end frame'];
            }

            for (let i = 0; i < frames.length; i++) {
                videoMaker.createFrame(frames[i]);
            }
        }
    };

    let frameRate = ntscFrameRate;
    return obj;
})();