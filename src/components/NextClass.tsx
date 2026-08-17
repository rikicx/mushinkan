"use client";

import { useEffect, useState } from "react";
import type { ScheduleSession } from "@/data/site";
import { findScheduleStatus, siteInfo } from "@/data/site";
import { ButtonLink } from "./ButtonLink";
import styles from "./ScheduleTable.module.css";

export type LiveStatus = {
  weekday: number;
  minutes: number;
  current?: ScheduleSession;
  next?: ScheduleSession;
};

/* Weekday and time of day in the dojo's timezone, regardless of where the
   visitor is. */
function saoPauloNow() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Sao_Paulo",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).formatToParts(new Date());
  const values = Object.fromEntries(
    parts.map((part) => [part.type, part.value])
  );
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(
    values.weekday
  );
  const minutes = (Number(values.hour) % 24) * 60 + Number(values.minute);

  return { weekday, minutes };
}

export function useLiveSchedule() {
  const [live, setLive] = useState<LiveStatus | null>(null);

  useEffect(() => {
    const update = () => {
      const { weekday, minutes } = saoPauloNow();
      setLive({ weekday, minutes, ...findScheduleStatus(weekday, minutes) });
    };

    update();
    const timer = window.setInterval(update, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  return live;
}

export function sessionHasEnded(
  sessionWeekday: number,
  endTime: string,
  live: LiveStatus | null
) {
  if (!live) return false;
  if (sessionWeekday !== live.weekday) {
    return sessionWeekday < live.weekday;
  }

  const [hours, minutes] = endTime.split(":").map(Number);
  return live.minutes >= hours * 60 + minutes;
}

export function NextClass({ centered = false }: { centered?: boolean }) {
  const live = useLiveSchedule();

  return (
    <div className={`${styles.next} ${centered ? styles.nextHome : ""}`}>
      <span className={styles.nextLabel}>
        <span className={styles.dot} />
        Próxima aula
      </span>
      <span className={styles.nextInfo}>
        {live ? (
          live.next ? (
            <>
              <strong>
                {live.next.startTime} às {live.next.endTime}
              </strong>{" "}
              · {live.next.label} · {live.next.className}
              {live.next.level !== live.next.className
                ? ` · ${live.next.level}`
                : null}
            </>
          ) : null
        ) : (
          "Treinos de segunda a sexta, de manhã, à tarde e à noite."
        )}
      </span>
      <ButtonLink href={siteInfo.whatsappExperimental}>
        Quero participar da próxima aula
      </ButtonLink>
    </div>
  );
}
