// The Weber County Hive — Transparency Case Docket
// To add a new case file: copy an object below, fill in the fields,
// and save it. index.html reads this file and builds the docket
// automatically — you never need to touch that file by hand.
// IMPORTANT: the "link" value below must exactly match the real
// filename of the case-file page you upload to GitHub.
//
// status: "documented" | "pending" | "disputed"  (controls stamp color/text)
// pairWith: optional — caseNumber of another entry this one is paired with,
// shows a "Paired with..." note and a matching border color on both cards.
//
// NOTE (9/12/26): Two entries formerly here — CASE 2026-CUGHP-01 (Central
// Utah GOP House PAC) and CASE 2026-CBPAC-01 (Checks & Balances PAC) — have
// migrated to the new standalone PAC repo, alongside two more PAC case
// files (CMV PAC, UINPAC) that were built directly there. Their case-file
// pages should be deleted from this repo once this data file replaces the
// old one.
const CASES = [
  {
    caseNumber: "CASE 2026-ENF-01",
    title: "Utah's Campaign-Finance Enforcement Gap",
    category: "Campaign Finance & Ethics",
    summary: "Complaints are filed. Reports are corrected. Meaningful penalties are rare — a comparison across three separate oversight channels.",
    officials: ["Stuart Adams", "Mike Schultz", "Gage Froerer"],
    status: "documented",
    published: "Aug 19, 2026",
    updated: "Aug 19, 2026",
    link: "weber-hive-enforcement-gap.html"
  },
  {
    caseNumber: "CASE 2026-WAL-01",
    title: "Wrong Room, Right Message",
    category: "State Pressure on Local Government",
    summary: "The Governor's senior housing adviser threatened to cut off Wasatch County's funding — at a Heber City Council meeting the county wasn't even part of.",
    officials: ["Steve Waldrip", "Gov. Spencer Cox", "Dustin Grabau", "Yvonne Barney"],
    status: "documented",
    published: "Aug 22, 2026",
    updated: "Aug 22, 2026",
    link: "waldrip-funding-threat.html",
    pairWith: "CASE 2026-SB258-01"
  },
  {
    caseNumber: "CASE 2026-SB258-01",
    title: "One Vote, Four Checks",
    category: "Legislation & Campaign Finance",
    summary: "A reform bill to give counties a say over the state's \"preliminary municipality\" law failed by one vote — four of the no votes went to senators who'd taken checks from a homebuilder using the law right now.",
    officials: ["Tiara Auxier", "Kirk Cullimore", "Ann Millner", "Ivory Homes"],
    status: "documented",
    published: "Aug 22, 2026",
    updated: "Aug 22, 2026",
    link: "sb258-preliminary-municipalities.html",
    pairWith: "CASE 2026-WAL-01"
  },
  {
    caseNumber: "CASE 2026-SITLA-01",
    title: "The Land Counties Can't Zone",
    category: "State Institutional Control",
    summary: "A little-known statute puts school trust land outside county zoning entirely — and the Governor's own staff holds a seat on the board that decides how it gets used.",
    officials: ["Mike Mower", "Gov. Spencer Cox", "Greg Whitehead", "Michelle McConkie"],
    status: "documented",
    published: "Aug 23, 2026",
    updated: "Aug 23, 2026",
    link: "sitla-county-zoning-exemption.html",
    pairWith: "CASE 2026-WAL-01"
  },
  {
    caseNumber: "CASE 2026-SITLA-02",
    title: "The Land Nobody Zones",
    category: "State Institutional Control — Deep Dive",
    summary: "The full chain of authority behind SITLA's zoning exemption, a statewide comparison across three counties, and why the Heber Valley Temple case doesn't decide any of it.",
    officials: ["Mike Mower", "Gov. Spencer Cox", "Gregg McArthur", "John Andrews"],
    status: "documented",
    published: "Aug 23, 2026",
    updated: "Aug 23, 2026",
    link: "weber-hive-sitla-explainer.html",
    pairWith: "CASE 2026-SITLA-01"
  },
  {
    caseNumber: "CASE 2026-COI-01",
    title: "The Blank Box: Three Disclosure Forms, One Pattern",
    category: "Conflict of Interest",
    summary: "Three Wasatch County officials sit on overlapping nonprofit boards. Three separate conflict-of-interest disclosures, filed for three separate offices, ask the same basic question — and come back blank or nearly blank.",
    officials: ["Erik Rowland", "Dallin Koecher", "Rachel Kahler"],
    status: "documented",
    published: "Aug 30, 2026",
    updated: "Aug 30, 2026",
    link: "weber-hive-blank-box.html"
  },
  {
    caseNumber: "CASE 2026-WHA-01",
    title: "In His Portfolio",
    category: "Conflict of Interest",
    summary: "A commissioner and his wife both sit on the Housing Authority board. His own colleagues said so on the record the day he was appointed — and called it no conflict at all, in the same breath.",
    officials: ["Gage Froerer", "Gloria Froerer", "Scott Jenkins", "Jim Harvey"],
    status: "documented",
    published: "Aug 31, 2026",
    updated: "Aug 31, 2026",
    link: "weber-housing-authority.html"
  },
  {
    caseNumber: "CASE 2026-ODP-01",
    title: "What the Privacy Office Can and Can't Do",
    category: "Government Data Privacy & Oversight",
    summary: "Utah's Chief Privacy Officer, in his own words, on what his office can actually enforce — plus the report that would show who's sharing or selling your data, filed with the state but off-limits to the public.",
    officials: ["Christopher Bramwell", "Marvin Dodge", "Kirk Cullimore"],
    status: "documented",
    published: "Aug 31, 2026",
    updated: "Aug 31, 2026",
    link: "bramwell-odp-enforcement.html"
  },
  {
    caseNumber: "CASE 2026-NF-01",
    title: "Ten Days Too Soon — Still Claiming It Two Months Later",
    category: "Charitable Solicitation & Nonprofit Compliance",
    summary: "A new Ogden charity told donors their gifts were tax-deductible before it had any legal basis to say so. A direct IRS search confirms no such status exists — and the claim is still live on the organization's own website today.",
    officials: ["Jed Nilson", "Mike Ostermiller", "Anne Dunaway"],
    status: "documented",
    published: "Sept 3, 2026",
    updated: "Sept 3, 2026",
    link: "nilson-foundation.html"
  },
  {
    caseNumber: "CASE 2026-BSW-01",
    title: "Bills That Did the Opposite",
    category: "Legislative Pattern",
    summary: "Eight bills, 2019–2026, that changed name, scope, or key language somewhere between introduction and law — each time moving away from what the bill promised, not toward it.",
    officials: ["Mike Schultz", "Scott Sandall", "Keven Stratton", "Timothy Hawkes", "Rex Shipp"],
    status: "documented",
    published: "Sep 8, 2026",
    updated: "Sep 13, 2026",
    link: "weber-hive-bait-and-switch.html",
    pairWith: "CASE 2026-GSL-01"
  },
  {
    caseNumber: "CASE 2026-GSL-01",
    title: "One Lake, Two Money Pots, and a Council That Calls Itself Private",
    category: "Great Salt Lake",
    summary: "How $52.5 million in taxpayer money moved through a Commissioner's office, a private Trust Council, and a records exemption modeled on interstate water law — applied to a lake entirely inside Utah.",
    officials: ["Mike Schultz", "Scott Sandall", "Timothy Hawkes", "Brian Steed"],
    status: "documented",
    published: "Sep 8, 2026",
    updated: "Sep 8, 2026",
    link: "weber-hive-gsl-two-money-pots.html",
    pairWith: "CASE 2026-BSW-01"
  },
  {
    caseNumber: "CASE 2026-STAX-01",
    title: "A Public Vote, but No Vote by the Public",
    category: "Public Finance",
    summary: "Weber County imposed a new 0.20% sales tax without a ballot question or a Truth in Taxation hearing — while committing hundreds of millions in PID and tax-increment revenue across five separate mechanisms the same way, and running documented deficits across multiple county funds in the same period.",
    officials: ["Gage Froerer", "Weber County Commission"],
    status: "documented",
    published: "Sep 11, 2026",
    updated: "Sep 11, 2026",
    link: "weber-hive-5th5th-sales-tax.html"
  },
  {
    caseNumber: "CASE 2026-TYS-01",
    title: "Tyson Leaves Eagle Mountain Five Years After Opening",
    category: "Economic Development Incentives",
    summary: "Tyson Foods is closing its Eagle Mountain plant, ending 723 jobs, about seven years into a ten-year state and local incentive package. What Utah and Eagle Mountain actually paid, what went unclaimed, and what taxpayers still don't know.",
    officials: ["Tom Westmoreland", "Abby Ivory"],
    status: "documented",
    published: "Sep 11, 2026",
    updated: "Sep 11, 2026",
    link: "tyson-eagle-mountain-closure.html"
  },
  {
    caseNumber: "CASE 2026-WFD-01",
    title: "A New Line on the Bill: Roy and Riverdale's Fire District Annexation",
    category: "Public Finance",
    summary: "Weber Fire District says annexing Roy and Riverdale is not a tax increase, but its levy would be a new line on the bill starting in 2027. State law requires each city to cut its rate by what it budgets for fire. Riverdale budgets more for fire ($2.72M) than it collects in general-fund property tax ($1.74M), and the records don't show how the cut will work there.",
    officials: ["Weber Fire District Board", "Chief Britt Clark", "Roy City Council", "Riverdale City Council"],
    status: "documented",
    published: "Sep 24, 2026",
    updated: "Sep 25, 2026",
    link: "weber-fire-district-annexation.html",
    pairWith: "CASE 2026-STAX-01"
  },
  {
    caseNumber: "CASE 2026-WFD-02",
    title: "Paying for the Next Station: How Weber Fire District Funds Its Growth",
    category: "Public Finance",
    summary: "Four money streams in one place: a 23.58% levy increase, a lease revenue bond of up to $40 million with no election unless voters petition, the district's own agreement to share 50% of its Nordic Village tax increment for 15 years ($5.44M), and a $6M developer-built station at Powder Mountain whose operating terms aren't posted. What's been said, what the records show, and what it means for Roy and Riverdale.",
    officials: ["Weber Fire District Board", "Chief Britt Clark", "Community Reinvestment Agency of Weber County"],
    status: "documented",
    published: "Sep 25, 2026",
    updated: "Sep 25, 2026",
    link: "weber-fire-district-growth.html",
    pairWith: "CASE 2026-WFD-01"
  },
  {
    caseNumber: "CASE 2026-JUD-01",
    title: "Behind the Bench: What Utah Keeps Confidential About Judge and Lawyer Complaints",
    category: "Courts & Oversight",
    summary: "Claims that the courts are exempt from open-records law and that complaints vanish, checked against the statutes and the oversight offices' own reports. Complaints stay confidential until a sanction or formal case; only six public sanctions against judges from FY2021 to FY2026, while lawyer complaints topped 1,300 in 2025. Includes the April 2026 release of a dismissed complaint against a Supreme Court justice, and H.B. 186, which now classifies the commission's records as protected.",
    officials: ["Judicial Conduct Commission", "Office of Professional Conduct", "Jordan Teuscher", "Brady Brammer"],
    status: "documented",
    published: "Sep 24, 2026",
    updated: "Sep 24, 2026",
    link: "utah-judicial-oversight.html"
  }
];
