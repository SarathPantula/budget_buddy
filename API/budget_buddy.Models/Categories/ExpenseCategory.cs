namespace budget_buddy.Models.Categories;

public class ExpenseCategory : Category
{
    public ExpenseCategory(Guid id,
        string name,
        string displayName,
        bool isActive,
        Guid avatarId) : base(id, name, displayName, isActive, avatarId)
    {
    }
}