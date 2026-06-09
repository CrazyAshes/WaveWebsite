/**
 * WAVE Shark Series — canonical asset map.
 *
 * Every `ai.*` image must depict the SAME product:
 * glossy white manta-wing body, blue LED strips, twin cylindrical thrusters,
 * large front camera dome, tether-capable industrial design.
 *
 * Section usage (no cross-section duplicates):
 * - Hero: productFrontHero
 * - Product anatomy: productRender
 * - Mission sidebar: productCable (side profile)
 * - Mission cards: mission-* (context scenes, unique per pillar)
 * - Capabilities: component-* (close-ups on real hardware)
 * - Applications: application-* (dedicated per use case, same drone design)
 */
export const ai = {
  // Hero + product
  heroScene: "/wave-assets/ai/hero-cinematic.png",
  productRender: "/wave-assets/ai/product-render.png",
  productCable: "/wave-assets/ai/product-cable-scene.png",
  productFrontHero: "/wave-assets/ai/product-front-hero.png",

  // Component close-ups (all on the real drone)
  camera: "/wave-assets/ai/component-camera.png",
  led: "/wave-assets/ai/component-led.png",
  thruster: "/wave-assets/ai/component-thruster.png",
  cableReel: "/wave-assets/ai/component-cable-reel.png",
  controller: "/wave-assets/ai/component-controller.png",
  controlScreen: "/wave-assets/ai/component-control-screen.png",

  // Mission scenes — unique per pillar, drone in context
  pollution: "/wave-assets/ai/mission-pollution.png",
  oceanMonitoring: "/wave-assets/ai/mission-ocean-monitoring.png",
  aquaculture: "/wave-assets/ai/mission-aquaculture.png",
  control: "/wave-assets/ai/mission-control.png",

  // Application scenes — unique per use case, same WAVE drone
  appOceanMonitoring: "/wave-assets/ai/application-ocean-monitoring.png",
  diving: "/wave-assets/ai/application-diving.png",
  appAquaculture: "/wave-assets/ai/application-aquaculture.png",
  research: "/wave-assets/ai/application-research.png",
} as const;

export const assets = {
  logo: "/wave-assets/logo.png",
  logoMark: "/assets/logo-mark.png",
  droneFront: ai.productFrontHero,
  droneFrontClean: "/assets/drone-front-clean.png",
  droneSide: ai.productCable,
  droneSideClean: "/assets/drone-side-clean.png",
  heroBg: ai.heroScene,
  ai,
} as const;
