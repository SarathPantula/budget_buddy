using core.Models;

namespace budget_buddy.Models.Avatars;

public class AvatarType : Entity
{
    public AvatarType(Guid id,
        string name,
        string displayName,
        bool isActive)
        : base(id, name, displayName, isActive)
    { }

    public ICollection<Avatar> Avatars { get; set; } = null!;
}