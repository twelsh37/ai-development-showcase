// slides/src/app/page.tsx
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Play, Pause, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  ctaText?: string;
}

export default function SlidesPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  const handleEmailCTA = () => {
    const subject = encodeURIComponent(
      "🚀 Ready to 10x Your Development Team with AI"
    );
    const body = encodeURIComponent(`Hi Tom,

I just witnessed the future of software development in your presentation.

What I need to know:
• How quickly can we implement AI-driven development?
• What's the investment required?
• Can you help us get started?

I'm ready to transform our development process.

Best regards`);

    window.location.href = `mailto:tom.welsh@theaiaa.com?subject=${subject}&body=${body}`;
  };



  const slides: Slide[] = [
    {
      id: 1,
      title: "🚀 The Future is Here",
      subtitle: "One Developer = An Entire Engineering Team",
      ctaText: "Show Me How to 10x My Development Team",
      content: (
        <div className="space-y-6 h-full overflow-y-auto">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white p-6 rounded-2xl text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-50"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-3 animate-pulse">
                🚀 The Vision: 100% AI-Driven Development
              </h3>
              <p className="text-lg font-medium">
                Where human creativity meets artificial intelligence to create
                software that was once impossible
              </p>
            </div>
            <div className="absolute top-2 right-2 w-4 h-4 bg-white/20 rounded-full animate-ping"></div>
            <div className="absolute bottom-2 left-2 w-3 h-3 bg-white/20 rounded-full animate-ping delay-1000"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 flex-1 items-start">
            <div className="space-y-4">
              <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                <CardContent className="p-3">
                  <h4 className="font-bold text-sm mb-2 text-blue-400 flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                    The Challenge
                  </h4>
                  <ul className="space-y-1 text-xs text-gray-300">
                    <li className="flex items-center">
                      • Comprehensive asset lifecycle tracking
                    </li>
                    <li className="flex items-center">
                      • Multi-device support (phones, laptops, monitors)
                    </li>
                    <li className="flex items-center">
                      • Real-time dashboard & reporting
                    </li>
                    <li className="flex items-center">
                      • Barcode scanning capabilities
                    </li>
                    <li className="flex items-center">
                      • Scalable, maintainable architecture
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm border-orange-400/30 hover:border-orange-400/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                <CardContent className="p-3">
                  <h4 className="font-bold text-sm mb-2 text-orange-400 flex items-center">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></span>
                    The Approach
                  </h4>
                  <ul className="space-y-1 text-xs text-gray-300">
                    <li className="flex items-center">
                      •{" "}
                      <strong className="text-orange-400">
                        100% AI-Driven Development
                      </strong>
                    </li>
                    <li className="flex items-center">
                      • Cursor IDE as primary environment
                    </li>
                    <li className="flex items-center">
                      • Generative AI for complex features
                    </li>
                    <li className="flex items-center">
                      • Human oversight for architecture
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="relative h-80 overflow-hidden rounded-xl flex items-center justify-center">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url(/dashboard.jpg)",
                  backgroundPosition: "center 30%",
                  maskImage: `
                    linear-gradient(45deg,
                      transparent 0%,
                      transparent 35%,
                      black 35%,
                      black 100%
                    ),
                    radial-gradient(ellipse at 35% 35%, transparent 0%, transparent 30%, black 30%, black 40%, transparent 40%, transparent 50%, black 50%, black 60%, transparent 60%, transparent 70%, black 70%, black 80%, transparent 80%, transparent 90%, black 90%, black 100%),
                    radial-gradient(ellipse at 40% 40%, transparent 0%, transparent 25%, black 25%, black 35%, transparent 35%, transparent 45%, black 45%, black 55%, transparent 55%, transparent 65%, black 65%, black 75%, transparent 75%, transparent 85%, black 85%, black 95%, transparent 95%),
                    radial-gradient(ellipse at 45% 45%, transparent 0%, transparent 20%, black 20%, black 30%, transparent 30%, transparent 40%, black 40%, black 50%, transparent 50%, transparent 60%, black 60%, black 70%, transparent 70%, transparent 80%, black 80%, black 90%, transparent 90%),
                    radial-gradient(ellipse at 50% 50%, transparent 0%, transparent 15%, black 15%, black 25%, transparent 25%, transparent 35%, black 35%, black 45%, transparent 45%, transparent 55%, black 55%, black 65%, transparent 65%, transparent 75%, black 75%, black 85%, transparent 85%),
                    radial-gradient(ellipse at 55% 55%, transparent 0%, transparent 10%, black 10%, black 20%, transparent 20%, transparent 30%, black 30%, black 40%, transparent 40%, transparent 50%, black 50%, black 60%, transparent 60%, transparent 70%, black 70%, black 80%, transparent 80%),
                    radial-gradient(ellipse at 60% 60%, transparent 0%, transparent 5%, black 5%, black 15%, transparent 15%, transparent 25%, black 25%, black 35%, transparent 35%, transparent 45%, black 45%, black 55%, transparent 55%, transparent 65%, black 65%, black 75%, transparent 75%)
                  `,
                  maskSize: "100% 100%",
                  maskRepeat: "no-repeat",
                  WebkitMaskImage: `
                    linear-gradient(45deg,
                      transparent 0%,
                      transparent 35%,
                      black 35%,
                      black 100%
                    ),
                    radial-gradient(ellipse at 35% 35%, transparent 0%, transparent 30%, black 30%, black 40%, transparent 40%, transparent 50%, black 50%, black 60%, transparent 60%, transparent 70%, black 70%, black 80%, transparent 80%, transparent 90%, black 90%, black 100%),
                    radial-gradient(ellipse at 40% 40%, transparent 0%, transparent 25%, black 25%, black 35%, transparent 35%, transparent 45%, black 45%, black 55%, transparent 55%, transparent 65%, black 65%, black 75%, transparent 75%, transparent 85%, black 85%, black 95%, transparent 95%),
                    radial-gradient(ellipse at 45% 45%, transparent 0%, transparent 20%, black 20%, black 30%, transparent 30%, transparent 40%, black 40%, black 50%, transparent 50%, transparent 60%, black 60%, black 70%, transparent 70%, transparent 80%, black 80%, black 90%, transparent 90%),
                    radial-gradient(ellipse at 50% 50%, transparent 0%, transparent 15%, black 15%, black 25%, transparent 25%, transparent 35%, black 35%, black 45%, transparent 45%, transparent 55%, black 55%, black 65%, transparent 65%, transparent 75%, black 75%, black 85%, transparent 85%),
                    radial-gradient(ellipse at 55% 55%, transparent 0%, transparent 10%, black 10%, black 20%, transparent 20%, transparent 30%, black 30%, black 40%, transparent 40%, transparent 50%, black 50%, black 60%, transparent 60%, transparent 70%, black 70%, black 80%, transparent 80%),
                    radial-gradient(ellipse at 60% 60%, transparent 0%, transparent 5%, black 5%, black 15%, transparent 15%, transparent 25%, black 25%, black 35%, transparent 35%, transparent 45%, black 45%, black 55%, transparent 55%, transparent 65%, black 65%, black 75%, transparent 75%)
                  `,
                  WebkitMaskSize: "100% 100%",
                  WebkitMaskRepeat: "no-repeat",
                }}
              />

              {/* Torn edge overlay for realistic paper effect */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `
                    linear-gradient(45deg,
                      transparent 0%,
                      transparent 34%,
                      rgba(255,255,255,0.9) 34%,
                      rgba(255,255,255,0.9) 36%,
                      transparent 36%,
                      transparent 100%
                    ),
                    radial-gradient(ellipse at 35% 35%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.8) 2%, transparent 2%, transparent 4%, rgba(255,255,255,0.8) 4%, rgba(255,255,255,0.8) 6%, transparent 6%, transparent 8%, rgba(255,255,255,0.8) 8%, rgba(255,255,255,0.8) 10%, transparent 10%),
                    radial-gradient(ellipse at 40% 40%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.8) 2%, transparent 2%, transparent 4%, rgba(255,255,255,0.8) 4%, rgba(255,255,255,0.8) 6%, transparent 6%, transparent 8%, rgba(255,255,255,0.8) 8%, rgba(255,255,255,0.8) 10%, transparent 10%),
                    radial-gradient(ellipse at 45% 45%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.8) 2%, transparent 2%, transparent 4%, rgba(255,255,255,0.8) 4%, rgba(255,255,255,0.8) 6%, transparent 6%, transparent 8%, rgba(255,255,255,0.8) 8%, rgba(255,255,255,0.8) 10%, transparent 10%),
                    radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.8) 2%, transparent 2%, transparent 4%, rgba(255,255,255,0.8) 4%, rgba(255,255,255,0.8) 6%, transparent 6%, transparent 8%, rgba(255,255,255,0.8) 8%, rgba(255,255,255,0.8) 10%, transparent 10%),
                    radial-gradient(ellipse at 55% 55%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.8) 2%, transparent 2%, transparent 4%, rgba(255,255,255,0.8) 4%, rgba(255,255,255,0.8) 6%, transparent 6%, transparent 8%, rgba(255,255,255,0.8) 8%, rgba(255,255,255,0.8) 10%, transparent 10%),
                    radial-gradient(ellipse at 60% 60%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.8) 2%, transparent 2%, transparent 4%, rgba(255,255,255,0.8) 4%, rgba(255,255,255,0.8) 6%, transparent 6%, transparent 8%, rgba(255,255,255,0.8) 8%, rgba(255,255,255,0.8) 10%, transparent 10%)
                  `,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                }}
              />

              {/* Shadow for depth */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 20px rgba(0,0,0,0.3)",
                  borderRadius: "0 8px 8px 0",
                }}
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title:
        "⚡ The Secret Weapon: Your Complete AI-Powered Development Arsenal",
      ctaText: "Give Me the AI Development Arsenal",
      content: (
        <div className="space-y-2 h-full overflow-y-auto">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white p-4 rounded-2xl text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-50"></div>
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-2 animate-pulse">
                ⚡ Core Purpose
              </h3>
              <p className="text-sm font-medium">
                Transform how organizations manage their digital assets with
                AI-powered intelligence and automation
              </p>
            </div>
            <div className="absolute top-2 right-2 w-4 h-4 bg-white/20 rounded-full animate-ping"></div>
            <div className="absolute bottom-2 left-2 w-3 h-3 bg-white/20 rounded-full animate-ping delay-1000"></div>
          </div>

          <h3 className="text-sm font-semibold text-white mb-2">
            🎯 Key Modules Built with AI
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[
              {
                title: "Asset Management",
                desc: "Lifecycle states, assignments, records",
                icon: "📦",
              },
              {
                title: "User Management",
                desc: "Role-based access, authentication",
                icon: "👤",
              },
              {
                title: "Location Tracking",
                desc: "Physical and logical locations",
                icon: "📍",
              },
              {
                title: "Real-time Dashboard",
                desc: "Insights, metrics, and KPIs",
                icon: "📊",
              },
              {
                title: "Reporting System",
                desc: "Exportable inventory reports",
                icon: "📋",
              },
              {
                title: "Barcode Scanning",
                desc: "USB and camera-based scanning",
                icon: "📱",
              },
            ].map((module, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-white/20 hover:border-white/40 shadow-lg hover:shadow-blue-500/25 group"
              >
                <CardContent className="p-2 text-center">
                  <div className="text-2xl mb-1 group-hover:scale-110 transition-transform duration-300">
                    {module.icon}
                  </div>
                  <div className="font-bold text-blue-400 mb-1 text-xs group-hover:text-blue-300 transition-colors">
                    {module.title}
                  </div>
                  <div className="text-xs text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                    {module.desc}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "🎯 The Magic: AI That Thinks Like Your Best Developer",
      ctaText: "Show Me the AI Development Magic",
      content: (
        <div className="space-y-4 h-full overflow-y-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div>
                <h3 className="text-base font-semibold text-blue-400 mb-2">
                  1. Comprehensive Asset Lifecycle Management
                </h3>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-3">
                    <ul className="space-y-1 text-xs text-gray-300">
                      <li>
                        •{" "}
                        <strong className="text-blue-400">
                          AI-Generated State Transitions:
                        </strong>{" "}
                        Complex flows (AVAILABLE → SIGNED_OUT → BUILT → ISSUED)
                      </li>
                      <li>
                        •{" "}
                        <strong className="text-blue-400">
                          Automated Audit Trail:
                        </strong>{" "}
                        Automatic history logging for every state change
                      </li>
                      <li>
                        •{" "}
                        <strong className="text-blue-400">Type Safety:</strong>{" "}
                        Robust type-safe enums using Drizzle ORM
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-base font-semibold text-blue-400 mb-2">
                  2. Robust User Authentication
                </h3>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-3">
                    <ul className="space-y-1 text-xs text-gray-300">
                      <li>
                        •{" "}
                        <strong className="text-blue-400">
                          Supabase Integration:
                        </strong>{" "}
                        AI-guided setup of auth, environment variables, API keys
                      </li>
                      <li>
                        •{" "}
                        <strong className="text-blue-400">
                          Security Best Practices:
                        </strong>{" "}
                        Password management, email verification, auth event
                        logging
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-base font-semibold text-blue-400 mb-2">
                  3. Flexible Barcode Scanning
                </h3>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-3">
                    <ul className="space-y-1 text-xs text-gray-300">
                      <li>
                        •{" "}
                        <strong className="text-blue-400">Dual Support:</strong>{" "}
                        USB and camera-based scanning integration
                      </li>
                      <li>
                        •{" "}
                        <strong className="text-blue-400">
                          QuaggaJS Integration:
                        </strong>{" "}
                        AI-assisted component integration and permissions
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="flex flex-col justify-between h-full">
              <div className="text-center">
                <img
                  src="/multi-assign.jpg"
                  alt="Barcode Scanning Interface"
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                  style={{
                    maxHeight: "200px",
                    objectPosition: "center bottom",
                  }}
                />
              </div>

              <div className="text-center mt-2">
                <img
                  src="/login.jpg"
                  alt="User Authentication Interface"
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                  style={{ maxHeight: "220px" }}
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "🏗️ The Foundation: Built for Scale, Designed for Domination",
      ctaText: "Build My Future-Proof Architecture",
      content: (
        <div className="space-y-4 h-full overflow-y-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div>
                <h3 className="text-base font-semibold text-blue-400 mb-2">
                  4. Interactive Dashboard & Reporting
                </h3>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-3">
                    <ul className="space-y-1 text-xs text-gray-300">
                      <li>
                        •{" "}
                        <strong className="text-blue-400">
                          Real-time Metrics:
                        </strong>{" "}
                        AI-assisted complex database query aggregation
                      </li>
                      <li>
                        • <strong className="text-blue-400">PDF Export:</strong>{" "}
                        Browserless.io integration for serverless PDF generation
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-base font-semibold text-blue-400 mb-2">
                  5. Type-Safe Database Layer
                </h3>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-3">
                    <ul className="space-y-1 text-xs text-gray-300">
                      <li>
                        •{" "}
                        <strong className="text-blue-400">
                          Drizzle ORM & Neon Postgres:
                        </strong>{" "}
                        Complete migration from raw SQL to modern ORM
                      </li>
                      <li>
                        •{" "}
                        <strong className="text-blue-400">
                          Schema Definition:
                        </strong>{" "}
                        UUID primary keys, soft deletes, automatic timestamps
                      </li>
                      <li>
                        •{" "}
                        <strong className="text-blue-400">
                          Migration Workflow:
                        </strong>{" "}
                        AI guidance on generating and applying migrations
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-base font-semibold text-blue-400 mb-2">
                  6. Comprehensive Logging & Error Handling
                </h3>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-3">
                    <ul className="space-y-1 text-xs text-gray-300">
                      <li>
                        •{" "}
                        <strong className="text-blue-400">
                          Server-Side Logging:
                        </strong>{" "}
                        Critical events logged for Vercel compatibility
                      </li>
                      <li>
                        •{" "}
                        <strong className="text-blue-400">
                          Error Boundaries:
                        </strong>{" "}
                        Robust error trapping with user-friendly fallback UIs
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <img
                src="/dashboard.jpg"
                alt="Interactive Dashboard with Real-time Metrics"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
                style={{ maxHeight: "400px" }}
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      title:
        "🎼 The Symphony: Technologies That Dance Together in Perfect Harmony",
      content: (
        <div className="space-y-4 h-full overflow-y-auto">
          <div className="space-y-3">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-blue-600 mb-4 flex items-center">
                <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full mr-3"></div>
                Frontend Stack
              </h3>
              <div className="grid grid-cols-5 gap-2">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-orange-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <Card className="relative bg-white/10 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group-hover:bg-white/20">
                    <CardContent className="p-2 text-center">
                      <div className="text-xl mb-1 group-hover:scale-110 transition-transform duration-300">
                        ⚛️
                      </div>
                      <div className="text-xs font-semibold text-white group-hover:text-blue-400 transition-colors">
                        Next.js 15
                      </div>
                      <div className="text-xs text-gray-300 mt-1">
                        React Framework
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-400/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <Card className="relative bg-white/10 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group-hover:bg-white/20">
                    <CardContent className="p-2 text-center">
                      <div className="text-xl mb-1 group-hover:scale-110 transition-transform duration-300">
                        🔷
                      </div>
                      <div className="text-xs font-semibold text-white group-hover:text-blue-400 transition-colors">
                        TypeScript
                      </div>
                      <div className="text-xs text-gray-300 mt-1">
                        Type Safety
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <Card className="relative bg-white/10 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group-hover:bg-white/20">
                    <CardContent className="p-2 text-center">
                      <div className="text-xl mb-1 group-hover:scale-110 transition-transform duration-300">
                        🎨
                      </div>
                      <div className="text-xs font-semibold text-white group-hover:text-blue-400 transition-colors">
                        Shadcn/ui
                      </div>
                      <div className="text-xs text-gray-300 mt-1">
                        UI Components
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <Card className="relative bg-white/10 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group-hover:bg-white/20">
                    <CardContent className="p-2 text-center">
                      <div className="text-xl mb-1 group-hover:scale-110 transition-transform duration-300">
                        ⚡
                      </div>
                      <div className="text-xs font-semibold text-white group-hover:text-blue-400 transition-colors">
                        React Hooks
                      </div>
                      <div className="text-xs text-gray-300 mt-1">
                        State Management
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <Card className="relative bg-white/10 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group-hover:bg-white/20">
                    <CardContent className="p-2 text-center">
                      <div className="text-xl mb-1 group-hover:scale-110 transition-transform duration-300">
                        👁️
                      </div>
                      <div className="text-xs font-semibold text-white group-hover:text-blue-400 transition-colors">
                        Lucide Icons
                      </div>
                      <div className="text-xs text-gray-300 mt-1">
                        Icon Library
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-blue-600 mb-4 flex items-center">
                <div className="w-8 h-1 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full mr-3"></div>
                Backend Stack
              </h3>
              <div className="grid grid-cols-5 gap-2">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <Card className="relative bg-white/10 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group-hover:bg-white/20">
                    <CardContent className="p-2 text-center">
                      <div className="text-xl mb-1 group-hover:scale-110 transition-transform duration-300">
                        🔌
                      </div>
                      <div className="text-xs font-semibold text-white group-hover:text-blue-400 transition-colors">
                        API Routes
                      </div>
                      <div className="text-xs text-gray-300 mt-1">
                        Server Endpoints
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <Card className="relative bg-white/10 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group-hover:bg-white/20">
                    <CardContent className="p-2 text-center">
                      <div className="text-xl mb-1 group-hover:scale-110 transition-transform duration-300">
                        🐘
                      </div>
                      <div className="text-xs font-semibold text-white group-hover:text-blue-400 transition-colors">
                        PostgreSQL
                      </div>
                      <div className="text-xs text-gray-300 mt-1">Database</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <Card className="relative bg-white/10 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group-hover:bg-white/20">
                    <CardContent className="p-2 text-center">
                      <div className="text-xl mb-1 group-hover:scale-110 transition-transform duration-300">
                        🌊
                      </div>
                      <div className="text-xs font-semibold text-white group-hover:text-blue-400 transition-colors">
                        Drizzle ORM
                      </div>
                      <div className="text-xs text-gray-300 mt-1">
                        Data Layer
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-gray-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <Card className="relative bg-white/10 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group-hover:bg-white/20">
                    <CardContent className="p-2 text-center">
                      <div className="text-xl mb-1 group-hover:scale-110 transition-transform duration-300">
                        ▲
                      </div>
                      <div className="text-xs font-semibold text-white group-hover:text-blue-400 transition-colors">
                        Vercel
                      </div>
                      <div className="text-xs text-gray-300 mt-1">
                        Deployment
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <Card className="relative bg-white/10 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group-hover:bg-white/20">
                    <CardContent className="p-2 text-center">
                      <div className="text-xl mb-1 group-hover:scale-110 transition-transform duration-300">
                        📄
                      </div>
                      <div className="text-xs font-semibold text-white group-hover:text-blue-400 transition-colors">
                        Browserless.io
                      </div>
                      <div className="text-xs text-gray-300 mt-1">
                        PDF Generation
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-base font-semibold text-blue-400 mb-2">
                Development Practices
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-3">
                    <h4 className="font-semibold text-orange-400 mb-1 text-sm">
                      Type Safety
                    </h4>
                    <p className="text-xs text-gray-300">
                      TypeScript with AI for strict typing, error prevention,
                      and refactoring
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-3">
                    <h4 className="font-semibold text-orange-400 mb-1 text-sm">
                      Code Quality
                    </h4>
                    <p className="text-xs text-gray-300">
                      ESLint with AI adherence to linting rules and best
                      practices
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      title: "🛤️ The AI Development Journey: From Zero to Hero in Record Time",
      ctaText: "Show Me the AI Development Process",
      content: (
        <div className="space-y-4 h-full overflow-y-auto">
          <div className="space-y-3">
            <div>
              <h3 className="text-base font-semibold text-blue-600 mb-2">
                1. Initial Scaffolding & Setup
              </h3>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-3">
                  <ul className="space-y-1 text-xs text-gray-300">
                    <li>
                      •{" "}
                      <strong className="text-blue-400">
                        Project Initialization:
                      </strong>{" "}
                      Next.js structure, package.json, configurations
                    </li>
                    <li>
                      •{" "}
                      <strong className="text-blue-400">
                        Environment Setup:
                      </strong>{" "}
                      .env.local creation and database connections
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-base font-semibold text-blue-600 mb-2">
                2. Iterative Feature Development
              </h3>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-3">
                  <ul className="space-y-1 text-xs text-gray-300">
                    <li>
                      •{" "}
                      <strong className="text-blue-400">
                        Component Generation:
                      </strong>{" "}
                      Rapid UI component creation (tables, forms, cards)
                    </li>
                    <li>
                      •{" "}
                      <strong className="text-blue-400">
                        API Route Creation:
                      </strong>{" "}
                      CRUD operations, filtering, and reporting endpoints
                    </li>
                    <li>
                      •{" "}
                      <strong className="text-blue-400">
                        Database Interaction:
                      </strong>{" "}
                      Drizzle ORM queries, schema updates, migrations
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-base font-semibold text-blue-600 mb-2">
                3. Debugging & Error Resolution
              </h3>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-3">
                  <ul className="space-y-1 text-xs text-gray-300">
                    <li>
                      •{" "}
                      <strong className="text-blue-400">
                        Contextual Analysis:
                      </strong>{" "}
                      Real-time error detection and suggestions
                    </li>
                    <li>
                      •{" "}
                      <strong className="text-blue-400">
                        Complex Bug Fixes:
                      </strong>{" "}
                      React hooks, infinite loops, type inconsistencies
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 7,
      title:
        "🧠 The AI Learning Revolution: How AI Becomes Your Best Developer",
      ctaText: "Teach Me AI Learning Strategies",
      content: (
        <div className="space-y-4 h-full overflow-y-auto">
          <div className="space-y-3">
            <div>
              <h3 className="text-base font-semibold text-blue-600 mb-2">
                4. Refactoring & Code Quality
              </h3>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-3">
                  <ul className="space-y-1 text-xs text-gray-300">
                    <li>
                      •{" "}
                      <strong className="text-blue-400">
                        Type Enforcement:
                      </strong>{" "}
                      Strict typing and robust type guards across codebase
                    </li>
                    <li>
                      •{" "}
                      <strong className="text-blue-400">
                        Linter Compliance:
                      </strong>{" "}
                      ESLint adherence for cleaner, maintainable code
                    </li>
                    <li>
                      •{" "}
                      <strong className="text-blue-400">Documentation:</strong>{" "}
                      Comprehensive README and CHANGELOG generation
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-base font-bold text-blue-400 mb-3 flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                5. Learning & Adaptation
              </h3>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-4">
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>
                      •{" "}
                      <strong className="text-blue-400">
                        New Technologies:
                      </strong>{" "}
                      AI as pair programmer for Drizzle ORM, Supabase, QuaggaJS
                    </li>
                    <li>
                      •{" "}
                      <strong className="text-blue-400">
                        Problem Solving:
                      </strong>{" "}
                      Multiple approaches for informed architectural decisions
                    </li>
                    <li>
                      •{" "}
                      <strong className="text-blue-400">Best Practices:</strong>{" "}
                      Continuous guidance on industry standards and patterns
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white p-6 rounded-2xl text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-50"></div>
            <div className="relative z-10">
              <p className="font-bold text-lg">
                Key Insight: AI acted as an intelligent assistant, enabling
                rapid learning and implementation of complex integrations
              </p>
            </div>
            <div className="absolute top-2 right-2 w-3 h-3 bg-white/20 rounded-full animate-ping"></div>
            <div className="absolute bottom-2 left-2 w-2 h-2 bg-white/20 rounded-full animate-ping delay-1000"></div>
          </div>
        </div>
      ),
    },
    {
      id: 8,
      title:
        "💎 The Benefits: Why AI-Driven Development is Your Competitive Advantage",
      ctaText: "Show Me the AI Development Benefits",
      content: (
        <div className="space-y-4 h-full overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              {
                title: "1. Accelerated Development Speed",
                items: [
                  "Reduced boilerplate and repetitive tasks",
                  "Faster prototyping and iteration cycles",
                ],
              },
              {
                title: "2. Enhanced Code Quality",
                items: [
                  "Consistent best practices adherence",
                  "Proactive bug identification and resolution",
                  "Improved error handling",
                ],
              },
              {
                title: "3. Increased Developer Productivity",
                items: [
                  "Focus on high-level logic and architecture",
                  "Intelligent debugging assistance",
                ],
              },
              {
                title: "4. Democratization of Development",
                items: [
                  "Lower barrier to complex feature implementation",
                  "Single developer building full-stack applications",
                ],
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-blue-500/10 to-orange-500/10 backdrop-blur-sm border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                <CardContent className="p-4">
                  <h4 className="font-bold text-blue-400 mb-3 text-sm flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                    {benefit.title}
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {benefit.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 9,
      title:
        "⚔️ The Challenges: Lessons Learned from the AI Development Battlefield",
      ctaText: "Help Me Overcome Development Challenges",
      content: (
        <div className="space-y-3 h-full overflow-y-auto">
          <div className="grid grid-cols-2 gap-3">
            {[
              {
                title: "1. Prompt Engineering",
                items: [
                  "Precise and clear prompts crucial for optimal AI output",
                  "Iterative refinement required for desired results",
                ],
              },
              {
                title: "2. Architectural Coherence",
                items: [
                  "Ensuring AI-generated code aligns with system architecture",
                  "Human oversight required for consistency",
                ],
              },
              {
                title: "3. Validation and Testing",
                items: [
                  "AI code still requires thorough testing",
                  "Understanding generated code essential for debugging",
                ],
              },
              {
                title: "4. Staying Current",
                items: [
                  "Rapidly evolving AI landscape",
                  "Continuous learning of new capabilities required",
                ],
              },
            ].map((challenge, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-orange-500/10 to-blue-500/10 backdrop-blur-sm border-orange-400/30 hover:border-orange-400/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/25"
              >
                <CardContent className="p-4">
                  <h4 className="font-bold text-orange-400 mb-3 text-sm flex items-center">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></span>
                    {challenge.title}
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {challenge.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 10,
      title: "🔮 The Future: AI's Continued Role in the Development Revolution",
      ctaText: "Plan My AI Development Future",
      content: (
        <div className="space-y-3 h-full overflow-y-auto">
          <div>
            <h3 className="text-base font-bold text-blue-400 mb-3 flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mr-3"></div>
              Next Steps for the Asset Management System
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[
                {
                  title: "Full API Integration",
                  desc: "Replace remaining mock data",
                },
                {
                  title: "Advanced Filtering",
                  desc: "Location and date range filtering",
                },
                {
                  title: "Bulk Operations",
                  desc: "Mass asset state transitions",
                },
                {
                  title: "Comprehensive Testing",
                  desc: "Unit, component, and E2E testing",
                },
              ].map((step, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-white/20 hover:border-white/40 shadow-lg hover:shadow-blue-500/25 group"
                >
                  <CardContent className="p-3 text-center">
                    <div className="font-bold text-blue-400 mb-1 text-sm group-hover:text-blue-300 transition-colors">
                      {step.title}
                    </div>
                    <div className="text-xs text-gray-300 group-hover:text-gray-200 transition-colors">
                      {step.desc}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold text-blue-400 mb-3 flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mr-3"></div>
              AI&apos;s Future Contribution
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                {
                  title: "Automated Testing",
                  desc: "AI-generated test cases and test data",
                },
                {
                  title: "Performance Optimization",
                  desc: "AI-driven code analysis for bottlenecks",
                },
                {
                  title: "Feature Expansion",
                  desc: "Rapid development of new modules",
                },
                {
                  title: "Self-Healing Systems",
                  desc: "Proactive issue detection and resolution",
                },
              ].map((contribution, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-blue-500/10 to-orange-500/10 backdrop-blur-sm border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                >
                  <CardContent className="p-3">
                    <h4 className="font-bold text-blue-400 mb-2 text-sm flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                      {contribution.title}
                    </h4>
                    <p className="text-sm text-gray-300">{contribution.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 11,
      title: "🌟 The Paradigm Shift: The Future of Development is Already Here",
      ctaText: "Shape the Future of My Development",
      content: (
        <div className="space-y-2 h-full overflow-y-auto">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white p-4 rounded-2xl text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-50"></div>
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-2 animate-pulse">
                The Paradigm Shift is Here
              </h3>
              <p className="text-sm font-medium">
                AI is not just a tool; it&apos;s a transformative partner in
                software creation
              </p>
            </div>
            <div className="absolute top-2 right-2 w-4 h-4 bg-white/20 rounded-full animate-ping"></div>
            <div className="absolute bottom-2 left-2 w-3 h-3 bg-white/20 rounded-full animate-ping delay-1000"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              {
                title: "🚀 Development Velocity",
                points: [
                  "10x faster feature development",
                  "Reduced time-to-market",
                  "Rapid prototyping capabilities",
                  "Instant code generation",
                ],
              },
              {
                title: "🎯 Code Quality",
                points: [
                  "Consistent best practices",
                  "Automated code reviews",
                  "Proactive bug detection",
                  "Type-safe implementations",
                ],
              },
              {
                title: "👥 Team Transformation",
                points: [
                  "Single developer full-stack",
                  "Reduced junior developer ramp-up",
                  "Focus on architecture & strategy",
                  "Democratized development access",
                ],
              },
              {
                title: "💡 Innovation Acceleration",
                points: [
                  "Complex feature implementation",
                  "New technology adoption",
                  "Creative problem solving",
                  "Competitive advantage",
                ],
              },
            ].map((section, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-blue-500/10 to-orange-500/10 backdrop-blur-sm border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                <CardContent className="p-3">
                  <h4 className="font-bold text-blue-400 mb-2 text-sm flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                    {section.title}
                  </h4>
                  <ul className="space-y-1 text-xs">
                    {section.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <span className="text-orange-400 mr-2">•</span>
                        <span className="text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-orange-500 via-purple-500 to-blue-600 text-white p-4 rounded-2xl text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-50"></div>
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-2 animate-pulse">
                The Era of AI-Driven Software Creation
              </h3>
              <p className="text-sm font-medium">
                Organizations that embrace AI development will lead the next
                decade of innovation
              </p>
            </div>
            <div className="absolute top-2 right-2 w-4 h-4 bg-white/20 rounded-full animate-ping"></div>
            <div className="absolute bottom-2 left-2 w-3 h-3 bg-white/20 rounded-full animate-ping delay-1000"></div>
          </div>
        </div>
      ),
    },
    {
      id: 12,
      title: "🎯 The Conclusion: Your New Development Paradigm Awaits",
      ctaText: "Start My AI Development Transformation",
      content: (
        <div className="space-y-4 h-full overflow-y-auto pt-4">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white p-6 rounded-2xl text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-50"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-3 animate-pulse">
                The Transformation is Complete
              </h3>
              <p className="mb-2 text-lg font-medium">
                From concept to robust, feature-rich Asset Management System
              </p>
              <p className="text-base font-medium">
                A testament to the power of AI in modern software development
              </p>
            </div>
            <div className="absolute top-2 right-2 w-4 h-4 bg-white/20 rounded-full animate-ping"></div>
            <div className="absolute bottom-2 left-2 w-3 h-3 bg-white/20 rounded-full animate-ping delay-1000"></div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-blue-400 mb-3 flex items-center">
              <div className="w-1 h-5 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mr-3"></div>
              Key Takeaways for Your Organization
            </h3>
            <div className="grid md:grid-cols-3 gap-2">
              {[
                {
                  role: "For CTOs",
                  items: [
                    "AI dramatically accelerates development timelines",
                    "Reduced technical debt through consistent code quality",
                    "Single developer can achieve full-stack complexity",
                  ],
                },
                {
                  role: "For Developers",
                  items: [
                    "AI as an intelligent pair programming partner",
                    "Focus shifts to architecture and problem-solving",
                    "Rapid learning of new technologies",
                  ],
                },
                {
                  role: "For Marketers",
                  items: [
                    "Faster time-to-market for digital products",
                    "More sophisticated features possible with same resources",
                    "Competitive advantage through AI adoption",
                  ],
                },
              ].map((takeaway, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25 group"
                >
                  <CardContent className="p-3">
                    <h4 className="font-bold text-blue-400 mb-2 text-xs flex items-center group-hover:text-blue-300 transition-colors">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                      {takeaway.role}
                    </h4>
                    <ul className="space-y-1 text-xs text-gray-300 group-hover:text-gray-200 transition-colors">
                      {takeaway.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500 via-purple-500 to-blue-600 text-white p-4 rounded-2xl text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-50"></div>
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-2 animate-pulse">
                Ready to Transform Your Development Process?
              </h3>
              <p className="text-sm font-medium">
                Let&apos;s discuss how AI-driven development can revolutionize your
                organization&apos;s software capabilities
              </p>
            </div>
            <div className="absolute top-2 right-2 w-4 h-4 bg-white/20 rounded-full animate-ping"></div>
            <div className="absolute bottom-2 left-2 w-3 h-3 bg-white/20 rounded-full animate-ping delay-1000"></div>
          </div>
        </div>
      ),
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlaying(!isAutoPlaying);
  }, [isAutoPlaying]);

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 8000); // 8 seconds per slide
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  // Progress bar - only run when auto-play is active
  useEffect(() => {
    if (!isAutoPlaying) {
      setProgress(0);
      return;
    }

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // When progress reaches 100%, advance to next slide and reset
          nextSlide();
          return 0;
        }
        return prev + 100 / (8000 / 40); // 8 seconds = 8000ms, update every 40ms
      });
    }, 40); // Update every 40ms for smooth animation

    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  // Enhanced keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          prevSlide();
          break;
        case "ArrowRight":
        case " ":
          event.preventDefault();
          nextSlide();
          break;
        case "a":
        case "A":
          event.preventDefault();
          toggleAutoPlay();
          break;
        case "Escape":
          setIsAutoPlaying(false);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [nextSlide, prevSlide, toggleAutoPlay]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Floating Tech Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-orange-400 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-bounce delay-1000"></div>

        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-pulse delay-1000"></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse delay-500"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse delay-1500"></div>
        </div>
      </div>

      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-2xl border-b border-white/20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                  The AI Development Revolution
                </h1>
                <p className="text-xs text-gray-300">
                  Where One Developer Becomes an Entire Engineering Team
                </p>
              </div>
            </div>
            <Badge
              variant="outline"
              className="text-xs bg-gradient-to-r from-blue-500/20 to-orange-500/20 text-white border-white/30 backdrop-blur-sm"
            >
              {currentSlide + 1} / {slides.length}
            </Badge>
          </div>
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleAutoPlay}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-orange-500/20 text-white border-white/30 hover:from-blue-500/30 hover:to-orange-500/30 backdrop-blur-sm transition-all duration-300"
            >
              {isAutoPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
              <span className="hidden sm:inline">Auto</span>
            </Button>
          </div>
        </div>
        <Progress
          value={isAutoPlaying ? progress : 0}
          className="h-1 bg-white/10"
          style={
            {
              "--progress-color": isAutoPlaying
                ? `linear-gradient(90deg, #3b82f6, #f97316)`
                : "transparent",
            } as React.CSSProperties
          }
        />
      </div>

      {/* Main Content */}
      <div
        ref={containerRef}
        className="pt-24 pb-32 px-6 h-screen"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="max-w-7xl mx-auto h-full">
          <div className="bg-white/5 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden h-full flex flex-col relative">
            {/* Glowing Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-orange-500/20 rounded-3xl blur-xl animate-pulse"></div>
            <div className="relative bg-black/20 backdrop-blur-2xl rounded-3xl border border-white/20 h-full flex flex-col">
              <div className="p-8 md:p-10 flex-1 flex flex-col">
                <div className="text-center mb-6 flex-shrink-0">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
                    {slides[currentSlide].title}
                  </h1>
                  {slides[currentSlide].subtitle && (
                    <h2 className="text-xl md:text-2xl text-gray-300 font-medium italic">
                      {slides[currentSlide].subtitle}
                    </h2>
                  )}
                  <div className="mt-4 flex justify-center">
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-full animate-pulse"></div>
                  </div>
                </div>

                <div className="flex-1 overflow-hidden">
                  {slides[currentSlide].content}
                </div>
              </div>

              {/* Footer with CTA Button */}
              {slides[currentSlide].ctaText && (
                <div className="border-t border-white/20 bg-gradient-to-r from-black/30 to-black/20 backdrop-blur-xl px-8 md:px-10 py-4 flex-shrink-0 flex items-center justify-center">
                  <Button
                    onClick={handleEmailCTA}
                    className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white px-12 py-4 text-lg font-bold rounded-2xl shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 relative overflow-hidden group border-2 border-orange-300/50"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Mail className="h-5 w-5 mr-3 relative z-10" />
                    <span className="relative z-10">
                      {slides[currentSlide].ctaText}
                    </span>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping"></div>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center space-x-6 bg-gradient-to-r from-black/40 to-black/30 backdrop-blur-2xl rounded-full px-8 py-4 shadow-2xl border border-white/30">
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border-white/30 hover:from-blue-500/30 hover:to-purple-500/30 disabled:opacity-50 backdrop-blur-sm transition-all duration-300"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Previous</span>
          </Button>

          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  index === currentSlide
                    ? "bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 shadow-lg shadow-blue-500/50 animate-pulse"
                    : "bg-white/30 hover:bg-white/50 hover:scale-125"
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-purple-500/20 text-white border-white/30 hover:from-orange-500/30 hover:to-purple-500/30 disabled:opacity-50 backdrop-blur-sm transition-all duration-300"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Mobile swipe indicator */}
      <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-40 md:hidden">
        <div className="bg-gradient-to-r from-black/60 to-black/40 backdrop-blur-xl text-white px-6 py-3 rounded-full text-sm border border-white/30 shadow-2xl animate-pulse">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
            <span>Swipe to navigate</span>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-300"></div>
          </div>
        </div>
      </div>

      {/* Loading Animation */}
      {isAutoPlaying && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Keyboard Shortcuts Help */}
      <div className="fixed top-4 right-4 z-40 opacity-0 hover:opacity-100 transition-opacity duration-300 group">
        <div className="bg-black/60 backdrop-blur-xl text-white px-4 py-2 rounded-lg text-xs border border-white/20">
          <div className="font-semibold mb-1">Keyboard Shortcuts</div>
          <div>← → Navigate</div>
          <div>Space/A Auto-play</div>
          <div>Esc Stop</div>
        </div>
      </div>
    </div>
  );
}
