// v2 カスタムフック。コンポーネントからロジックをカスタムフックに分離
// コンポーネントが必要な情報は以下だけなので、historyはカスタムフックに隠蔽
// 値: currentPage, 操作: Top, Next, Back, Last, Reset

// PageコンポーネントはViewに関連する実装が中心となり、とても読みやすくなる

import React from 'react'
import { useLocalHistory } from './userLocalHistory'

export const Page: React.FC = () => {
    const topPage = 1
    const lastPage = 4

    const [currentPage, Top, Next, Back, Last, Reset] = useLocalHistory(topPage, lastPage)

    return (
        <div>
            <div>現在のページ: {currentPage}</div>
            <button onClick={Top}>トップ</button>
            <button onClick={Next}>次へ</button>
            <button onClick={Back}>戻る</button>
            <button onClick={Last}>ラスト</button>
            <button onClick={Reset}>リセット</button>
        </div>
    )
}