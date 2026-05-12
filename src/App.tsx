import React, { useState } from "react";
import { PINK, BLACK, WHITE, screens } from "./constants";
import { NavBar, PhoneFrame, VariantNav } from "./components";
import { SignUpScreen, SignUpScreenEmail } from "./SignUpScreens";
import { LoadingScreen, LoadingScreenDots } from "./LoadingScreens";
import { PickScreen, PickScreenList, PickScreenSwipe } from "./PickScreens";
import { SummaryScreen, SummaryScreenList } from "./SummaryScreens";
import { HomeScreen, HomeScreenFeatured } from "./HomeScreens";
import { MainScreen } from "./MainScreens";
import { FeedScreenMain, FeedScreenAdvertise } from "./FeedScreens";

export default function App() {
  const [idx, setIdx] = useState(0);
  const [variant, setVariant] = useState(0);
  const [selected, setSelected] = useState<number[]>([]);

  const toggle = (id: number) => setSelected(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);

  const goTo = (i: number) => { setIdx(i); setVariant(0); };
  const prev = () => goTo(Math.max(0, idx - 1));
  const next = () => goTo(Math.min(screens.length - 1, idx + 1));

  const flowLabels = ["Sign Up", "Sync", "Pick", "Summary", "Home", "Main", "Ideas"];

  const screenRenderers: Array<Array<() => React.ReactNode>> = [
    [() => <SignUpScreen />, () => <SignUpScreenEmail />],
    [() => <LoadingScreen />, () => <LoadingScreenDots />],
    [() => <PickScreen selected={selected} onToggle={toggle} />, () => <PickScreenList selected={selected} onToggle={toggle} />, () => <PickScreenSwipe selected={selected} onToggle={toggle} />],
    [() => <SummaryScreen selected={selected} />, () => <SummaryScreenList selected={selected} />],
    [() => <HomeScreen selected={selected} />, () => <HomeScreenFeatured selected={selected} />],
    [() => <MainScreen/>],
    [() => <FeedScreenMain/>, () => <FeedScreenAdvertise/>],
  ];

  const variantLabels: string[][] = [
    ["Phone", "Email", "Social"],
    ["Progress", "Dots"],
    ["Grid", "List", "Swipe"],
    ["Grid", "List"],
    ["Grid", "Featured"],
    ["Main"],
    ["Base posts feed", "Travel advertisement"],
  ];

  const variants = screenRenderers[idx];
  const safeVariant = Math.min(variant, variants.length - 1);

  return (
    <div style={{ minHeight: "100vh", background: "#f7f7f7", fontFamily: "'Inter', system-ui, sans-serif", display: "flex", flexDirection: "column" }}>
      <NavBar onPrev={prev} onNext={next} onGoTo={goTo} currentIdx={idx} total={screens.length} />

      {/* Flow map */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "16px 24px", gap: 0, overflowX: "auto" }}>
        {flowLabels.map((label, i) => (
          <div key={label} style={{ display: "flex", alignItems: "center" }}>
            <div
              onClick={() => goTo(i)}
              style={{
                padding: "6px 14px", borderRadius: 20,
                background: i === idx ? PINK : i < idx ? BLACK : WHITE,
                color: i === idx ? WHITE : i < idx ? WHITE : "#aaa",
                border: `1.5px solid ${i === idx ? PINK : i < idx ? BLACK : "#ddd"}`,
                fontSize: 11, fontWeight: 700, cursor: "pointer",
                whiteSpace: "nowrap", transition: "all 0.2s",
              }}
            >{label}</div>
            {i < flowLabels.length - 1 && (
              <div style={{ width: 20, height: 1.5, background: i < idx ? BLACK : "#ddd" }} />
            )}
          </div>
        ))}
      </div>

      {/* Phone + Variant Nav */}
      <div style={{ flex: 1, display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "8px 24px 40px", gap: 20 }}>
        <div style={{ width: 56 }} />
        <PhoneFrame>
          {variants[safeVariant]?.()}
        </PhoneFrame>
        <VariantNav
          variant={safeVariant}
          total={variants.length}
          label={variantLabels[idx][safeVariant]}
          onUp={() => setVariant(v => Math.max(0, v - 1))}
          onDown={() => setVariant(v => Math.min(variants.length - 1, v + 1))}
        />
      </div>
    </div>
  );
}
