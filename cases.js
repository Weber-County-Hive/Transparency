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
const CASES = [
  {
    caseNumber: "CASE 2026-ENF-01",
    title: "Utah's Campaign-Finance Enforcement Gap",
    category: "Campaign Finance & Ethics",
    summary: "Complaints are filed. Reports are corrected. Meaningful penalties are rare — a comparison across three separate oversight channels.",
    officials: ["Stuart Adams", "Mike Schultz", "Gage Froerer"],
    status: "documented",
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
    updated: "Aug 30, 2026",
    link: "weber-hive-blank-box.html"
  }
];
