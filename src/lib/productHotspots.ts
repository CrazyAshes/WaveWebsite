/**
 * Hotspot map for product-render.png (1672×941).
 * Calibrated to visible component centers on the front-facing render.
 */
export const PRODUCT_RENDER_WIDTH = 1672;
export const PRODUCT_RENDER_HEIGHT = 941;

export type Hotspot = {
  id: string;
  title: string;
  description: string;
  labelPosition: { top: string; left?: string; right?: string };
  dotPosition: { top: string; left: string };
  highlight: { top: string; left: string; size: string };
};

export const productHotspots: Hotspot[] = [
  {
    id: "led",
    title: "LED Light Array",
    description: "Blue wing light strips",
    labelPosition: { top: "11%", left: "10%" },
    dotPosition: { top: "41.8%", left: "28.8%" },
    highlight: { top: "41.8%", left: "28.8%", size: "9%" },
  },
  {
    id: "body",
    title: "Hydrodynamic Body",
    description: "Optimized underwater stability and maneuverability",
    labelPosition: { top: "10%", right: "10%" },
    dotPosition: { top: "51%", left: "54.5%" },
    highlight: { top: "51%", left: "54.5%", size: "18%" },
  },
  {
    id: "left-thruster",
    title: "Left Thruster",
    description: "Port-side propulsion",
    labelPosition: { top: "50%", left: "9%" },
    dotPosition: { top: "62%", left: "30%" },
    highlight: { top: "62%", left: "30%", size: "11%" },
  },
  {
    id: "right-thruster",
    title: "Right Thruster",
    description: "Starboard propulsion",
    labelPosition: { top: "50%", right: "9%" },
    dotPosition: { top: "59%", left: "80%" },
    highlight: { top: "59%", left: "80%", size: "11%" },
  },
  {
    id: "camera",
    title: "Camera System",
    description: "Front dome imaging",
    labelPosition: { top: "82%", left: "52%" },
    dotPosition: { top: "70%", left: "56%" },
    highlight: { top: "70%", left: "56%", size: "13%" },
  },
];

export function parsePercent(value: string): number {
  return parseFloat(value) / 100;
}

export function getLabelLineOrigin(hotspot: Hotspot): { x: number; y: number } {
  const y = parsePercent(hotspot.labelPosition.top) + 0.045;
  if (hotspot.labelPosition.left) {
    return { x: parsePercent(hotspot.labelPosition.left) + 0.12, y };
  }
  return { x: 1 - parsePercent(hotspot.labelPosition.right!) - 0.12, y };
}
