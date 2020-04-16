// v3 インターフェースの定義
// 履歴機能を提供するLocalHistoryインターフェースを定義する
// PageコンポーネントはLocalHistoryインターフェースを介して操作

// 一連の操作の関連が明確になる。一連の操作を他のコンポーネントに渡すことが容易になる

import React from 'react'
import { useLocalHistory } from './userLocalHistory'

export const Page: React.FC = () => {
    const topPage = 1
    const lastPage = 4

    const [currentPage, history] = useLocalHistory(topPage, lastPage)

    return (
        <div>
            <div>現在のページ: {currentPage}</div>
            <button onClick={history.Top}>トップ</button>
            <button onClick={history.Next}>次へ</button>
            <button onClick={history.Back}>戻る</button>
            <button onClick={history.Last}>ラスト</button>
            <button onClick={history.Reset}>リセット</button>
        </div>
    )
}