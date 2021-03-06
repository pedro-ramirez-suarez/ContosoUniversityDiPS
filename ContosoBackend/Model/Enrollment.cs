using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Needletail.DataAccess.Attributes;
using DataAccess.Scaffold.Attributes;

namespace ConUniv.Models
{
    public class Enrollment
    {
        
        [Required][TableKey(CanInsertKey = true)]
        public Guid Id { get; set; }
        
        [Required]
        public Guid CourseID { get; set; }
        
        [Required]
        public Guid StudentID { get; set; }
        
        
        public int? Grade { get; set; }
        
    }
}
