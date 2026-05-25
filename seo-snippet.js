// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.helpourmarriage-sandiego.org",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.helpourmarriage-sandiego.org/","title_tag":"Retrouvaille San Diego marriage help | Retrouvaille SoCal","meta_description":"Catholic Marriage Program in San Diego offering Retrouvaille weekends, marriage restoration, and divorce prevention support for struggling couples."},{"page_url":"https://www.helpourmarriage-sandiego.org/registration-donate","title_tag":"Couples Weekend San Diego retreat | Retrouvaille SoCal","meta_description":"Register for a San Diego Retrouvaille couples weekend retreat. Intensive Catholic marriage program with ongoing support and marriage restoration resources."},{"page_url":"https://www.helpourmarriage-sandiego.org/contact-info","title_tag":"Marriage help San Diego contact | Retrouvaille SoCal","meta_description":"Contact Retrouvaille of SoCal/San Diego for confidential marriage help, Catholic relationship support, and information on upcoming couples weekends."},{"page_url":"https://www.helpourmarriage-sandiego.org/faq-s-retrouvaille-san-diego","title_tag":"Retrouvaille San Diego FAQ | Marriage help program","meta_description":"Frequently asked questions about the San Diego Retrouvaille program, a Catholic marriage help and divorce prevention weekend for struggling couples."},{"page_url":"https://www.helpourmarriage-sandiego.org/goals-of-retrouvaille","title_tag":"Marriage restoration San Diego | About Retrouvaille","meta_description":"Learn how the Retrouvaille Program in San Diego restores marriages, strengthens communication, and offers long-term relationship support for couples."},{"page_url":"https://www.helpourmarriage-sandiego.org/speaking-with-your-spouse","title_tag":"Marriage help San Diego tips | Discuss Retrouvaille","meta_description":"Guidance for discussing the San Diego Retrouvaille marriage help program with your spouse and deciding if a couples weekend retreat is right for you."},{"page_url":"https://www.helpourmarriage-sandiego.org/four-stages-of-marriage","title_tag":"Marriage counseling San Diego alternative | Stages","meta_description":"Explore the four stages of marriage and how the San Diego Retrouvaille Program offers a faith-based alternative to traditional marriage counseling."},{"page_url":"https://www.helpourmarriage-sandiego.org/core-meetings-for-continuing-couples","title_tag":"Relationship support San Diego CORE | Retrouvaille","meta_description":"Ongoing relationship support in San Diego through Retrouvaille CORE meetings for couples who completed the weekend and post-sessions."},{"page_url":"https://www.helpourmarriage-sandiego.org/icm-sign-up","title_tag":"Retrouvaille Program San Diego ICM event","meta_description":"Sign up for the San Diego Retrouvaille ICM enrichment event to reconnect, recharge your marriage, and strengthen your Retrouvaille community."}],"keywords":["Retrouvaille San Diego","marriage help San Diego","couples weekend San Diego","marriage counseling San Diego","relationship support San Diego","weekend retreat San Diego","Catholic marriage program San Diego","divorce prevention San Diego","marriage restoration San Diego","Retrouvaille program San Diego"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.helpourmarriage-sandiego.org/#organization",
  "name": "Retrouvaille of SoCal/San Diego",
  "url": "https://www.helpourmarriage-sandiego.org/",
  "description": "Retrouvaille of SoCal/San Diego is a Catholic-based, volunteer-run marriage help program for couples in struggling relationships, offering a three-phase approach that begins with an intensive couples' weekend in San Diego followed by post-session meetings and ongoing CORE support groups to rebuild communication, trust, and intimacy.",
  "image": [
    "https://static.wixstatic.com/media/f89097_a6b19a6a33c24ae5be5f9d27a6280986%7Emv2.webp/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/f89097_a6b19a6a33c24ae5be5f9d27a6280986%7Emv2.webp",
    "https://static.wixstatic.com/media/f89097_6454c425b2aa4055b86cc815c0305d42~mv2.jpg/v1/fill/w_262,h_82,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f89097_6454c425b2aa4055b86cc815c0305d42~mv2.jpg"
  ],
  "telephone": "+1-951-259-9474",
  "email": "mailto:JoseandMary@helpourmarriage.org",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "San Diego",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "San Diego, California"
  },
  "foundingType": "NonprofitOrganization",
  "slogan": "No Marriage is Beyond Hope",
  "knowsAbout": [
    "marriage help",
    "marriage counseling alternatives",
    "Catholic marriage ministry",
    "marriage communication skills",
    "marriage separation support",
    "divorce prevention",
    "Retrouvaille program",
    "marriage retreats San Diego",
    "marriage problems",
    "relationship intimacy and communication",
    "four stages of marriage",
    "CORE marriage support meetings"
  ],
  "sameAs": [
    "https://www.facebook.com",
    "https://www.instagram.com"
  ],
  "serviceArea": {
    "@type": "AdministrativeArea",
    "name": "San Diego County"
  },
  "makesOffer": [
    {
      "@type": "Offer",
      "name": "Retrouvaille San Diego English Couples Weekend",
      "url": "https://www.helpourmarriage-sandiego.org/registration-donate",
      "category": "Marriage Help Program",
      "price": "700.00",
      "priceCurrency": "USD",
      "description": "Three-phase Retrouvaille marriage help program beginning with an intensive English-language couples' weekend in San Diego, followed by post-sessions and monthly CORE meetings to restore communication, intimacy, and trust in struggling marriages.",
      "eligibleRegion": {
        "@type": "AdministrativeArea",
        "name": "San Diego, California"
      },
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-09-04"
    },
    {
      "@type": "Offer",
      "name": "Retrouvaille San Diego Spanish Couples Weekend",
      "url": "https://www.helpourmarriage-sandiego.org/registration-donate",
      "category": "Marriage Help Program",
      "price": "550.00",
      "priceCurrency": "USD",
      "description": "Three-phase Retrouvaille marriage help program beginning with an intensive Spanish-language couples' weekend in San Diego, followed by post-sessions and monthly CORE meetings to restore communication, intimacy, and trust in struggling marriages.",
      "eligibleRegion": {
        "@type": "AdministrativeArea",
        "name": "San Diego, California"
      },
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-09-04"
    }
  ],
  "event": [
    {
      "@type": "Event",
      "name": "Retrouvaille San Diego English Couples Weekend",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "startDate": "2026-09-25",
      "endDate": "2026-09-27",
      "description": "An intensive Retrouvaille weekend in English for married couples in struggling relationships in San Diego, forming phase one of a three-phase program that helps restore communication, intimacy, and hope in marriage.",
      "location": {
        "@type": "Place",
        "name": "San Diego, CA",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "San Diego",
          "addressRegion": "CA",
          "addressCountry": "US"
        }
      },
      "offers": {
        "@type": "Offer",
        "url": "https://www.helpourmarriage-sandiego.org/registration-donate",
        "price": "700.00",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "organizer": {
        "@id": "https://www.helpourmarriage-sandiego.org/#organization"
      }
    },
    {
      "@type": "Event",
      "name": "Retrouvaille San Diego Spanish Couples Weekend",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "startDate": "2026-09-18",
      "endDate": "2026-09-20",
      "description": "An intensive Retrouvaille weekend in Spanish for married couples in struggling relationships in San Diego, forming phase one of a three-phase program that helps restore communication, intimacy, and hope in marriage.",
      "location": {
        "@type": "Place",
        "name": "San Diego, CA",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "San Diego",
          "addressRegion": "CA",
          "addressCountry": "US"
        }
      },
      "offers": {
        "@type": "Offer",
        "url": "https://www.helpourmarriage-sandiego.org/registration-donate",
        "price": "550.00",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "organizer": {
        "@id": "https://www.helpourmarriage-sandiego.org/#organization"
      }
    },
    {
      "@type": "Event",
      "name": "Retrouvaille ICM Enhancement Event 2025 - San Diego",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "startDate": "2025-10-25",
      "description": "Retrouvaille's Global Enrichment Celebration 2025 in San Diego, an ICM enhancement event designed to help alumni couples reunite, reengage, and recharge their marriage and local Retrouvaille community.",
      "location": {
        "@type": "Place",
        "name": "San Diego, CA",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "San Diego",
          "addressRegion": "CA",
          "addressCountry": "US"
        }
      },
      "offers": {
        "@type": "Offer",
        "url": "https://www.helpourmarriage-sandiego.org/icm-sign-up",
        "price": "75.00",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "organizer": {
        "@id": "https://www.helpourmarriage-sandiego.org/#organization"
      }
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Retrouvaille of SoCal/San Diego Programs",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Retrouvaille Three-Phase Marriage Help Program",
        "url": "https://www.helpourmarriage-sandiego.org/",
        "description": "Three-phase Retrouvaille marriage help program for couples in troubled marriages: an intensive weekend, a series of post-sessions, and ongoing monthly CORE small-group meetings."
      },
      {
        "@type": "Offer",
        "name": "CORE Ongoing Marriage Support Meetings",
        "url": "https://www.helpourmarriage-sandiego.org/core-meetings-for-continuing-couples",
        "description": "Monthly CORE (Continuing Our Retrouvaille Experience) small-group support meetings in multiple San Diego locations for couples who have completed the Retrouvaille weekend and post-sessions."
      }
    ]
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
