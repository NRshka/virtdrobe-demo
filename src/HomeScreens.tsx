import React from "react";
import { PINK, BLACK, WHITE, GRAY, clothes } from "./constants";

export function HomeScreen({ selected }: { selected: number[] }) {
  const items = clothes.filter(c => selected.includes(c.id));
  const show = items.length > 0 ? items : clothes.slice(0, 3);
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "20px 16px 0" }}>
        <div style={{ fontSize: 11, color: "#aaa", fontWeight: 600, letterSpacing: 1 }}>Доброе утро</div>
        <div style={{ fontSize: 22, fontWeight: 800, color: BLACK, letterSpacing: -0.5 }}>Гардероб Маши</div>
      </div>
      <div style={{ display: "flex", gap: 8, padding: "16px 16px 0", overflowX: "auto" }}>
        {["All", "Tops", "Bottoms", "Outerwear"].map((t, i) => (
          <div key={t} style={{
            padding: "6px 14px", borderRadius: 20, whiteSpace: "nowrap",
            background: i === 0 ? PINK : GRAY,
            color: i === 0 ? WHITE : "#888",
            fontSize: 11, fontWeight: 700, cursor: "pointer",
          }}>{t}</div>
        ))}
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: "12px 12px 16px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {show.map(item => (
            <div key={item.id} style={{
              borderRadius: 16, background: item.color,
              aspectRatio: "3/4", position: "relative", overflow: "hidden",
            }}>
              <img src={item.image} alt={item.name} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                background: "linear-gradient(transparent, rgba(0,0,0,0.5))",
                padding: "20px 10px 10px", color: WHITE,
                fontSize: 10, fontWeight: 700,
              }}>{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom navigation */}
      <div
        style={{
          position: "sticky",
          bottom: 0,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "12px 0 10px",
          borderTop: `1px solid ${GRAY}`,
          background: WHITE,
        }}
      >
        {[
          ["🏠", "Дом"],
          ["👗", "Коллекции"],
          ["📅", "Календарь"],
          ["✦", "Идеи"],
        ].map(([icon, label], i) => {
          const active = i === 3;

          return (
            <div
              key={label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
                cursor: "pointer",
                minWidth: 64,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  background: active ? "#fdf2fd" : "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontSize: 18,
                    opacity: active ? 1 : 0.7,
                  }}
                >
                  {icon}
                </span>
              </div>

              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: active ? PINK : "#aaa",
                  letterSpacing: 0.2,
                }}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function HomeScreenFeatured({ selected }: { selected: number[] }) {
  const items = clothes.filter(c => selected.includes(c.id));
  const show = items.length > 0 ? items : clothes.slice(0, 4);
  const [featured, ...rest] = show;
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "20px 16px 12px" }}>
        <div style={{ fontSize: 11, color: "#aaa", fontWeight: 600, letterSpacing: 1 }}>Доброе утро</div>
        <div style={{ fontSize: 22, fontWeight: 800, color: BLACK, letterSpacing: -0.5 }}>Гардероб Маши</div>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: "0 12px 16px" }}>
        {featured && (
          <div style={{
            borderRadius: 20, background: featured.color,
            aspectRatio: "16/9", position: "relative", overflow: "hidden",
            marginBottom: 10,
          }}>
            <img src={featured.image} alt={featured.name} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              background: "linear-gradient(transparent, rgba(0,0,0,0.55))",
              padding: "20px 14px 14px", color: WHITE,
              fontSize: 14, fontWeight: 800,
            }}>{featured.name}</div>
          </div>
        )}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
          {rest.slice(0, 3).map(item => (
            <div key={item.id} style={{
              borderRadius: 12, background: item.color,
              aspectRatio: "1", position: "relative", overflow: "hidden",
            }}>
              <img src={item.image} alt={item.name} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                background: "rgba(0,0,0,0.45)", color: WHITE,
                fontSize: 7, fontWeight: 700, padding: "3px 4px", textAlign: "center",
              }}>{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      {/* bottom nav */}
      <div style={{
        display: "flex", justifyContent: "space-around",
        padding: "10px 0", borderTop: `1px solid ${GRAY}`,
        background: WHITE,
      }}>
        {[["🏠", "Домой"], ["👗", "Гардероб"], ["✦", "Наряды"], ["👤", "Профиль"]].map(([icon, label], i) => (
          <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
            <span style={{ fontSize: 18 }}>{icon}</span>
            <span style={{ fontSize: 9, fontWeight: 600, color: i === 0 ? PINK : "#aaa" }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
