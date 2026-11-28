-- "Her ay ilk 100 üye": who received a free year of Başlangıç, and their number that month.
CREATE TABLE "free_year_spots" (
    "userId" TEXT NOT NULL,
    "month" TEXT NOT NULL,
    "position" INTEGER NOT NULL,
    "subscriptionId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "free_year_spots_pkey" PRIMARY KEY ("userId")
);

CREATE UNIQUE INDEX "free_year_spots_subscriptionId_key" ON "free_year_spots"("subscriptionId");
CREATE UNIQUE INDEX "free_year_spots_month_position_key" ON "free_year_spots"("month", "position");

ALTER TABLE "free_year_spots" ADD CONSTRAINT "free_year_spots_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "free_year_spots" ADD CONSTRAINT "free_year_spots_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "plan_subscriptions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
