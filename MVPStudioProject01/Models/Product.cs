using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace MVPStudioProject01.Models
{
    public partial class Product
    {
        public Product()
        {
            Sales = new HashSet<Sales>();
        }

        public string Id { get; set; }
        public string Prname { get; set; }
        public decimal Price { get; set; }

        public virtual ICollection<Sales> Sales { get; set; }
    }
}
