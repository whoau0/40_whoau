import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "내 업무 도구함 | Unified Workspace Suite",
  description: "경비 정산 감사기, 지점 매출 상관분석, Gemini AI 고객 리뷰 분석기 통합 인텔리전스 포털",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body className="antialiased min-h-screen bg-[#0A0A0C] text-neutral-100 flex flex-col font-sans selection:bg-neutral-800 selection:text-white">
        <Navbar />
        <div className="flex-1 flex flex-col">{children}</div>
      </body>
    </html>
  );
}
