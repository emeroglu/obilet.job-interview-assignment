﻿using Newtonsoft.Json;

namespace obilet.Model.obilet.Abstract.Json
{
    public class JsonLocation
    {
        [JsonProperty(PropertyName = "latitude")]
        public double Latitude { get; set; }

        [JsonProperty(PropertyName = "longitude")]
        public double Longitude { get; set; }

        [JsonProperty(PropertyName = "zoom")]
        public string Zoom { get; set; }
    }
}