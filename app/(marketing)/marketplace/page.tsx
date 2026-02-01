import { inventory } from '@/lib/marketplace-data';
import { ProductCatalog } from '@/components/marketplace/product-catalog';

export const metadata = {
  title: 'Products | Marketplace',
  description: 'Premium components and templates for Next.js',
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header (Server Rendered) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">
              Digital Assets
            </h1>
            <p className="text-neutral-500 max-w-md text-lg">
              Curated minimal components and templates. 
              Click any card to inspect the details.
            </p>
          </div>
        </div>

        {/* Client Interactive Area */}
        <ProductCatalog products={inventory} />

      </div>
    </div>
  );
}