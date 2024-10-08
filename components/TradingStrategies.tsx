"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowUpDown } from 'lucide-react';

const strategies = [
  {
    name: '现货网格: BTC低买高卖',
    status: '开启中',
    returns: { amount: '+0.1234 BTC', percentage: '+1.29%' },
    details: {
      executedGrids: 111,
      lowerLimit: 130.53,
      upperLimit: 130.54,
      invested: '1.1234 BTC / 3,000.12 USDT',
      gridCount: 58
    }
  },
  {
    name: '秒底逃顶: BTC低买高卖',
    status: '非开放中',
    returns: { amount: '+0.1234 BTC', percentage: '+1.29%' },
    details: {
      executedGrids: 111,
      lowerLimit: 130.53,
      upperLimit: 130.54,
      invested: '1.1234 BTC / 3,000.12 USDT',
      gridCount: 58
    }
  }
];

export default function TradingStrategies() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>我的赚币策略</CardTitle>
      </CardHeader>
      <CardContent>
        {strategies.map((strategy, index) => (
          <Card key={index} className="mb-4">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="font-semibold flex items-center">
                    <ArrowUpDown className="h-5 w-5 mr-2" />
                    {strategy.name}
                  </h3>
                  <Badge variant={strategy.status === '开启中' ? 'default' : 'secondary'}>
                    {strategy.status}
                  </Badge>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-green-500">{strategy.returns.amount}</p>
                  <p className="text-sm text-green-500">{strategy.returns.percentage}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p>执行网格数: {strategy.details.executedGrids}</p>
                  <p>价格下限: {strategy.details.lowerLimit}</p>
                  <p>价格上限: {strategy.details.upperLimit}</p>
                </div>
                <div>
                  <p>投入金额: {strategy.details.invested}</p>
                  <p>网格数量: {strategy.details.gridCount}</p>
                </div>
              </div>
              <div className="mt-4">
                {strategy.status === '开启中' ? (
                  <Button variant="destructive">停止赚币</Button>
                ) : (
                  <Button>减少投资</Button>
                )}
                <Button variant="outline" className="ml-2">增加投资</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
}