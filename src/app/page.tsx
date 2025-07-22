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
    window.location.href =
      "mailto:tom.welsh@theaiaa.com?subject=Slide Deck - AI-Driven Development Showcase";
  };

  const slides: Slide[] = [
    {
      id: 1,
      title: "Building an Asset Management System",
      subtitle: "An AI-Driven Development Journey with Cursor IDE",
      ctaText: "Learn More About AI Development",
      content: (
        <div className="space-y-4 h-full overflow-y-auto">
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 text-white p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold mb-2">
              The Vision: 100% AI-Driven Development
            </h3>
            <p className="text-sm">
              Exploring how generative AI can transform complex software
              projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            <Card>
              <CardContent className="p-3">
                <h4 className="font-semibold text-base mb-2 text-blue-600">
                  The Challenge
                </h4>
                <ul className="space-y-1 text-xs">
                  <li>• Comprehensive asset lifecycle tracking</li>
                  <li>• Multi-device support (phones, laptops, monitors)</li>
                  <li>• Real-time dashboard & reporting</li>
                  <li>• Barcode scanning capabilities</li>
                  <li>• Scalable, maintainable architecture</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-3">
                <h4 className="font-semibold text-base mb-2 text-orange-500">
                  The Approach
                </h4>
                <ul className="space-y-1 text-xs">
                  <li>
                    • <strong>100% AI-Driven Development</strong>
                  </li>
                  <li>• Cursor IDE as primary environment</li>
                  <li>• Generative AI for complex features</li>
                  <li>• Human oversight for architecture</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Asset Management System Overview",
      ctaText: "Discuss Your Asset Management Needs",
      content: (
        <div className="space-y-4 h-full overflow-y-auto">
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 text-white p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold mb-2">Core Purpose</h3>
            <p className="text-sm">
              Streamline IT asset tracking, management, and lifecycle control
              within organizations
            </p>
          </div>

          <h3 className="text-lg font-semibold text-gray-800">
            Key Modules Built with AI
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              {
                title: "Asset Management",
                desc: "Lifecycle states, assignments, records",
              },
              {
                title: "User Management",
                desc: "Role-based access, authentication",
              },
              {
                title: "Location Tracking",
                desc: "Physical and logical locations",
              },
              {
                title: "Real-time Dashboard",
                desc: "Insights, metrics, and KPIs",
              },
              {
                title: "Reporting System",
                desc: "Exportable inventory reports",
              },
              {
                title: "Barcode Scanning",
                desc: "USB and camera-based scanning",
              },
            ].map((module, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-3 text-center">
                  <div className="font-semibold text-blue-600 mb-1 text-sm">
                    {module.title}
                  </div>
                  <div className="text-xs text-gray-600">{module.desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Key Features: AI's Implementation Impact",
      ctaText: "Explore AI Implementation Strategies",
      content: (
        <div className="space-y-4 h-full overflow-y-auto">
          <div className="space-y-3">
            <div>
              <h3 className="text-base font-semibold text-blue-600 mb-2">
                1. Comprehensive Asset Lifecycle Management
              </h3>
              <Card>
                <CardContent className="p-3">
                  <ul className="space-y-1 text-xs">
                    <li>
                      • <strong>AI-Generated State Transitions:</strong> Complex
                      flows (AVAILABLE → SIGNED_OUT → BUILT → ISSUED)
                    </li>
                    <li>
                      • <strong>Automated Audit Trail:</strong> Automatic
                      history logging for every state change
                    </li>
                    <li>
                      • <strong>Type Safety:</strong> Robust type-safe enums
                      using Drizzle ORM
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-base font-semibold text-blue-600 mb-2">
                2. Robust User Authentication
              </h3>
              <Card>
                <CardContent className="p-3">
                  <ul className="space-y-1 text-xs">
                    <li>
                      • <strong>Supabase Integration:</strong> AI-guided setup
                      of auth, environment variables, API keys
                    </li>
                    <li>
                      • <strong>Security Best Practices:</strong> Password
                      management, email verification, auth event logging
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-base font-semibold text-blue-600 mb-2">
                3. Flexible Barcode Scanning
              </h3>
              <Card>
                <CardContent className="p-3">
                  <ul className="space-y-1 text-xs">
                    <li>
                      • <strong>Dual Support:</strong> USB and camera-based
                      scanning integration
                    </li>
                    <li>
                      • <strong>QuaggaJS Integration:</strong> AI-assisted
                      component integration and permissions
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
      id: 4,
      title: "Key Features: AI's Implementation Impact (Continued)",
      ctaText: "Learn About Database Architecture",
      content: (
        <div className="space-y-4 h-full overflow-y-auto">
          <div className="space-y-3">
            <div>
              <h3 className="text-base font-semibold text-blue-600 mb-2">
                4. Interactive Dashboard & Reporting
              </h3>
              <Card>
                <CardContent className="p-3">
                  <ul className="space-y-1 text-xs">
                    <li>
                      • <strong>Real-time Metrics:</strong> AI-assisted complex
                      database query aggregation
                    </li>
                    <li>
                      • <strong>PDF Export:</strong> Browserless.io integration
                      for serverless PDF generation
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-base font-semibold text-blue-600 mb-2">
                5. Type-Safe Database Layer
              </h3>
              <Card>
                <CardContent className="p-3">
                  <ul className="space-y-1 text-xs">
                    <li>
                      • <strong>Drizzle ORM & Neon Postgres:</strong> Complete
                      migration from raw SQL to modern ORM
                    </li>
                    <li>
                      • <strong>Schema Definition:</strong> UUID primary keys,
                      soft deletes, automatic timestamps
                    </li>
                    <li>
                      • <strong>Migration Workflow:</strong> AI guidance on
                      generating and applying migrations
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-base font-semibold text-blue-600 mb-2">
                6. Comprehensive Logging & Error Handling
              </h3>
              <Card>
                <CardContent className="p-3">
                  <ul className="space-y-1 text-xs">
                    <li>
                      • <strong>Server-Side Logging:</strong> Critical events
                      logged for Vercel compatibility
                    </li>
                    <li>
                      • <strong>Error Boundaries:</strong> Robust error trapping
                      with user-friendly fallback UIs
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
      id: 5,
      title: "Technical Architecture: Built with AI",
      ctaText: "Discuss Technical Architecture",
      content: (
        <div className="space-y-4 h-full overflow-y-auto">
          <div className="space-y-3">
            <div>
              <h3 className="text-base font-semibold text-blue-600 mb-2">
                Frontend Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js 15 + TypeScript",
                  "Shadcn/ui Components",
                  "React Hooks & Context",
                  "Lucide React Icons",
                ].map((tech, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold text-blue-600 mb-2">
                Backend Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js API Routes",
                  "PostgreSQL + Drizzle ORM",
                  "Vercel Deployment",
                  "Browserless.io PDF",
                ].map((tech, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold text-blue-600 mb-2">
                Development Practices
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                <Card>
                  <CardContent className="p-3">
                    <h4 className="font-semibold text-orange-500 mb-1 text-sm">
                      Type Safety
                    </h4>
                    <p className="text-xs">
                      TypeScript with AI for strict typing, error prevention,
                      and refactoring
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-3">
                    <h4 className="font-semibold text-orange-500 mb-1 text-sm">
                      Code Quality
                    </h4>
                    <p className="text-xs">
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
      title: "The AI Development Journey with Cursor IDE",
      ctaText: "Learn About AI Development Process",
      content: (
        <div className="space-y-4 h-full overflow-y-auto">
          <div className="space-y-3">
            <div>
              <h3 className="text-base font-semibold text-blue-600 mb-2">
                1. Initial Scaffolding & Setup
              </h3>
              <Card>
                <CardContent className="p-3">
                  <ul className="space-y-1 text-xs">
                    <li>
                      • <strong>Project Initialization:</strong> Next.js
                      structure, package.json, configurations
                    </li>
                    <li>
                      • <strong>Environment Setup:</strong> .env.local creation
                      and database connections
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-base font-semibold text-blue-600 mb-2">
                2. Iterative Feature Development
              </h3>
              <Card>
                <CardContent className="p-3">
                  <ul className="space-y-1 text-xs">
                    <li>
                      • <strong>Component Generation:</strong> Rapid UI
                      component creation (tables, forms, cards)
                    </li>
                    <li>
                      • <strong>API Route Creation:</strong> CRUD operations,
                      filtering, and reporting endpoints
                    </li>
                    <li>
                      • <strong>Database Interaction:</strong> Drizzle ORM
                      queries, schema updates, migrations
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-base font-semibold text-blue-600 mb-2">
                3. Debugging & Error Resolution
              </h3>
              <Card>
                <CardContent className="p-3">
                  <ul className="space-y-1 text-xs">
                    <li>
                      • <strong>Contextual Analysis:</strong> Real-time error
                      detection and suggestions
                    </li>
                    <li>
                      • <strong>Complex Bug Fixes:</strong> React hooks,
                      infinite loops, type inconsistencies
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
      title: "The AI Development Journey (Continued)",
      ctaText: "Explore AI Learning Strategies",
      content: (
        <div className="space-y-4 h-full overflow-y-auto">
          <div className="space-y-3">
            <div>
              <h3 className="text-base font-semibold text-blue-600 mb-2">
                4. Refactoring & Code Quality
              </h3>
              <Card>
                <CardContent className="p-3">
                  <ul className="space-y-1 text-xs">
                    <li>
                      • <strong>Type Enforcement:</strong> Strict typing and
                      robust type guards across codebase
                    </li>
                    <li>
                      • <strong>Linter Compliance:</strong> ESLint adherence for
                      cleaner, maintainable code
                    </li>
                    <li>
                      • <strong>Documentation:</strong> Comprehensive README and
                      CHANGELOG generation
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-base font-semibold text-blue-600 mb-2">
                5. Learning & Adaptation
              </h3>
              <Card>
                <CardContent className="p-3">
                  <ul className="space-y-1 text-xs">
                    <li>
                      • <strong>New Technologies:</strong> AI as pair programmer
                      for Drizzle ORM, Supabase, QuaggaJS
                    </li>
                    <li>
                      • <strong>Problem Solving:</strong> Multiple approaches
                      for informed architectural decisions
                    </li>
                    <li>
                      • <strong>Best Practices:</strong> Continuous guidance on
                      industry standards and patterns
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-orange-500 text-white p-4 rounded-lg text-center">
            <p className="font-semibold text-sm">
              Key Insight: AI acted as an intelligent assistant, enabling rapid
              learning and implementation of complex integrations
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 8,
      title: "Benefits of AI-Driven Development",
      ctaText: "Discover AI Development Benefits",
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
                className="bg-gradient-to-br from-blue-50 to-orange-50 border-blue-200"
              >
                <CardContent className="p-3">
                  <h4 className="font-semibold text-blue-600 mb-2 text-sm">
                    {benefit.title}
                  </h4>
                  <ul className="space-y-1 text-xs text-gray-700">
                    {benefit.items.map((item, itemIndex) => (
                      <li key={itemIndex}>• {item}</li>
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
      title: "Challenges & Key Learnings",
      content: (
        <div className="space-y-4 h-full overflow-y-auto">
          <div className="space-y-3">
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
                className="bg-gradient-to-br from-orange-50 to-blue-50 border-orange-200"
              >
                <CardContent className="p-3">
                  <h4 className="font-semibold text-orange-500 mb-2 text-sm">
                    {challenge.title}
                  </h4>
                  <ul className="space-y-1 text-xs text-gray-700">
                    {challenge.items.map((item, itemIndex) => (
                      <li key={itemIndex}>• {item}</li>
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
      title: "Future Enhancements & AI's Continued Role",
      ctaText: "Plan Your AI Development Roadmap",
      content: (
        <div className="space-y-4 h-full overflow-y-auto">
          <div>
            <h3 className="text-base font-semibold text-blue-600 mb-3">
              Next Steps for the Asset Management System
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-3 text-center">
                    <div className="font-semibold text-blue-600 mb-1 text-sm">
                      {step.title}
                    </div>
                    <div className="text-xs text-gray-600">{step.desc}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold text-blue-600 mb-3">
              AI&apos;s Future Contribution
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                  className="bg-gradient-to-br from-blue-50 to-orange-50 border-blue-200"
                >
                  <CardContent className="p-3">
                    <h4 className="font-semibold text-blue-600 mb-1 text-sm">
                      {contribution.title}
                    </h4>
                    <p className="text-xs text-gray-700">{contribution.desc}</p>
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
      title: "The Future of Development",
      ctaText: "Shape the Future of Development",
      content: (
        <div className="space-y-4 h-full overflow-y-auto">
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 text-white p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold mb-2">
              The Paradigm Shift is Here
            </h3>
            <p className="text-sm">
              AI is not just a tool; it&apos;s a transformative partner in
              software creation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                className="bg-gradient-to-br from-blue-50 to-orange-50 border-blue-200"
              >
                <CardContent className="p-4">
                  <h4 className="font-bold text-blue-600 mb-3 text-base">
                    {section.title}
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {section.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-blue-600 text-white p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold mb-2">
              The Era of AI-Driven Software Creation
            </h3>
            <p className="text-sm font-medium">
              Organizations that embrace AI development will lead the next
              decade of innovation
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 12,
      title: "Conclusion: A New Development Paradigm",
      ctaText: "Contact Us",
      content: (
        <div className="space-y-4 h-full overflow-y-auto">
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 text-white p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold mb-2">The Journey</h3>
            <p className="mb-2 text-sm">
              From concept to robust, feature-rich Asset Management System
            </p>
            <p className="text-sm">
              A testament to the power of AI in modern software development
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-blue-600 mb-3">
              Key Takeaways for Your Organization
            </h3>
            <div className="grid md:grid-cols-3 gap-3">
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
                <Card key={index}>
                  <CardContent className="p-3">
                    <h4 className="font-semibold text-blue-600 mb-2 text-sm">
                      {takeaway.role}
                    </h4>
                    <ul className="space-y-1 text-xs">
                      {takeaway.items.map((item, itemIndex) => (
                        <li key={itemIndex}>• {item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800">
              Questions & Discussion
            </h2>
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

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === " ") {
        event.preventDefault();
        nextSlide();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [nextSlide, prevSlide]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-lg font-semibold text-gray-800">
              AI-Driven Development Showcase
            </h1>
            <Badge variant="outline" className="text-xs">
              {currentSlide + 1} / {slides.length}
            </Badge>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleAutoPlay}
              className="flex items-center space-x-1"
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
          className="h-1 bg-gray-200"
          style={
            {
              "--progress-color": isAutoPlaying
                ? `hsl(${220 + progress * 0.2}, 80%, ${85 - progress * 0.5}%)`
                : "#f8fafc", // Light gray background color
            } as React.CSSProperties
          }
        />
      </div>

      {/* Main Content */}
      <div
        ref={containerRef}
        className="pt-20 pb-32 px-4 h-screen"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="max-w-6xl mx-auto h-full">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden h-full flex flex-col">
            <div className="p-6 md:p-8 flex-1 flex flex-col">
              <div className="text-center mb-4 flex-shrink-0">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  {slides[currentSlide].title}
                </h1>
                {slides[currentSlide].subtitle && (
                  <h2 className="text-lg md:text-xl text-gray-600">
                    {slides[currentSlide].subtitle}
                  </h2>
                )}
              </div>

              <div className="flex-1 overflow-hidden">
                {slides[currentSlide].content}
              </div>
            </div>

            {/* Footer with CTA Button */}
            {slides[currentSlide].ctaText && (
              <div className="border-t border-gray-200 bg-gray-50 px-6 md:px-8 py-4 flex-shrink-0">
                <div className="text-center">
                  <Button
                    onClick={handleEmailCTA}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2 text-base font-medium"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    {slides[currentSlide].ctaText}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center space-x-4 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-200">
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center space-x-1"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Previous</span>
          </Button>

          <div className="flex space-x-1">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center space-x-1"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Mobile swipe indicator */}
      <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-40 md:hidden">
        <div className="bg-black/50 text-white px-3 py-1 rounded-full text-xs">
          Swipe to navigate
        </div>
      </div>
    </div>
  );
}
