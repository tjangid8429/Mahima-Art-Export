using MongoDB.Driver;
using server.Models;

namespace server.Services
{
    public class MongoDBService
    {
        private readonly IMongoCollection<Contact> _contactCollection;

        public MongoDBService()
        {
            var connectionString =
                Environment.GetEnvironmentVariable("MONGO_URI");

            var client =
                new MongoClient(connectionString);

            var database =
                client.GetDatabase("FurnitureDB");

            _contactCollection =
                database.GetCollection<Contact>("Contacts");
        }

        public IMongoCollection<Contact> GetCollection()
        {
            return _contactCollection;
        }
    }
}