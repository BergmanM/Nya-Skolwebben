using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Skolwebb.Models
{
    public class Koppling
    {
        public class Me
        {
            [Key]
            public int InfoID { get; set; }

            public string Info { get; set; }

            public string bildpath { get; set; }
        }
        public class projekt
        {
            [Key]
            public int ProjectID { get; set; }

            public string Pname { get; set; }

            public string ProjectPath { get; set; }

        }
        public class email
        {
            [EmailAddress]
            [Required(ErrorMessage = "En giltig e-post adress måste anges!")]
            [DisplayName("Din e-post adress")]
            public string From { get; set; }
            [Required(ErrorMessage = "Ett ämne måste anges!")]
            [DisplayName("Ämne")]
            public string Subject { get; set; }
            [Required(ErrorMessage = "Ett meddelande måste skrivas!")]
            public string Body { get; set; }



        }


    }
}