import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Node {
  x: number;
  y: number;
  label: string;
  description: string;
  vx: number;
  vy: number;
}

const techNodes: { label: string; description: string }[] = [
  { label: "React", description: "Building interactive UIs with component architecture" },
  { label: "Next.js", description: "Server-side rendering & static generation" },
  { label: "TypeScript", description: "Type-safe code at scale" },
  { label: "Micro Frontends", description: "Independent deployable UI modules" },
  { label: "Performance", description: "Core Web Vitals & optimization" },
  { label: "Testing", description: "90%+ coverage with Jest & RTL" },
  { label: "Tailwind", description: "Utility-first CSS architecture" },
  { label: "State Mgmt", description: "MobX, React Query, Context patterns" },
];

const NetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const [tooltip, setTooltip] = useState<{ x: number; y: number; label: string; description: string } | null>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;

    if (nodesRef.current.length === 0) {
      nodesRef.current = techNodes.map((t) => ({
        x: Math.random() * w * 0.8 + w * 0.1,
        y: Math.random() * h * 0.8 + h * 0.1,
        label: t.label,
        description: t.description,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      }));
    }

    const getThemeColors = () => {
      const style = getComputedStyle(document.documentElement);
      const isDark = document.documentElement.classList.contains("dark");
      const primary = style.getPropertyValue("--primary").trim();
      const secondary = style.getPropertyValue("--secondary").trim();
      const fg = style.getPropertyValue("--foreground").trim();
      const toRgb = (hsl: string) => {
        const [h, s, l] = hsl.split(/\s+/).map(parseFloat);
        const el = document.createElement("div");
        el.style.color = `hsl(${h}, ${s}%, ${l}%)`;
        document.body.appendChild(el);
        const rgb = getComputedStyle(el).color;
        document.body.removeChild(el);
        const match = rgb.match(/(\d+),\s*(\d+),\s*(\d+)/);
        return match ? { r: +match[1], g: +match[2], b: +match[3] } : { r: 108, g: 123, b: 255 };
      };
      const p = toRgb(primary);
      const s = toRgb(secondary);
      const f = toRgb(fg);
      return { primary: p, secondary: s, foreground: f, isDark };
    };

    let colors = getThemeColors();
    const observer = new MutationObserver(() => { colors = getThemeColors(); });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    const draw = () => {
      const cw = canvas.offsetWidth;
      const ch = canvas.offsetHeight;
      ctx.clearRect(0, 0, cw, ch);

      const nodes = nodesRef.current;
      const { primary: pc, secondary: sc, foreground: fc, isDark } = colors;
      const lineAlphaBase = isDark ? 0.15 : 0.25;
      const glowAlphaNode = isDark ? 0.08 : 0.12;
      const glowAlphaHover = isDark ? 0.15 : 0.2;
      const labelAlpha = isDark ? 0.4 : 0.5;

      // Update positions
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 40 || n.x > cw - 40) n.vx *= -1;
        if (n.y < 40 || n.y > ch - 40) n.vy *= -1;
      });

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 250) {
            const alpha = (1 - dist / 250) * lineAlphaBase;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(${pc.r}, ${pc.g}, ${pc.b}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((n) => {
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;
        const dist = Math.sqrt((n.x - mx) ** 2 + (n.y - my) ** 2);
        const isHovered = dist < 40;
        const radius = isHovered ? 6 : 4;

        // Glow
        ctx.beginPath();
        ctx.arc(n.x, n.y, radius + 8, 0, Math.PI * 2);
        ctx.fillStyle = isHovered
          ? `rgba(${sc.r}, ${sc.g}, ${sc.b}, ${glowAlphaHover})`
          : `rgba(${pc.r}, ${pc.g}, ${pc.b}, ${glowAlphaNode})`;
        ctx.fill();

        // Node
        ctx.beginPath();
        ctx.arc(n.x, n.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = isHovered
          ? `rgb(${sc.r}, ${sc.g}, ${sc.b})`
          : `rgb(${pc.r}, ${pc.g}, ${pc.b})`;
        ctx.fill();

        // Label
        ctx.font = `${isHovered ? "600" : "400"} 10px 'JetBrains Mono', monospace`;
        ctx.fillStyle = isHovered
          ? `rgb(${fc.r}, ${fc.g}, ${fc.b})`
          : `rgba(${fc.r}, ${fc.g}, ${fc.b}, ${labelAlpha})`;
        ctx.textAlign = "center";
        ctx.fillText(n.label, n.x, n.y - 14);
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animRef.current);
      observer.disconnect();
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseRef.current = { x, y };

    const hovered = nodesRef.current.find((n) => {
      const dist = Math.sqrt((n.x - x) ** 2 + (n.y - y) ** 2);
      return dist < 40;
    });

    if (hovered) {
      setTooltip({ x: hovered.x, y: hovered.y - 35, label: hovered.label, description: hovered.description });
    } else {
      setTooltip(null);
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          mouseRef.current = { x: -1000, y: -1000 };
          setTooltip(null);
        }}
        className="w-full h-full"
      />
      {tooltip && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute pointer-events-none px-3 py-2 rounded-lg surface-card text-xs text-foreground shadow-lg"
          style={{ left: tooltip.x, top: tooltip.y, transform: "translate(-50%, -100%)" }}
        >
          <div className="font-semibold text-secondary">{tooltip.label}</div>
          <div className="text-muted-foreground mt-0.5">{tooltip.description}</div>
        </motion.div>
      )}
    </div>
  );
};

export default NetworkBackground;
