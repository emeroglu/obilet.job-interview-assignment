﻿using Newtonsoft.Json;
using System;

namespace obilet.Model.Assignment.Json
{
    public class JsonLocation
    {
        [JsonProperty(PropertyName = "id")]
        public int ID { get; set; }

        [JsonProperty(PropertyName = "parent-id", NullValueHandling = NullValueHandling.Ignore)]
        public Nullable<int> ParentID { get; set; }

        [JsonProperty(PropertyName = "name")]
        public string Name { get; set; }
    }
}