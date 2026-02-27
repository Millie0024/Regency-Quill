import { forwardRef } from "react";

interface SunlitFormatProps {
  title: string;
  content: string;
  recipientName?: string;
  senderName?: string;
  date?: string;
  isLoading?: boolean;
}

const SunlitFormat = forwardRef<HTMLDivElement, SunlitFormatProps>(
  ({ title, content, recipientName, senderName, date, isLoading }, ref) => {
    return (
      <div
        ref={ref}
        className="relative"
        style={{
          background: "linear-gradient(170deg, #f5e6c8 0%, #ede0c0 30%, #e8d5a8 60%, #f0ddb5 100%)",
          fontFamily: "'Libre Baskerville', 'Georgia', serif",
        }}
      >
        {/* Warm light overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(255,220,160,0.15) 0%, transparent 40%, rgba(200,170,110,0.1) 100%)",
          }}
        />

        <div className="relative z-10 p-10 md:p-16">
          {/* Simple elegant top border */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px flex-1 max-w-[80px]" style={{ backgroundColor: "rgba(120,80,30,0.3)" }} />
            <span className="text-sm select-none" style={{ color: "rgba(120,80,30,0.4)" }}>✦</span>
            <div className="h-px flex-1 max-w-[80px]" style={{ backgroundColor: "rgba(120,80,30,0.3)" }} />
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h2
              className="text-2xl md:text-4xl italic mb-3"
              style={{
                fontFamily: "'Playfair Display', 'Georgia', serif",
                color: "#4a3520",
              }}
            >
              {title}
            </h2>
            {date && (
              <p className="text-sm italic" style={{ color: "rgba(74,53,32,0.6)" }}>
                {new Date(date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            )}
          </div>

          {/* Salutation */}
          {recipientName && (
            <p
              className="text-xl italic mb-8"
              style={{
                fontFamily: "'Playfair Display', 'Georgia', serif",
                color: "#4a3520",
              }}
            >
              Dear {recipientName},
            </p>
          )}

          {/* Body */}
          {isLoading ? (
            <div className="space-y-4 animate-pulse">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-4 rounded" style={{ backgroundColor: "rgba(120,80,30,0.15)", width: `${80 + Math.random() * 20}%` }} />
              ))}
            </div>
          ) : (
            <div
              className="text-sm md:text-base leading-[2.2] whitespace-pre-wrap"
              style={{
                color: "#4a3520",
                fontStyle: "italic",
              }}
            >
              {content}
            </div>
          )}

          {/* Sign-off */}
          {!isLoading && (
            <div className="mt-12 text-right">
              <p className="text-lg italic" style={{ fontFamily: "'Playfair Display', 'Georgia', serif", color: "#4a3520" }}>
                With love,
              </p>
              {senderName && (
                <p className="text-xl italic mt-2" style={{ fontFamily: "'Playfair Display', 'Georgia', serif", color: "#4a3520" }}>
                  {senderName}
                </p>
              )}
            </div>
          )}

          {/* Bottom ornament */}
          <div className="flex items-center justify-center gap-3 mt-10">
            <div className="h-px flex-1 max-w-[80px]" style={{ backgroundColor: "rgba(120,80,30,0.3)" }} />
            <span className="text-sm select-none" style={{ color: "rgba(120,80,30,0.4)" }}>✦</span>
            <div className="h-px flex-1 max-w-[80px]" style={{ backgroundColor: "rgba(120,80,30,0.3)" }} />
          </div>
        </div>
      </div>
    );
  }
);

SunlitFormat.displayName = "SunlitFormat";
export default SunlitFormat;
