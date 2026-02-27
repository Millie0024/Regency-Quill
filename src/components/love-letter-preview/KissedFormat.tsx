import { forwardRef } from "react";
import lipstickMark from "@/assets/lipstick-mark.png";

interface KissedFormatProps {
  title: string;
  content: string;
  recipientName?: string;
  senderName?: string;
  date?: string;
  isLoading?: boolean;
}

const KissedFormat = forwardRef<HTMLDivElement, KissedFormatProps>(
  ({ title, content, recipientName, senderName, date, isLoading }, ref) => {
    return (
      <div
        ref={ref}
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #faf5f0 0%, #f5ede4 40%, #f0e8de 100%)",
          fontFamily: "'Libre Baskerville', 'Georgia', serif",
        }}
      >
        {/* Floral corner ornaments (CSS-based) */}
        <div className="absolute top-3 left-3 text-3xl opacity-20 select-none" style={{ color: "#c4849a" }}>✿</div>
        <div className="absolute top-3 right-3 text-3xl opacity-20 select-none" style={{ color: "#c4849a" }}>✿</div>
        <div className="absolute bottom-3 left-3 text-3xl opacity-20 select-none" style={{ color: "#c4849a" }}>✿</div>
        <div className="absolute bottom-3 right-3 text-3xl opacity-20 select-none" style={{ color: "#c4849a" }}>✿</div>

        {/* Lipstick marks scattered */}
        <img
          src={lipstickMark}
          alt=""
          className="absolute top-8 right-8 w-16 h-16 opacity-25 rotate-12 pointer-events-none"
        />
        <img
          src={lipstickMark}
          alt=""
          className="absolute bottom-20 left-6 w-20 h-20 opacity-20 -rotate-[25deg] pointer-events-none"
        />
        <img
          src={lipstickMark}
          alt=""
          className="absolute top-1/2 right-4 w-14 h-14 opacity-15 rotate-[40deg] pointer-events-none"
        />

        {/* Soft border */}
        <div className="absolute inset-5 border pointer-events-none" style={{ borderColor: "rgba(196,132,154,0.25)" }} />

        <div className="relative z-10 p-10 md:p-14">
          {/* Header */}
          <div className="text-center mb-8">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "rgba(160,100,120,0.6)" }}>
              ♥ A Note of Affection ♥
            </p>
            <h2
              className="text-2xl md:text-3xl italic mb-2"
              style={{
                fontFamily: "'Playfair Display', 'Georgia', serif",
                color: "#6b3a4a",
              }}
            >
              {title}
            </h2>
            {date && (
              <p className="text-sm italic" style={{ color: "rgba(107,58,74,0.5)" }}>
                {new Date(date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            )}
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 py-2">
            <div className="h-px w-12" style={{ backgroundColor: "rgba(196,132,154,0.3)" }} />
            <span className="text-rose text-sm select-none">♥</span>
            <div className="h-px w-12" style={{ backgroundColor: "rgba(196,132,154,0.3)" }} />
          </div>

          {/* Salutation */}
          {recipientName && (
            <p
              className="text-lg italic mb-6"
              style={{
                fontFamily: "'Playfair Display', 'Georgia', serif",
                color: "#6b3a4a",
              }}
            >
              Dear {recipientName},
            </p>
          )}

          {/* Body */}
          {isLoading ? (
            <div className="space-y-4 animate-pulse">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-4 rounded" style={{ backgroundColor: "rgba(196,132,154,0.15)", width: `${80 + Math.random() * 20}%` }} />
              ))}
            </div>
          ) : (
            <div
              className="text-sm md:text-base leading-[2] whitespace-pre-wrap"
              style={{ color: "#5a3040" }}
            >
              {content}
            </div>
          )}

          {/* Sign-off */}
          {!isLoading && (
            <div className="mt-10 text-right">
              <p className="text-base italic" style={{ fontFamily: "'Playfair Display', 'Georgia', serif", color: "#6b3a4a" }}>
                ♥ Yours xxx
              </p>
              {senderName && (
                <p className="text-lg italic mt-2" style={{ fontFamily: "'Playfair Display', 'Georgia', serif", color: "#6b3a4a" }}>
                  {senderName}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
);

KissedFormat.displayName = "KissedFormat";
export default KissedFormat;
