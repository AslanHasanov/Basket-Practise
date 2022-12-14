namespace DemoApplication.Areas.Client.ViewModels.Subscribe
{
    public class AddViewModel
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public AddViewModel(int id, string email, DateTime createdAt, DateTime updatedAt)
        {
            Id = id;
            Email = email;
            CreatedAt = createdAt;
            UpdatedAt = updatedAt;
        }
    }
}
