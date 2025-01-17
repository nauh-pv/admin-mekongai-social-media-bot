import { marked } from "marked";
export const FormatText = (text: string) => {
  const cleanedText = text.replace(
    /(<table[\s\S]*?>)([\s\S]*?)(<\/table>)/g,
    (match, startTag, content, endTag) => {
      const cleanedContent = content.replace(/<br\s*\/?>/g, "");
      return `${startTag}${cleanedContent}${endTag}`;
    }
  );
  return marked(cleanedText);
};
