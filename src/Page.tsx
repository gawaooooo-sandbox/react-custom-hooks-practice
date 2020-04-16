// v4 データ構造を独立したカスタムフックに分離
// LocalHistoryはStack(LIFO)のデータ構造なので、useStackカスタムフックとして切り出す
// カスタムフックは多段構成が可能

// useLocalHisotyがStackの実装詳細を意識せず、画面遷移の制御だけをロジックとして持つようになる

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