import { forwardRef } from "react";

interface ParchmentFormatProps {
  title: string;
  content: string;
  recipientName?: string;
  senderName?: string;
  date?: string;
  isLoading?: boolean;
}

const ParchmentFormat = forwardRef<HTMLDivElement, ParchmentFormatProps>(
  ({ title, content, recipientName, senderName, date, isLoading }, ref) => {
    return (
      <div
        ref={ref}
        className="relative"
        style={{
          background: "linear-gradient(135deg, #d4a855 0%, #c49a3c 15%, #d4a855 30%, #e8c87a 50%, #d4a855 70%, #c49a3c 85%, #d4a855 100%)",
          fontFamily: "'Libre Baskerville', 'Georgia', serif",
        }}
      >
        {/* Aged paper texture overlay */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 20% 30%, rgba(139,90,43,0.3) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(139,90,43,0.2) 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, rgba(255,248,230,0.1) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 p-10 md:p-14">
          {/* Corner flourishes - top left */}
          <div className="absolute top-4 left-4 text-3xl md:text-4xl opacity-60 select-none" style={{ fontFamily: "serif", color: "#5a3a1a" }}>
            ❦
          </div>
          {/* Top right */}
          <div className="absolute top-4 right-4 text-3xl md:text-4xl opacity-60 select-none" style={{ fontFamily: "serif", color: "#5a3a1a", transform: "scaleX(-1)" }}>
            ❦
          </div>
          {/* Bottom left */}
          <div className="absolute bottom-4 left-4 text-3xl md:text-4xl opacity-60 select-none" style={{ fontFamily: "serif", color: "#5a3a1a", transform: "scaleY(-1)" }}>
            ❦
          </div>
          {/* Bottom right */}
          <div className="absolute bottom-4 right-4 text-3xl md:text-4xl opacity-60 select-none" style={{ fontFamily: "serif", color: "#5a3a1a", transform: "scale(-1)" }}>
            ❦
          </div>

          {/* Decorative border */}
          <div className="absolute inset-6 border-2 pointer-events-none" style={{ borderColor: "rgba(90,58,26,0.4)" }} />
          <div className="absolute inset-7 border pointer-events-none" style={{ borderColor: "rgba(90,58,26,0.2)", borderStyle: "dotted" }} />

          {/* Header */}
          <div className="text-center mb-6 pt-6">
            <p className="text-xs tracking-[0.3em] uppercase mb-3 opacity-60" style={{ color: "#3d2a10" }}>
              A Letter of the Heart
            </p>
            <h2
              className="text-2xl md:text-3xl italic mb-2"
              style={{
                fontFamily: "'Playfair Display', 'Georgia', serif",
                color: "#3d2a10",
              }}
            >
              {title}
            </h2>
            {date && (
              <p className="text-sm italic opacity-60" style={{ color: "#3d2a10" }}>
                {new Date(date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            )}
          </div>

          {/* Ornament divider */}
          <div className="flex items-center justify-center gap-4 py-3">
            <div className="h-px w-16" style={{ backgroundColor: "rgba(90,58,26,0.4)" }} />
            <span className="text-xl select-none" style={{ color: "rgba(90,58,26,0.5)" }}>❧</span>
            <div className="h-px w-16" style={{ backgroundColor: "rgba(90,58,26,0.4)" }} />
          </div>

          {/* Salutation */}
          {recipientName && (
            <p
              className="text-lg italic mb-6"
              style={{
                fontFamily: "'Playfair Display', 'Georgia', serif",
                color: "#3d2a10",
              }}
            >
              My Dearest {recipientName},
            </p>
          )}

          {/* Body */}
          {isLoading ? (
            <div className="space-y-4 animate-pulse">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-4 rounded" style={{ backgroundColor: "rgba(90,58,26,0.2)", width: `${85 + Math.random() * 15}%` }} />
              ))}
            </div>
          ) : (
            <div
              className="text-sm md:text-base leading-[2] whitespace-pre-wrap"
              style={{ color: "#3d2a10" }}
            >
              {content}
            </div>
          )}

          {/* Sign-off */}
          {!isLoading && (
            <div className="mt-10 text-right">
              <p className="text-base italic" style={{ fontFamily: "'Playfair Display', 'Georgia', serif", color: "#3d2a10" }}>
                Yours, most ardently,
              </p>
              {senderName && (
                <p className="text-lg italic mt-2" style={{ fontFamily: "'Playfair Display', 'Georgia', serif", color: "#3d2a10" }}>
                  {senderName}
                </p>
              )}
            </div>
          )}

          {/* Wax seal */}
          {!isLoading && (
            <div className="flex justify-center mt-8 pb-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-inner"
                style={{
                  backgroundColor: "rgba(139,69,69,0.3)",
                  color: "#8b4545",
                  border: "1px solid rgba(139,69,69,0.4)",
                }}
              >
                ♥
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
);

ParchmentFormat.displayName = "ParchmentFormat";
export default ParchmentFormat;
