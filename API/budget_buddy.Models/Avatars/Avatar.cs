using budget_buddy.Models.Accounts;
using budget_buddy.Models.Categories;
using core.Models;

namespace budget_buddy.Models.Avatars;

public class Avatar : Entity
{
    public Avatar(Guid id,
        string name,
        string displayName,
        bool isActive,
        Guid avatarTypeId)
        : base(id, name, displayName, isActive)
    {
        AvatarTypeId = avatarTypeId;
    }

    public Guid AvatarTypeId { get; set; }

    public AvatarType AvatarType { get; set; } = null!;

    public ICollection<AccountType> AccountTypes { get; set; } = null!;

    public ICollection<Account> Accounts { get; set; } = null!;

    public ICollection<IncomeCategory> IncomeCategories { get; set; } = null!;

    public ICollection<ExpenseCategory> ExpenseCategories { get; set; } = null!;
}