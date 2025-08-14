import { useMemo, useEffect } from "react";
import debounce from "lodash/debounce";

/**
 * Custom hook for creating a debounced function.
 * @param {Function} callback - The function to debounce.
 * @param {number} delay - The debounce delay in milliseconds.
 * @returns {Function} - A debounced version of the callback.
 */
export default function useDebounceSearch(callback, delay) {
    const debouncedCallback = useMemo(() => debounce(callback, delay), [callback, delay]);

    useEffect(() => {
        return () => {
            debouncedCallback.cancel();
        };
    }, [debouncedCallback]);

    return debouncedCallback;
}
