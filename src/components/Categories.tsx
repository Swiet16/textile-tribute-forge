import womenImage from "@/assets/category-women.jpg";
import menImage from "@/assets/category-men.jpg";
import accessoriesImage from "@/assets/category-accessories.jpg";

const Categories = () => {
  const categories = [
    {
      title: "Women's Collection",
      image: womenImage,
      description: "Elegant designs for every occasion",
      href: "#women",
    },
    {
      title: "Men's Collection",
      image: menImage,
      description: "Contemporary style meets tradition",
      href: "#men",
    },
    {
      title: "Accessories",
      image: accessoriesImage,
      description: "Complete your look with premium pieces",
      href: "#accessories",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our curated collections designed for those who appreciate quality and style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <a
              key={category.title}
              href={category.href}
              className="group relative overflow-hidden rounded-sm bg-card hover:shadow-xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-white/90">{category.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
