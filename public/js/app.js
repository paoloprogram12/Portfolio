"use strict";
(() => {
  // public/ts/app.ts
  var LandingScene = class {
    constructor() {
      this.initPhoneInteraction();
      this.initDynamicIsland();
      this.initStatusBar();
    }
    // ── PHONE TAP ───────────────────────────────────────────────
    initPhoneInteraction() {}
    // ── DYNAMIC ISLAND ──────────────────────────────────────────
    initDynamicIsland() {
      const island = document.querySelector(".dynamic-island");
      if (!island) return;
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
