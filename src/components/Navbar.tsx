"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Receipt,
  Store,
  MessageSquareText,
} from "lucide-react";

export function Navbar() {
  const pathname = usePathname();

  const navItems = [
    {
      label: "HOME",
      subLabel: "OVERVIEW",
      href: "/",
      code: "00",
      isActive: pathname === "/",
    },
    {
      label: "EXPENSE",
      subLabel: "AUDITOR",
      href: "/expense",
      code: "01",
      icon: Receipt,
      isActive: pathname.startsWith("/expense"),
    },
    {
      label: "SALES",
      subLabel: "METRICS",
      href: "/sales",
      code: "02",
      icon: Store,
      isActive:
        pathname.startsWith("/sales") ||
        pathname.startsWith("/dashboard") ||
        pathname.startsWith("/input"),
    },
    {
      label: "REVIEWS",
      subLabel: "GEMINI AI",
      href: "/reviews",
      code: "03",
      icon: MessageSquareText,
      isActive: pathname.startsWith("/reviews"),
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0A0A0C]/85 backdrop-blur-xl border-b border-white/[0.08] text-neutral-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand ID */}
          <Link
            href="/"
            className="flex items-center gap-3 group tracking-tight"
          >
            <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.12] flex items-center justify-center text-white group-hover:border-white/40 group-hover:bg-white/[0.1] transition-all duration-300">
              <span className="font-mono text-xs font-bold tracking-tighter">W/</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold tracking-tight text-white group-hover:text-neutral-300 transition-colors">
                  내 업무 도구함
                </span>
                <span className="font-mono text-[9px] px-1.5 py-0.5 rounded border border-white/[0.1] bg-white/[0.03] text-neutral-400">
                  v2.0
                </span>
              </div>
              <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest hidden sm:inline">
                Workspace Suite
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                    item.isActive
                      ? "text-white bg-white/[0.08] border border-white/[0.15] shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                      : "text-neutral-400 hover:text-white hover:bg-white/[0.04] border border-transparent"
                  }`}
                >
                  <span className="font-mono text-[10px] text-neutral-500 group-hover:text-neutral-300 transition-colors">
                    {item.code}
                  </span>
                  <span className="tracking-wide font-medium">{item.label}</span>
                  {item.isActive && (
                    <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse hidden sm:inline-block" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Status Indicator */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 text-emerald-400 text-[11px] font-mono font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>LIVE SYSTEM</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
