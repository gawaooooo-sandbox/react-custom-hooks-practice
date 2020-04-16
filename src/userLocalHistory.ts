import { useStack } from "./useStack";

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
  const [currentPage, stack] = useStack<number>(initHistory);

  const Top = (): void => {
    // 現在のトップページの場合は移動しない
    if (currentPage !== topPage) {
      stack.Push(topPage);
    }
  };

  const Next = (): void => {
    const nextPage = currentPage + 1;

    // ラストページより先には進めない
    if (nextPage <= lastPage) {
      stack.Push(nextPage);
    }
  };

  const Back = (): void => {
    // トップページより前には戻れない
    stack.Pop();
  };

  const Last = (): void => {
    // 現在ラストページの場合は移動しない
    if (currentPage !== lastPage) {
      stack.Push(lastPage);
    }
  };

  const Reset = (): void => {
    stack.Reset();
  };

  return [currentPage, { Top, Next, Back, Last, Reset }];
};
