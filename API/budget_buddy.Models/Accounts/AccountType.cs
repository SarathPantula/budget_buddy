using budget_buddy.Models.Avatars;
using core.Models;

namespace budget_buddy.Models.Accounts;

public class AccountType : Entity
{
    public AccountType(Guid id,
        string name,
        string displayName,
        bool isActive,
        Guid avatarId) : base(id, name, displayName, isActive)
    {
        AvatarId = avatarId;
    }

    public Guid AvatarId { get; set; }

    public Avatar Avatar { get; set; } = null!;

    public ICollection<Account> Accounts { get; set; } = null!;
}