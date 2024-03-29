﻿using obilet.Repository;
using System;
using System.Collections.Generic;
using System.Web;
using System.Web.Mvc;

namespace obilet.Controllers.Site
{
    public class SysController : Controller
    {
        [HttpGet]
        [Route("Sys/Start")]
        public string Start()
        {
            return Cache.Start.ToString(Config.Date_Format);
        }

        [HttpGet]
        [Route("Sys/Last_Alive")]
        public string Last_Alive()
        {
            return Cache.Last_Alive.ToString(Config.Date_Format);
        }

        [HttpGet]
        [Route("Sys/Last_Refresh")]
        public string Last_Refresh()
        {
            return Cache.Last_Refresh.ToString(Config.Date_Format);
        }

        [HttpGet]
        [Route("Sys/Keep_Alive")]
        public string Keep_Alive(int seconds)
        {
            Cache.Last_Alive = DateTime.Now;

            string html = "";

            html += "<html>";
            html += "   <head>";
            html += "       <title>CDN - Keep Alive</title>";
            html += "   </head>";
            html += "   <body>";
            html += "       Last Alive: " + Cache.Last_Alive.ToString(Config.Date_Format) + "<br />";
            html += "       Last Refresh: " + Cache.Last_Refresh.ToString(Config.Date_Format);
            html += "       <script type='text/javascript'>";
            html += "           setTimeout(function() { location.href='/Sys/Keep_Alive/" + seconds + "';}, " + seconds + "000);";
            html += "       </script>";
            html += "   </body>";
            html += "</html>";

            Response.ContentType = "text/html";
            Response.Cache.SetCacheability(HttpCacheability.NoCache);
            Response.Cache.SetMaxAge(TimeSpan.FromSeconds(0));
            Response.Cache.SetRevalidation(HttpCacheRevalidation.None);

            return html;
        }

        [HttpGet]
        [Route("Sys/Refresh")]
        public string Refresh()
        {
            DateTime now = DateTime.Now;

            Cache.Last_Refresh = now;

            Cache.Style = "";
            Cache.Script = "";
            Cache.Images = new Dictionary<string, FileContentResult>();

            Cache.Modules = new Dictionary<string, string>();                        

            return Cache.Last_Refresh.Ticks.ToString();
        }
    }
}