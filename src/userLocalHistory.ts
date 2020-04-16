import { useState } from "react";

interface LocalHistory {
  Top: () => void;
  Next: () => void;
  Back: () => void;
  Last: () => void;
  Reset: () => void;
}

export const useLocalHistory = (
  topPage: number,
  lastPage: number
): [number, LocalHistory] => {
  const initHistory: number[] = [topPage];
  const [history, setHistory] = useState<number[]>(initHistory);

  const currentPage = history[history.length - 1];

  const Top = (): void => {
    // 現在のトップページの場合は移動しない
    if (currentPage !== topPage) {
      const nextHistory = [...history, topPage];
      setHistory(nextHistory);
    }
  };

  const Next = (): void => {
    const nextPage = currentPage + 1;

    // ラストページより先には進めない
    if (nextPage <= lastPage) {
      const nextHistory = [...history, nextPage];
      setHistory(nextHistory);
    }
  };

  const Back = (): void => {
    // トップページより前には戻れない
    if (history.length > 1) {
      const nextHistory = [...history.slice(0, history.length - 1)];
      setHistory(nextHistory);
    }
  };

  const Last = (): void => {
    // 現在ラストページの場合は移動しない
    if (currentPage !== lastPage) {
      const nextHistory = [...history, lastPage];
      setHistory(nextHistory);
    }
  };

  const Reset = (): void => {
    setHistory(initHistory);
  };

  return [currentPage, { Top, Next, Back, Last, Reset }];
};
