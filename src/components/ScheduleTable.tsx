"use client";

import { Check } from "lucide-react";
import {
  scheduleDays,
  scheduleRows,
  scheduleSessions,
} from "@/data/site";
import {
  NextClass,
  sessionHasEnded,
  useLiveSchedule
} from "./NextClass";
import styles from "./ScheduleTable.module.css";

const periods = [...new Set(scheduleRows.map((row) => row.period))];

export function ScheduleTable() {
  const live = useLiveSchedule();

  const todayKey = scheduleDays.find(
    (day) => day.weekday === live?.weekday
  )?.key;

  return (
    <div>
      <NextClass />

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

                    const hasEnded = sessionHasEnded(
                      day.weekday,
                      row.endTime,
                      live
                    );

                    return (
                      <td className={todayClass} key={day.key}>
                        <div
                          aria-label={`${entry.className}, ${entry.label}${
                            entry.instructor
                              ? `. Instrutor: ${entry.instructor}`
                              : ""
                          }${hasEnded ? ". Aula concluída nesta semana." : ""}`}
                          className={`${styles.session} ${
                            hasEnded ? styles.completedSession : ""
                          }`}
                          tabIndex={entry.instructor ? 0 : undefined}
                        >
                          {hasEnded ? (
                            <span
                              aria-hidden="true"
                              className={styles.completedCheck}
                            >
                              <Check size={13} strokeWidth={3} />
                            </span>
                          ) : null}
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
              .map((session) => {
                const hasEnded = sessionHasEnded(
                  session.weekday,
                  session.endTime,
                  live
                );

                return (
                  <div
                    aria-label={`${session.startTime}, ${session.className}, ${
                      session.level
                    }${
                      session.instructor
                        ? `. Instrutor: ${session.instructor}`
                        : ""
                    }${hasEnded ? ". Aula concluída nesta semana." : ""}`}
                    className={`${styles.mobileRow} ${
                      hasEnded ? styles.completedMobileRow : ""
                    }`}
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
                    {hasEnded ? (
                      <span
                        aria-hidden="true"
                        className={styles.completedCheck}
                      >
                        <Check size={13} strokeWidth={3} />
                      </span>
                    ) : null}
                  </div>
                );
              })}
          </section>
        ))}
      </div>

    </div>
  );
}
