(function () {
  "use strict";

  const body = document.body;
  const header = document.querySelector(".site-header");

  // ── 1. SCROLL PROGRESS BAR ──────────────────────────────────────────
  const progressBar = document.createElement("div");
  progressBar.className = "scroll-progress";
  progressBar.setAttribute("aria-hidden", "true");
  document.body.appendChild(progressBar);

  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + "%";
  }

  // ── 2. HOME HERO: TRANSPARENT HEADER ───────────────────────────────
  function setupHeroHeader() {
    if (!header || body.dataset.page !== "home") return;

    function setHeroState() {
      if (window.scrollY < 80) {
        header.classList.add("is-hero");
      } else {
        header.classList.remove("is-hero");
      }
    }

    setHeroState();
    window.addEventListener("scroll", setHeroState, { passive: true });
  }

  // ── 3. SECTION SURFACE TRACKING (color-change feel) ────────────────
  // Watches sections as they enter the viewport and adds .is-surface-active.
  // Also updates header's data-active-surface for potential CSS hooks.
  function setupSurfaceTracking() {
    const sections = document.querySelectorAll("[data-surface]");
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-surface-active");
            if (header) {
              header.dataset.activeSurface =
                entry.target.dataset.surface || "light";
            }
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: "-72px 0px 0px 0px",
      }
    );

    sections.forEach((s) => observer.observe(s));
  }

  // ── INIT ─────────────────────────────────────────────────────────────
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  setupHeroHeader();
  setupSurfaceTracking();
})();
