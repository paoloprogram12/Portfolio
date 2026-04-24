// ============================================================
//  Portfolio — Landing page interactions
// ============================================================

class LandingScene {
  constructor() {
    this.initPhoneInteraction();
    this.initDynamicIsland();
    this.initStatusBar();
  }

  // ── PHONE TAP ───────────────────────────────────────────────
  private initPhoneInteraction(): void {}

  // ── DYNAMIC ISLAND ──────────────────────────────────────────
  private initDynamicIsland(): void {
    const island = document.querySelector<HTMLElement>('.dynamic-island');
    if (!island) return;
  }

  // ── STATUS BAR ──────────────────────────────────────────────
  private initStatusBar(): void {
    const timeEl = document.querySelector<HTMLElement>('.status-time');
    const batteryEl = document.querySelector<HTMLElement>('.status-battery-pct');

    const updateTime = () => {
      if (!timeEl) return;
      const now  = new Date();
      const h    = now.getHours();
      const m    = now.getMinutes().toString().padStart(2, '0');
      timeEl.textContent = `${h}:${m}`;
    };

    updateTime();
    setInterval(updateTime, 10000);

    if (batteryEl && 'getBattery' in navigator) {
      (navigator as any).getBattery().then((battery: any) => {
        const update = () => {
          batteryEl.textContent = `${Math.round(battery.level * 100)}%`;
        };
        update();
        battery.addEventListener('levelchange', update);
      });
    }
  }
}

window.addEventListener('DOMContentLoaded', () => { new LandingScene(); });
