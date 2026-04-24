"use strict";
(() => {
  // public/ts/app.ts
  var LandingScene = class {
    constructor() {
      this.initPhoneInteraction();
      this.initDynamicIsland();
      this.initStatusBar();
      this.initViewTransitions();
    }
    // ── PHONE TAP ───────────────────────────────────────────────
    initPhoneInteraction() {}
    // ── DYNAMIC ISLAND ──────────────────────────────────────────
    initDynamicIsland() {
      const island = document.querySelector(".dynamic-island");
      if (!island) return;
    }
    // ── VIEW TRANSITIONS ────────────────────────────────────────
    initViewTransitions() {
      const splash     = document.querySelector(".splash");
      const player     = document.getElementById("playerView");
      const ctaBtn     = document.querySelector(".splash-cta");
      const backBtn    = document.getElementById("playerBack");

      ctaBtn?.addEventListener("click", () => {
        splash.style.transition = "opacity 0.25s ease";
        splash.style.opacity = "0";
        splash.style.pointerEvents = "none";
        setTimeout(() => { player.classList.add("active"); }, 200);
      });

      backBtn?.addEventListener("click", () => {
        player.classList.remove("active");
        setTimeout(() => {
          splash.style.opacity = "1";
          splash.style.pointerEvents = "all";
        }, 250);
      });
    }
    // ── STATUS BAR ──────────────────────────────────────────────
    initStatusBar() {
      const timeEl = document.querySelector(".status-time");
      const batteryEl = document.querySelector(".status-battery-pct");
      const updateTime = () => {
        if (!timeEl) return;
        const now = new Date();
        const h = now.getHours();
        const m = now.getMinutes().toString().padStart(2, "0");
        timeEl.textContent = `${h}:${m}`;
      };
      updateTime();
      setInterval(updateTime, 10000);
      if (batteryEl && "getBattery" in navigator) {
        navigator.getBattery().then((battery) => {
          const update = () => {
            batteryEl.textContent = `${Math.round(battery.level * 100)}%`;
          };
          update();
          battery.addEventListener("levelchange", update);
        });
      }
    }
  };
  window.addEventListener("DOMContentLoaded", () => {
    new LandingScene();
  });
})();
//# sourceMappingURL=app.js.map
