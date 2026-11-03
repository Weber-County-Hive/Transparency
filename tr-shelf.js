/* Hive library standard: call-number block at the bottom of every page, page tools
   (call number, jump menu, copy link, share) and a Top button.
   Add a page to "pages" and every page's list and next/previous update.
   Reads the one shared shelf list in the Hive library (hive-shelves.js),
   so a call number from any Hive repo works in this page's search. */
var HBX = {
  "prefix": "TR",
  "repoName": "Transparency",
  "pages": [
    {
      "callNumber": "TR 000.01",
      "slug": "index",
      "name": "Transparency: every case file"
    },
    {
      "callNumber": "TR 100.01",
      "slug": "weber-hive-5th5th-sales-tax",
      "name": "Weber County's New Sales Tax, Part 1"
    },
    {
      "callNumber": "TR 100.02",
      "slug": "weber-hive-5th5th-sales-tax-part-2",
      "name": "Weber County's New Sales Tax, Part 2"
    },
    {
      "callNumber": "TR 100.03",
      "slug": "weber-hive-5th5th-sales-tax-part-3",
      "name": "Weber County's New Sales Tax, Part 3"
    },
    {
      "callNumber": "TR 100.04",
      "slug": "weber-hive-5th5th-sales-tax-plain",
      "name": "Weber County's New Sales Tax, in Plain Words"
    },
    {
      "callNumber": "TR 100.05",
      "slug": "weber-county-tax-increases-since-2019",
      "name": "Every Weber County Property Tax Increase Since 2019"
    },
    {
      "callNumber": "TR 100.06",
      "slug": "weber-county-tax-increases-since-2019-plain",
      "name": "Weber County Tax Increases, in Plain Words"
    },
    {
      "callNumber": "TR 100.07",
      "slug": "west-haven-energy-tax",
      "name": "West Haven's Energy Tax"
    },
    {
      "callNumber": "TR 100.08",
      "slug": "west-haven-energy-tax-plain",
      "name": "West Haven's Energy Tax, in Plain Words"
    },
    {
      "callNumber": "TR 100.09",
      "slug": "weber-fire-district-annexation",
      "name": "A New Line on the Bill: Roy and Riverdale's Fire Annexation, Part 1"
    },
    {
      "callNumber": "TR 100.10",
      "slug": "weber-fire-district-annexation-part-2",
      "name": "A New Line on the Bill, Part 2"
    },
    {
      "callNumber": "TR 100.11",
      "slug": "weber-fire-district-annexation-plain",
      "name": "Roy and Riverdale's Fire Annexation, in Plain Words"
    },
    {
      "callNumber": "TR 100.12",
      "slug": "weber-fire-district-growth",
      "name": "Paying for the Next Station, Part 1"
    },
    {
      "callNumber": "TR 100.13",
      "slug": "weber-fire-district-growth-part-2",
      "name": "Paying for the Next Station, Part 2"
    },
    {
      "callNumber": "TR 100.14",
      "slug": "weber-fire-district-growth-part-3",
      "name": "Paying for the Next Station, Part 3"
    },
    {
      "callNumber": "TR 100.15",
      "slug": "weber-fire-district-growth-part-4",
      "name": "Paying for the Next Station, Part 4"
    },
    {
      "callNumber": "TR 100.16",
      "slug": "weber-fire-district-growth-plain",
      "name": "Paying for the Next Station, in Plain Words"
    },
    {
      "callNumber": "TR 200.01",
      "slug": "weber-hive-sitla-explainer",
      "name": "SITLA: The Land Nobody Zones"
    },
    {
      "callNumber": "TR 200.02",
      "slug": "weber-hive-sitla-explainer-plain",
      "name": "The Land Nobody Zones, in Plain Words"
    },
    {
      "callNumber": "TR 200.03",
      "slug": "sitla-county-zoning-exemption",
      "name": "The Land Counties Can't Zone"
    },
    {
      "callNumber": "TR 200.04",
      "slug": "sitla-county-zoning-exemption-plain",
      "name": "The Land Counties Can't Zone, in Plain Words"
    },
    {
      "callNumber": "TR 200.05",
      "slug": "sb258-preliminary-municipalities",
      "name": "One Vote, Four Checks (S.B. 258)"
    },
    {
      "callNumber": "TR 200.06",
      "slug": "sb258-preliminary-municipalities-plain",
      "name": "One Vote, Four Checks, in Plain Words"
    },
    {
      "callNumber": "TR 200.07",
      "slug": "waldrip-funding-threat",
      "name": "Wrong Room, Right Message"
    },
    {
      "callNumber": "TR 200.08",
      "slug": "waldrip-funding-threat-plain",
      "name": "Wrong Room, Right Message, in Plain Words"
    },
    {
      "callNumber": "TR 200.09",
      "slug": "weber-hive-powder-mountain-water",
      "name": "Wells at the Top: Powder Mountain's Water"
    },
    {
      "callNumber": "TR 200.10",
      "slug": "weber-hive-powder-mountain-water-plain",
      "name": "Wells at the Top, in Plain Words"
    },
    {
      "callNumber": "TR 200.11",
      "slug": "weber-hive-then-vs-now",
      "name": "Then vs. Now: Earlier Plans and Later Approvals in Ogden Valley"
    },
    {
      "callNumber": "TR 200.12",
      "slug": "weber-hive-then-vs-now-part-2",
      "name": "Then vs. Now, Part 2"
    },
    {
      "callNumber": "TR 200.13",
      "slug": "weber-hive-then-vs-now-plain",
      "name": "Then vs. Now, in Plain Words"
    },
    {
      "callNumber": "TR 200.14",
      "slug": "weber-housing-authority",
      "name": "Weber Housing Authority"
    },
    {
      "callNumber": "TR 200.15",
      "slug": "weber-housing-authority-plain",
      "name": "The Weber Housing Authority, in Plain Words"
    },
    {
      "callNumber": "TR 200.16",
      "slug": "tyson-eagle-mountain-closure",
      "name": "Tyson Leaves Eagle Mountain Five Years After Opening"
    },
    {
      "callNumber": "TR 200.17",
      "slug": "tyson-eagle-mountain-closure-plain",
      "name": "Tyson Leaves Eagle Mountain, in Plain Words"
    },
    {
      "callNumber": "TR 200.18",
      "slug": "counting-the-jobs",
      "name": "Counting the Jobs, Part 1"
    },
    {
      "callNumber": "TR 200.19",
      "slug": "counting-the-jobs-part-2",
      "name": "Counting the Jobs, Part 2"
    },
    {
      "callNumber": "TR 200.20",
      "slug": "counting-the-jobs-plain",
      "name": "Counting the Jobs, in Plain Words"
    },
    {
      "callNumber": "TR 300.01",
      "slug": "weber-hive-at-risk-checkbox",
      "name": "The Checkbox"
    },
    {
      "callNumber": "TR 300.02",
      "slug": "weber-hive-at-risk-checkbox-plain",
      "name": "The Checkbox, in Plain Words"
    },
    {
      "callNumber": "TR 300.03",
      "slug": "weber-hive-blank-box",
      "name": "The Blank Box: Three Disclosure Forms, One Pattern"
    },
    {
      "callNumber": "TR 300.04",
      "slug": "weber-hive-blank-box-plain",
      "name": "The Blank Box, in Plain Words"
    },
    {
      "callNumber": "TR 300.05",
      "slug": "weber-hive-enforcement-gap",
      "name": "Utah's Campaign-Finance Enforcement Gap"
    },
    {
      "callNumber": "TR 300.06",
      "slug": "weber-hive-enforcement-gap-plain",
      "name": "The Enforcement Gap, in Plain Words"
    },
    {
      "callNumber": "TR 300.07",
      "slug": "weber-hive-bait-and-switch",
      "name": "Bills That Did the Opposite, Part 1"
    },
    {
      "callNumber": "TR 300.08",
      "slug": "weber-hive-bait-and-switch-part-2",
      "name": "Bills That Did the Opposite, Part 2"
    },
    {
      "callNumber": "TR 300.09",
      "slug": "weber-hive-bait-and-switch-plain",
      "name": "Bills That Did the Opposite, in Plain Words"
    },
    {
      "callNumber": "TR 300.10",
      "slug": "matt-brower",
      "name": "Matt Brower: The Board Seat That Never Came Up"
    },
    {
      "callNumber": "TR 300.11",
      "slug": "matt-brower-plain",
      "name": "Matt Brower, in Plain Words"
    },
    {
      "callNumber": "TR 300.12",
      "slug": "nilson-foundation",
      "name": "Ten Days: The Nilson Foundation's 501(c)(3) Claim"
    },
    {
      "callNumber": "TR 300.13",
      "slug": "nilson-foundation-plain",
      "name": "Ten Days, in Plain Words"
    },
    {
      "callNumber": "TR 300.14",
      "slug": "bramwell-odp-enforcement",
      "name": "What the Privacy Office Can and Can't Do, Part 1"
    },
    {
      "callNumber": "TR 300.15",
      "slug": "bramwell-odp-enforcement-part-2",
      "name": "What the Privacy Office Can and Can't Do, Part 2"
    },
    {
      "callNumber": "TR 300.16",
      "slug": "bramwell-odp-enforcement-plain",
      "name": "What the Privacy Office Can and Can't Do, in Plain Words"
    },
    {
      "callNumber": "TR 300.17",
      "slug": "utah-judicial-oversight",
      "name": "Behind the Bench: Judge and Lawyer Complaints in Utah, Part 1"
    },
    {
      "callNumber": "TR 300.18",
      "slug": "utah-judicial-oversight-part-2",
      "name": "Behind the Bench, Part 2"
    },
    {
      "callNumber": "TR 300.19",
      "slug": "utah-judicial-oversight-plain",
      "name": "Behind the Bench, in Plain Words"
    },
    {
      "callNumber": "TR 300.20",
      "slug": "utah-taxpayers-association",
      "name": "Who Sits at the Utah Taxpayers Association's Table"
    },
    {
      "callNumber": "TR 300.21",
      "slug": "utah-taxpayers-association-part-2",
      "name": "Every Client of Every Lobbyist: Utah Taxpayers Association, Part 2"
    },
    {
      "callNumber": "TR 300.22",
      "slug": "utah-taxpayers-association-plain",
      "name": "The Utah Taxpayers Association, in Plain Words"
    }
  ],
  "shelves": {
    "000": "Start here",
    "100": "Taxes and fees",
    "200": "Land, water and growth",
    "300": "Disclosure and ethics"
  },
  "toolsAfter": [
    "div.article-header",
    "header.mast",
    "header.band",
    "div.band",
    "header.masthead",
    "div.masthead",
    "header.hero",
    "div.hero",
    "section.hero",
    "header"
  ],
  "headings": "body:not(:has(.hs-toc,.quicknav,nav.jump,nav.toc,.toc,.jumpnav)) main h2",
  "searchBox": "#caseSearch"
};
(function () {
  var C = HBX, P = C.prefix;
  var LIST_URL = "https://weber-county-hive.github.io/-weber-county-hive-index/hive-shelves.js";
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var list = C.pages.slice().sort(function (a, b) { return a.callNumber.localeCompare(b.callNumber, undefined, { numeric: true }); });
  var file = (location.pathname.split("/").pop() || "index.html").replace(/\.html$/, "") || "index";
  var i = list.findIndex(function (p) { return p.slug === file; }); if (i < 0) i = 0;
  var me = list[i], prev = list[i - 1], next = list[i + 1];
  var shelfOf = function (p) { return p.callNumber.split(" ")[1].split(".")[0]; };
  function ready(fn) {
    if (window.HIVE_SHELVES) return fn();
    var s = document.createElement("script"); s.src = LIST_URL + "?v=1"; s.onload = fn; s.onerror = fn; document.head.appendChild(s);
  }
  function localSearch(v) {
    var box = document.querySelector(C.searchBox || "#__none");
    if (box) { box.value = v; box.dispatchEvent(new Event("input", { bubbles: true })); box.scrollIntoView({ behavior: "smooth", block: "center" }); return "Showing matches in the list above."; }
    if (window.find && window.find(v, false, false, true)) { return "Found <b>" + esc(v) + "</b> on this page; it's highlighted above."; }
    var hit = list.filter(function (p) { return p.name.toLowerCase().indexOf(String(v).toLowerCase()) > -1; })[0];
    if (hit) { location.href = hit.slug + ".html"; return ""; }
    return "Nothing on this page matches <b>" + esc(v) + "</b>. Try another word.";
  }
  var box = document.getElementById("hbx-shelf");
  if (box) {
    var link = function (p, dir) {
      if (!p) return dir === "prev"
        ? '<a class="hbx-nav-btn" href="https://weber-county-hive.github.io/-weber-county-hive-index/index.html">← <b>HL 000.00</b> The Hive library (every repo)</a>'
        : '<span class="hbx-nav-btn hbx-off">End of shelf →</span>';
      return '<a class="hbx-nav-btn" href="' + p.slug + '.html">' + (dir === "prev" ? "← " : "") + "<b>" + p.callNumber + "</b> " + esc(p.name) + (dir === "next" ? " →" : "") + "</a>";
    };
    var rows = "";
    Object.keys(C.shelves).forEach(function (no) {
      var items = list.filter(function (p) { return shelfOf(p) === no; });
      if (!items.length) return;
      rows += '<li class="hbx-shelf-head">' + P + " " + no + " · " + esc(C.shelves[no]) + "</li>";
      items.forEach(function (p) {
        rows += '<li><a href="' + p.slug + '.html"><span class="hbx-cn">' + p.callNumber + "</span> " + esc(p.name) + (p === me ? " <em>(you are here)</em>" : "") + "</a></li>";
      });
    });
    box.innerHTML =
      '<div class="hbx-cn-big">Call number <b>' + me.callNumber + "</b> · Shelf " + P + " " + shelfOf(me) + " · " + esc(C.shelves[shelfOf(me)]) + "</div>" +
      '<div class="hbx-nav">' + link(prev, "prev") + link(next, "next") + "</div>" +
      '<details class="hbx-list"><summary>See every page on this shelf, by call number</summary><ol>' + rows + "</ol></details>" +
      '<form class="hbx-find" id="hbx-find" role="search"><label for="hbx-q">Look up a call number, name or topic</label>' +
      '<div><input id="hbx-q" type="search" placeholder="e.g. ' + esc(me.callNumber) + ', GV 100.01 or a name"><button type="submit">Search</button></div></form>' +
      '<div class="hbx-search" id="hbx-find-out">Names and topics search this page.</div>';
    ready(function () {
      if (!window.HIVE_SHELVES) return;
      document.getElementById("hbx-find-out").innerHTML = "Names and topics search this page. Call numbers from every shelf work here: " +
        window.HIVE_SHELVES.map(function (s) { return '<a href="' + s.url + '"><b>' + s.prefix + "</b> = " + esc(s.name) + "</a>"; }).join(" · ") + ".";
    });
    var go = function (v) {
      var out = document.getElementById("hbx-find-out");
      var m = String(v).trim().toUpperCase().match(/^([A-Z]{1,5})\s*(\d{3}(?:\.\d{1,2})?)$/);
      if (m && m[1] === P) {
        var hit = list.filter(function (p) { return p.callNumber.indexOf(m[1] + " " + m[2]) === 0; })[0];
        if (hit) { if (hit !== me) location.href = hit.slug + ".html"; else window.scrollTo({ top: 0, behavior: "smooth" }); return; }
        out.innerHTML = "No " + esc(C.repoName) + " page has call number <b>" + esc(m[1] + " " + m[2]) + "</b>."; return;
      }
      if (m) {
        var sh = (window.HIVE_SHELVES || []).filter(function (s) { return s.prefix === m[1]; })[0];
        if (sh) { location.href = sh.url + "?q=" + encodeURIComponent(m[1] + " " + m[2]); return; }
        out.innerHTML = "Call number <b>" + esc(m[1] + " " + m[2]) + "</b>: that shelf doesn't have call numbers yet. Try a name or topic instead."; return;
      }
      var r = localSearch(v); if (r) out.innerHTML = r;
    };
    document.getElementById("hbx-find").addEventListener("submit", function (e) { e.preventDefault(); go(document.getElementById("hbx-q").value); });
    var qp = new URLSearchParams(location.search).get("q");
    if (qp) { document.getElementById("hbx-q").value = qp; ready(function () { go(qp); }); }
  }
  /* Page tools under the page's header */
  var anchor = null; [].concat(C.toolsAfter).some(function (sel) { anchor = document.querySelector(sel); return !!anchor; });
  if (anchor) {
    var heads = [].slice.call(document.querySelectorAll(C.headings || "main h2")).filter(function (h) { return h.textContent.trim(); });
    var used = {};
    var jl = heads.map(function (h) {
      if (!h.id) {
        var id = "s-" + h.textContent.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 40);
        while (used[id] || document.getElementById(id)) id += "-x";
        h.id = id;
      }
      used[h.id] = 1;
      return '<li><a href="#' + h.id + '">' + esc(h.textContent.trim().replace(/\s+/g, " ")) + "</a></li>";
    }).join("");
    var url = location.href.split("#")[0].split("?")[0];
    var tools = document.createElement("div");
    tools.className = "hbx-tools";
    tools.innerHTML =
      '<a class="hbx-tool hbx-cnchip" href="#hbx-shelf" title="Jump to the call number and search">Call number <b>' + me.callNumber + "</b> ↓</a>" +
      (jl ? '<details class="hbx-jump"><summary>Jump to a section</summary><ol>' + jl + "</ol></details>" : "") +
      '<button type="button" class="hbx-tool" id="hbx-copy">Copy link</button>' +
      '<a class="hbx-tool" target="_blank" rel="noopener" href="https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url) + '">Share on Facebook</a>';
    anchor.parentNode.insertBefore(tools, anchor.nextSibling);
    var cb = document.getElementById("hbx-copy");
    cb.addEventListener("click", function () {
      var done = function () { cb.textContent = "Link copied ✓"; setTimeout(function () { cb.textContent = "Copy link"; }, 2500); };
      try { navigator.clipboard.writeText(url).then(done, function () { window.prompt("Copy this link:", url); }); }
      catch (e) { window.prompt("Copy this link:", url); }
    });
    tools.querySelectorAll(".hbx-jump a").forEach(function (a) { a.addEventListener("click", function () { tools.querySelector(".hbx-jump").open = false; }); });
  }
  var top = document.createElement("a");
  top.href = "#"; top.className = "hbx-totop"; top.textContent = "↑ Top"; top.setAttribute("aria-label", "Back to top of page");
  top.addEventListener("click", function (e) { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); });
  document.body.appendChild(top);
  var showTop = function () { top.style.display = window.scrollY > 900 ? "block" : "none"; };
  window.addEventListener("scroll", showTop, { passive: true }); showTop();
})();
