import React, { useState } from "react";
import { BLACK, WHITE, GRAY, PINK } from "./constants";

import greyCoat from "./assets/grey_coat.webp";
import blouse from "./assets/blouse2.webp";

const suggestedItems = [
  {
    id: 1,
    name: "Классическое серое пальто",
    image: greyCoat,
    commentary: "Одежда по погоде",
  },
  {
    id: 2,
    name: "Белая блузка",
    image: blouse,
    commentary: "Чтобы не повторяться"
  },
  {
    id: 3,
    name: "Black Hoodie",
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=400",
  },
];

export function MainScreen() {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setSelectedItems((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id]
    );
  };

  return (
    <div
      style={{
        flex: 1,
        background: WHITE,
        padding: "28px 20px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 24,
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Account block */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div
            style={{
              fontSize: 12,
              color: "#999",
              marginBottom: 4,
              letterSpacing: 0.4,
            }}
          >
            Для вас,
          </div>

          <div
            style={{
              fontSize: 28,
              fontWeight: 800,
              color: BLACK,
              letterSpacing: -1,
            }}
          >
            Мария Назарова
          </div>
        </div>

        <div
          style={{
            width: 46,
            height: 46,
            borderRadius: 23,
            background: "#f5d7f5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            color: PINK,
            fontSize: 16,
          }}
        >
          МН
        </div>
      </div>

      {/* Weather widget */}
      <div
        style={{
          background:
            "linear-gradient(135deg, rgb(255, 232, 250) 0%, rgb(244, 240, 255) 100%)",
          borderRadius: 0,
          marginLeft: -20,
          width: "100%",
          padding: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
        }}
      >
        <div>
          <div
            style={{
              fontSize: 14,
              color: "#777",
              marginBottom: 8,
              fontWeight: 500,
            }}
          >
            Москва и МО
          </div>

          <div
            style={{
              fontSize: 42,
              fontWeight: 800,
              color: BLACK,
              lineHeight: 1,
            }}
          >
            14°
          </div>

          <div
            style={{
              marginTop: 8,
              fontSize: 14,
              color: "#666",
            }}
          >
            Дождливо, не забудьте <i>выбрать зонтик</i>
          </div>
        </div>

        <div
          style={{
            width: 88,
            height: 88,
            borderRadius: 44,
            background: "rgba(255,255,255,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 42,
          }}
        >
          ☁️
        </div>
      </div>

      {/* Suggested collection */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: BLACK,
            }}
          >
            Возьмите:
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          {suggestedItems.map((item) => {
            const isSelected = selectedItems.includes(item.id);

            return (
              <div
                key={item.id}
                onClick={() => toggleItem(item.id)}
                style={{
                  position: "relative",
                  background: isSelected ? "#f7fdf7" : GRAY,
                  borderRadius: 20,
                  padding: 12,
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  cursor: "pointer",
                  border: isSelected
                    ? "2px solid #5BCB77"
                    : "2px solid transparent",
                  transition: "all 0.2s ease",
                }}
              >
                {/* Selection badge */}
                {isSelected && (
                  <div
                    style={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      width: 24,
                      height: 24,
                      borderRadius: 12,
                      background: "#5BCB77",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: WHITE,
                      fontSize: 13,
                      fontWeight: 800,
                      boxShadow: "0 4px 10px rgba(91,203,119,0.3)",
                    }}
                  >
                    ✓
                  </div>
                )}

                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: 16,
                    objectFit: "cover",
                  }}
                />

                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: BLACK,
                      marginBottom: 6,
                    }}
                  >
                    {item.name}
                  </div>

                  <div
                    style={{
                      fontSize: 13,
                      color: "#888",
                    }}
                  >
                    {item.commentary}
                  </div>
                </div>

                <button
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 18,
                    border: "none",
                    background: WHITE,
                    cursor: "pointer",
                    fontSize: 18,
                    color: BLACK,
                  }}
                >
                  →
                </button>
              </div>
            );
          })}
        </div>
      </div>
      {/* Bottom nav bar */}
    <div
        style={{
            marginTop: "auto",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "12px 0 10px",
            borderTop: `1px solid ${GRAY}`,
            background: WHITE,
        }}
    >
        {[
            ["🏠", "Main"],
            ["👗", "Collections"],
            ["📅", "Calendar"],
            ["✦", "Ideas"],
        ].map(([icon, label], i) => {
            const active = i === 0;

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
                    transition: "all 0.2s ease",
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