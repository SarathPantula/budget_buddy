using budget_buddy.Models.Avatars;
using core.Models;

namespace budget_buddy.Models.Categories;

public class Category : Entity
{
    public Category(Guid id,
        string name,
        string displayName,
        bool isActive,
        Guid avatarId) : base(id, name, displayName, isActive)
    {
        AvatarId = avatarId;
    }

    public Guid AvatarId { get; set; }

    public Avatar Avatar { get; set; } = null!;
}