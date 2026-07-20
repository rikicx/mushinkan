"use client";

import { useEffect, useState } from "react";
import type { ScheduleSession } from "@/data/site";
import {
  findScheduleStatus,
  scheduleDays,
  scheduleRows,
  scheduleSessions,
  siteInfo
} from "@/data/site";
import { ButtonLink } from "./ButtonLink";
import styles from "./ScheduleTable.module.css";

const periods = [...new Set(scheduleRows.map((row) => row.period))];

type LiveStatus = {
  weekday: number;
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

export function ScheduleTable() {
  const [live, setLive] = useState<LiveStatus | null>(null);

  useEffect(() => {
    const update = () => {
      const { weekday, minutes } = saoPauloNow();
      setLive({ weekday, ...findScheduleStatus(weekday, minutes) });
    };

    update();
    const timer = window.setInterval(update, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  const todayKey = scheduleDays.find(
    (day) => day.weekday === live?.weekday
  )?.key;

  return (
    <div>
      <div className={styles.next}>
        <span className={styles.nextLabel}>
          <span className={styles.dot} />
          {live?.current ? "Agora no tatame" : "Próxima aula"}
        </span>
        <span className={styles.nextInfo}>
          {live ? (
            live.current ? (
              <>
                <strong>
                  {live.current.startTime} às {live.current.endTime}
                </strong>{" "}
                · {live.current.className}
                {live.current.level !== live.current.className
                  ? ` · ${live.current.level}`
                  : null}
              </>
            ) : live.next ? (
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
          Quero participar desta aula
        </ButtonLink>
      </div>

      <table className={styles.table}>
        <caption className={styles.srOnly}>
          Grade semanal de aulas: horários nas linhas, dias da semana nas
          colunas.
        </caption>
        <thead>
          <tr>
            <th className={styles.timeHead} scope="col">
              Horário
            </th>
            {scheduleDays.map((day) => (
              <th
                className={day.key === todayKey ? styles.todayHead : undefined}
                key={day.key}
                scope="col"
              >
                {day.label}
                {day.key === todayKey ? (
                  <span className={styles.todayTag}>hoje</span>
                ) : null}
              </th>
            ))}
          </tr>
        </thead>
        {periods.map((period) => (
          <tbody key={period}>
            <tr className={styles.periodRow}>
              <th colSpan={scheduleDays.length + 1} scope="colgroup">
                {period}
              </th>
            </tr>
            {scheduleRows
              .filter((row) => row.period === period)
              .map((row) => (
                <tr key={row.startTime}>
                  <th className={styles.timeCell} scope="row">
                    <span className={styles.time}>
                      {row.startTime}–{row.endTime}
                    </span>
                  </th>
                  {scheduleDays.map((day) => {
                    const entry = row[day.key];
                    const todayClass =
                      day.key === todayKey ? styles.todayCell : undefined;

                    if (!entry) {
                      return (
                        <td
                          className={
                            todayClass
                              ? `${styles.emptyCell} ${todayClass}`
                              : styles.emptyCell
                          }
                          key={day.key}
                        >
                          <span aria-hidden="true">—</span>
                          <span className={styles.srOnly}>Sem aula</span>
                        </td>
                      );
                    }

                    return (
                      <td className={todayClass} key={day.key}>
                        <div
                          aria-label={`${entry.className}, ${entry.label}${
                            entry.instructor
                              ? `. Instrutor: ${entry.instructor}`
                              : ""
                          }`}
                          className={styles.session}
                          tabIndex={entry.instructor ? 0 : undefined}
                        >
                          <span className={styles.category}>
                            {entry.className}
                          </span>
                          {entry.label !== entry.className ? (
                            <span className={styles.level}>{entry.label}</span>
                          ) : null}
                          {entry.instructor ? (
                            <span
                              aria-hidden="true"
                              className={styles.instructorTooltip}
                            >
                              <small>Instrutor</small>
                              {entry.instructor}
                            </span>
                          ) : null}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
          </tbody>
        ))}
      </table>

      <div className={styles.mobile}>
        {scheduleDays.map((day) => (
          <section
            aria-label={day.label}
            className={`${styles.dayGroup} ${
              day.key === todayKey ? styles.todayDayGroup : ""
            }`}
            key={day.key}
          >
            <h3 className={styles.dayTitle}>
              {day.label}
              {day.key === todayKey ? (
                <span className={styles.todayTag}>hoje</span>
              ) : null}
            </h3>
            {scheduleSessions
              .filter((session) => session.weekday === day.weekday)
              .map((session) => (
                <div
                  className={styles.mobileRow}
                  key={`${day.key}-${session.startTime}`}
                >
                  <span className={styles.mobileTime}>{session.startTime}</span>
                  <span>
                    <span className={styles.mobileMain}>
                      {session.className}
                      {session.level !== session.className
                        ? ` · ${session.level}`
                        : null}
                    </span>
                    {session.instructor ? (
                      <span className={styles.mobileInstructor}>
                        {session.instructor}
                      </span>
                    ) : null}
                  </span>
                </div>
              ))}
          </section>
        ))}
      </div>

    </div>
  );
}
