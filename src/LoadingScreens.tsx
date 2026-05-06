import React, { useState, useEffect } from "react";
import { PINK, PINK_LIGHT, BLACK, GRAY } from "./constants";

export function LoadingScreen() {
  const [step, setStep] = useState(0);
  const steps = ["Входим в аккаунт…", "Загружаем историю покупок…", "Анализируем ваш стиль…", "Почти готово!"];
  useEffect(() => {
    const t = setInterval(() => setStep(s => (s + 1) % steps.length), 900);
    return () => clearInterval(t);
  }, []);
  const pct = ((step + 1) / steps.length) * 100;
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px" }}>
      <div style={{ fontSize: 48, marginBottom: 16 }}>✦</div>
      <div style={{ fontWeight: 800, fontSize: 20, color: BLACK, letterSpacing: -0.5, marginBottom: 8 }}>Загружаем вещи</div>
      <div style={{ fontSize: 12, color: "#888", marginBottom: 32, textAlign: "center" }}>Мы собираем ваши покупки из аккаунта XXX.</div>
      <div style={{ width: "100%", height: 6, background: GRAY, borderRadius: 3, overflow: "hidden", marginBottom: 16 }}>
        <div style={{ height: "100%", width: `${pct}%`, background: PINK, borderRadius: 3, transition: "width 0.8s ease" }} />
      </div>
      <div style={{ fontSize: 12, color: PINK, fontWeight: 600, minHeight: 18, transition: "all 0.3s" }}>{steps[step]}</div>
      <div style={{ marginTop: 40, display: "flex", gap: 12 }}>
        {["ZARA", "H&M", "ASOS"].map(s => (
          <div key={s} style={{
            padding: "6px 12px", borderRadius: 20, border: `1px solid #eee`,
            fontSize: 10, fontWeight: 700, color: "#aaa", letterSpacing: 1,
          }}>{s}</div>
        ))}
      </div>
    </div>
  );
}

export function LoadingScreenDots() {
  const [frame, setFrame] = useState(0);
  const steps = ["Входим в аккаунт…", "Загружаем историю покупок…", "Анализируем ваш стиль…", "Почти готово!"];
  useEffect(() => {
    const t = setInterval(() => setFrame(f => (f + 1) % 3), 500);
    return () => clearInterval(t);
  }, []);
  const [step, setStep] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setStep(s => (s + 1) % steps.length), 900);
    return () => clearInterval(t);
  }, []);
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px" }}>
      <div style={{ display: "flex", gap: 10, marginBottom: 36 }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{
            width: 14, height: 14, borderRadius: "50%",
            background: i === frame ? PINK : PINK_LIGHT,
            transform: i === frame ? "scale(1.5)" : "scale(1)",
            transition: "all 0.4s ease",
          }} />
        ))}
      </div>
      <div style={{ fontWeight: 800, fontSize: 20, color: BLACK, letterSpacing: -0.5, marginBottom: 8 }}>Загружаем вещи</div>
      <div style={{ fontSize: 12, color: PINK, fontWeight: 600, minHeight: 18 }}>{steps[step]}</div>
      <div style={{ marginTop: 40, display: "flex", gap: 12 }}>
        {["ZARA", "H&M", "ASOS"].map(s => (
          <div key={s} style={{
            padding: "6px 12px", borderRadius: 20, border: `1px solid #eee`,
            fontSize: 10, fontWeight: 700, color: "#aaa", letterSpacing: 1,
          }}>{s}</div>
        ))}
      </div>
    </div>
  );
}
