// lib/florida-playbook.ts
export interface FloridaClauseRule {
  id: string;
  name: string;
  statute: string;
  ruleTitle: string;
  severity: "CRITICAL" | "MODERATE" | "LOW";
  matchPattern: RegExp;
  recommendation: string;
  standardFloridaDraft: string;
}

export const FLORIDA_PLAYBOOK_RULES: FloridaClauseRule[] = [
  {
    id: "fl-fee-57-105",
    name: "Attorney's Fees & Costs",
    statute: "Fla. Stat. § 57.105(7)",
    ruleTitle: "Statutory Reciprocal Fee Mandate",
    severity: "CRITICAL",
    matchPattern: /(Party A only|Company shall be entitled to recover|one-sided attorney|reimburse.*without reciprocal)/i,
    recommendation:
      "Unilateral fee clauses are automatically made mutual by Fla. Stat. § 57.105(7). Drafters should explicitly provide mutual prevailing party fees covering trial, appellate, and post-judgment proceedings.",
    standardFloridaDraft:
      "In the event of any litigation, arbitration, or proceeding arising out of or related to this Agreement, the prevailing party shall be entitled to recover from the non-prevailing party all reasonable attorneys' fees, paralegal fees, and taxable costs incurred at all levels, including pre-suit, trial, bankruptcy, and appellate proceedings, pursuant to Fla. Stat. § 57.105(7)."
  },
  {
    id: "fl-compete-542-335",
    name: "Restrictive Covenants & Non-Compete",
    statute: "Fla. Stat. § 542.335",
    ruleTitle: "Legitimate Business Interest & Statutory Duration Presumption",
    severity: "CRITICAL",
    matchPattern: /(worldwide|any competitor|period of (?:3|4|5|10) years|without geographic limitation)/i,
    recommendation:
      "Under Fla. Stat. § 542.335, restrictive covenants exceeding 2 years against employees/contractors are statutorily presumed unreasonable. Must specify identifiable trade secrets or specific client goodwill.",
    standardFloridaDraft:
      "During the term of this Agreement and for a period of twelve (12) months following termination, Contractor shall not directly solicit any active client of the Company with whom Contractor had material personal contact within the preceding twelve (12) months, limited strictly to the geographical area of Broward, Miami-Dade, and Palm Beach Counties, Florida, in accordance with the legitimate business interest protections of Fla. Stat. § 542.335."
  },
  {
    id: "fl-venue-jurisdiction",
    name: "Governing Law & Venue",
    statute: "Fla. Stat. § 685.101, § 685.102",
    ruleTitle: "Florida Forum Selection & Non-Resident Consent",
    severity: "MODERATE",
    matchPattern: /(Delaware|New York|California|foreign court|exclusive jurisdiction of courts in)/i,
    recommendation:
      "For Florida-centered commercial operations, cross-state litigation introduces venue-transfer friction. Fix exclusive jurisdiction in Florida Circuit Court (e.g., 17th Judicial Circuit in Broward County).",
    standardFloridaDraft:
      "This Agreement shall be construed, interpreted, and governed by the laws of the State of Florida, without regard to conflict of law principles. Exclusive venue for any dispute arising out of this Agreement shall lie in the Circuit Court of the Seventeenth Judicial Circuit in and for Broward County, Florida, or the United States District Court for the Southern District of Florida. The parties hereby expressly submit to personal jurisdiction in Florida."
  },
  {
    id: "fl-indemnity-725-06",
    name: "Indemnification & Hold Harmless",
    statute: "Fla. Stat. § 725.06 & Florida Public Policy",
    ruleTitle: "Indemnitee Gross Negligence Exclusion",
    severity: "CRITICAL",
    matchPattern: /(indemnify and hold harmless.*sole negligence|irrespective of fault|whether or not caused by)/i,
    recommendation:
      "Florida public policy and § 725.06 void covenants indemnifying a party for its own sole negligence or willful misconduct unless strict statutory monetary limits are stated.",
    standardFloridaDraft:
      "Each party shall defend, indemnify, and hold harmless the other party from and against any third-party claims, liabilities, or losses to the extent caused by the indemnifying party's material breach, gross negligence, or intentional misconduct. Neither party shall be required to indemnify the other for damages caused by the other party's sole negligence or willful misconduct."
  }
];
