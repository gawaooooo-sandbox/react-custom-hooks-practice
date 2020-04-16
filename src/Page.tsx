// v5 ContainerコンポーネントとPresentationalコンポーネントの分離
// 副作用を起こすレイヤーを分離する
// Reduxではconnectを実行するレイヤーを分離することがフレームワークで強制されている。これと同じ設計方針

// Pageコンポーネントは引数を受けて返り値を返すという純粋な関数になる


import React from 'react'
import { LocalHistory, useLocalHistory } from './userLocalHistory'


// Containerコンポーネント
export const PageContainer: React.FC = () => {
    const topPage = 1
    const lastPage = 4

    const [currentPage, history] = useLocalHistory(topPage, lastPage)
    return <Page currentPage={currentPage} history={history} />
}

interface PageProps {
    currentPage: number
    history: LocalHistory
}

// Presentationalコンポーネント
const Page: React.FC<PageProps> = ({currentPage, history}: PageProps) => {
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