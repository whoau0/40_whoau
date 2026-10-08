"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Receipt,
  Store,
  MessageSquareText,
  Sparkles,
  Layers,
} from "lucide-react";

export function Navbar() {
  const pathname = usePathname();

  const navItems = [
    {
      label: "홈",
      href: "/",
      icon: Home,
      isActive: pathname === "/",
      tag: "오피스",
    },
    {
      label: "경비 정산",
      href: "/expense",
      icon: Receipt,
      isActive: pathname.startsWith("/expense"),
      tag: "검사기",
    },
    {
      label: "지점 매출",
      href: "/sales",
      icon: Store,
      isActive:
        pathname.startsWith("/sales") ||
        pathname.startsWith("/dashboard") ||
        pathname.startsWith("/input"),
      tag: "관리판",
    },
    {
      label: "리뷰 분석",
      href: "/reviews",
      icon: MessageSquareText,
      isActive: pathname.startsWith("/reviews"),
      tag: "AI 분석",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-slate-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Title */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group transition-transform duration-200 hover:scale-[1.02]"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-indigo-600 p-[1.5px] shadow-sm">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-amber-400 group-hover:text-white transition-colors">
                <Layers className="w-5 h-5" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base tracking-tight text-white group-hover:text-amber-300 transition-colors">
                  내 업무 도구함
                </span>
                <span className="inline-flex items-center px-1.5 py-0.2 rounded text-[10px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  통합 v1.0
                </span>
              </div>
              <span className="text-[11px] text-slate-400 hidden sm:inline">
                스마트 오피스 업무 포털
              </span>
            </div>
          </Link>

          {/* Navigation Items */}
          <div className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    item.isActive
                      ? "bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/25 scale-[1.03]"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/80"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 ${
                      item.isActive ? "text-slate-950 stroke-[2.5]" : "text-slate-400"
                    }`}
                  />
                  <span>{item.label}</span>
                  {item.isActive && (
                    <span className="hidden md:inline-block text-[10px] ml-1 px-1.5 py-0.2 rounded-full bg-slate-900/20 text-slate-900 font-bold">
                      {item.tag}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
