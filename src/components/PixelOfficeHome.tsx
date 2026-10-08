"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Receipt,
  Store,
  MessageSquareText,
  ArrowRight,
  Sparkles,
  Coffee,
  CheckCircle2,
  Clock,
  Music,
  Heart,
  Smile,
  Volume2,
  VolumeX,
  Sun,
  Moon,
  Zap,
  Play,
  Pause,
  Eye,
  LayoutGrid,
  FileCheck,
} from "lucide-react";

export default function PixelOfficeHome() {
  const [activeWorker, setActiveWorker] = useState<number | null>(null);
  const [isPlayingBgm, setIsPlayingBgm] = useState(true);
  const [isNightMode, setIsNightMode] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [viewMode, setViewMode] = useState<"live" | "grid">("live");
  const [simSpeed, setSimSpeed] = useState<number>(1); // 1x, 2x, 4x
  const [isSimPlaying, setIsSimPlaying] = useState<boolean>(true);

  // Character movement step indices (0: Desk, 1: Sub-Zone, 2: Meeting Table)
  const [workerSteps, setWorkerSteps] = useState<[number, number, number]>([0, 0, 0]);

  // Current real-time clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("ko-KR", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Character Movement Simulation Cycle
  useEffect(() => {
    if (!isSimPlaying) return;

    const baseInterval = 4500 / simSpeed;
    const interval = setInterval(() => {
      setWorkerSteps(([s1, s2, s3]) => [
        (s1 + 1) % 3,
        (s2 + 1) % 3,
        (s3 + 1) % 3,
      ]);
    }, baseInterval);

    return () => clearInterval(interval);
  }, [simSpeed, isSimPlaying]);

  const workers = [
    {
      id: 1,
      role: "경비 정산",
      title: "주임",
      name: "김정산",
      motto: "규정 준수율 100%!",
      desc: "제5조~제9조 사내 경비 규정 100% 자동 대조 & 반려 사유 원클릭 생성",
      link: "/expense",
      btnText: "경비 검사기 열기",
      badgeColor: "bg-rose-100 text-rose-700 border-rose-200",
      statusText: "규정 검사 대기중 (25건)",
      characterType: "auditor",
      waypoints: [
        {
          x: 20,
          y: 64,
          location: "핑크 코지 데스크",
          speech: "🌸 영수증 25건 규정 대조 및 파싱 중...",
        },
        {
          x: 13,
          y: 28,
          location: "문서 & 마스킹 테이프존",
          speech: "📂 제5조~제9조 사내 규정집 확인 완료!",
        },
        {
          x: 36,
          y: 30,
          location: "파스텔 회의 테이블",
          speech: "🎀 대표님, 9건 반려 사유 보고서 송부 완료!",
        },
      ],
    },
    {
      id: 2,
      role: "지점 매출",
      title: "과장",
      name: "박매출",
      motto: "오늘도 매출 쑥쑥!",
      desc: "용산·삼각지·이태원·효창·한남 5개 지점 월별 매출 취합 & 공휴일 영향도 분석",
      link: "/sales",
      btnText: "지점 매출 관리판 열기",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
      statusText: "5개 지점 실시간 연동",
      characterType: "sales",
      waypoints: [
        {
          x: 50,
          y: 64,
          location: "버터 옐로우 데스크",
          speech: "☕ 지점장님들 PIN 인증 매출 집계중!",
        },
        {
          x: 84,
          y: 28,
          location: "라벤더 카페존",
          speech: "🥐 향긋한 커피 한 잔~ 공휴일 영향도 분석 완료!",
        },
        {
          x: 50,
          y: 30,
          location: "파스텔 회의 테이블",
          speech: "📈 5개 지점 당월 매출 복합 차트 보고합니다.",
        },
      ],
    },
    {
      id: 3,
      role: "리뷰 분석",
      title: "팀장",
      name: "이리뷰",
      motto: "고객 목소리 꼼꼼히!",
      desc: "Gemini AI 모델 리뷰 감성·유형 분석 & 공공데이터 소비자 안전 이슈 핫라인",
      link: "/reviews",
      btnText: "리뷰 분석기 열기",
      badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
      statusText: "Gemini AI 분석 대기",
      characterType: "reviews",
      waypoints: [
        {
          x: 80,
          y: 64,
          location: "민트 라벤더 데스크",
          speech: "✨ Gemini AI 모델로 리뷰 감성/유형 분석중...",
        },
        {
          x: 88,
          y: 78,
          location: "소비자 안전 핫라인",
          speech: "🔍 소비자원 위해정보 실시간 통계 대조 완료!",
        },
        {
          x: 64,
          y: 30,
          location: "파스텔 회의 테이블",
          speech: "💡 고객 요청 3줄 액션플랜 수립 완료했습니다!",
        },
      ],
    },
  ];

  return (
    <div
      className={`min-h-[calc(100vh-4rem)] transition-colors duration-500 font-sans ${
        isNightMode
          ? "bg-[#1A1829] text-rose-50"
          : "bg-[#FAF6EE] text-[#4A3B32]"
      }`}
    >
      {/* Top Cute Mood & Music Bar */}
      <div className="max-w-6xl mx-auto px-4 pt-5 pb-2">
        <div
          className={`p-3 sm:p-4 rounded-2xl border flex flex-wrap items-center justify-between gap-3 shadow-xs transition-colors ${
            isNightMode
              ? "bg-[#252238]/90 border-purple-900/50 text-rose-100"
              : "bg-[#FFFDFC]/95 border-[#EADBCE] text-[#5C4A3E] shadow-sm"
          }`}
        >
          {/* Visitor Counter & Mood */}
          <div className="flex items-center gap-3 text-xs">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-[#FFF0F3] border border-[#FBCFE8] rounded-full text-[#DB2777] font-bold shadow-xs">
              <Heart className="w-3.5 h-3.5 fill-[#EC4899] text-[#EC4899] animate-pulse" />
              <span>TODAY <b className="text-[#BE185D]">54</b></span>
              <span className="text-[#F472B6]/40">|</span>
              <span>TOTAL <b>1,920</b></span>
            </div>

            <div className="hidden md:flex items-center gap-1.5 text-xs text-[#786455] dark:text-purple-200 bg-[#F5EFEB] dark:bg-[#322E4A] px-3 py-1 rounded-full border border-[#EADBCE] dark:border-purple-800">
              <Smile className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>오늘의 오피스 무드: <b className="text-[#DB2777]">포근하고 화사한 하루 🌷</b></span>
            </div>
          </div>

          {/* BGM Player Mockup & Dark Mode */}
          <div className="flex items-center gap-2 text-xs">
            <div
              className={`flex items-center gap-2 px-3.5 py-1 rounded-full border text-[11px] font-medium transition-all ${
                isPlayingBgm
                  ? "bg-[#FFF5EB] border-[#FCD34D] text-[#B45309] dark:bg-purple-950/60 dark:border-purple-700 dark:text-pink-300 shadow-xs"
                  : "bg-[#F5EFEB] border-[#EADBCE] text-[#8C7A6D]"
              }`}
            >
              <Music className={`w-3.5 h-3.5 ${isPlayingBgm ? "animate-bounce text-[#F59E0B]" : ""}`} />
              <span className="truncate max-w-[140px] sm:max-w-none">
                🎵 Lo-Fi Pastel Beats - Cozy Desk
              </span>
              <button
                onClick={() => setIsPlayingBgm(!isPlayingBgm)}
                className="hover:scale-110 transition-transform ml-1 text-[#8C7A6D] dark:text-purple-300"
                title="BGM 켜기/끄기"
              >
                {isPlayingBgm ? <Volume2 className="w-3.5 h-3.5 text-[#D97706]" /> : <VolumeX className="w-3.5 h-3.5" />}
              </button>
            </div>

            <button
              onClick={() => setIsNightMode(!isNightMode)}
              className="p-1.5 rounded-full border border-[#EADBCE] dark:border-purple-700 bg-white dark:bg-[#322E4A] hover:bg-[#F5EFEB] dark:hover:bg-[#3D385A] transition shadow-xs"
              title={isNightMode ? "주간 모드로 전환" : "포근한 야간 조명 켜기"}
            >
              {isNightMode ? (
                <Sun className="w-4 h-4 text-[#FDE047]" />
              ) : (
                <Moon className="w-4 h-4 text-[#9333EA]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 py-3 space-y-6">
        {/* Controls Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-[#FFFDFC]/90 dark:bg-[#252238]/90 border border-[#EADBCE] dark:border-purple-900/50 rounded-2xl p-3 shadow-xs">
          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 bg-[#F5EFEB] dark:bg-[#1E1B2E] p-1 rounded-xl text-xs font-bold border border-[#EADBCE]/60">
            <button
              onClick={() => setViewMode("live")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition ${
                viewMode === "live"
                  ? "bg-[#FBCFE8] text-[#9D174D] shadow-xs"
                  : "text-[#786455] dark:text-purple-300 hover:text-[#4A3B32]"
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>🌸 라이브 코지 오피스</span>
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition ${
                viewMode === "grid"
                  ? "bg-[#FBCFE8] text-[#9D174D] shadow-xs"
                  : "text-[#786455] dark:text-purple-300 hover:text-[#4A3B32]"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>📋 업무 도구 모음</span>
            </button>
          </div>

          {/* Speed & Sim Controls */}
          {viewMode === "live" && (
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[#8C7A6D] hidden sm:inline font-medium">걸음 속도:</span>
              <div className="flex items-center gap-1 bg-[#F5EFEB] dark:bg-[#1E1B2E] p-1 rounded-lg font-bold border border-[#EADBCE]/60">
                {[1, 2, 4].map((spd) => (
                  <button
                    key={spd}
                    onClick={() => setSimSpeed(spd)}
                    className={`px-2.5 py-1 rounded-md text-[11px] transition ${
                      simSpeed === spd
                        ? "bg-[#FDE047] text-[#713F12] shadow-xs"
                        : "text-[#786455] dark:text-purple-300 hover:bg-[#EADBCE]"
                    }`}
                  >
                    {spd}x
                  </button>
                ))}
              </div>

              <button
                onClick={() => setIsSimPlaying(!isSimPlaying)}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#F5EFEB] dark:bg-[#1E1B2E] hover:bg-[#EADBCE] dark:hover:bg-purple-900/60 text-xs font-semibold text-[#5C4A3E] dark:text-purple-200 border border-[#EADBCE]/60"
                title={isSimPlaying ? "일시 정지" : "재생"}
              >
                {isSimPlaying ? <Pause className="w-3.5 h-3.5 text-[#EC4899]" /> : <Play className="w-3.5 h-3.5 text-[#10B981]" />}
                <span className="hidden sm:inline">{isSimPlaying ? "일시정지" : "재생"}</span>
              </button>
            </div>
          )}

          {/* Status Pills */}
          <div className="flex items-center gap-2 text-xs">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#047857] dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-300 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping"></span>
              근무중 3명 🐱
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFBEB] border border-[#FDE68A] text-[#92400E] dark:bg-amber-950/40 dark:border-amber-800 dark:text-amber-300 font-semibold">
              <Clock className="w-3.5 h-3.5 text-[#D97706]" />
              {currentTime}
            </span>
          </div>
        </div>

        {/* 1. COZY PASTEL LIVE OFFICE FLOOR PLAN MAP */}
        {viewMode === "live" && (
          <section
            className={`relative rounded-3xl border-4 overflow-hidden shadow-xl transition-all duration-500 select-none ${
              isNightMode
                ? "bg-[#1E1B2E] border-[#423963] shadow-purple-950/40"
                : "bg-[#FCF8F2] border-[#E8D8C8] shadow-amber-950/10"
            }`}
            style={{ minHeight: "650px" }}
          >
            {/* Soft Warm Room Ambient Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(190, 150, 120, 0.15) 1.5px, transparent 1.5px)",
                  backgroundSize: "28px 28px",
                }}
              />
            </div>

            {/* Top Room Header Bar */}
            <div className="flex items-center justify-between px-6 py-2.5 border-b border-[#EADBCE] dark:border-purple-900/40 bg-[#FFFDFC]/80 dark:bg-[#252238]/80 backdrop-blur-xs relative z-20">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F472B6]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#FBBF24]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#34D399]"></span>
                <span className="ml-2 font-bold text-xs sm:text-sm tracking-wide text-[#5C4A3E] dark:text-pink-200">
                  🌷 포근한 감성 스마트 오피스 (9F 본사)
                </span>
              </div>
              <span className="text-[11px] text-[#8C7A6D] dark:text-purple-300 font-medium">
                💡 구역이나 이동 중인 직원을 누르면 해당 업무 도구로 바로 이동합니다
              </span>
            </div>

            {/* ============================================================ */}
            {/* WALL DECORATIONS LAYER (참고 이미지 감성 디테일) */}
            {/* ============================================================ */}

            {/* 1. Left Wall Decor: Washi-Taped Memo & Dried Tulip Flower with Ribbon */}
            <div className="absolute top-14 left-6 pointer-events-none z-10 hidden sm:flex flex-col items-center gap-2">
              {/* Checklist Memo with yellow washi tape */}
              <div className="relative bg-white/95 border border-[#EADBCE] rounded-sm px-2.5 py-2 shadow-xs w-16 text-[6px] text-[#5C4A3E] rotate-[-2deg]">
                {/* Washi Tape */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-8 h-3 bg-[#FDE68A]/80 border-t border-b border-[#F59E0B]/40"></div>
                <div className="font-bold text-[7px] text-[#DB2777] mb-1">TODAY ~</div>
                <div className="space-y-0.5 font-mono">
                  <div className="border-b border-dashed border-[#EADBCE] pb-0.5">✔ 경비 규정</div>
                  <div className="border-b border-dashed border-[#EADBCE] pb-0.5">✔ 지점 매출</div>
                  <div>✔ 리뷰 분석</div>
                </div>
              </div>

              {/* Dried Pink Tulip with Ribbon */}
              <div className="flex flex-col items-center -mt-1 rotate-6">
                <div className="flex gap-1">
                  <span className="text-sm">🌷</span>
                  <span className="text-xs -ml-1 mt-1">🌸</span>
                </div>
                <div className="w-0.5 h-6 bg-[#65A30D]"></div>
                <div className="text-[9px] -mt-1 text-[#DB2777]">🎀</div>
              </div>
            </div>

            {/* 2. Center Top Wall: Grid Net Board with Pastel Bunting Garland & Cute Stickers */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[280px] sm:w-[340px] h-[70px] pointer-events-none z-10">
              {/* Wire Grid Net */}
              <div className="w-full h-full rounded-xl border border-[#D6C7B2]/70 bg-white/40 dark:bg-purple-950/20 grid grid-cols-8 grid-rows-3 relative p-1">
                {/* Pastel Triangle Flag Garland String */}
                <div className="absolute top-1.5 left-2 right-2 flex items-center justify-around z-10">
                  <div className="w-3.5 h-4 bg-[#F472B6] clip-triangle shadow-xs"></div>
                  <div className="w-3.5 h-4 bg-[#C084FC] clip-triangle shadow-xs"></div>
                  <div className="w-3.5 h-4 bg-[#38BDF8] clip-triangle shadow-xs"></div>
                  <div className="w-3.5 h-4 bg-[#34D399] clip-triangle shadow-xs"></div>
                  <div className="w-3.5 h-4 bg-[#FBBF24] clip-triangle shadow-xs"></div>
                  <div className="w-3.5 h-4 bg-[#FB7185] clip-triangle shadow-xs"></div>
                  <div className="w-3.5 h-4 bg-[#A78BFA] clip-triangle shadow-xs"></div>
                </div>

                {/* Hanging Cute Hi Card */}
                <div className="absolute top-7 left-10 px-2 py-1 bg-white border border-[#EADBCE] rounded shadow-xs text-[8px] font-bold text-[#5C4A3E] rotate-[-3deg] flex items-center gap-1">
                  <span>📎</span>
                  <span className="text-[#EC4899]">hi ~ 🐱</span>
                </div>

                {/* Hanging Smiley Badge */}
                <div className="absolute top-7 right-14 w-6 h-6 rounded-full bg-[#FDE047] border border-[#F59E0B] flex items-center justify-center text-xs shadow-xs">
                  😊
                </div>

                {/* Sticky note */}
                <div className="absolute top-6 right-3 px-1.5 py-1 bg-[#E9D5FF] rounded shadow-xs text-[6px] font-bold text-[#6B21A8] rotate-3">
                  ♥ 화이팅!
                </div>
              </div>
            </div>

            {/* 3. Right Wall Decor: Floating Shelf with Ceramic Vase & Trailing Green Ivy/Vine */}
            <div className="absolute top-14 right-6 pointer-events-none z-10 hidden sm:flex flex-col items-end">
              {/* Floating wooden shelf */}
              <div className="w-20 h-2 bg-[#D4A373] rounded shadow-xs relative flex justify-end pr-2">
                {/* Terracotta Vase */}
                <div className="absolute -top-5 right-2 w-4 h-5 bg-[#FDBA74] rounded-t-lg border border-[#EA580C]/40 flex items-center justify-center text-[7px]">
                  🌿
                </div>
              </div>
              {/* Trailing Ivy Leaves */}
              <div className="flex flex-col items-center pr-3 pt-0.5 space-y-0.5 text-xs text-[#16A34A] leading-none animate-pulse">
                <span>🍃</span>
                <span className="text-[10px]">🌿</span>
                <span className="text-[8px]">🌱</span>
              </div>
            </div>

            {/* Visual Floor Plan Stage */}
            <div className="relative w-full h-[570px] p-3 sm:p-5 overflow-hidden">
              {/* ---------------------------------------------------- */}
              {/* ZONE 1. 상단 중앙: 👑 파스텔 미팅 & 아이디어 라운지 */}
              {/* ---------------------------------------------------- */}
              <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[340px] sm:w-[460px] h-[145px] rounded-3xl border-2 border-[#EADBCE] bg-[#FFFDFC]/90 dark:bg-[#2A2640]/90 dark:border-purple-800/60 p-3 shadow-md backdrop-blur-xs flex flex-col justify-between">
                {/* Meeting Room Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#FDE047] text-[#713F12] shadow-xs">
                      👑 전략 아이디어 라운지
                    </span>
                    <span className="text-[10px] text-[#8C7A6D] dark:text-purple-300 font-medium">
                      [전사 핵심 3대 안건 브리핑]
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-[10px] text-[#059669] dark:text-emerald-400 font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping"></span>
                    회의 진행중
                  </span>
                </div>

                {/* Cozy Pastel Conference Table */}
                <div className="relative w-full h-[66px] rounded-2xl bg-[#FFE4D6] dark:bg-[#3D3554] border-2 border-[#FDBA74] dark:border-purple-600 shadow-sm flex items-center justify-around px-3">
                  {/* Pastel Rounded Chairs */}
                  <div className="absolute -top-3 left-8 w-7 h-3.5 bg-[#FBCFE8] rounded-t-lg border border-[#F472B6]"></div>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-4 bg-[#FDE047] rounded-t-lg border border-[#F59E0B] flex items-center justify-center text-[7px] text-[#78350F] font-bold">
                    CEO 👑
                  </div>
                  <div className="absolute -top-3 right-8 w-7 h-3.5 bg-[#A7F3D0] rounded-t-lg border border-[#34D399]"></div>

                  {/* Left Pastel Laptop */}
                  <div className="w-12 h-8 bg-white dark:bg-slate-800 rounded-md border border-[#F472B6] p-1 flex flex-col items-center justify-center text-[7px] text-[#DB2777] font-bold shadow-xs">
                    <span>📑 정산</span>
                    <span className="text-[6px] text-[#059669]">9건 반려</span>
                  </div>

                  {/* Center Flower Vase on Table */}
                  <div className="px-2.5 py-1 bg-white/95 dark:bg-[#1E1B2E] rounded-xl border border-[#FDBA74] text-center shadow-xs flex items-center gap-1.5">
                    <span className="text-sm">🌸</span>
                    <div>
                      <div className="text-[8px] font-extrabold text-[#78350F] dark:text-amber-300">포근한 성장 회의</div>
                      <div className="text-[7px] text-[#8C7A6D] dark:text-purple-300">정산 · 매출 · 리뷰 통합 연동</div>
                    </div>
                  </div>

                  {/* Right Pastel Laptop */}
                  <div className="w-12 h-8 bg-white dark:bg-slate-800 rounded-md border border-[#34D399] p-1 flex flex-col items-center justify-center text-[7px] text-[#0D9488] font-bold shadow-xs">
                    <span>🤖 AI 리뷰</span>
                    <span className="text-[6px] text-[#F59E0B]">84% 긍정</span>
                  </div>

                  {/* Bottom Chairs */}
                  <div className="absolute -bottom-3 left-12 w-7 h-3.5 bg-[#DDD6FE] rounded-b-lg border border-[#A78BFA]"></div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-7 h-3.5 bg-[#BAE6FD] rounded-b-lg border border-[#38BDF8]"></div>
                  <div className="absolute -bottom-3 right-12 w-7 h-3.5 bg-[#FED7AA] rounded-b-lg border border-[#FB923C]"></div>
                </div>

                <div className="flex items-center justify-between text-[8.5px] text-[#8C7A6D] dark:text-purple-300 font-medium px-1">
                  <span>• 안건 1: 10월 경비 반려 처리</span>
                  <span>• 안건 2: 5개점 추석 매출 분석</span>
                  <span>• 안건 3: 클린핏 AI 품질 피드백</span>
                </div>
              </div>

              {/* ---------------------------------------------------- */}
              {/* ZONE 2. 상단 좌측: 🗄️ 감성 문서 & 마스킹 테이프 출력실 */}
              {/* ---------------------------------------------------- */}
              <div className="absolute top-16 left-2 sm:left-4 w-[125px] sm:w-[145px] h-[145px] p-2.5 rounded-3xl border-2 border-[#E9D5FF] bg-[#FAF5FF]/90 dark:bg-[#2A233D]/90 shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[9.5px] font-bold text-[#7E22CE] dark:text-purple-300 flex items-center gap-1">
                    <FileCheck className="w-3.5 h-3.5 text-[#A855F7]" />
                    문서보관 & 출력실
                  </span>
                </div>

                {/* Pastel Cabinet Stack */}
                <div className="w-full bg-white dark:bg-purple-950/60 rounded-xl border border-[#D8B4FE] p-1.5 space-y-1 shadow-xs">
                  <div className="h-4 bg-[#F3E8FF] dark:bg-purple-900/40 rounded border border-[#E9D5FF] flex items-center justify-between px-1.5 text-[7px] text-[#6B21A8] dark:text-purple-200 font-bold">
                    <span>🗂️ 2026 경비규정</span>
                    <span>제5조</span>
                  </div>
                  <div className="h-4 bg-[#F3E8FF] dark:bg-purple-900/40 rounded border border-[#E9D5FF] flex items-center justify-between px-1.5 text-[7px] text-[#6B21A8] dark:text-purple-200 font-bold">
                    <span>🗂️ 지점 법인카드</span>
                    <span>9월</span>
                  </div>
                </div>

                {/* Cute Mini Copier */}
                <div className="w-full h-7 bg-white dark:bg-purple-950/60 rounded-lg border border-[#E9D5FF] p-1 flex items-center justify-between text-[7.5px] text-[#6B21A8] dark:text-purple-200 font-bold">
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping"></span>
                    <span>출력 대기중</span>
                  </div>
                  <span>📄✨</span>
                </div>
              </div>

              {/* ---------------------------------------------------- */}
              {/* ZONE 3. 상단 우측: ☕ 파스텔 에스프레소 & 힐링 카페존 */}
              {/* ---------------------------------------------------- */}
              <div className="absolute top-16 right-2 sm:right-4 w-[125px] sm:w-[145px] h-[145px] p-2.5 rounded-3xl border-2 border-[#FED7AA] bg-[#FFF7ED]/90 dark:bg-[#33262E]/90 shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[9.5px] font-bold text-[#C2410C] dark:text-orange-300 flex items-center gap-1">
                    <Coffee className="w-3.5 h-3.5 text-[#F97316]" />
                    힐링 카페 & 베이커리
                  </span>
                </div>

                {/* Pastel Espresso Counter & Machine */}
                <div className="w-full bg-white dark:bg-orange-950/40 rounded-xl border border-[#FFEDD5] p-1.5 flex flex-col justify-between h-[64px] shadow-xs">
                  <div className="flex items-center justify-between text-[7.5px] font-bold text-[#9A3412] dark:text-orange-200">
                    <span>☕ 에스프레소 바</span>
                    <span className="text-[#EC4899] animate-pulse">♨ 따뜻한 티</span>
                  </div>
                  {/* Cute Mugs & Bakery */}
                  <div className="flex items-center justify-around text-xs">
                    <span title="라떼">☕</span>
                    <span title="크루아상">🥐</span>
                    <span title="마카롱">🧁</span>
                    <span title="쿠키">🍪</span>
                  </div>
                  <div className="text-[6.5px] text-[#EA580C] dark:text-orange-300 font-mono">
                    오늘의원두 스페셜티 100%
                  </div>
                </div>

                {/* Sleeping Kitten resting on the cafe mat */}
                <div className="flex items-center justify-between text-[7.5px] text-[#9A3412] dark:text-orange-300 px-1">
                  <span>🌿 몬스테라</span>
                  <span className="font-bold">냥이 낮잠중 🐱💤</span>
                </div>
              </div>

              {/* ---------------------------------------------------- */}
              {/* ZONE 4. 하단 좌측: 🌸 김정산 주임 파스텔 핑크 데스크 (참고 이미지 스타일) */}
              {/* ---------------------------------------------------- */}
              <Link
                href="/expense"
                className="absolute bottom-2 left-2 sm:left-4 w-[31%] min-w-[190px] h-[205px] p-3 rounded-3xl border-2 border-[#FBCFE8] bg-[#FFF0F5]/95 dark:bg-[#2C2133]/95 shadow-lg hover:ring-4 hover:ring-[#F472B6]/40 transition-all cursor-pointer group flex flex-col justify-between"
              >
                {/* Cubicle Tag */}
                <div className="flex items-center justify-between border-b border-[#FCE7F3] dark:border-pink-900/50 pb-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#BE185D] dark:text-pink-300">
                    <Receipt className="w-4 h-4 text-[#EC4899]" />
                    <span>회계·경비정산팀</span>
                  </div>
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-white text-[#DB2777] border border-[#FBCFE8] shadow-2xs">
                    김정산 주임 자리
                  </span>
                </div>

                {/* Desk Illustration: Pastel Pink Tabletop with Monitor, Sleeping Cat & Flowers */}
                <div className="relative w-full bg-[#FFE4E6] dark:bg-pink-950/40 rounded-2xl border border-[#FDA4AF] p-2 space-y-1.5 shadow-xs">
                  {/* Desk Surface with Hairpin legs visual */}
                  <div className="flex items-center gap-2">
                    {/* All-in-One Monitor with Cat Wallpaper */}
                    <div className="flex-1 h-11 bg-slate-900 rounded-lg border-2 border-slate-700 p-1 flex flex-col justify-between text-[7px] text-[#F472B6] font-mono shadow-xs relative overflow-hidden">
                      <div className="flex items-center justify-between">
                        <span>[규정 검사기]</span>
                        <span className="text-[8px]">🐱</span>
                      </div>
                      <span className="text-[#34D399] font-bold">16건 정상 / 9건 위반</span>
                    </div>

                    {/* Pink Flower Vase with Roses */}
                    <div className="w-9 h-11 bg-white/90 rounded-lg border border-[#FDA4AF] flex flex-col items-center justify-center text-[9px] shadow-xs">
                      <span>🌹</span>
                      <span className="text-[6px] text-[#DB2777] font-bold">화병</span>
                    </div>
                  </div>

                  {/* Desk Props: Sleeping Cat on Mat & Calculator */}
                  <div className="flex items-center justify-between text-[8px] text-[#881337] dark:text-pink-200 pt-0.5 font-medium">
                    <span className="flex items-center gap-1">
                      <span>🐱 낮잠 매트</span>
                      <span className="text-[7px]">🖩</span>
                    </span>
                    <span className="px-1.5 py-0.2 bg-white text-[#BE185D] rounded-full font-bold text-[7px] border border-[#FDA4AF]">
                      반려 도장 📮
                    </span>
                  </div>

                  {/* Rounded Pastel Pink Chair Back */}
                  <div className="w-14 h-3 bg-[#F472B6] rounded-t-lg mx-auto border border-[#DB2777]"></div>
                </div>

                {/* Action Link Footer */}
                <div className="flex items-center justify-between text-[11px] font-bold text-[#BE185D] dark:text-pink-300 pt-1">
                  <span>/expense 로 입장</span>
                  <div className="w-5 h-5 rounded-full bg-[#FCE7F3] dark:bg-pink-900/60 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-3 h-3 text-[#DB2777]" />
                  </div>
                </div>
              </Link>

              {/* ---------------------------------------------------- */}
              {/* ZONE 5. 하단 중앙: 🥐 박매출 과장 버터 옐로우 데스크 */}
              {/* ---------------------------------------------------- */}
              <Link
                href="/sales"
                className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[31%] min-w-[190px] h-[205px] p-3 rounded-3xl border-2 border-[#FDE68A] bg-[#FEFCE8]/95 dark:bg-[#2F2922]/95 shadow-lg hover:ring-4 hover:ring-[#F59E0B]/40 transition-all cursor-pointer group flex flex-col justify-between"
              >
                {/* Cubicle Tag */}
                <div className="flex items-center justify-between border-b border-[#FEF08A] dark:border-amber-900/50 pb-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#B45309] dark:text-amber-300">
                    <Store className="w-4 h-4 text-[#D97706]" />
                    <span>프랜차이즈 영업본부</span>
                  </div>
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-white text-[#B45309] border border-[#FDE68A] shadow-2xs">
                    박매출 과장 자리
                  </span>
                </div>

                {/* Desk Illustration: Butter Yellow Desk with Sales Graphs & Coffee Tumbler */}
                <div className="relative w-full bg-[#FEF3C7] dark:bg-amber-950/40 rounded-2xl border border-[#FCD34D] p-2 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    {/* Monitor */}
                    <div className="flex-1 h-11 bg-slate-900 rounded-lg border-2 border-slate-700 p-1 flex flex-col justify-between text-[7px] text-[#FDE047] font-mono shadow-xs">
                      <div className="flex items-center justify-between">
                        <span>[지점 매출&공휴일]</span>
                        <span className="text-[#34D399]">120% 🎯</span>
                      </div>
                      <span className="text-[#FBBF24]">용산·삼각지·이태원·효창·한남</span>
                    </div>

                    {/* Coffee Tumbler & Mascot */}
                    <div className="w-9 h-11 bg-white/90 rounded-lg border border-[#FCD34D] flex flex-col items-center justify-center text-[9px] shadow-xs">
                      <span>🥤</span>
                      <span className="text-[6px] text-[#B45309] font-bold">텀블러</span>
                    </div>
                  </div>

                  {/* Desk Props: PIN Token & Store Map */}
                  <div className="flex items-center justify-between text-[8px] text-[#78350F] dark:text-amber-200 pt-0.5 font-medium">
                    <span className="flex items-center gap-1">
                      <span>🔐 PIN 연동완료</span>
                    </span>
                    <span className="px-1.5 py-0.2 bg-white text-[#B45309] rounded-full font-bold text-[7px] border border-[#FCD34D]">
                      5개 지점 📈
                    </span>
                  </div>

                  {/* Rounded Butter Yellow Chair Back */}
                  <div className="w-14 h-3 bg-[#FBBF24] rounded-t-lg mx-auto border border-[#D97706]"></div>
                </div>

                {/* Action Link Footer */}
                <div className="flex items-center justify-between text-[11px] font-bold text-[#B45309] dark:text-amber-300 pt-1">
                  <span>/sales 로 입장</span>
                  <div className="w-5 h-5 rounded-full bg-[#FEF3C7] dark:bg-amber-900/60 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-3 h-3 text-[#D97706]" />
                  </div>
                </div>
              </Link>

              {/* ---------------------------------------------------- */}
              {/* ZONE 6. 하단 우측: 🌿 이리뷰 팀장 민트 라벤더 데스크 */}
              {/* ---------------------------------------------------- */}
              <Link
                href="/reviews"
                className="absolute bottom-2 right-2 sm:right-4 w-[31%] min-w-[190px] h-[205px] p-3 rounded-3xl border-2 border-[#A7F3D0] bg-[#F0FDF4]/95 dark:bg-[#1E2E2A]/95 shadow-lg hover:ring-4 hover:ring-[#34D399]/40 transition-all cursor-pointer group flex flex-col justify-between"
              >
                {/* Cubicle Tag */}
                <div className="flex items-center justify-between border-b border-[#D1FAE5] dark:border-teal-900/50 pb-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#0F766E] dark:text-teal-300">
                    <MessageSquareText className="w-4 h-4 text-[#14B8A6]" />
                    <span>AI 품질분석본부</span>
                  </div>
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-white text-[#0F766E] border border-[#A7F3D0] shadow-2xs">
                    이리뷰 팀장 자리
                  </span>
                </div>

                {/* Desk Illustration: Soft Mint Desk with Gemini AI & Headset */}
                <div className="relative w-full bg-[#DCFCE7] dark:bg-teal-950/40 rounded-2xl border border-[#86EFAC] p-2 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    {/* Monitor */}
                    <div className="flex-1 h-11 bg-slate-900 rounded-lg border-2 border-slate-700 p-1 flex flex-col justify-between text-[7px] text-[#2DD4BF] font-mono shadow-xs">
                      <div className="flex items-center justify-between">
                        <span>[Gemini AI 3.8]</span>
                        <span className="text-[#FBBF24]">★ 4.6</span>
                      </div>
                      <span className="text-[#34D399]">14개 감성·유형 분석</span>
                    </div>

                    {/* Headset & Mini Cleaner */}
                    <div className="w-9 h-11 bg-white/90 rounded-lg border border-[#86EFAC] flex flex-col items-center justify-center text-[9px] shadow-xs">
                      <span>🎧</span>
                      <span className="text-[6px] text-[#0F766E] font-bold">헤드셋</span>
                    </div>
                  </div>

                  {/* Desk Props: Safety Hotline & Cleanfit */}
                  <div className="flex items-center justify-between text-[8px] text-[#14532D] dark:text-teal-200 pt-0.5 font-medium">
                    <span className="flex items-center gap-1">
                      <span>🧹 클린핏 모형</span>
                    </span>
                    <span className="px-1.5 py-0.2 bg-white text-[#0F766E] rounded-full font-bold text-[7px] border border-[#86EFAC]">
                      소비자원 연동 🔍
                    </span>
                  </div>

                  {/* Rounded Mint Chair Back */}
                  <div className="w-14 h-3 bg-[#34D399] rounded-t-lg mx-auto border border-[#059669]"></div>
                </div>

                {/* Action Link Footer */}
                <div className="flex items-center justify-between text-[11px] font-bold text-[#0F766E] dark:text-teal-300 pt-1">
                  <span>/reviews 로 입장</span>
                  <div className="w-5 h-5 rounded-full bg-[#DCFCE7] dark:bg-teal-900/60 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-3 h-3 text-[#14B8A6]" />
                  </div>
                </div>
              </Link>

              {/* ---------------------------------------------------- */}
              {/* 🚶 3 DYNAMIC MOVING CHARACTERS OVER THE PASTEL MAP   */}
              {/* ---------------------------------------------------- */}
              {workers.map((worker, idx) => {
                const currentStep = workerSteps[idx];
                const currentWaypoint = worker.waypoints[currentStep];

                return (
                  <Link
                    key={worker.id}
                    href={worker.link}
                    onMouseEnter={() => setActiveWorker(worker.id)}
                    onMouseLeave={() => setActiveWorker(null)}
                    className="absolute z-30 cursor-pointer flex flex-col items-center transition-all ease-in-out group"
                    style={{
                      left: `${currentWaypoint.x}%`,
                      top: `${currentWaypoint.y}%`,
                      transform: "translate(-50%, -50%)",
                      transitionDuration: `${2800 / simSpeed}ms`,
                    }}
                  >
                    {/* Live Dynamic Speech Bubble with Cozy Pastel Style */}
                    <div className="relative -top-2 max-w-[210px] bg-white/95 dark:bg-[#252238] border-2 border-[#4A3B32] dark:border-pink-400 rounded-2xl px-3 py-1 shadow-md text-[10px] font-bold text-[#4A3B32] dark:text-rose-100 text-center whitespace-normal pointer-events-none animate-bounceSmall">
                      <span>{currentWaypoint.speech}</span>
                      {/* Bubble Arrow */}
                      <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white/95 dark:bg-[#252238] border-r-2 border-b-2 border-[#4A3B32] dark:border-pink-400 rotate-45"></div>
                    </div>

                    {/* Cute Emoticon Style Character Avatar */}
                    <div className="relative w-16 h-16 flex items-center justify-center group-hover:scale-115 transition-transform">
                      {/* Worker 1: 김정산 (핑크 스카프 + 반짝이 눈) */}
                      {worker.characterType === "auditor" && (
                        <svg className="w-16 h-16" viewBox="0 0 120 120" fill="none">
                          <ellipse cx="60" cy="52" rx="36" ry="32" fill="#5D3A1A" stroke="#1A1A1A" strokeWidth="3" />
                          <path d="M40 82 Q60 76 80 82 L86 112 Q60 115 34 112 Z" fill="#F472B6" stroke="#1A1A1A" strokeWidth="3" />
                          <path d="M52 80 L60 90 L68 80" stroke="#1A1A1A" strokeWidth="2.5" fill="#FFFFFF" />
                          <path d="M54 82 L58 98 M66 82 L62 98" stroke="#DB2777" strokeWidth="2" />
                          <rect x="55" y="98" width="10" height="13" rx="1.5" fill="#DB2777" stroke="#1A1A1A" strokeWidth="1.5" />
                          <rect x="57" y="102" width="6" height="7" rx="0.5" fill="#FFFFFF" />
                          <ellipse cx="60" cy="56" rx="27" ry="23" fill="#FFF8F0" stroke="#1A1A1A" strokeWidth="3" />
                          <ellipse cx="44" cy="62" rx="6.5" ry="4.5" fill="#FFB6C1" opacity="0.9" />
                          <ellipse cx="76" cy="62" rx="6.5" ry="4.5" fill="#FFB6C1" opacity="0.9" />
                          <path d="M36 46 Q48 56 60 46 Q72 56 84 46 Q85 36 60 35 Q35 36 36 46 Z" fill="#5D3A1A" stroke="#1A1A1A" strokeWidth="3" />
                          {/* Sparkle Eyes */}
                          <path d="M48 50 L50 54 L54 55 L50 56 L48 60 L46 56 L42 55 L46 54 Z" fill="#1E293B" />
                          <path d="M72 50 L74 54 L78 55 L74 56 L72 60 L70 56 L66 55 L70 54 Z" fill="#1E293B" />
                          <rect x="56" y="64" width="8" height="3" rx="1.5" fill="#1A1A1A" />
                        </svg>
                      )}

                      {/* Worker 2: 박매출 (핑크 헤어롤 + 눈웃음) */}
                      {worker.characterType === "sales" && (
                        <svg className="w-16 h-16" viewBox="0 0 120 120" fill="none">
                          <path d="M26 50 C26 28, 94 28, 94 50 C94 72, 88 80, 84 82 L36 82 C32 80, 26 72, 26 50 Z" fill="#6B3E1E" stroke="#1A1A1A" strokeWidth="3" />
                          <path d="M42 82 Q60 76 78 82 L74 112 L46 112 Z" fill="#FEF08A" stroke="#1A1A1A" strokeWidth="3" />
                          <path d="M46 100 L74 100 L74 115 L62 115 L62 106 L58 106 L58 115 L46 115 Z" fill="#F59E0B" stroke="#1A1A1A" strokeWidth="2.5" />
                          <ellipse cx="60" cy="56" rx="27" ry="22" fill="#FFF8F0" stroke="#1A1A1A" strokeWidth="3" />
                          <ellipse cx="43" cy="62" rx="7" ry="4.5" fill="#FF8FAB" opacity="0.9" />
                          <ellipse cx="77" cy="62" rx="7" ry="4.5" fill="#FF8FAB" opacity="0.9" />
                          {/* 핑크 헤어롤 */}
                          <g transform="translate(48, 30)">
                            <rect x="0" y="0" width="24" height="13" rx="6" fill="#F472B6" stroke="#1A1A1A" strokeWidth="2.5" />
                            <ellipse cx="6" cy="6.5" rx="3.5" ry="4.5" fill="#BE185D" stroke="#1A1A1A" strokeWidth="1.5" />
                            <ellipse cx="18" cy="6.5" rx="3.5" ry="4.5" fill="#F472B6" stroke="#1A1A1A" strokeWidth="1.5" />
                          </g>
                          <path d="M42 54 Q48 48 54 54" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" fill="none" />
                          <path d="M66 54 Q72 48 78 54" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" fill="none" />
                          <path d="M51 63 Q60 74 69 63 Z" fill="#EF4444" stroke="#1A1A1A" strokeWidth="2.5" />
                        </svg>
                      )}

                      {/* Worker 3: 이리뷰 (민트 헤드셋 + 초롱초롱 눈) */}
                      {worker.characterType === "reviews" && (
                        <svg className="w-16 h-16" viewBox="0 0 120 120" fill="none">
                          <ellipse cx="60" cy="52" rx="35" ry="32" fill="#4A3324" stroke="#1A1A1A" strokeWidth="3" />
                          <path d="M40 82 Q60 76 80 82 L76 112 L44 112 Z" fill="#34D399" stroke="#1A1A1A" strokeWidth="3" />
                          <ellipse cx="60" cy="56" rx="27" ry="23" fill="#FFF8F0" stroke="#1A1A1A" strokeWidth="3" />
                          <ellipse cx="44" cy="63" rx="6.5" ry="4.5" fill="#FF99A8" opacity="0.9" />
                          <ellipse cx="76" cy="63" rx="6.5" ry="4.5" fill="#FF99A8" opacity="0.9" />
                          <path d="M35 48 Q47 54 60 48 Q73 54 85 48 Q84 36 60 36 Q36 36 35 48 Z" fill="#4A3324" stroke="#1A1A1A" strokeWidth="3" />
                          {/* 헤드셋 */}
                          <path d="M31 52 C31 30, 89 30, 89 52" stroke="#0D9488" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                          <rect x="25" y="47" width="9" height="15" rx="4.5" fill="#14B8A6" stroke="#1A1A1A" strokeWidth="2.5" />
                          <rect x="86" y="47" width="9" height="15" rx="4.5" fill="#14B8A6" stroke="#1A1A1A" strokeWidth="2.5" />
                          <ellipse cx="48" cy="55" rx="4.5" ry="5.5" fill="#1E293B" />
                          <circle cx="46.5" cy="53" r="1.8" fill="#FFFFFF" />
                          <ellipse cx="72" cy="55" rx="4.5" ry="5.5" fill="#1E293B" />
                          <circle cx="70.5" cy="53" r="1.8" fill="#FFFFFF" />
                          <path d="M56 64 Q60 68 64 64" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                        </svg>
                      )}
                    </div>

                    {/* Character Name Tag Badge */}
                    <div className="mt-0.5 px-2.5 py-0.5 rounded-full bg-white/95 dark:bg-[#252238] border border-[#4A3B32] text-[10px] font-extrabold flex items-center gap-1 shadow-xs whitespace-nowrap">
                      <span>{worker.name}</span>
                      <span className="px-1.5 py-0.2 rounded-full text-[9px] bg-[#FDE047] text-[#78350F] font-bold">
                        {worker.title}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* 2. GRID / DASHBOARD CARDS VIEW */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-extrabold tracking-tight flex items-center gap-2 text-[#5C4A3E] dark:text-rose-100">
              <Sparkles className="w-5 h-5 text-[#EC4899]" />
              업무 도구 바로가기
            </h2>
            <span className="text-xs text-[#8C7A6D] dark:text-purple-300 font-medium">
              원하는 도구를 선택하여 바로 업무를 시작하세요
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1: 경비 정산 검사기 */}
            <Link
              href="/expense"
              className="group relative bg-[#FFFDFC] dark:bg-[#252238] rounded-3xl p-6 border border-[#FBCFE8] dark:border-pink-900/50 hover:border-[#F472B6] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF0F5] border border-[#FBCFE8] flex items-center justify-center text-[#DB2777]">
                    <Receipt className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#FFF0F5] text-[#BE185D] border border-[#FBCFE8]">
                    규정 감사 엔진
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#4A3B32] dark:text-white group-hover:text-[#DB2777] transition-colors">
                    경비 정산 검사기
                  </h3>
                  <p className="text-xs text-[#786455] dark:text-purple-200 mt-1.5 leading-relaxed">
                    한결인테리어 경비 처리 규정(제5조~제9조)을 기반으로 CSV 내역의 중복 제출, 심야 결제, 30일 경과 등을 100% 자동 검출합니다.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#FCE7F3] dark:border-purple-900/40 flex items-center justify-between text-xs font-bold text-[#DB2777]">
                <span>/expense 로 이동</span>
                <div className="w-8 h-8 rounded-full bg-[#FFF0F5] flex items-center justify-center group-hover:translate-x-1 transition-transform border border-[#FBCFE8]">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* Card 2: 지점 매출 관리판 */}
            <Link
              href="/sales"
              className="group relative bg-[#FFFDFC] dark:bg-[#252238] rounded-3xl p-6 border border-[#FDE68A] dark:border-amber-900/50 hover:border-[#F59E0B] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#FEFCE8] border border-[#FDE68A] flex items-center justify-center text-[#D97706]">
                    <Store className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#FEFCE8] text-[#B45309] border border-[#FDE68A]">
                    프랜차이즈 ERP
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#4A3B32] dark:text-white group-hover:text-[#D97706] transition-colors">
                    지점 매출 관리판
                  </h3>
                  <p className="text-xs text-[#786455] dark:text-purple-200 mt-1.5 leading-relaxed">
                    오늘의원두 5개 지점의 월별 매출·객수를 PIN 간편 로그인으로 등록하고, 공휴일 연동 복합 차트로 매출 추이를 분석합니다.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#FEF08A] dark:border-purple-900/40 flex items-center justify-between text-xs font-bold text-[#D97706]">
                <span>/sales 로 이동</span>
                <div className="w-8 h-8 rounded-full bg-[#FEFCE8] flex items-center justify-center group-hover:translate-x-1 transition-transform border border-[#FDE68A]">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* Card 3: 리뷰 분석기 */}
            <Link
              href="/reviews"
              className="group relative bg-[#FFFDFC] dark:bg-[#252238] rounded-3xl p-6 border border-[#A7F3D0] dark:border-teal-900/50 hover:border-[#10B981] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#F0FDF4] border border-[#A7F3D0] flex items-center justify-center text-[#059669]">
                    <MessageSquareText className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#F0FDF4] text-[#047857] border border-[#A7F3D0]">
                    Gemini AI 엔진
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#4A3B32] dark:text-white group-hover:text-[#059669] transition-colors">
                    고객 리뷰 분석기
                  </h3>
                  <p className="text-xs text-[#786455] dark:text-purple-200 mt-1.5 leading-relaxed">
                    클린핏 미니 리뷰 CSV를 Gemini AI로 분석하여 긍/부정 감성, 14개 유형 분류, 고객 개선 요청 및 발열/안전 이슈를 자동 도출합니다.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#D1FAE5] dark:border-purple-900/40 flex items-center justify-between text-xs font-bold text-[#059669]">
                <span>/reviews 로 이동</span>
                <div className="w-8 h-8 rounded-full bg-[#F0FDF4] flex items-center justify-center group-hover:translate-x-1 transition-transform border border-[#A7F3D0]">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Notice & Feature Overview Footer */}
        <section
          className={`p-6 rounded-3xl border text-xs space-y-3 ${
            isNightMode
              ? "bg-[#252238]/60 border-purple-900/40 text-purple-200"
              : "bg-[#FFFDFC]/95 border-[#EADBCE] text-[#786455] shadow-xs"
          }`}
        >
          <div className="flex items-center gap-2 font-bold text-[#4A3B32] dark:text-rose-100 text-sm">
            <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
            <span>내 업무 도구함 포근한 스마트 오피스 안내</span>
          </div>
          <p className="leading-relaxed">
            • <b>경비 정산</b> (/expense) : CSV 파일을 업로드하면 제5조~제9조 규정을 실시간 자동 검증하며 위반자별 반려 사유 텍스트를 바로 복사할 수 있습니다. <br />
            • <b>지점 매출</b> (/sales) : 5개 지점(용산, 삼각지, 이태원, 효창, 한남)의 월별 실적을 Supabase에 안전하게 기록하고 공휴일 분석 지표를 확인합니다. <br />
            • <b>리뷰 분석</b> (/reviews) : Gemini 3.8 Flash AI 모델을 통해 고객 리뷰의 핵심 피드백과 한국소비자원 안전 통계를 원스톱으로 대조합니다.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-8 border-t border-[#EADBCE] dark:border-purple-950/60 py-6 text-center text-xs text-[#A8988B] dark:text-purple-400">
        <p>내 업무 도구함 (My Work Toolbox) © 2026 · Cozy Pastel Edition 🌷</p>
      </footer>
    </div>
  );
}
