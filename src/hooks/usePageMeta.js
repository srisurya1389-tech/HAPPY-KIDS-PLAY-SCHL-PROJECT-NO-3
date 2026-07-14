import { useEffect } from 'react';

// Sets document title + meta description for the current route, restoring the
// previous values on unmount so the SPA's default (homepage) meta isn't left stale.
const usePageMeta = (title, description) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute('content');
    if (metaDesc && description) metaDesc.setAttribute('content', description);

    return () => {
      document.title = prevTitle;
      if (metaDesc && prevDesc) metaDesc.setAttribute('content', prevDesc);
    };
  }, [title, description]);
};

export default usePageMeta;
