import { forwardRef } from "react";
import silhouetteCameo from "@/assets/silhouette-cameo.png";

interface ScandalSheetFormatProps {
  title: string;
  content: string;
  date?: string;
  isLoading?: boolean;
}

const ScandalSheetFormat = forwardRef<HTMLDivElement, ScandalSheetFormatProps>(
  ({ title, content, date, isLoading }, ref) => {
    return (
      <div
        ref={ref}
        className="bg-white text-black p-8 md:p-12 relative"
        style={{
          fontFamily: "'Libre Baskerville', 'Georgia', serif",
        }}
      >
        {/* Bold double border */}
        <div className="absolute inset-2 border-4 border-black pointer-events-none" />
        <div className="absolute inset-4 border border-black pointer-events-none" />

        <div className="relative z-10 px-4 md:px-8 pt-4">
          {/* EXTRA! EXTRA! banner */}
          <div className="text-center mb-2">
            <p
              className="text-xs tracking-[0.6em] uppercase font-bold"
              style={{
                fontFamily: "'Cormorant Garamond', 'Georgia', serif",
              }}
            >
              ★ Extra! Extra! ★
            </p>
          </div>

          {/* Bold masthead */}
          <div className="text-center mb-4 border-y-4 border-black py-4">
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full border-2 border-black overflow-hidden bg-white flex items-center justify-center">
                <img
                  src={silhouetteCameo}
                  alt="Lady Whistledown"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <h1
                  className="text-2xl md:text-4xl font-bold uppercase tracking-wider"
                  style={{
                    fontFamily: "'Playfair Display', 'Georgia', serif",
                  }}
                >
                  Scandal Sheet
                </h1>
                <p
                  className="text-xs tracking-[0.4em] uppercase"
                  style={{
                    fontFamily: "'Cormorant Garamond', 'Georgia', serif",
                  }}
                >
                  By Lady Whistledown
                </p>
              </div>
            </div>
          </div>

          {/* Date line */}
          {date && (
            <p className="text-center text-xs tracking-widest uppercase mb-4">
              {new Date(date).toLocaleDateString("en-GB", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          )}

          {/* Big dramatic title */}
          <h2
            className="text-2xl md:text-3xl font-black text-center mb-6 uppercase tracking-wide leading-tight"
            style={{
              fontFamily: "'Playfair Display', 'Georgia', serif",
            }}
          >
            {title}
          </h2>

          {/* Content in two columns with dramatic lead */}
          {isLoading ? (
            <div className="space-y-3 animate-pulse">
              <div className="h-3 bg-gray-300 rounded w-full" />
              <div className="h-3 bg-gray-300 rounded w-11/12" />
              <div className="h-3 bg-gray-300 rounded w-full" />
              <div className="h-3 bg-gray-300 rounded w-9/12" />
            </div>
          ) : (
            <div className="text-sm leading-[1.9] text-justify whitespace-pre-wrap">
              <span
                className="text-5xl font-bold float-left mr-2 mt-1 leading-none"
                style={{
                  fontFamily: "'Playfair Display', 'Georgia', serif",
                }}
              >
                {content.charAt(0)}
              </span>
              {content.slice(1)}
            </div>
          )}

          {/* Footer */}
          {!isLoading && (
            <div className="mt-8 border-t-4 border-black pt-4 text-center">
              <p
                className="text-xs tracking-[0.3em] uppercase font-bold"
                style={{
                  fontFamily: "'Cormorant Garamond', 'Georgia', serif",
                }}
              >
                ★ Published for the eyes of the ton ★
              </p>
              <p
                className="text-sm italic mt-2"
                style={{
                  fontFamily: "'Playfair Display', 'Georgia', serif",
                }}
              >
                — Lady Whistledown
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
);

ScandalSheetFormat.displayName = "ScandalSheetFormat";

export default ScandalSheetFormat;
