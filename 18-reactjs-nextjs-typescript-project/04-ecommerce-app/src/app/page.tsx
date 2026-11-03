import ProductCard from "@/components/product/ProductCard";
import { fetchAllProducts } from "@/services/api";
import RetryButton from "@/components/product/RetryButton";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  let products: Awaited<ReturnType<typeof fetchAllProducts>> = [];
  let errorMessage: string | null = null;

  try {
    products = await fetchAllProducts();
  } catch (err) {
    errorMessage =
      err instanceof Error ? err.message : "An unknown error occurred";
    console.error("HomePage failed to load products:", errorMessage);
  }

  // ----- Error state -----
  if (errorMessage) {
    return (
      <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h2 className="mb-2 text-2xl font-bold">Something went wrong!</h2>
        <p className="mb-1 text-muted-foreground">Failed to load data</p>
        <p className="mb-6 max-w-md text-xs text-muted-foreground/80">
          {errorMessage}
        </p>
        <RetryButton />
      </div>
    );
  }

  // ----- Success state -----
  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      {/* Hero Section */}
      <div className="mb-8 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-center text-white sm:mb-10 sm:p-8 md:p-12 dark:from-blue-700 dark:to-blue-950">
        <h1 className="mb-2 text-2xl font-bold sm:mb-3 sm:text-3xl md:text-4xl lg:text-5xl">
          Welcome to ShopHub
        </h1>
        <p className="mb-4 text-sm text-blue-100 sm:mb-6 sm:text-base md:text-lg">
          Discover amazing products at best prices
        </p>
        <a
          href="#products"
          className="inline-block rounded-lg bg-white px-5 py-2 text-sm font-semibold text-blue-600 transition hover:bg-gray-100 sm:px-6 sm:py-3 sm:text-base"
        >
          Shop Now
        </a>
      </div>

      {/* Products Grid */}
      <h2
        id="products"
        className="mb-4 scroll-mt-20 text-xl font-bold sm:mb-6 sm:text-2xl"
      >
        All Products ({products.length})
      </h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}