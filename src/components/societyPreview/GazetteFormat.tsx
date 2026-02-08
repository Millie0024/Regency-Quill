import { forwardRef } from "react";
import silhouetteCameo from "@/assets/silhouette-cameo.png";
import lipstickMark from "@/assets/lipstick-mark.png";

interface GazetteFormatProps {
  title: string;
  content: string;
  date?: string;
  isLoading?: boolean;
}

const GazetteFormat = forwardRef<HTMLDivElement, GazetteFormatProps>(
  ({ title, content, date, isLoading }, ref) => {
    return (
      <div
        ref={ref}
        className="bg-white text-black p-8 md:p-12 relative overflow-hidden"
        style={{
          fontFamily: "'Libre Baskerville', 'Georgia', serif",
        }}
      >
        {/* Outer border */}
        <div className="absolute inset-3 border-2 border-black pointer-events-none" />

        {/* Lipstick marks - decorative */}
        <img
          src={lipstickMark}
          alt=""
          className="absolute top-6 right-6 w-16 h-16 opacity-20 rotate-[-15deg] pointer-events-none"
        />
        <img
          src={lipstickMark}
          alt=""
          className="absolute bottom-12 left-8 w-12 h-12 opacity-15 rotate-[25deg] pointer-events-none"
        />

        <div className="relative z-10 px-4 md:px-8 pt-4">
          {/* Header with silhouette */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px flex-1 bg-black" />
            <div className="w-16 h-16 rounded-full border-2 border-black overflow-hidden bg-white flex items-center justify-center">
              <img
                src={silhouetteCameo}
                alt="Lady Whistledown"
                className="w-14 h-14 object-contain"
              />
            </div>
            <div className="h-px flex-1 bg-black" />
          </div>

          {/* Masthead */}
          <div className="text-center mb-6">
            <p
              className="text-xs tracking-[0.4em] uppercase font-bold mb-1"
              style={{
                fontFamily: "'Cormorant Garamond', 'Georgia', serif",
              }}
            >
              The Gossip Gazette
            </p>
            <h1
              className="text-2xl md:text-4xl italic"
              style={{
                fontFamily: "'Playfair Display', 'Georgia', serif",
              }}
            >
              Lady Whistledown's
            </h1>
            <p
              className="text-sm tracking-[0.3em] uppercase mt-1"
              style={{
                fontFamily: "'Cormorant Garamond', 'Georgia', serif",
              }}
            >
              Private Correspondence
            </p>
          </div>

          {/* Ornamental divider */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-black" />
            <span className="text-lg">❧</span>
            <div className="h-px w-12 bg-black" />
          </div>

          {/* Title */}
          <h2
            className="text-xl md:text-2xl font-bold text-center mb-2 italic"
            style={{
              fontFamily: "'Playfair Display', 'Georgia', serif",
            }}
          >
            {title}
          </h2>

          {date && (
            <p className="text-center text-xs italic mb-6 opacity-70">
              {new Date(date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          )}

          {/* Single column content */}
          {isLoading ? (
            <div className="space-y-3 animate-pulse">
              <div className="h-3 bg-gray-300 rounded w-full" />
              <div className="h-3 bg-gray-300 rounded w-11/12" />
              <div className="h-3 bg-gray-300 rounded w-full" />
              <div className="h-3 bg-gray-300 rounded w-9/12" />
            </div>
          ) : (
            <div className="text-sm leading-[2] text-justify whitespace-pre-wrap max-w-lg mx-auto">
              {content}
            </div>
          )}

          {/* Lipstick kiss footer */}
          {!isLoading && (
            <div className="mt-8 text-center relative">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-16 bg-black" />
                <span className="text-lg">✦</span>
                <div className="h-px w-16 bg-black" />
              </div>
              <p className="text-xs italic">
                Sealed with a kiss and a scandal,
              </p>
              <p
                className="text-base italic mt-1 font-semibold"
                style={{
                  fontFamily: "'Playfair Display', 'Georgia', serif",
                }}
              >
                Lady Whistledown
              </p>
              <img
                src={lipstickMark}
                alt="Kiss mark"
                className="w-10 h-10 opacity-30 mx-auto mt-2 rotate-[10deg]"
              />
            </div>
          )}
        </div>
      </div>
    );
  }
);

GazetteFormat.displayName = "GazetteFormat";

export default GazetteFormat;
