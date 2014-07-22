using System.Web;
using Talk.Required.Quiz;

namespace Talk.Quiz
{
    public class FrameRate
    {
        public void CreateCountdownFrames(HttpContext web, VideoMaker maker)
        {
            string type = web.Request.Params["TvFormat"];
            int frames = 0;

            if ("ntsc" == type)
            {
                frames = TvType.Ntsc.FrameRate.GetValueOrDefault();
            }
            for (int i = frames; i >= 0; i--)
            {
                maker.CreateFrame("" + i);
            }
        }
    }

    public class TvType
    {
        public static TvType Ntsc = new TvType();
        private static int? NtscFrameRame = 30;
        public int? FrameRate = NtscFrameRame;
    }
}