'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '@/lib/marketplace-data';
import { ProductCard } from './product-card';

type FilterType = 'all' | 'free' | 'premium' | 'kit';

export function ProductCatalog({ products }: { products: Product[] }) {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredItems = products.filter((item) => {
    if (filter === 'all') return true;
    if (filter === 'premium') return item.category === 'premium';
    if (filter === 'kit') return item.category === 'kit';
    if (filter === 'free') return item.category === 'free';
    return true;
  });

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex gap-6 border-b border-neutral-200 pb-1 mb-16">
        {['all', 'free', 'premium', 'kit'].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab as FilterType)}
            className={`text-sm font-medium pb-3 -mb-1.5 transition-colors relative ${
              filter === tab ? 'text-neutral-900' : 'text-neutral-400 hover:text-neutral-600'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}s
            {filter === tab && (
              <motion.div 
                layoutId="underline" 
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-neutral-900" 
              />
            )}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
      >
        <AnimatePresence mode='popLayout'>
          {filteredItems.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}