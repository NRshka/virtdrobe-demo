import React, { useState } from "react";
import { PINK, PINK_LIGHT, BLACK, WHITE, GRAY, clothes } from "./constants";

const GREEN = "#22c55e";
const RED = "#ef4444";

export function PickScreen({ selected, onToggle }: { selected: number[]; onToggle: (id: number) => void }) {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "20px 16px 12px" }}>
        <div style={{ fontSize: 16, fontWeight: 800, color: BLACK, letterSpacing: -0.5, lineHeight: 1.3 }}>
          Выберите вещи,<br />которые вы хотите добавить
        </div>
        <div style={{ fontSize: 11, color: "#aaa", marginTop: 4 }}>Нажмите, чтобы выбрать</div>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: "0 12px 16px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {clothes.map(item => {
            const sel = selected.includes(item.id);
            return (
              <div
                key={item.id}
                onClick={() => onToggle(item.id)}
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  background: item.color,
                  position: "relative",
                  cursor: "pointer",
                  aspectRatio: "3/4",
                  border: sel ? `2.5px solid ${PINK}` : "2.5px solid transparent",
                  boxShadow: sel ? `0 0 0 2px ${PINK_LIGHT}` : "none",
                  transition: "all 0.2s",
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                }}
              >
                <img src={item.image} alt={item.name} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                {sel && (
                  <div style={{
                    position: "absolute", top: 8, right: 8,
                    width: 22, height: 22, borderRadius: "50%",
                    background: PINK, color: WHITE,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 12, fontWeight: 700,
                  }}>✓</div>
                )}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  background: "linear-gradient(transparent, rgba(0,0,0,0.55))",
                  padding: "20px 10px 10px",
                  color: WHITE, fontSize: 11, fontWeight: 700,
                  letterSpacing: 0.2,
                }}>{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ padding: "10px 16px", borderTop: `1px solid ${GRAY}` }}>
        <button style={{
          width: "100%", height: 44, borderRadius: 22,
          background: selected.length > 0 ? PINK : "#e0e0e0",
          color: WHITE, border: "none",
          fontWeight: 700, fontSize: 14, cursor: selected.length > 0 ? "pointer" : "default",
          transition: "background 0.2s",
        }}>
          {selected.length > 0 ? `Add ${selected.length} item${selected.length > 1 ? "s" : ""} →` : "Select items"}
        </button>
      </div>
    </div>
  );
}

export function PickScreenList({ selected, onToggle }: { selected: number[]; onToggle: (id: number) => void }) {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "20px 16px 12px" }}>
        <div style={{ fontSize: 16, fontWeight: 800, color: BLACK, letterSpacing: -0.5 }}>Добавить в гардероб</div>
        <div style={{ fontSize: 11, color: "#aaa", marginTop: 4 }}>Нажмите для выбора</div>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: "0 16px 16px" }}>
        {clothes.map(item => {
          const sel = selected.includes(item.id);
          return (
            <div key={item.id} onClick={() => onToggle(item.id)} style={{
              display: "flex", alignItems: "center", gap: 14,
              padding: "12px 0", borderBottom: `1px solid ${GRAY}`,
              cursor: "pointer",
            }}>
              <div style={{
                width: 52, height: 52, borderRadius: 12, flexShrink: 0,
                overflow: "hidden",
                border: sel ? `2px solid ${PINK}` : "2px solid transparent",
                transition: "border 0.2s",
              }}>
                <img src={item.image} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ flex: 1, fontWeight: 700, fontSize: 13, color: BLACK }}>{item.name}</div>
              <div style={{
                width: 22, height: 22, borderRadius: "50%",
                background: sel ? PINK : "#eee",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 11, color: WHITE, fontWeight: 700,
                transition: "all 0.2s",
              }}>{sel ? "✓" : ""}</div>
            </div>
          );
        })}
      </div>
      <div style={{ padding: "10px 16px", borderTop: `1px solid ${GRAY}` }}>
        <button style={{
          width: "100%", height: 44, borderRadius: 22,
          background: selected.length > 0 ? PINK : "#e0e0e0",
          color: WHITE, border: "none",
          fontWeight: 700, fontSize: 14, cursor: selected.length > 0 ? "pointer" : "default",
          transition: "background 0.2s",
        }}>
          {selected.length > 0 ? `Add ${selected.length} item${selected.length > 1 ? "s" : ""} →` : "Select items"}
        </button>
      </div>
    </div>
  );
}

