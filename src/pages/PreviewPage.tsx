import { useLocation, useNavigate } from "react-router-dom";
import SocietyPaperPreview from "../components/societyPreview/SocietyPaperPreview";
import LetterPreview from "../components/LetterPreview";

type PreviewState = {
  type: "letter" | "announcement";
  title: string;
  content: string;
  date?: string;
};

const PreviewPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state as PreviewState | null;

  // Guard: direct access / refresh
  if (!state) {
    navigate("/");
    return null;
  }

  const commonProps = {
    title: state.title,
    content: state.content,
    date: state.date,
    onBack: () => navigate(-1),
    onRefine: () => {
      // we’ll wire this later
    },
  };

  // ✅ THE CHECK YOU ASKED FOR
  if (state.type === "letter") {
    return <LetterPreview type={"love-letter"} {...commonProps} />;
  }

  return <SocietyPaperPreview {...commonProps} />;
};

export default PreviewPage;
