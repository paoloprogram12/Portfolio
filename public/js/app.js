"use strict";
(() => {
  // public/ts/app.ts
  var LandingScene = class {
    constructor() {
      this.initPhoneInteraction();
      this.initDynamicIsland();
      this.initStatusBar();
      this.initViewTransitions();
      this.initScrollIsolation();
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
      const splash      = document.querySelector(".splash");
      const player      = document.getElementById("playerView");
      const ctaBtn      = document.querySelector(".splash-cta");
      const backBtn     = document.getElementById("playerBack");
      const eduCard     = document.getElementById("openEducation");
      const eduView     = document.getElementById("educationView");
      const eduBack     = document.getElementById("educationBack");

      const showView = (el) => el.classList.add("active");
      const hideView = (el) => el.classList.remove("active");

      ctaBtn?.addEventListener("click", () => {
        splash.style.transition = "opacity 0.25s ease";
        splash.style.opacity = "0";
        splash.style.pointerEvents = "none";
        setTimeout(() => showView(player), 200);
      });

      backBtn?.addEventListener("click", () => {
        hideView(player);
        setTimeout(() => {
          splash.style.opacity = "1";
          splash.style.pointerEvents = "all";
        }, 250);
      });

      eduCard?.addEventListener("click", () => {
        showView(eduView);
      });

      eduBack?.addEventListener("click", () => {
        hideView(eduView);
      });
    }
    // ── SCROLL ISOLATION ────────────────────────────────────────
    initScrollIsolation() {
      const scrollEls = document.querySelectorAll('.player-list, .pv-scroll');
      scrollEls.forEach(el => {
        el.addEventListener('wheel', (e) => {
          const atTop = el.scrollTop === 0;
          const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
          if ((atTop && e.deltaY < 0) || (atBottom && e.deltaY > 0)) {
            e.preventDefault();
          }
          e.stopPropagation();
        }, { passive: false });

        el.addEventListener('touchstart', (e) => e.stopPropagation(), { passive: true });
        el.addEventListener('touchmove', (e) => e.stopPropagation(), { passive: true });
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
