import type { YokdilDeneme, YokdilField } from "./registry-types";

/** Online YÖKDİL denemeleri per field, loaded one file at a time. Each batch adds its lines here. */
export const YOKDIL_LOADERS: Record<YokdilField, Record<number, () => Promise<YokdilDeneme>>> = {
  sosyal: {
    1: () => import("./sosyal-01").then((m) => m.SOSYAL_01),
    2: () => import("./sosyal-02").then((m) => m.SOSYAL_02),
    3: () => import("./sosyal-03").then((m) => m.SOSYAL_03),
  },
  saglik: {
    1: () => import("./saglik-01").then((m) => m.SAGLIK_01),
    2: () => import("./saglik-02").then((m) => m.SAGLIK_02),
    3: () => import("./saglik-03").then((m) => m.SAGLIK_03),
  },
  fen: {
    1: () => import("./fen-01").then((m) => m.FEN_01),
    2: () => import("./fen-02").then((m) => m.FEN_02),
    3: () => import("./fen-03").then((m) => m.FEN_03),
  },
};
