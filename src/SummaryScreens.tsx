import React from "react";
import { PINK, BLACK, WHITE, GRAY, clothes } from "./constants";

export function SummaryScreen({ selected }: { selected: number[] }) {
  const items = clothes.filter(c => selected.includes(c.id));
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "24px 16px" }}>
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <div style={{ fontSize: 36 }}>🎉</div>
        <div style={{ fontWeight: 800, fontSize: 20, color: BLACK, letterSpacing: -0.5 }}>Ваш гардероб собран!</div>
        <div style={{ fontSize: 12, color: "#aaa", marginTop: 4 }}>
          {items.length > 0 ? `${items.length} piece${items.length > 1 ? "s" : ""} added` : "Здесь появятся вещи, которые вы добавили"}
        </div>
      </div>
      {items.length > 0 ? (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, flex: 1 }}>
          {items.map(item => (
            <div key={item.id} style={{
              background: item.color, borderRadius: 12,
              aspectRatio: "1",
              position: "relative", overflow: "hidden",
            }}>
              <img src={item.image} alt={item.name} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                background: "rgba(0,0,0,0.45)", color: WHITE,
                fontSize: 8, fontWeight: 700, padding: "4px 4px",
                textAlign: "center",
              }}>{item.name}</div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", color: "#ccc", fontSize: 13 }}>
          Ничего не добавлено
        </div>
      )}
      <button style={{
        marginTop: 20, height: 48, borderRadius: 24,
        background: BLACK, color: WHITE,
        border: "none", fontWeight: 700, fontSize: 15, cursor: "pointer",
      }}>Откройте гардероб →</button>
    </div>
  );
}

export function SummaryScreenList({ selected }: { selected: number[] }) {
  const items = clothes.filter(c => selected.includes(c.id));
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "24px 16px" }}>
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 36 }}>🎉</div>
        <div style={{ fontWeight: 800, fontSize: 20, color: BLACK, letterSpacing: -0.5, marginTop: 8 }}>Ваш гардероб собран!</div>
        <div style={{ fontSize: 12, color: "#aaa", marginTop: 4 }}>
          {items.length > 0 ? `${items.length} piece${items.length > 1 ? "s" : ""} added` : "Здесь появятся вещи, которые вы добавили"}
        </div>
      </div>
      {items.length > 0 ? (
        <div style={{ flex: 1, overflowY: "auto" }}>
          {items.map(item => (
            <div key={item.id} style={{
              display: "flex", alignItems: "center", gap: 12,
              padding: "10px 0", borderBottom: `1px solid ${GRAY}`,
            }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, flexShrink: 0, overflow: "hidden" }}>
                <img src={item.image} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ flex: 1, fontWeight: 600, fontSize: 13, color: BLACK }}>{item.name}</div>
              <div style={{
                width: 20, height: 20, borderRadius: "50%", background: PINK,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 10, color: WHITE, fontWeight: 700,
              }}>✓</div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", color: "#ccc", fontSize: 13 }}>
          Ничего не добавлено
        </div>
      )}
      <button style={{
        marginTop: 20, height: 48, borderRadius: 24,
        background: BLACK, color: WHITE,
        border: "none", fontWeight: 700, fontSize: 15, cursor: "pointer",
      }}>Откройте гардероб →</button>
    </div>
  );
}
