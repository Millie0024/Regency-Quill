import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import OrnamentDivider from "./OrnamentDivider";

interface LetterPreviewProps {
  type: "love-letter" | "society-announcement";
  title: string;
  content: string;
  recipientName?: string;
  senderName?: string;
  date?: string;
  isLoading?: boolean;
  onRefine: () => void;
  onBack: () => void;
}

const LetterPreview = ({
  type,
  title,
  content,
  recipientName,
  senderName,
  date,
  isLoading,
  onRefine,
  onBack,
}: LetterPreviewProps) => {
  const letterRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async () => {
    if (!letterRef.current) return;

    const { default: html2canvas } = await import("html2canvas");
    const { default: jsPDF } = await import("jspdf");

    const canvas = await html2canvas(letterRef.current, {
      scale: 2,
      backgroundColor: "#FBF7F2",
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

    const filename =
      type === "love-letter"
        ? `love-letter${recipientName ? `-to-${recipientName.toLowerCase().replace(/\s+/g, "-")}` : ""}.pdf`
        : `society-announcement.pdf`;

    pdf.save(filename);
  };

  const isLoveLetter = type === "love-letter";
  const accentClass = isLoveLetter ? "border-rose/40" : "border-sage/40";
  const accentBg = isLoveLetter ? "bg-rose/5" : "bg-sage/5";

  return (
    <div className="space-y-6">
      {/* Action bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Button
          variant="ghost"
          onClick={onBack}
          className="font-elegant text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground gap-2"
        >
          <span className="text-gold">←</span>
          Edit Details
        </Button>

        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={onRefine}
            disabled={isLoading}
            className="font-elegant tracking-wide gap-2"
          >
            {isLoading ? (
              <span className="inline-block w-4 h-4 border-2 border-gold/40 border-t-gold rounded-full animate-spin" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
              </svg>
            )}
            Refine
          </Button>

          <Button
            variant={isLoveLetter ? "rose" : "sage"}
            onClick={handleDownloadPDF}
            className="font-elegant tracking-wide gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download PDF
          </Button>
        </div>
      </div>

      {/* Preview card */}
      <ScrollArea className="max-h-[70vh]">
        <div
          ref={letterRef}
          className={`bg-card rounded-2xl border-2 ${accentClass} shadow-lg p-10 md:p-16 ${accentBg}`}
        >
          {/* Letter header */}
          <div className="text-center mb-8">
            <p className="font-elegant text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
              {isLoveLetter
                ? "A Letter of the Heart"
                : "Society Papers — A Whistledown Chronicle"}
            </p>
            <h2 className="font-display text-2xl md:text-3xl italic text-foreground mb-2">
              {title}
            </h2>
            {date && (
              <p className="font-elegant text-sm text-muted-foreground italic">
                {new Date(date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            )}
          </div>

          <OrnamentDivider className="py-4" />

          {/* Salutation for love letters */}
          {isLoveLetter && recipientName && (
            <p className="font-display text-lg italic text-foreground mb-6">
              My Dearest {recipientName},
            </p>
          )}

          {/* Letter body */}
          <div className="font-body text-sm md:text-base leading-[1.9] text-foreground/90 whitespace-pre-wrap">
            {isLoading ? (
              <div className="space-y-4 animate-pulse">
                <div className="h-4 bg-border/50 rounded w-full" />
                <div className="h-4 bg-border/50 rounded w-11/12" />
                <div className="h-4 bg-border/50 rounded w-full" />
                <div className="h-4 bg-border/50 rounded w-9/12" />
                <div className="h-4 bg-border/50 rounded w-full" />
                <div className="h-4 bg-border/50 rounded w-10/12" />
              </div>
            ) : (
              content
            )}
          </div>

          {/* Sign-off for love letters */}
          {isLoveLetter && !isLoading && (
            <div className="mt-10 text-right">
              <p className="font-display text-base italic text-foreground">
                Yours, most ardently,
              </p>
              {senderName && (
                <p className="font-display text-lg italic text-foreground mt-2">
                  {senderName}
                </p>
              )}
            </div>
          )}

          {/* Society paper footer */}
          {!isLoveLetter && !isLoading && (
            <div className="mt-10 text-center">
              <OrnamentDivider className="py-4" />
              <p className="font-elegant text-sm italic text-muted-foreground">
                Yours in scandal and society,
              </p>
              <p className="font-display text-base italic text-gold mt-1">
                Lady Whistledown
              </p>
            </div>
          )}

          {/* Wax seal ornament */}
          {!isLoading && (
            <div className="flex justify-center mt-8">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-inner ${
                  isLoveLetter
                    ? "bg-rose/20 text-rose border border-rose/30"
                    : "bg-sage/20 text-sage border border-sage/30"
                }`}
              >
                {isLoveLetter ? "♥" : "❧"}
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default LetterPreview;
