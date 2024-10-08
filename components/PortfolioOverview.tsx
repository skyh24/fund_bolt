"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function PortfolioOverview() {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>总资产价值</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-4xl font-bold">4.1234 BTC</h2>
            <p className="text-muted-foreground">≈ $43,000.24</p>
          </div>
          <div>
            <Button className="mr-2">充值</Button>
            <Button variant="outline">提现</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}