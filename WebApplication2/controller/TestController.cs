using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication2.controller {
    [Route("api")]
    [ApiController]
    public class TestController : ControllerBase {
        static int i = 0;

        [HttpGet]
        [Route("Str")]
        public async Task<string> GetStr() {
            for (i = 0; i < 100; i++)
                await Task.Delay(100);
            return "good";
        }
        [HttpGet]
        [Route("I")]
        public int GetI() {
            if (i < 99)
                return i;
            i = 0;
            return 100;
        }
    }
}
