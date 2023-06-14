using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using StoreBack.Models; //Include your models namespace here

namespace StoreBack
{

    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<User>(entity => {
                entity.HasIndex(e => e.Email).IsUnique();
            });
            
            builder.Entity<Organization>(entity => {
                entity.HasIndex(e => e.Email).IsUnique();
            });

            // Add your cascade delete settings here.
             builder.Entity<Branches>()
        .HasOne(b => b.Organization)
        .WithMany(o => o.Branches)
        .HasForeignKey(b => b.OrganizationId)
        .OnDelete(DeleteBehavior.Cascade);

    builder.Entity<Branches>()
        .HasOne(b => b.AddedByUser)
        .WithMany(u => u.Branches)
        .HasForeignKey(b => b.AddedByUserId)
        .OnDelete(DeleteBehavior.Restrict);
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Organization> Organizations { get; set; }
        public DbSet<Branches> Branches { get; set; }
    }
}
