import { forwardRef } from "react";
import silhouetteCameo from "@/assets/silhouette-cameo.png";

interface ColumnFormatProps {
  title: string;
  content: string;
  date?: string;
  isLoading?: boolean;
}

const ColumnFormat = forwardRef<HTMLDivElement, ColumnFormatProps>(
  ({ title, content, date, isLoading }, ref) => {
    return (
      <div
        ref={ref}
        className="bg-white text-black p-8 md:p-14 relative"
        style={{
          fontFamily: "'Libre Baskerville', 'Georgia', serif",
        }}
      >
        {/* Elegant thin border */}
        <div className="absolute inset-4 border border-black pointer-events-none" />

        <div className="relative z-10 px-2 md:px-6 pt-2">
          {/* Silhouette centered at top */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full border border-black overflow-hidden bg-white flex items-center justify-center">
              <img
                src={silhouetteCameo}
                alt="Lady Whistledown"
                className="w-16 h-16 object-contain"
              />
            </div>
          </div>

          {/* Elegant masthead */}
          <div className="text-center mb-6">
            <p
              className="text-xs tracking-[0.5em] uppercase mb-2"
              style={{
                fontFamily: "'Cormorant Garamond', 'Georgia', serif",
              }}
            >
              From the desk of
            </p>
            <h1
              className="text-2xl md:text-4xl italic"
              style={{
                fontFamily: "'Playfair Display', 'Georgia', serif",
              }}
            >
              Lady Whistledown
            </h1>
            <div className="flex items-center justify-center gap-4 mt-3">
              <div className="h-px w-20 bg-black/40" />
              <span className="text-sm">✦</span>
              <div className="h-px w-20 bg-black/40" />
            </div>
          </div>

          {/* Date */}
          {date && (
            <p className="text-center text-xs italic mb-6 opacity-60">
              {new Date(date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          )}

          {/* Title */}
          <h2
            className="text-xl md:text-2xl text-center mb-8 italic"
            style={{
              fontFamily: "'Playfair Display', 'Georgia', serif",
            }}
          >
            "{title}"
          </h2>

          {/* Elegant single-column content */}
          {isLoading ? (
            <div className="space-y-3 animate-pulse max-w-md mx-auto">
              <div className="h-3 bg-gray-300 rounded w-full" />
              <div className="h-3 bg-gray-300 rounded w-11/12" />
              <div className="h-3 bg-gray-300 rounded w-full" />
              <div className="h-3 bg-gray-300 rounded w-9/12" />
            </div>
          ) : (
            <div
              className="text-sm leading-[2.1] whitespace-pre-wrap max-w-lg mx-auto"
              style={{ textIndent: "2em" }}
            >
              {content}
            </div>
          )}

          {/* Elegant sign-off */}
          {!isLoading && (
            <div className="mt-10 text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-16 bg-black/40" />
                <span className="text-xs">❧</span>
                <div className="h-px w-16 bg-black/40" />
              </div>
              <p className="text-xs italic opacity-70">
                Yours in scandal and society,
              </p>
              <p
                className="text-lg italic mt-2"
                style={{
                  fontFamily: "'Playfair Display', 'Georgia', serif",
                }}
              >
                Lady Whistledown
              </p>
              <div className="mt-4 flex justify-center">
                <div className="w-10 h-10 rounded-full border border-black/30 flex items-center justify-center text-lg">
                  ❧
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
);

ColumnFormat.displayName = "ColumnFormat";

export default ColumnFormat;
