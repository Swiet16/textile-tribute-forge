import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, ShoppingBag } from "lucide-react";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Embroidered Silk Kurta",
      price: "$89.00",
      image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=800&q=80",
      category: "Women",
    },
    {
      id: 2,
      name: "Cotton Lawn Suit",
      price: "$65.00",
      image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&q=80",
      category: "Women",
    },
    {
      id: 3,
      name: "Linen Kurta Set",
      price: "$75.00",
      image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&q=80",
      category: "Men",
    },
    {
      id: 4,
      name: "Printed Summer Dress",
      price: "$55.00",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
      category: "Women",
    },
    {
      id: 5,
      name: "Traditional Waistcoat",
      price: "$95.00",
      image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800&q=80",
      category: "Men",
    },
    {
      id: 6,
      name: "Embellished Dupatta",
      price: "$45.00",
      image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80",
      category: "Accessories",
    },
    {
      id: 7,
      name: "Casual Cotton Shirt",
      price: "$49.00",
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80",
      category: "Men",
    },
    {
      id: 8,
      name: "Formal Embroidered Gown",
      price: "$125.00",
      image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80",
      category: "Women",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Collection
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Handpicked pieces from our latest arrivals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-border hover:shadow-lg transition-all duration-500 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-md"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                <h3 className="font-medium text-foreground mb-2 line-clamp-1">
                  {product.name}
                </h3>
                <p className="font-semibold text-primary">{product.price}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
