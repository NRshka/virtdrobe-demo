import React from "react";
import { PINK, BLACK, WHITE, GRAY } from "./constants";

function navBtn(disabled: boolean) {
  return {
    width: 36, height: 36, borderRadius: "50%",
    border: `1.5px solid ${disabled ? "#ddd" : BLACK}`,
    background: "transparent",
    color: disabled ? "#ccc" : BLACK,
    cursor: disabled ? "default" : "pointer",
    fontWeight: 700, fontSize: 16,
    display: "flex", alignItems: "center", justifyContent: "center",
    transition: "all 0.2s",
  };
}

function variantBtn(disabled: boolean) {
  return {
    width: 32, height: 32, borderRadius: "50%",
    border: `1.5px solid ${disabled ? "#eee" : BLACK}`,
    background: "transparent",
    color: disabled ? "#ddd" : BLACK,
    cursor: disabled ? "default" : "pointer",
    fontWeight: 700, fontSize: 14,
    display: "flex", alignItems: "center", justifyContent: "center",
    transition: "all 0.2s",
  };
}

export function ProgressDots({ current, total, onClick }: { current: number; total: number; onClick: (i: number) => void }) {
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          onClick={() => onClick(i)}
          style={{
            width: i === current ? 24 : 8,
            height: 8,
            borderRadius: 4,
            background: i === current ? PINK : "#ccc",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        />
      ))}
    </div>
  );
}

export function NavBar({ onPrev, onNext, onGoTo, currentIdx, total }: { onPrev: () => void; onNext: () => void; onGoTo: (i: number) => void; currentIdx: number; total: number }) {
  return (
    <div style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "16px 24px", borderBottom: `1px solid ${GRAY}`,
      background: WHITE,
    }}>
      <span style={{ fontWeight: 700, fontSize: 16, letterSpacing: -0.5 }}>
        <span style={{ color: PINK }}>✦</span> wardrobe
      </span>
      <ProgressDots current={currentIdx} total={total} onClick={(i: number) => onGoTo(i)} />
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={onPrev} disabled={currentIdx === 0} style={navBtn(currentIdx === 0)}>←</button>
        <button onClick={onNext} disabled={currentIdx === total - 1} style={navBtn(currentIdx === total - 1)}>→</button>
      </div>
    </div>
  );
}

export function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      width: 320, height: 580,
      background: WHITE,
      borderRadius: 36,
      boxShadow: "0 24px 64px rgba(0,0,0,0.13), 0 2px 8px rgba(221,51,212,0.08)",
      overflow: "hidden",
      position: "relative",
      border: `2px solid ${GRAY}`,
      display: "flex", flexDirection: "column",
    }}>
      {/* notch */}
      <div style={{
        width: 90, height: 24, background: BLACK,
        borderRadius: "0 0 16px 16px",
        margin: "0 auto",
        position: "relative", zIndex: 2,
      }} />
      <div style={{ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column" }}>
        {children}
      </div>
    </div>
  );
}

export function VariantNav({ variant, total, label, onUp, onDown }: {
  variant: number; total: number; label: string;
  onUp: () => void; onDown: () => void;
}) {
  if (total <= 1) return <div style={{ width: 56 }} />;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, paddingTop: 36, width: 56 }}>
      <button onClick={onUp} disabled={variant === 0} style={variantBtn(variant === 0)}>↑</button>
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} style={{
          width: 6, height: i === variant ? 20 : 6,
          borderRadius: 3,
          background: i === variant ? PINK : "#ddd",
          transition: "all 0.3s ease",
        }} />
      ))}
      <button onClick={onDown} disabled={variant === total - 1} style={variantBtn(variant === total - 1)}>↓</button>
      <div style={{ fontSize: 10, color: "#aaa", fontWeight: 600, marginTop: 4, textAlign: "center", lineHeight: 1.3 }}>
        {label}
      </div>
    </div>
  );
}
