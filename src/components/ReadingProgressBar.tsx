import React, { useEffect, useState } from 'react';

interface ReadingProgressBarProps {
  targetId?: string;
}

export const ReadingProgressBar: React.FC<ReadingProgressBarProps> = ({
  targetId = 'newspaper-article-container',
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        const articleEl = document.getElementById(targetId);
        if (articleEl) {
          const rect = articleEl.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const totalScrollable = rect.height - viewportHeight;

          if (totalScrollable <= 0) {
            // Article is shorter than the viewport
            setProgress(rect.top <= 0 ? 100 : 0);
          } else {
            // How much of the article has scrolled past the top of the viewport
            const scrolled = -rect.top;
            const percent = (scrolled / totalScrollable) * 100;
            setProgress(Math.min(100, Math.max(0, percent)));
          }
        } else {
          // Fallback to document scroll if article container is not mounted yet
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (docHeight > 0) {
            setProgress(Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)));
          } else {
            setProgress(0);
          }
        }
      });
    };

    // Calculate initial progress on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [targetId]);

  return (
    <div
      id="reading-progress-container"
      className="fixed top-0 left-0 right-0 h-[3px] z-50 pointer-events-none bg-neutral-200/40"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Kemajuan membaca artikel"
    >
      <div
        id="reading-progress-bar"
        className="h-full bg-[#1A1A1A] transition-all duration-75 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
