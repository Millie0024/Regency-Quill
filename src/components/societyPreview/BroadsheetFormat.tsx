import { forwardRef } from "react";
import silhouetteCameo from "@/assets/silhouette-cameo.png";

interface BroadsheetFormatProps {
  title: string;
  content: string;
  date?: string;
  isLoading?: boolean;
}

const BroadsheetFormat = forwardRef<HTMLDivElement, BroadsheetFormatProps>(
  ({ title, content, date, isLoading }, ref) => {
    // Split content into two columns
    const midpoint = Math.ceil(content.length / 2);
    const breakAt = content.indexOf(" ", midpoint);
    const col1 = content.slice(0, breakAt > 0 ? breakAt : midpoint);
    const col2 = content.slice(breakAt > 0 ? breakAt + 1 : midpoint);

    return (
      <div
        ref={ref}
        className="bg-white text-black p-8 md:p-12 relative"
        style={{
          fontFamily: "'Libre Baskerville', 'Georgia', serif",
        }}
      >
        {/* Outer decorative border */}
        <div className="absolute inset-3 border-2 border-black pointer-events-none" />
        <div className="absolute inset-4 border border-black pointer-events-none" />

        {/* Inner dotted border */}
        <div
          className="absolute inset-5 pointer-events-none"
          style={{
            border: "2px dotted black",
          }}
        />

        <div className="relative z-10 px-4 md:px-6 pt-4">
          {/* Silhouette cameo */}
          <div className="flex justify-center mb-4">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-black overflow-hidden bg-white flex items-center justify-center">
              <img
                src={silhouetteCameo}
                alt="Lady Whistledown silhouette"
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
              />
            </div>
          </div>

          {/* Masthead */}
          <div className="text-center mb-2">
            <h1
              className="text-3xl md:text-5xl italic mb-1"
              style={{
                fontFamily: "'Playfair Display', 'Georgia', serif",
              }}
            >
              Lady Whistledown's
            </h1>
            <p
              className="text-sm md:text-base tracking-[0.5em] uppercase font-bold"
              style={{
                fontFamily: "'Cormorant Garamond', 'Georgia', serif",
              }}
            >
              Society Papers
            </p>
          </div>

          {/* Divider line */}
          <div className="border-t-2 border-black my-4" />

          {/* Title */}
          <h2
            className="text-xl md:text-2xl font-bold text-center mb-4 uppercase tracking-wider"
            style={{
              fontFamily: "'Playfair Display', 'Georgia', serif",
            }}
          >
            {title}
          </h2>

          {/* Date */}
          {date && (
            <p className="text-center text-xs italic mb-4 opacity-70">
              {new Date(date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          )}

          {/* Two-column content */}
          {isLoading ? (
            <div className="space-y-3 animate-pulse">
              <div className="h-3 bg-gray-300 rounded w-full" />
              <div className="h-3 bg-gray-300 rounded w-11/12" />
              <div className="h-3 bg-gray-300 rounded w-full" />
              <div className="h-3 bg-gray-300 rounded w-9/12" />
              <div className="h-3 bg-gray-300 rounded w-full" />
              <div className="h-3 bg-gray-300 rounded w-10/12" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div
                className="text-sm leading-[1.8] text-justify whitespace-pre-wrap"
                style={{ textAlignLast: "left" }}
              >
                {col1}
              </div>
              <div
                className="text-sm leading-[1.8] text-justify whitespace-pre-wrap"
                style={{ textAlignLast: "left" }}
              >
                {col2}
              </div>
            </div>
          )}

          {/* Footer */}
          {!isLoading && (
            <div className="mt-8 text-center">
              <div className="border-t border-black my-4" />
              <p className="text-xs italic">
                Yours in scandal and society,
              </p>
              <p
                className="text-base italic mt-1 font-semibold"
                style={{
                  fontFamily: "'Playfair Display', 'Georgia', serif",
                }}
              >
                Lady Whistledown
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
);

BroadsheetFormat.displayName = "BroadsheetFormat";

export default BroadsheetFormat;
