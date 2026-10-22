"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Receipt,
  Store,
  MessageSquareText,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  TrendingUp,
  Terminal,
  Activity,
  Layers,
  Sparkles,
  ChevronRight,
  Database,
  Cpu,
  Lock,
  Clock,
  Play,
  Pause,
  Copy,
  Check,
} from "lucide-react";

export default function AwwwardsHome() {
  const [currentTime, setCurrentTime] = useState("");
  const [activeEngine, setActiveEngine] = useState<number>(0);
  const [isConsolePlaying, setIsConsolePlaying] = useState<boolean>(true);
  const [copiedConsole, setCopiedConsole] = useState<boolean>(false);

  // Live real-time KST clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Seoul",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // System console log simulation
  const [logs, setLogs] = useState<
    { id: string; time: string; tag: string; msg: string; status: "success" | "warn" | "info" }[]
  >([
    {
      id: "1",
      time: "17:11:02",
      tag: "SYS_INIT",
      msg: "Unified Enterprise Workspace Core initialized on port 3001",
      status: "info",
    },
    {
      id: "2",
      time: "17:11:05",
      tag: "DB_SYNC",
      msg: "Connected to Supabase PostgreSQL cluster (Tables: sales, review_analysis)",
      status: "success",
    },
    {
      id: "3",
      time: "17:11:10",
      tag: "EXP_RULE",
      msg: "Audit engine compiled: Article §5 to §9 standard verification rules active",
      status: "success",
    },
    {
      id: "4",
      time: "17:11:14",
      tag: "AI_MODEL",
      msg: "Gemini 3.8 Flash pipeline ready for single-batch CSV sentiment parsing",
      status: "info",
    },
    {
      id: "5",
      time: "17:11:19",
      tag: "SAFETY_API",
      msg: "Korea Consumer Safety Agency hotline synchronized with zero breach latency",
      status: "success",
    },
  ]);

  useEffect(() => {
    if (!isConsolePlaying) return;

    const eventPool = [
      {
        tag: "EXP_AUDIT",
        msg: "Batch parse check: 25 expense claims validated, 9 violations flagged",
        status: "warn" as const,
      },
      {
        tag: "SALES_SYNC",
        msg: "5 regional nodes (Yongsan, Samgakji, Itaewon, Hyochang, Hannam) telemetry synced",
        status: "success" as const,
      },
      {
        tag: "GEMINI_AI",
        msg: "Inference response received: 84.2% Positive sentiment distribution",
        status: "info" as const,
      },
      {
        tag: "SEC_CHECK",
        msg: "Zero client-side API key leakage verified (Server-side API routes active)",
        status: "success" as const,
      },
      {
        tag: "HOLIDAY_METRICS",
        msg: "Public holiday multiplier computed (+28.4% traffic index correlation)",
        status: "info" as const,
      },
    ];

    const timer = setInterval(() => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Seoul",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      const randEvent = eventPool[Math.floor(Math.random() * eventPool.length)];

      setLogs((prev) => [
        ...prev.slice(-6),
        {
          id: Math.random().toString(),
          time: timeStr,
          tag: randEvent.tag,
          msg: randEvent.msg,
          status: randEvent.status,
        },
      ]);
    }, 4000);

    return () => clearInterval(timer);
  }, [isConsolePlaying]);

  const copyLogs = () => {
    const text = logs.map((l) => `[${l.time}] [${l.tag}] ${l.msg}`).join("\n");
    navigator.clipboard.writeText(text);
    setCopiedConsole(true);
    setTimeout(() => setCopiedConsole(false), 2000);
  };

  const engines = [
    {
      id: 0,
      code: "ENGINE_01",
      title: "경비 정산 검사기",
      englishTitle: "EXPENSE COMPLIANCE ENGINE",
      desc: "한결인테리어 경비 처리 규정(제5조~제9조) 기반으로 CSV 전표를 100% 자동 검증하고, 위반자별 반려 사유를 원클릭으로 추출합니다.",
      href: "/expense",
      badge: "AUDIT & PARSER",
      color: "from-indigo-500/20 via-sky-500/10 to-transparent",
      accent: "#38BDF8",
      stats: [
        { label: "규정 검증율", value: "100%" },
        { label: "검출 속도", value: "<15ms" },
        { label: "반려 서식", value: "자동 생성" },
      ],
      previewDetails: [
        { label: "제5조 중복 청구", status: "2건 적발", alert: true },
        { label: "제7조 심야 23시 이후", status: "3건 적발", alert: true },
        { label: "제8조 30일 경과 전표", status: "1건 적발", alert: true },
        { label: "제9조 간이영수증 한도", status: "규정 준수", alert: false },
      ],
    },
    {
      id: 1,
      code: "ENGINE_02",
      title: "지점 매출 관리판",
      englishTitle: "BRANCH SALES INTELLIGENCE",
      desc: "오늘의원두 5개 지점(용산·삼각지·이태원·효창·한남)의 월별 매출 실적과 공공데이터 공휴일 영향도를 Supabase 실시간 DB로 복합 분석합니다.",
      href: "/sales",
      badge: "FRANCHISE ERP",
      color: "from-amber-500/20 via-orange-500/10 to-transparent",
      accent: "#FBBF24",
      stats: [
        { label: "연동 지점수", value: "5개 거점" },
        { label: "공휴일 지표", value: "실시간 연계" },
        { label: "보안 인증", value: "2-Factor PIN" },
      ],
      previewDetails: [
        { label: "용산 본점", status: "₩42,800,000", alert: false },
        { label: "이태원 지점", status: "₩38,200,000", alert: false },
        { label: "삼각지 지점", status: "₩31,500,000", alert: false },
        { label: "공휴일 상관관계", status: "+28.4% 상승", alert: false },
      ],
    },
    {
      id: 2,
      code: "ENGINE_03",
      title: "고객 리뷰 분석기",
      englishTitle: "GEMINI AI REVIEW INTELLIGENCE",
      desc: "클린핏 미니 리뷰 CSV를 Google Gemini 3.8 Flash AI로 단일 배치 분석하여 긍/부정 감성, 14개 제품 카테고리, 그리고 소비자원 안전 통계를 원스톱 대조합니다.",
      href: "/reviews",
      badge: "LLM INFERENCE",
      color: "from-teal-500/20 via-emerald-500/10 to-transparent",
      accent: "#34D399",
      stats: [
        { label: "AI 모델", value: "Gemini 3.8" },
        { label: "긍정 감성율", value: "84.2%" },
        { label: "안전 모니터링", value: "소비자원 연동" },
      ],
      previewDetails: [
        { label: "감성 분포", status: "긍정 84% · 중립 10%", alert: false },
        { label: "14대 분류 체계", status: "배터리/흡입력/디자인 외", alert: false },
        { label: "개선 요청 도출", status: "필터 물세척 개선 외", alert: false },
        { label: "발열/안전 리스크", status: "실시간 핫라인 감시", alert: true },
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0A0A0C] text-neutral-100 selection:bg-neutral-800 selection:text-white overflow-hidden">
      {/* Background Ambient Mesh Light */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-[25%] left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-indigo-500/[0.08] via-purple-500/[0.03] to-transparent blur-[140px] rounded-full" />
        <div className="absolute top-[40%] -left-[10%] w-[600px] h-[500px] bg-blue-500/[0.03] blur-[160px] rounded-full" />
        <div className="absolute top-[60%] -right-[10%] w-[600px] h-[500px] bg-emerald-500/[0.03] blur-[160px] rounded-full" />
        {/* Subtle Architectural Grid Pattern */}
        <div
          className="w-full h-full opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-24 space-y-20">
        {/* ========================================================= */}
        {/* HERO SECTION */}
        {/* ========================================================= */}
        <section className="space-y-8 pt-4 sm:pt-10">
          {/* Eyebrow Status Pill */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs text-neutral-300 font-mono tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>UNIFIED WORKSPACE ARCHITECTURE</span>
              <span className="text-neutral-600">//</span>
              <span className="text-neutral-400">EST. 2026</span>
            </div>

            {/* Real-time UTC/KST Telemetry */}
            <div className="flex items-center gap-4 text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-neutral-500" />
                <span>SEOUL (KST)</span>
                <span className="text-white font-medium">{currentTime || "17:11:00"}</span>
              </div>
              <span className="text-neutral-700 hidden sm:inline">|</span>
              <div className="hidden sm:flex items-center gap-1.5 text-emerald-400">
                <Activity className="w-3.5 h-3.5" />
                <span>LATENCY: 14ms</span>
              </div>
            </div>
          </div>

          {/* Main Title & Editorial Headline */}
          <div className="space-y-6 max-w-4xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] text-white leading-[1.08]">
              Precision Software. <br />
              <span className="bg-gradient-to-r from-neutral-100 via-neutral-300 to-neutral-500 bg-clip-text text-transparent">
                Zero Cognitive Friction.
              </span>
            </h1>
            <p className="text-neutral-400 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
              사내 경비 규정 감사, 지점 매출 실적 취합, 그리고 Gemini 3.8 Flash AI 기반 리뷰 분석까지. 
              분산된 비즈니스 운영 도구를 단 하나의 고성능 인터페이스로 일원화합니다.
            </p>
          </div>

          {/* Direct CTA & Telemetry Metrics */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#engines"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-neutral-950 font-semibold text-xs tracking-wider uppercase hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_24px_rgba(255,255,255,0.15)] group"
            >
              <span>3대 업무 엔진 시작하기</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#console"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-neutral-300 hover:text-white font-mono text-xs tracking-wide transition-all duration-300"
            >
              <Terminal className="w-4 h-4 text-neutral-400" />
              <span>LIVE CONSOLE STREAM</span>
            </a>
          </div>

          {/* Editorial Metric Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08] rounded-2xl overflow-hidden mt-12">
            <div className="p-6 bg-[#0A0A0C]/90 space-y-2">
              <span className="font-mono text-[11px] text-neutral-500 uppercase tracking-widest">
                [01] COMPLIANCE ACCURACY
              </span>
              <div className="text-3xl font-semibold text-white tracking-tight">100%</div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                제5조~제9조 사내 경비 규정 실시간 자동 대조 및 위반 전표 즉시 적발
              </p>
            </div>

            <div className="p-6 bg-[#0A0A0C]/90 space-y-2">
              <span className="font-mono text-[11px] text-neutral-500 uppercase tracking-widest">
                [02] REGIONAL TELEMETRY
              </span>
              <div className="text-3xl font-semibold text-white tracking-tight">05 NODES</div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                용산·삼각지·이태원·효창·한남 지점 실시간 매출 및 공휴일 지수 취합
              </p>
            </div>

            <div className="p-6 bg-[#0A0A0C]/90 space-y-2">
              <span className="font-mono text-[11px] text-neutral-500 uppercase tracking-widest">
                [03] INFERENCE PIPELINE
              </span>
              <div className="text-3xl font-semibold text-white tracking-tight">&lt; 500ms</div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Gemini 3.8 Flash 모델 단일 배치 리뷰 파싱 및 소비자원 안전 핫라인 연계
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* CORE ENGINES SHOWCASE (AWWWARDS BENTO ARCHITECTURE) */}
        {/* ========================================================= */}
        <section id="engines" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.08] pb-4">
            <div>
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
                CORE WORKSPACE ENGINES
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mt-1">
                3대 특화 업무 엔진
              </h2>
            </div>
            <span className="text-xs text-neutral-500 font-mono">
              SELECT AN ENGINE TO LAUNCH INTERFACE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {engines.map((engine) => {
              return (
                <div
                  key={engine.id}
                  className="group relative bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] hover:border-white/[0.2] rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.03)]"
                >
                  {/* Subtle Card Ambient Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-b ${engine.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
                  />

                  <div className="relative z-10 space-y-6">
                    {/* Card Top Metadata */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.1] text-neutral-300 tracking-wider">
                        {engine.code}
                      </span>
                      <span className="font-mono text-[10px] text-neutral-500 tracking-widest">
                        {engine.badge}
                      </span>
                    </div>

                    {/* Titles */}
                    <div className="space-y-1.5">
                      <h3 className="text-xl font-semibold tracking-tight text-white group-hover:text-neutral-100 transition-colors">
                        {engine.title}
                      </h3>
                      <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider">
                        {engine.englishTitle}
                      </p>
                    </div>

                    <p className="text-xs text-neutral-400 font-normal leading-relaxed">
                      {engine.desc}
                    </p>

                    {/* Stats Pill Row */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/[0.06]">
                      {engine.stats.map((st, i) => (
                        <div key={i} className="space-y-0.5">
                          <div className="text-[10px] font-mono text-neutral-500">{st.label}</div>
                          <div className="text-xs font-semibold text-neutral-200">{st.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Interactive Telemetry Box */}
                    <div className="bg-black/40 border border-white/[0.06] rounded-xl p-3.5 space-y-2">
                      <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest flex items-center justify-between">
                        <span>LIVE VERIFICATION TELEMETRY</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      </div>
                      <div className="space-y-1.5">
                        {engine.previewDetails.map((pd, pidx) => (
                          <div
                            key={pidx}
                            className="flex items-center justify-between text-[11px] font-mono"
                          >
                            <span className="text-neutral-400 truncate pr-2">{pd.label}</span>
                            <span
                              className={`px-1.5 py-0.5 rounded text-[10px] font-medium whitespace-nowrap ${
                                pd.alert
                                  ? "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                                  : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                              }`}
                            >
                              {pd.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Launch Button Link */}
                  <div className="relative z-10 pt-6">
                    <Link
                      href={engine.href}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.04] group-hover:bg-white text-neutral-300 group-hover:text-neutral-950 font-semibold text-xs tracking-wide transition-all duration-300 border border-white/[0.1] group-hover:border-transparent"
                    >
                      <span>엔진 실행 및 작업 시작</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================= */}
        {/* LIVE SYSTEM CONSOLE LOG STREAM */}
        {/* ========================================================= */}
        <section id="console" className="space-y-4 scroll-mt-24">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
            <div className="flex items-center gap-2.5">
              <Terminal className="w-4 h-4 text-neutral-400" />
              <h2 className="text-sm font-semibold tracking-wide text-white uppercase font-mono">
                System Telemetry Console
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsConsolePlaying(!isConsolePlaying)}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-xs font-mono text-neutral-400 hover:text-white transition"
              >
                {isConsolePlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                <span>{isConsolePlaying ? "PAUSE" : "RESUME"}</span>
              </button>

              <button
                onClick={copyLogs}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-xs font-mono text-neutral-400 hover:text-white transition"
              >
                {copiedConsole ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedConsole ? "COPIED" : "COPY"}</span>
              </button>
            </div>
          </div>

          {/* Terminal Window Box */}
          <div className="bg-[#050507] border border-white/[0.1] rounded-2xl p-5 font-mono text-xs space-y-2.5 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between text-[11px] text-neutral-500 pb-2 border-b border-white/[0.06]">
              <span>NODE: DESKTOP-QORIH90 // LOCALHOST:3001</span>
              <span>BUFFER: 1024 KB</span>
            </div>

            <div className="space-y-2 pt-1 min-h-[160px]">
              {logs.map((log) => (
                <div key={log.id} className="flex items-start gap-3 leading-relaxed">
                  <span className="text-neutral-500 shrink-0">[{log.time}]</span>
                  <span
                    className={`px-1.5 py-0.2 rounded text-[10px] shrink-0 font-medium ${
                      log.status === "warn"
                        ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                        : log.status === "success"
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    }`}
                  >
                    {log.tag}
                  </span>
                  <span className="text-neutral-300 font-sans text-xs">{log.msg}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* ARCHITECTURAL SPECIFICATIONS */}
        {/* ========================================================= */}
        <section className="space-y-6 pt-6">
          <div className="border-b border-white/[0.08] pb-4">
            <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
              SYSTEM ARCHITECTURE
            </span>
            <h2 className="text-xl font-semibold tracking-tight text-white mt-1">
              보안 및 인프라 명세
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3">
              <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.1] flex items-center justify-center text-white">
                <Database className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-white">Supabase Cloud Database</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                지점 매출 및 리뷰 분석 데이터를 영구 보존하며, no-cache 정책을 통해 데이터 변경 즉시 모든 클라이언트와 무결성을 유지합니다.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3">
              <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.1] flex items-center justify-center text-white">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-white">Gemini 3.8 Flash AI</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                수십 건의 대량 리뷰를 단 1회의 JSON 배치 호출로 분석하여 API 호출 비용 및 토큰 소모를 극소화하고 분석 지연을 방지합니다.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3">
              <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.1] flex items-center justify-center text-white">
                <Lock className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-white">Zero Leakage Security</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Gemini, 공공데이터, PIN 검증 등 모든 비밀 API 키는 서버 사이드 API 라우트 내부에서만 실행되며 클라이언트에 노출되지 않습니다.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* FOOTER */}
        {/* ========================================================= */}
        <footer className="pt-16 border-t border-white/[0.08] space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm font-bold text-white">W/ 내 업무 도구함</span>
                <span className="font-mono text-[10px] text-neutral-500">v2.0 // ENTERPRISE</span>
              </div>
              <p className="text-xs text-neutral-500">
                Unified Portal for Expense Auditing, Sales Intelligence & Gemini AI Review Diagnostics.
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-neutral-400">
              <Link href="/expense" className="hover:text-white transition">
                01_EXPENSE
              </Link>
              <span>/</span>
              <Link href="/sales" className="hover:text-white transition">
                02_SALES
              </Link>
              <span>/</span>
              <Link href="/reviews" className="hover:text-white transition">
                03_REVIEWS
              </Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-neutral-600 gap-2">
            <span>© 2026 WHOAU. ALL RIGHTS RESERVED.</span>
            <span>CRAFTED WITH AWWWARDS-INSPIRED MINIMALIST AESTHETICS</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
