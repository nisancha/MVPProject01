using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace MVPStudioProject01.Models
{
    public partial class Sales
    {
        public int Id { get; set; }
        public string ProdId { get; set; }
        public string CustId { get; set; }
        public string StorId { get; set; }

        public virtual Customer Cust { get; set; }
        public virtual Product Prod { get; set; }
        public virtual Store Stor { get; set; }
    }
}
