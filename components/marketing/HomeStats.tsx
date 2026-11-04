import { statTiles, type HomeStatsInput } from "@/lib/home-stats";
import styles from "./MaterialsHome.module.css";

/** Counts are real (database + vocabulary content), rounded down. No user, rating or university claims. */
export function HomeStats({ stats }: { stats: HomeStatsInput }) {
  const tiles = statTiles(stats);
  if (tiles.length < 2) return null;
  return (
    <ul className={styles.stats} aria-label="Netfener rakamlarla">
      {tiles.map((t) => (
        <li key={t.label} className={styles.statTile}>
          <span className={styles.statValue}>{t.value}</span>
          <span className={styles.statLabel}>{t.label}</span>
        </li>
      ))}
    </ul>
  );
}
