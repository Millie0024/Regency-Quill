import { forwardRef } from "react";
import lipstickMark from "@/assets/lipstick-mark.png";

interface WeatheredFormatProps {
  title: string;
  content: string;
  recipientName?: string;
  senderName?: string;
  date?: string;
  isLoading?: boolean;
}

const WeatheredFormat = forwardRef<HTMLDivElement, WeatheredFormatProps>(
  ({ title, content, recipientName, senderName, date, isLoading }, ref) => {
    return (
      <div
        ref={ref}
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #c9a96e 0%, #b8935a 20%, #a88348 40%, #c9a96e 60%, #b89050 80%, #a07840 100%)",
          fontFamily: "'Libre Baskerville', 'Georgia', serif",
        }}
      >
        {/* Burn/age texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 10% 10%, rgba(60,30,10,0.3) 0%, transparent 30%), radial-gradient(ellipse at 90% 90%, rgba(60,30,10,0.25) 0%, transparent 30%), radial-gradient(ellipse at 85% 15%, rgba(60,30,10,0.2) 0%, transparent 25%), radial-gradient(ellipse at 15% 85%, rgba(60,30,10,0.2) 0%, transparent 25%)",
          }}
        />

        {/* Edge burn effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: "inset 0 0 60px rgba(60,30,10,0.4), inset 0 0 120px rgba(60,30,10,0.15)",
          }}
        />

        {/* Scattered hearts */}
        <div className="absolute top-12 right-10 text-lg opacity-30 select-none" style={{ color: "#8b3030" }}>♥</div>
        <div className="absolute top-1/3 left-8 text-sm opacity-25 select-none" style={{ color: "#8b3030" }}>♥</div>
        <div className="absolute bottom-1/3 right-12 text-base opacity-20 select-none" style={{ color: "#8b3030" }}>♥</div>
        <div className="absolute bottom-16 left-12 text-lg opacity-25 select-none" style={{ color: "#8b3030" }}>♥</div>

        {/* Lipstick marks */}
        <img
          src={lipstickMark}
          alt=""
          className="absolute bottom-12 right-10 w-16 h-16 opacity-20 rotate-[30deg] pointer-events-none"
        />
        <img
          src={lipstickMark}
          alt=""
          className="absolute top-1/2 left-4 w-12 h-12 opacity-15 -rotate-[15deg] pointer-events-none"
        />

        <div className="relative z-10 p-10 md:p-14">
          {/* Salutation - handwritten feel */}
          {recipientName && (
            <p
              className="text-xl md:text-2xl italic mb-2"
              style={{
                fontFamily: "'Playfair Display', 'Georgia', serif",
                color: "#3a2010",
              }}
            >
              Dear {recipientName} ♥
            </p>
          )}

          {/* Title as opening exclamation */}
          <h2
            className="text-lg md:text-xl font-bold italic mb-6 uppercase tracking-wider"
            style={{
              fontFamily: "'Playfair Display', 'Georgia', serif",
              color: "#3a2010",
            }}
          >
            {title}
          </h2>

          {/* Body */}
          {isLoading ? (
            <div className="space-y-4 animate-pulse">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-4 rounded" style={{ backgroundColor: "rgba(58,32,16,0.2)", width: `${80 + Math.random() * 20}%` }} />
              ))}
            </div>
          ) : (
            <div
              className="text-sm md:text-base leading-[2] whitespace-pre-wrap"
              style={{ color: "#3a2010" }}
            >
              {content}
            </div>
          )}

          {/* Sign-off */}
          {!isLoading && (
            <div className="mt-10">
              <p className="text-base italic" style={{ fontFamily: "'Playfair Display', 'Georgia', serif", color: "#3a2010" }}>
                Your forever,
              </p>
              {senderName && (
                <p className="text-lg italic mt-2" style={{ fontFamily: "'Playfair Display', 'Georgia', serif", color: "#3a2010" }}>
                  {senderName} ♥
                </p>
              )}
            </div>
          )}

          {/* Date at bottom */}
          {date && !isLoading && (
            <p className="text-xs italic mt-8 opacity-50" style={{ color: "#3a2010" }}>
              {new Date(date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          )}
        </div>
      </div>
    );
  }
);

WeatheredFormat.displayName = "WeatheredFormat";
export default WeatheredFormat;
