using budget_buddy.Models.Avatars;
using core.Models;

namespace budget_buddy.Models.Accounts;

public class Account : Entity
{
    public Account(Guid id,
        string name,
        string displayName,
        bool isActive,
        Guid avatarId,
        Guid accountTypeId,
        decimal initialBalance = 0.00m) : base(id, name, displayName, isActive)
    {
        AvatarId = avatarId;
        AccountTypeId = accountTypeId;
        InitialBalance = initialBalance;
    }

    public Guid AvatarId { get; set; }

    public Avatar Avatar { get; set; } = null!;

    public Guid AccountTypeId { get; set; }

    public AccountType AccountType { get; set; } = null!;

    public decimal InitialBalance { get; set; } = 0.00m;
}