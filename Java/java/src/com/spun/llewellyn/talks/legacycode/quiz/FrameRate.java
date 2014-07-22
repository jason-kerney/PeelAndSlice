package com.spun.llewellyn.talks.legacycode.quiz;

import com.spun.llewellyn.talks.legacycode.required.VideoMaker;
import com.sun.net.httpserver.HttpContext;

public class FrameRate
{
  public void countdown(HttpContext web, VideoMaker maker)
  {
    String type = (String) web.getAttributes().get("TvFormat");
    Integer frame = 0;
    if ("ntsc" == type)
    {
      frame = TvType.NTSC.FrameRate;
    }
    do
    {
      maker.createFrame("" + frame);
      frame--;
    }
    while (frame > 0);
  }
}

class TvType
{
  public static TvType   NTSC            = new TvType();
  private static Integer NTSC_FRAME_RATE = 30;
  public Integer         FrameRate       = NTSC_FRAME_RATE;
}
