// Delivery rate engine — derived from the district / zone / weight table.
// Charges use the UPPER end of each quoted range (business-safe). Edit freely.

export type Zone = "Local" | "Nearby" | "Central" | "Far";

// Weight slabs in grams (must stay ascending).
export const WEIGHT_TIERS = [250, 500, 1000, 2000, 3000, 5000, 10000] as const;

// ₹ delivery charge by zone and weight slab (grams).
export const SHIPPING_RATES: Record<Zone, Record<number, number>> = {
  Local:   { 250: 50,  500: 70,  1000: 80,  2000: 150, 3000: 220, 5000: 350, 10000: 700 },
  Nearby:  { 250: 60,  500: 90,  1000: 120, 2000: 200, 3000: 280, 5000: 450, 10000: 800 },
  Central: { 250: 70,  500: 100, 1000: 140, 2000: 250, 3000: 350, 5000: 550, 10000: 1000 },
  Far:     { 250: 80,  500: 120, 1000: 180, 2000: 300, 3000: 450, 5000: 700, 10000: 1400 },
};

// PIN prefix (first 3 digits) -> zone, covering the Tamil Nadu districts listed.
// Note: 635 covers both Krishnagiri (Central) and Tirupattur (Far) — defaulted to Central.
export const PIN_PREFIX_ZONE: Record<string, Zone> = {
  "643": "Local",
  "641": "Nearby", "638": "Nearby",
  "636": "Central", "637": "Central", "639": "Central", "620": "Central", "635": "Central",
  "600": "Far", "603": "Far", "605": "Far", "606": "Far", "607": "Far", "609": "Far",
  "610": "Far", "611": "Far", "613": "Far", "621": "Far", "623": "Far", "624": "Far",
  "625": "Far", "626": "Far", "627": "Far", "628": "Far", "629": "Far", "630": "Far",
  "631": "Far", "632": "Far",
};

// Friendly label per zone (shown to the customer).
export const ZONE_LABEL: Record<Zone, string> = {
  Local: "Nilgiris (local)",
  Nearby: "Nearby districts",
  Central: "Central Tamil Nadu",
  Far: "Across Tamil Nadu",
};

/** "200g" -> 200, "1kg" -> 1000, "1.5kg" -> 1500 */
export function parseWeightToGrams(w: string): number {
  const s = (w || "").toLowerCase().replace(/\s/g, "");
  const n = parseFloat(s);
  if (isNaN(n)) return 0;
  return s.includes("kg") ? n * 1000 : n;
}

export function getZoneForPincode(pincode: string): Zone | null {
  const p = (pincode || "").trim();
  if (!/^\d{6}$/.test(p)) return null;
  return PIN_PREFIX_ZONE[p.slice(0, 3)] ?? null;
}

export function weightSlab(grams: number): number {
  for (const t of WEIGHT_TIERS) if (grams <= t) return t;
  return WEIGHT_TIERS[WEIGHT_TIERS.length - 1];
}

/** Returns the delivery charge in ₹, or null if the pincode isn't in a serviced zone. */
export function getDeliveryCharge(pincode: string, grams: number): number | null {
  const zone = getZoneForPincode(pincode);
  if (!zone) return null;
  return SHIPPING_RATES[zone][weightSlab(grams)] ?? null;
}
