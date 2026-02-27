import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import LetterFormatSelector, {
  type LetterFormat,
} from "./LetterFormatSelector";
import ParchmentFormat from "./ParchmentFormat";
import SunlitFormat from "./SunlitFormat";
import KissedFormat from "./KissedFormat";
import WeatheredFormat from "./WeatheredFormat";

interface LoveLetterPreviewProps {
  title: string;
  content: string;
  recipientName?: string;
  senderName?: string;
  date?: string;
  isLoading?: boolean;
  onRefine: () => void;
  onBack: () => void;
}

const LoveLetterPreview = ({
  title,
  content,
  recipientName,
  senderName,
  date,
  isLoading,
  onRefine,
  onBack,
}: LoveLetterPreviewProps) => {
  const letterRef = useRef<HTMLDivElement>(null);
  const [format, setFormat] = useState<LetterFormat>("parchment");

  const handleDownloadPDF = async () => {
    if (!letterRef.current) return;

    const { default: html2canvas } = await import("html2canvas");
    const { default: jsPDF } = await import("jspdf");

    const canvas = await html2canvas(letterRef.current, {
      scale: 1.5,
      backgroundColor: null,
      useCORS: true,
      scrollY: 0,
      windowHeight: letterRef.current.scrollHeight,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const imgProps = pdf.getImageProperties(imgData);

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    // Maintain aspect ratio
    const ratio = Math.min(
      pdfWidth / imgProps.width,
      pdfHeight / imgProps.height,
    );

    const imgWidth = imgProps.width * ratio;
    const imgHeight = imgProps.height * ratio;

    // Center it (optional but makes it elegant)
    const x = (pdfWidth - imgWidth) / 2;
    const y = (pdfHeight - imgHeight) / 2;

    pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);

    const filename = `love-letter${recipientName ? `-to-${recipientName.toLowerCase().replace(/\s+/g, "-")}` : ""}.pdf`;
    pdf.save(filename);
  };

  const formatProps = {
    title,
    content,
    recipientName,
    senderName,
    date,
    isLoading,
  };

  const renderFormat = () => {
    switch (format) {
      case "parchment":
        return <ParchmentFormat ref={letterRef} {...formatProps} />;
      case "sunlit":
        return <SunlitFormat ref={letterRef} {...formatProps} />;
      case "kissed":
        return <KissedFormat ref={letterRef} {...formatProps} />;
      case "weathered":
        return <WeatheredFormat ref={letterRef} {...formatProps} />;
      default:
        return <ParchmentFormat ref={letterRef} {...formatProps} />;
    }
  };

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
              <span className="inline-block w-4 h-4 border-2 border-rose/40 border-t-rose rounded-full animate-spin" />
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
            variant="rose"
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

      {/* Format selector */}
      <div className="space-y-2">
        <p className="font-elegant text-xs tracking-[0.2em] uppercase text-muted-foreground">
          Choose your letter style
        </p>
        <LetterFormatSelector selected={format} onChange={setFormat} />
      </div>

      {/* Preview - full scrollable view */}
      <div className="rounded-lg overflow-hidden shadow-xl border border-border">
        {renderFormat()}
      </div>
    </div>
  );
};

export default LoveLetterPreview;
