"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./HeroMedia.module.css";

type HeroMediaProps = {
  image: string;
  videoSrc?: string;
  className?: string;
};

/**
 * Full-bleed background media for the Hero.
 *
 * The image is always rendered: it is the poster, the reduced-motion
 * experience and the fallback when the video is missing or cannot autoplay.
 * The video starts invisible and fades in only after the poster has held
 * for ~650ms and playback has actually begun, so the Hero always opens on
 * the still frame. The approved footage lives at assets/videos/ and is
 * served from public/assets/videos/ — replacing that file is the only
 * change needed to update the video.
 */
export function HeroMedia({ image, videoSrc, className }: HeroMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [posterHoldDone, setPosterHoldDone] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setPosterHoldDone(true), 650);
    return () => window.clearTimeout(timer);
  }, []);

  const showVideo = Boolean(videoSrc) && !reducedMotion && !failed;
  const videoVisible = showVideo && playing && posterHoldDone;

  // React does not serialize the muted attribute, which makes the browser's
  // autoplay policy reject the video at insertion time; start it explicitly,
  // and again on canplay in case the first attempt raced the load. If
  // autoplay is still refused, the poster simply stays.
  const tryPlay = () => {
    const video = videoRef.current;
    if (video && video.paused) {
      video.muted = true;
      video.play().catch(() => {});
    }
  };

  useEffect(() => {
    if (!showVideo) {
      return;
    }
    tryPlay();
    // Chrome pauses muted background-tab videos; resume when the tab
    // becomes visible again.
    const onVisible = () => {
      if (document.visibilityState === "visible") {
        tryPlay();
      }
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => document.removeEventListener("visibilitychange", onVisible);
  }, [showVideo]);

  return (
    <div className={className} aria-hidden="true">
      <img alt="" src={image} />
      {showVideo ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className={
            videoVisible
              ? `${styles.video} ${styles.videoVisible}`
              : styles.video
          }
          onCanPlay={tryPlay}
          onError={() => setFailed(true)}
          onPlaying={() => setPlaying(true)}
          poster={image}
          preload="auto"
          ref={videoRef}
          src={videoSrc}
        />
      ) : null}
    </div>
  );
}
