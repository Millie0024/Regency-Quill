import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import FormatSelector, { type PaperFormat } from "./FormatSelector";
import BroadsheetFormat from "./BroadsheetFormat";
import GazetteFormat from "./GazetteFormat";
import ScandalSheetFormat from "./ScandalSheetFormat";
import ColumnFormat from "./ColumnFormat";

interface SocietyPaperPreviewProps {
  title: string;
  content: string;
  date?: string;
  isLoading?: boolean;
  onRefine: () => void;
  onBack: () => void;
}

const SocietyPaperPreview = ({
  title,
  content,
  date,
  isLoading,
  onRefine,
  onBack,
}: SocietyPaperPreviewProps) => {
  const letterRef = useRef<HTMLDivElement>(null);
  const [format, setFormat] = useState<PaperFormat>("broadsheet");

  const handleDownloadPDF = async () => {
    if (!letterRef.current) return;

    const { default: html2canvas } = await import("html2canvas");
    const { default: jsPDF } = await import("jspdf");

    const canvas = await html2canvas(letterRef.current, {
      scale: 2,
      backgroundColor: "#FFFFFF",
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
    pdf.save("society-announcement.pdf");
  };

  const renderFormat = () => {
    const props = { title, content, date, isLoading };

    switch (format) {
      case "broadsheet":
        return <BroadsheetFormat ref={letterRef} {...props} />;
      case "gazette":
        return <GazetteFormat ref={letterRef} {...props} />;
      case "scandal":
        return <ScandalSheetFormat ref={letterRef} {...props} />;
      case "column":
        return <ColumnFormat ref={letterRef} {...props} />;
      default:
        return <BroadsheetFormat ref={letterRef} {...props} />;
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
              <span className="inline-block w-4 h-4 border-2 border-foreground/40 border-t-foreground rounded-full animate-spin" />
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
            onClick={handleDownloadPDF}
            className="font-elegant tracking-wide gap-2 bg-foreground text-card hover:bg-foreground/90 rounded-full shadow-md"
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
          Choose your paper style
        </p>
        <FormatSelector selected={format} onChange={setFormat} />
      </div>

      {/* Preview card */}
      <ScrollArea className="max-h-[70vh]">
        <div className="rounded-lg overflow-hidden shadow-xl border border-border">
          {renderFormat()}
        </div>
      </ScrollArea>
    </div>
  );
};

export default SocietyPaperPreview;
