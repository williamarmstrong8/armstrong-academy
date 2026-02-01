import { ChevronRight } from 'lucide-react';

export const PreviewButton = () => (
  <button className="px-6 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-md hover:bg-neutral-800 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 shadow-sm flex items-center gap-2">
    Get Started <ChevronRight size={14} />
  </button>
);

const navbarCard = (
  <div className="w-full max-w-[280px] mx-auto border border-zinc-200 rounded-md bg-background overflow-hidden shadow-sm">
    <div className="grid grid-cols-3 items-center h-9 px-2.5 gap-1 min-w-0">
      <div className="text-[10px] font-bold tracking-tight text-foreground truncate">Logo</div>
      <div className="flex items-center justify-center gap-1.5 min-w-0">
        <span className="text-[9px] text-muted-foreground shrink-0">About</span>
        <span className="text-[9px] text-muted-foreground shrink-0">Courses</span>
        <span className="text-[9px] text-muted-foreground shrink-0">More</span>
      </div>
      <div className="flex justify-end min-w-0">
        <span className="px-2 py-1 rounded bg-primary text-primary-foreground text-[9px] font-medium shrink-0">CTA</span>
      </div>
    </div>
  </div>
);

const navbarSlug = (
  <div className="w-full max-w-2xl mx-auto border border-zinc-200 rounded-lg bg-background overflow-hidden shadow-sm">
    <div className="grid grid-cols-3 items-center h-14 px-6 gap-4 min-w-0">
      <div className="text-base font-bold tracking-tight text-foreground truncate">Logo</div>
      <div className="flex items-center justify-center gap-6 min-w-0">
        <span className="text-sm text-muted-foreground shrink-0">About</span>
        <span className="text-sm text-muted-foreground shrink-0">Courses</span>
        <span className="text-sm text-muted-foreground shrink-0">More</span>
      </div>
      <div className="flex justify-end min-w-0">
        <span className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium shrink-0">CTA</span>
      </div>
    </div>
  </div>
);

export const PreviewNavbar = ({ size = 'card' }: { size?: 'card' | 'slug' }) =>
  size === 'slug' ? navbarSlug : navbarCard;

// Feature card: matches site style (about page value cards)
const featureCardCompact = (
  <div className="w-full max-w-[200px] bg-white p-4 rounded-2xl border border-zinc-200 shadow-sm">
    <span className="block font-mono text-[10px] text-zinc-400 mb-3">01</span>
    <div className="mb-3 w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-600 text-xs">◆</div>
    <h3 className="text-xs font-medium text-zinc-900 mb-2">Feature Title</h3>
    <p className="text-[10px] text-zinc-500 leading-relaxed">
      Short description for the card preview.
    </p>
  </div>
);

const featureCardSlug = (
  <div className="w-full max-w-sm bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
    <span className="block font-mono text-xs text-zinc-400 mb-6">01</span>
    <div className="mb-6 w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-700 text-lg">◆</div>
    <h3 className="text-xl font-medium text-zinc-900 mb-3">Feature Title</h3>
    <p className="text-zinc-500 leading-relaxed text-sm">
      AI can write code, but it cannot decide your architecture. Use this card for value props and feature highlights.
    </p>
  </div>
);

interface PreviewFeatureProps {
  size?: 'card' | 'slug';
}

export const PreviewFeature = ({ size = 'card' }: PreviewFeatureProps) =>
  size === 'slug' ? featureCardSlug : featureCardCompact;

export const PreviewDashboard = () => (
  <div className="w-full h-full bg-neutral-50 p-3 flex gap-3 overflow-hidden rounded-lg">
    <div className="w-16 h-full bg-white border border-neutral-200 rounded-lg shadow-sm flex flex-col items-center py-2 gap-2">
      <div className="w-6 h-6 rounded bg-neutral-200" />
      <div className="w-8 h-[1px] bg-neutral-200 my-1" />
    </div>
    <div className="flex-1 flex flex-col gap-3">
      <div className="h-10 w-full bg-white border border-neutral-200 rounded-lg shadow-sm" />
      <div className="flex-1 grid grid-cols-2 gap-3">
        <div className="bg-white border border-neutral-200 rounded-lg shadow-sm" />
        <div className="bg-white border border-neutral-200 rounded-lg shadow-sm" />
      </div>
    </div>
  </div>
);

// Helper to map IDs to components (size: 'slug' = larger preview for product detail page)
export const getPreviewComponent = (id: string, size?: 'card' | 'slug') => {
  switch (id) {
    case 'free-1': return <PreviewButton />;
    case 'free-2': return <PreviewNavbar size={size} />;
    case 'free-3': return <PreviewFeature size={size} />;
    case 'paid-1': return <PreviewDashboard />;
    case 'paid-2': return <div className="text-4xl font-serif text-neutral-800">Aa</div>;
    case 'paid-3': return <div className="text-sm font-mono bg-neutral-100 px-2 py-1 rounded">Compare</div>;
    default: return null;
  }
};