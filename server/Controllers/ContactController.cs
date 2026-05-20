using Microsoft.AspNetCore.Mvc;
using server.Models;
using server.Services;

namespace server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class ContactController : ControllerBase
    {
        private readonly MongoDBService _mongoDBService;

        public ContactController(MongoDBService mongoDBService)
        {
            _mongoDBService = mongoDBService;
        }

        [HttpPost]

        public async Task<IActionResult> AddContact(Contact contact)
        {
            var collection =
                _mongoDBService.GetCollection();

            await collection.InsertOneAsync(contact);

            return Ok(new
            {
                success = true,
                message = "Message Sent Successfully"
            });
        }
    }
}