export function PickScreenSwipe({ selected, onToggle }: { selected: number[]; onToggle: (id: number) => void }) {
  const [deck, setDeck] = useState(() => clothes.map(c => c.id));
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [exiting, setExiting] = useState<"left" | "right" | null>(null);

  const current = clothes.find(c => c.id === deck[0]);
  const next = clothes.find(c => c.id === deck[1]);
  const progress = clothes.length - deck.length;

  const swipe = (dir: "left" | "right") => {
    if (!current || exiting) return;
    setExiting(dir);
    setTimeout(() => {
      if (dir === "right" && !selected.includes(current.id)) onToggle(current.id);
      if (dir === "left" && selected.includes(current.id)) onToggle(current.id);
      setDeck(d => d.slice(1));
      setExiting(null);
      setDragX(0);
    }, 280);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (exiting) return;
    setIsDragging(true);
    setStartX(e.clientX);
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging || exiting) return;
    setDragX(e.clientX - startX);
  };
  const onPointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragX > 80) swipe("right");
    else if (dragX < -80) swipe("left");
    else setDragX(0);
  };

  const tx = exiting === "right" ? 420 : exiting === "left" ? -420 : dragX;
  const rot = exiting === "right" ? 22 : exiting === "left" ? -22 : dragX / 14;
  const keepOpacity = exiting === "right" ? 1 : Math.max(0, dragX / 80);
  const skipOpacity = exiting === "left" ? 1 : Math.max(0, -dragX / 80);

  if (!current) {
    return (
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 24 }}>
        <div style={{ fontSize: 44, marginBottom: 12 }}>🎉</div>
        <div style={{ fontWeight: 800, fontSize: 18, color: BLACK, letterSpacing: -0.5 }}>All done!</div>
        <div style={{ fontSize: 12, color: "#aaa", marginTop: 6, textAlign: "center" }}>
          {selected.length} item{selected.length !== 1 ? "s" : ""} added to your wardrobe
        </div>
      </div>
    );
  }

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      {/* progress bar */}
      <div style={{ height: 3, background: GRAY, margin: "8px 16px 0", borderRadius: 2 }}>
        <div style={{ height: "100%", width: `${(progress / clothes.length) * 100}%`, background: PINK, borderRadius: 2, transition: "width 0.3s" }} />
      </div>

      {/* card stack */}
      <div style={{ flex: 1, position: "relative", margin: "10px 16px 8px" }}>
        {/* next card */}
        {next && (
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
            borderRadius: 20, overflow: "hidden",
            transform: exiting ? "scale(1)" : "scale(0.95)",
            transformOrigin: "bottom center",
            transition: "transform 0.28s ease",
          }}>
            <img src={next.image} alt={next.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              background: "linear-gradient(transparent, rgba(0,0,0,0.65))",
              padding: "32px 16px 16px", color: WHITE, fontWeight: 800, fontSize: 18,
            }}>{next.name}</div>
          </div>
        )}

        {/* current card */}
        <div
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          style={{
            position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
            borderRadius: 20, overflow: "hidden",
            cursor: isDragging ? "grabbing" : "grab",
            transform: `translateX(${tx}px) rotate(${rot}deg)`,
            transition: exiting ? "transform 0.28s ease-out" : isDragging ? "none" : "transform 0.2s ease-out",
            userSelect: "none",
            touchAction: "none",
          }}
        >
          <img src={current.image} alt={current.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />

          {/* KEEP label */}
          <div style={{
            position: "absolute", top: 22, left: 14,
            background: GREEN, color: WHITE,
            fontWeight: 800, fontSize: 17, letterSpacing: 2,
            padding: "5px 13px", borderRadius: 8,
            opacity: keepOpacity,
            transform: "rotate(-12deg)",
          }}>KEEP ✓</div>

          {/* SKIP label */}
          <div style={{
            position: "absolute", top: 22, right: 14,
            background: RED, color: WHITE,
            fontWeight: 800, fontSize: 17, letterSpacing: 2,
            padding: "5px 13px", borderRadius: 8,
            opacity: skipOpacity,
            transform: "rotate(12deg)",
          }}>SKIP ✗</div>

          {/* name overlay */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            background: "linear-gradient(transparent, rgba(0,0,0,0.65))",
            padding: "32px 16px 16px", color: WHITE, fontWeight: 800, fontSize: 18,
          }}>{current.name}</div>
        </div>
      </div>

      {/* action buttons */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 32, padding: "4px 16px 14px" }}>
        <button
          onClick={() => swipe("left")}
          disabled={!!exiting}
          style={{
            width: 52, height: 52, borderRadius: "50%",
            background: WHITE, border: `2px solid ${RED}`, color: RED,
            fontSize: 20, cursor: exiting ? "default" : "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >✗</button>
        <span style={{ fontSize: 10, color: "#bbb", fontWeight: 600, minWidth: 32, textAlign: "center" }}>
          {progress + 1} / {clothes.length}
        </span>
        <button
          onClick={() => swipe("right")}
          disabled={!!exiting}
          style={{
            width: 52, height: 52, borderRadius: "50%",
            background: WHITE, border: `2px solid ${GREEN}`, color: GREEN,
            fontSize: 20, cursor: exiting ? "default" : "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >✓</button>
      </div>
    </div>
  );
}
