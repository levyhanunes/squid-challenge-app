import React from 'react'
import styles from './UserStatsGraphs.module.css'
import { VictoryPie, VictoryChart, VictoryBar } from 'victory'

function UserStatsGraphs({ data }) {

const [graph, setGraph] = React.useState([])
const [total, setTotal] = React.useState(0)
const [totalImpressoes, setTotalCurtidas] = React.useState(0)


React.useEffect(() => {

    const graphData = data.map(item => {
        return {
            x: data.criadoEm,
            y: item.metadados.impressions,
        }
    })

    setTotal(data.map(({ upvotes }) => Number(upvotes)).reduce((a, b) => a + b))
    setTotalCurtidas(data.map(({impressions}) => Number(impressions)).reduce((a, b) => a + b))
    setGraph(graphData);
}, [data])

    return <section className={`${styles.graph} animeLeft`}>
        <div className={`${styles.total} ${styles.graphItem}`}>
            <p>Total de Upvote: {total}</p>
            <p>Total de Impressoes: {totalImpressoes}</p>
        </div>
        
        <div className={styles.graphItem}>
            <span className={styles.graphItem}> Esse gráfico mostra a quantidade de Impressoes desde a data da postagem em PieChart</span>
            <VictoryPie data={graph} 
                innerRadius={50} 
                padding={{top: 20, bottom:20, left: 80, right: 80}}
                style={{
                    data: {
                        fillOpacity: .9,
                        stroke: '#fff',
                        strokeWidth: 2,
                    },
                    labels: {
                        fontSize: 14,
                        fill: '#333'
                    }
                }}
            />
        </div>
        <div className={styles.graphItem}>
        <span className={styles.graphItem}>Esse gráfico mostra a quantidade de Impressoes desde a data da postagem em PieChart</span>
            <VictoryChart>
                <VictoryBar alignment="start" data={graph}></VictoryBar>
            </VictoryChart>
        </div>
    </section>
}

export default UserStatsGraphs
