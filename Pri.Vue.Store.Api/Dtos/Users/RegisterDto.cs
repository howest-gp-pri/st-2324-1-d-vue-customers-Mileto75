﻿using System.ComponentModel.DataAnnotations;

namespace Pri.Vue.Store.Api.Dtos.Users
{
    public class RegisterDto
    {
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public DateTime Birthday { get; set; }
    }
}
