import React, { useState } from "react";
import { BLACK, WHITE, GRAY, PINK } from "./constants";
import travelAdvertisement from "./assets/travel_sample_adv.png";

const posts = [
  {
    id: 1,
    author: "XXX Travel",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo8AbRN0QUWkfHdjN5IOV4DhuY_xYNT4laKQ&s",
    image: travelAdvertisement,
    caption: "Реклама XXX Travel",
    likes: 284,
    time: "2h ago",
  }
];

export function FeedScreenMain() {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const toggleLike = (id: number) => {
    setLikedPosts((prev) =>
      prev.includes(id)
        ? prev.filter((postId) => postId !== id)
        : [...prev, id]
    );
  };

  return (
    <div
      style={{
        flex: 1,
        background: "#fafafa",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "28px 20px 18px",
          background: WHITE,
          borderBottom: "1px solid #f0f0f0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 800,
              color: BLACK,
              letterSpacing: -1,
            }}
          >
            Идеи
          </div>
        </div>

        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 22,
            background:
              "linear-gradient(135deg, rgb(255, 232, 250) 0%, rgb(244, 240, 255) 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
          }}
        >
          ✨
        </div>
      </div>

      {/* Feed */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "18px 16px 100px",
          display: "flex",
          flexDirection: "column",
          gap: 22,
        }}
      >
        {posts.map((post) => {
          const liked = likedPosts.includes(post.id);

          return (
            <div
              key={post.id}
              style={{
                background: WHITE,
                borderRadius: 28,
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              }}
            >
              {/* Author */}
              <div
                style={{
                  padding: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <img
                    src={post.avatar}
                    alt={post.author}
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 21,
                      objectFit: "cover",
                    }}
                  />

                  <div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: BLACK,
                      }}
                    >
                      {post.author}
                    </div>

                    <div
                      style={{
                        fontSize: 12,
                        color: "#999",
                        marginTop: 2,
                      }}
                    >
                      {post.time}
                    </div>
                  </div>
                </div>

                <button
                  style={{
                    border: "none",
                    background: "transparent",
                    fontSize: 20,
                    cursor: "pointer",
                    color: "#bbb",
                  }}
                >
                  ⋯
                </button>
              </div>

              {/* Post image */}
              <div style={{ position: "relative" }}>
                <img
                  src={post.image}
                  alt={post.caption}
                  style={{
                    width: "100%",
                    height: 380,
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                <button
                  onClick={() => toggleLike(post.id)}
                  style={{
                    position: "absolute",
                    right: 16,
                    bottom: 16,
                    width: 52,
                    height: 52,
                    borderRadius: 26,
                    border: "none",
                    background: liked ? PINK : "rgba(255,255,255,0.92)",
                    color: liked ? WHITE : BLACK,
                    fontSize: 22,
                    cursor: "pointer",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                    transition: "all 0.2s ease",
                  }}
                >
                  ♥
                </button>
              </div>

              {/* Caption */}
              <div
                style={{
                  padding: "18px 18px 20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: BLACK,
                    }}
                  >
                    {post.likes + (liked ? 1 : 0)}
                  </span>

                  <span
                    style={{
                      fontSize: 13,
                      color: "#999",
                    }}
                  >
                    likes
                  </span>
                </div>

                <div
                  style={{
                    fontSize: 14,
                    lineHeight: 1.5,
                    color: "#555",
                  }}
                >
                  <span
                    style={{
                      fontWeight: 700,
                      color: BLACK,
                    }}
                  >
                    {post.author}
                  </span>{" "}
                  {post.caption}
                </div>
              </div>
            </div>
          );
        })}
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


export function FeedScreenAdvertise() {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const toggleLike = (id: number) => {
    setLikedPosts((prev) =>
      prev.includes(id)
        ? prev.filter((postId) => postId !== id)
        : [...prev, id]
    );
  };

  return (
    <div
      style={{
        flex: 1,
        background: "#fafafa",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "28px 20px 18px",
          background: WHITE,
          borderBottom: "1px solid #f0f0f0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 800,
              color: BLACK,
              letterSpacing: -1,
            }}
          >
            Идеи
          </div>
        </div>

        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 22,
            background:
              "linear-gradient(135deg, rgb(255, 232, 250) 0%, rgb(244, 240, 255) 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
          }}
        >
          ✨
        </div>
      </div>

      {/* Feed */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "18px 16px 100px",
          display: "flex",
          flexDirection: "column",
          gap: 22,
        }}
      >
        {posts.map((post) => {
          const liked = likedPosts.includes(post.id);

          return (
            <div
              key={post.id}
              style={{
                background: WHITE,
                borderRadius: 28,
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              }}
            >
              {/* Author */}
              <div
                style={{
                  padding: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <img
                    src={post.avatar}
                    alt={post.author}
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 21,
                      objectFit: "cover",
                    }}
                  />

                  <div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: BLACK,
                      }}
                    >
                      {post.author}
                    </div>

                    <div
                      style={{
                        fontSize: 12,
                        color: "#999",
                        marginTop: 2,
                      }}
                    >
                      {post.time}
                    </div>
                  </div>
                </div>

                <button
                  style={{
                    border: "none",
                    background: "transparent",
                    fontSize: 20,
                    cursor: "pointer",
                    color: "#bbb",
                  }}
                >
                  ⋯
                </button>
              </div>

              {/* Post image */}
              <div style={{ position: "relative" }}>
                <img
                  src={post.image}
                  alt={post.caption}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                    display: "block",
                  }}
                />

                <button
                  onClick={() => toggleLike(post.id)}
                  style={{
                    position: "absolute",
                    right: 16,
                    bottom: 16,
                    width: 52,
                    height: 52,
                    borderRadius: 26,
                    border: "none",
                    background: liked ? PINK : "rgba(255,255,255,0.92)",
                    color: liked ? WHITE : BLACK,
                    fontSize: 22,
                    cursor: "pointer",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                    transition: "all 0.2s ease",
                  }}
                >
                  ♥
                </button>
              </div>

              {/* Caption */}
              <div
                style={{
                  padding: "18px 18px 20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: BLACK,
                    }}
                  >
                    {post.likes + (liked ? 1 : 0)}
                  </span>

                  <span
                    style={{
                      fontSize: 13,
                      color: "#999",
                    }}
                  >
                    likes
                  </span>
                </div>

                <div
                  style={{
                    fontSize: 14,
                    lineHeight: 1.5,
                    color: "#555",
                  }}
                >
                  <span
                    style={{
                      fontWeight: 700,
                      color: BLACK,
                    }}
                  >
                    {post.author}
                  </span>{" "}
                  {post.caption}
                </div>
              </div>
            </div>
          );
        })}
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
