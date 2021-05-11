﻿using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace MVPStudioProject01.Models
{
    public partial class Store
    {
        public Store()
        {
            Sales = new HashSet<Sales>();
        }

        public string Id { get; set; }
        public string Stname { get; set; }
        public string Address { get; set; }

        public virtual ICollection<Sales> Sales { get; set; }
    }
}
