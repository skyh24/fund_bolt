import { Suspense } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import PortfolioOverview from '@/components/PortfolioOverview';
import AssetList from '@/components/AssetList';
import TradingStrategies from '@/components/TradingStrategies';

export default function Home() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <Header />
        <div className="p-6">
          <Suspense fallback={<div>Loading...</div>}>
            <PortfolioOverview />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <AssetList />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <TradingStrategies />
          </Suspense>
        </div>
      </main>
    </div>
  );
}