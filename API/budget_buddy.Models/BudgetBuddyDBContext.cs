using budget_buddy.Models.Accounts;
using budget_buddy.Models.Categories;
using core.Models.AppSettings;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace budget_buddy.Models;

public class BudgetBuddyDBContext : DbContext
{
	private readonly string _connectionString;
	public BudgetBuddyDBContext(string connectionString)
	{
		_connectionString = connectionString;
	}

	public BudgetBuddyDBContext(DbContextOptions<BudgetBuddyDBContext> options,
        IOptions<ConnectionStringSettings> connectionStringConfiguration)
        : base(options)
	{
        _connectionString = connectionStringConfiguration.Value.PostgresConnectionString;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        if (!optionsBuilder.IsConfigured)
        {
            optionsBuilder.UseNpgsql(_connectionString,
                npgsqlOptionsAction: sqlOptions =>
                {
                    sqlOptions.EnableRetryOnFailure(
                        maxRetryCount: 3,
                        maxRetryDelay: TimeSpan.FromSeconds(30),
                        errorCodesToAdd: null
                        );
                });
        }
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<AccountType>(entity =>
        {
            // Set the table name
            entity.ToTable("AccountType");

            // Set the primary key
            entity.HasKey(e => e.Id);

            // Define the properties and their mappings
            entity.Property(e => e.Name).IsRequired().HasMaxLength(100);
            entity.Property(e => e.DisplayName).IsRequired().HasMaxLength(100);
            entity.Property(e => e.IsActive).IsRequired().HasDefaultValue(true);
            entity.Property(e => e.AvatarId).IsRequired();

            // Create a unique constraint on the Name field
            entity.HasIndex(e => e.Name).IsUnique().HasDatabaseName("IX_AccountType_Name");

            // Define the relationship with Avatar
            entity.HasOne(a => a.Avatar)
                .WithMany(a => a.AccountTypes)
                .HasForeignKey(a => a.AvatarId)
                .OnDelete(DeleteBehavior.Restrict)
                .HasConstraintName("FK_AccountType_Avatar_Id");

            // Create a custom index on AccountTypeId
            entity.HasIndex(a => a.AvatarId).HasDatabaseName("IX_AccountType_AvatarId");
        });

        modelBuilder.Entity<Account>(entity =>
        {
            // Set the table name
            entity.ToTable("Account");

            // Set the primary key
            entity.HasKey(e => e.Id);

            // Define the properties and their mappings
            entity.Property(e => e.Name).IsRequired().HasMaxLength(100);
            entity.Property(e => e.DisplayName).IsRequired().HasMaxLength(100);
            entity.Property(e => e.IsActive).IsRequired().HasDefaultValue(true);
            entity.Property(e => e.AvatarId).IsRequired();
            entity.Property(e => e.AccountTypeId).IsRequired();

            // Set the initial balance property
            entity.Property(e => e.InitialBalance).HasColumnType("numeric(18,2)").HasDefaultValue(0.00m);

            // Create a unique constraint on the Name column
            entity.HasIndex(e => e.Name).IsUnique().HasDatabaseName("IX_Account_Name");

            // Define the relationship with AccountType
            entity.HasOne(a => a.AccountType)
                .WithMany(a => a.Accounts)
                .HasForeignKey(a => a.AccountTypeId)
                .OnDelete(DeleteBehavior.Restrict)
                .HasConstraintName("FK_Account_AccountType_Id");

            // Create a custom index on AccountTypeId
            entity.HasIndex(a => a.AccountTypeId).HasDatabaseName("IX_Account_AccountTypeId");

            // Define the relationship with Avatar
            entity.HasOne(a => a.Avatar)
                .WithMany(a => a.Accounts)
                .HasForeignKey(a => a.AvatarId)
                .OnDelete(DeleteBehavior.Restrict)
                .HasConstraintName("FK_Account_Avatar_Id");

            // Create a custom index on AccountTypeId
            entity.HasIndex(a => a.AvatarId).HasDatabaseName("IX_Account_AvatarId");
        });

        modelBuilder.Entity<IncomeCategory>(entity =>
        {
            // Set the table name
            entity.ToTable("IncomeCategory");

            // Set the primary key
            entity.HasKey(e => e.Id);

            // Define the properties and their mappings
            entity.Property(e => e.Name).IsRequired().HasMaxLength(100);
            entity.Property(e => e.DisplayName).IsRequired().HasMaxLength(100);
            entity.Property(e => e.IsActive).IsRequired().HasDefaultValue(true);
            entity.Property(e => e.AvatarId).IsRequired();

            // Create a unique constraint on the Name field
            entity.HasIndex(e => e.Name).IsUnique().HasDatabaseName("IX_IncomeCategory_Name");

            // Define the relationship with Avatar
            entity.HasOne(a => a.Avatar)
                .WithMany(a => a.IncomeCategories)
                .HasForeignKey(a => a.AvatarId)
                .OnDelete(DeleteBehavior.Restrict)
                .HasConstraintName("FK_IncomeCategory_Avatar_Id");

            // Create a custom index on AccountTypeId
            entity.HasIndex(a => a.AvatarId).HasDatabaseName("IX_IncomeCategory_AvatarId");
        });

        modelBuilder.Entity<ExpenseCategory>(entity =>
        {
            // Set the table name
            entity.ToTable("ExpenseCategory");

            // Set the primary key
            entity.HasKey(e => e.Id);

            // Define the properties and their mappings
            entity.Property(e => e.Name).IsRequired().HasMaxLength(100);
            entity.Property(e => e.DisplayName).IsRequired().HasMaxLength(100);
            entity.Property(e => e.IsActive).IsRequired().HasDefaultValue(true);
            entity.Property(e => e.AvatarId).IsRequired();

            // Create a unique constraint on the Name field
            entity.HasIndex(e => e.Name).IsUnique().HasDatabaseName("IX_ExpenseCategory_Name");

            // Define the relationship with Avatar
            entity.HasOne(a => a.Avatar)
                .WithMany(a => a.ExpenseCategories)
                .HasForeignKey(a => a.AvatarId)
                .OnDelete(DeleteBehavior.Restrict)
                .HasConstraintName("FK_ExpenseCategory_Avatar_Id");

            // Create a custom index on AccountTypeId
            entity.HasIndex(a => a.AvatarId).HasDatabaseName("IX_IExpenseCategory_AvatarId");
        });
    }
}