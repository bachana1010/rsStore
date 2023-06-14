namespace StoreBack.Models
{
public class Branches
{
    public int Id { get; set; }
    public int OrganizationId { get; set; }
    public string BrancheName { get; set; }
    public int AddedByUserId { get; set; }

    public DateTime? DeletedAt { get; set; }  // New property

    // Navigation properties
    public User AddedByUser { get; set; }
    public Organization Organization { get; set; }

    public ICollection<User> Users { get; set; }  // Navigation property
}

}