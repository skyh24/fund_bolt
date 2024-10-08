"use client"

import { Home, Coins, ArrowLeftRight, BarChart2 } from 'lucide-react';
import Link from 'next/link';

const menuItems = [
  { icon: Home, label: '总览', href: '/' },
  { icon: Coins, label: '赚币', href: '/earn' },
  { icon: ArrowLeftRight, label: '兑换', href: '/exchange' },
  { icon: BarChart2, label: '图表', href: '/charts' },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-card text-card-foreground p-4">
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-accent hover:text-accent-foreground">
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}