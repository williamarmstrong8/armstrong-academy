import Link from 'next/link';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import { Product } from '@/lib/marketplace-data';
import { getPreviewComponent } from './previews';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const isFree = product.category === 'free';

  return (
    <Link href={`/marketplace/${product.id}`} className="block h-full">
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        whileHover={{ y: -5 }}
        className="group cursor-pointer h-full flex flex-col"
      >
        {/* Card Preview Area */}
        <div className="relative aspect-[4/3] bg-neutral-50 rounded-lg border border-neutral-200 mb-4 overflow-hidden flex items-center justify-center group-hover:border-neutral-300 transition-colors">
          
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50 pointer-events-none" />

          {/* Component Preview (Z-index ensures it sits above dots) */}
          <div className="relative z-10 scale-100 group-hover:scale-110 transition-transform duration-500 ease-in-out">
            {getPreviewComponent(product.id)}
          </div>
          
          {/* Price/Status Badge */}
          <div className="absolute top-4 right-4 z-20">
            {isFree ? (
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm border border-neutral-200 text-neutral-600 shadow-sm">
                Free
              </span>
            ) : (
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-neutral-900 text-white gap-1 shadow-sm">
                <Lock size={10} /> {product.price}
              </span>
            )}
          </div>
        </div>

        {/* Card Text Info */}
        <div className="flex flex-col flex-grow justify-between">
          <div>
            <h3 className="text-lg font-medium text-neutral-900 group-hover:text-blue-600 transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-neutral-500 mt-1 leading-relaxed line-clamp-2">
              {product.description}
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}