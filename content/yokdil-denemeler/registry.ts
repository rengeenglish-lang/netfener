import type { YokdilDeneme, YokdilField } from "./registry-types";

/** Online YÖKDİL denemeleri per field, loaded one file at a time. Each batch adds its lines here. */
export const YOKDIL_LOADERS: Record<YokdilField, Record<number, () => Promise<YokdilDeneme>>> = {
  sosyal: {
    1: () => import("./sosyal-01").then((m) => m.SOSYAL_01),
    2: () => import("./sosyal-02").then((m) => m.SOSYAL_02),
    3: () => import("./sosyal-03").then((m) => m.SOSYAL_03),
    4: () => import("./sosyal-04").then((m) => m.SOSYAL_04),
    5: () => import("./sosyal-05").then((m) => m.SOSYAL_05),
    6: () => import("./sosyal-06").then((m) => m.SOSYAL_06),
    7: () => import("./sosyal-07").then((m) => m.SOSYAL_07),
    8: () => import("./sosyal-08").then((m) => m.SOSYAL_08),
    9: () => import("./sosyal-09").then((m) => m.SOSYAL_09),
    10: () => import("./sosyal-10").then((m) => m.SOSYAL_10),
  },
  saglik: {
    1: () => import("./saglik-01").then((m) => m.SAGLIK_01),
    2: () => import("./saglik-02").then((m) => m.SAGLIK_02),
    3: () => import("./saglik-03").then((m) => m.SAGLIK_03),
    4: () => import("./saglik-04").then((m) => m.SAGLIK_04),
    5: () => import("./saglik-05").then((m) => m.SAGLIK_05),
    6: () => import("./saglik-06").then((m) => m.SAGLIK_06),
    7: () => import("./saglik-07").then((m) => m.SAGLIK_07),
    8: () => import("./saglik-08").then((m) => m.SAGLIK_08),
    9: () => import("./saglik-09").then((m) => m.SAGLIK_09),
  },
  fen: {
    1: () => import("./fen-01").then((m) => m.FEN_01),
    2: () => import("./fen-02").then((m) => m.FEN_02),
    3: () => import("./fen-03").then((m) => m.FEN_03),
    4: () => import("./fen-04").then((m) => m.FEN_04),
  },
};
