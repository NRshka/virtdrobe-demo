import React, { useState } from "react";
import { PINK, BLACK, WHITE, GRAY } from "./constants";

export function SignUpScreen() {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ flex: 1, padding: "32px 24px 24px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontSize: 28, fontWeight: 800, color: BLACK, letterSpacing: -1 }}>Введите<br />номер телефона</div>
        <div style={{ marginTop: 8, fontSize: 13, color: "#888" }}>Мы отправим вам код для подтверждения.</div>
      </div>
      <div style={{ marginBottom: 14 }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: "#aaa", marginBottom: 4, letterSpacing: 0.5 }}>НОМЕР ТЕЛЕФОНА</div>
        <div
          onMouseEnter={() => setFocused(true)}
          onMouseLeave={() => setFocused(false)}
          style={{
            height: 44, borderRadius: 12,
            border: `1.5px solid ${focused ? PINK : "#e0e0e0"}`,
            background: focused ? "#fdf5fd" : GRAY,
            padding: "0 14px",
            display: "flex", alignItems: "center", gap: 10,
            fontSize: 14, color: "#bbb",
            transition: "all 0.2s",
          }}
        >
          <span style={{ color: "#aaa", fontWeight: 600, borderRight: "1.5px solid #e0e0e0", paddingRight: 10 }}>🇺🇸 +1</span>
          <span>(555) 000-0000</span>
        </div>
      </div>
      <div style={{ fontSize: 11, color: "#bbb", lineHeight: 1.5, marginBottom: 8 }}>
        Продолжая, вы соглашаетесь с нашими <span style={{ color: PINK, fontWeight: 600 }}>правилами</span> и <span style={{ color: PINK, fontWeight: 600 }}>политикой безопасности</span>.
      </div>
      <button style={{
        marginTop: 16, height: 48, borderRadius: 24,
        background: BLACK, color: WHITE,
        border: "none", fontWeight: 700, fontSize: 15,
        cursor: "pointer", letterSpacing: 0.3,
      }}>Войти →</button>
    </div>
  );
}

export function SignUpScreenEmail() {
  const [focused, setFocused] = useState<string | null>(null);
  return (
    <div style={{ flex: 1, padding: "32px 24px 24px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontSize: 28, fontWeight: 800, color: BLACK, letterSpacing: -1 }}>Создайте<br />аккаунт</div>
        <div style={{ marginTop: 8, fontSize: 13, color: "#888" }}>Для вашего <i>лучшего</i> гардероба.</div>
      </div>
      {["Email address", "Password"].map((label) => (
        <div key={label} style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: "#aaa", marginBottom: 4, letterSpacing: 0.5 }}>{label.toUpperCase()}</div>
          <div
            onMouseEnter={() => setFocused(label)}
            onMouseLeave={() => setFocused(null)}
            style={{
              height: 44, borderRadius: 12,
              border: `1.5px solid ${focused === label ? PINK : "#e0e0e0"}`,
              background: focused === label ? "#fdf5fd" : GRAY,
              padding: "0 14px",
              display: "flex", alignItems: "center",
              fontSize: 14, color: "#bbb",
              transition: "all 0.2s",
            }}
          >
            {label === "Password" ? "••••••••" : "janedow@email.com"}
          </div>
        </div>
      ))}
      <button style={{
        marginTop: 16, height: 48, borderRadius: 24,
        background: BLACK, color: WHITE,
        border: "none", fontWeight: 700, fontSize: 15,
        cursor: "pointer", letterSpacing: 0.3,
      }}>Зарегистрироваться</button>
      <div style={{ marginTop: 16, textAlign: "center", fontSize: 12, color: "#aaa" }}>
        Уже есть аккаунт? <span style={{ color: PINK, fontWeight: 600 }}>Войти</span>
      </div>
    </div>
  );
}