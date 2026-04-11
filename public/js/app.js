"use strict";
(() => {
  // public/ts/app.ts
  var LandingScene = class {
    constructor() {
      this.phone = document.getElementById("phone");
      this.initPhoneInteraction();
      this.initDynamicIsland();
    }
    // ── PHONE TAP ───────────────────────────────────────────────
    initPhoneInteraction() {
      const screen = this.phone.querySelector(".phone-screen");
      screen?.addEventListener("click", (e) => {
        this.createRipple(screen, e);
      });
    }
    createRipple(container, e) {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const ripple = document.createElement("div");
      Object.assign(ripple.style, {
        position: "absolute",
        left: `${x - 30}px`,
        top: `${y - 30}px`,
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        background: "rgba(255,255,255,0.18)",
        transform: "scale(0)",
        pointerEvents: "none",
        zIndex: "20",
        transition: "transform 0.55s ease, opacity 0.55s ease"
      });
      container.appendChild(ripple);
      requestAnimationFrame(() => {
        ripple.style.transform = "scale(8)";
        ripple.style.opacity = "0";
      });
      setTimeout(() => ripple.remove(), 600);
    }
    // ── DYNAMIC ISLAND ──────────────────────────────────────────
    initDynamicIsland() {
      const island = document.querySelector(".dynamic-island");
      if (!island)
        return;
      island.addEventListener("mouseenter", () => {
        island.style.width = "60%";
        island.style.height = "5%";
      });
      island.addEventListener("mouseleave", () => {
        island.style.width = "27%";
        island.style.height = "3.4%";
      });
    }
  };
  window.addEventListener("DOMContentLoaded", () => {
    new LandingScene();
  });
})();
//# sourceMappingURL=app.js.map
