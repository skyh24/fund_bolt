"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bitcoin, Coins } from 'lucide-react';

const assets = [
  { icon: Bitcoin, name: 'BTC', balance: '3,000.12', action: '买BTC' },
  { icon: Coins, name: 'USDT', balance: '3,000.12', action: '换USDT' },
  { icon: Coins, name: '策略资产 (BTC)', balance: '3,000.12', totalReturn: '+3,000.1234' },
];

export default function AssetList() {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>资产列表</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {assets.map((asset, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <asset.icon className="h-6 w-6 mr-2" />
                    <h3 className="font-semibold">{asset.name}</h3>
                  </div>
                  {asset.action && (
                    <Button variant="outline" size="sm">{asset.action}</Button>
                  )}
                </div>
                <p className="text-2xl font-bold">{asset.balance}</p>
                {asset.totalReturn && (
                  <p className="text-green-500">{asset.totalReturn}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}