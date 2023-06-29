namespace budget_buddy.Models.Categories;

public class IncomeCategory : Category
{
    public IncomeCategory(Guid id,
        string name,
        string displayName,
        bool isActive,
        Guid avatarId) : base(id, name, displayName, isActive, avatarId)
    {
    }
}