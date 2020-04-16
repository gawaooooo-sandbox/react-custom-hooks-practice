import { useState } from "react";

export interface Stack<T> {
  Pop: () => T | undefined;
  Push: (v: T) => void;
  Reset: () => void;
}

// Stackのデータ構造をカスタムフックとして定義する
export const useStack = <T>(init?: T[]): [T, Stack<T>] => {
  const initStack: T[] = init !== undefined ? init : [];
  const [stack, setStack] = useState<T[]>(initStack);

  const Pop = (): T | undefined => {
    if (stack.length <= 1) {
      return undefined;
    }

    const newStack = [...stack.slice(0, stack.length - 1)];
    setStack(newStack);

    return newStack[newStack.length - 1];
  };

  const Push = (v: T): void => {
    const newStack = [...stack, v];
    setStack(newStack);
  };

  const Reset = (): void => {
    setStack(initStack);
  };

  return [stack[stack.length - 1], { Pop, Push, Reset }];
};
