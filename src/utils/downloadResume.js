import resumePdf from '../assets/Srika_S_Resume.pdf';

/**
 * Robust Resume Download Handler
 * Guarantees resume download across all browsers (Chrome, Edge, Firefox, Safari, Mobile).
 * Uses bundled Vite asset import with fallback to public root path.
 */
export function handleResumeDownload(e) {
  if (e) {
    e.preventDefault();
  }

  const pdfUrl = resumePdf || '/Srika_S_Resume.pdf';

  try {
    // 1. Programmatically trigger direct anchor download
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Srika_S_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Direct download error, opening PDF in new tab:', error);
    window.open(pdfUrl, '_blank');
  }
}

export { resumePdf };
