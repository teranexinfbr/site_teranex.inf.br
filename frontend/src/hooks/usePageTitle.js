import { useEffect } from "react";

export function usePageTitle({title, description}) {
  useEffect(() => {
    
    if (title) {
      document.title = `${title} | TeraNex Tecnologia`;
    }


    if (description) {
      let meta = document.querySelector('meta[name="description"]');

      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }

      meta.content = description;
    }
  }, [title, description]);
}
