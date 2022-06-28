import React from 'react'
import styles from '../styles/Temp.module.css'

class Type extends React.Component {
    state = {}
    render() {
        return (
            <>
                <div className={styles.box}>
                    <h1>h1: Aliqua deserunt commodo cillum eu quis ad Lorem eu.</h1>
                    <h2>h2: Consectetur consequat commodo dolore aliquip aliquip ut fugiat id qui dolor enim voluptate sit est.</h2>
                    <h3>h3: Elit consectetur ea Lorem excepteur amet aliquip in nisi eu in.</h3>
                    <p>p: Veniam amet <em>aliquip</em> aute nisi <strong>minim</strong> eiusmod proident exercitation tempor ullamco ea do nostrud ea. Velit occaecat id incididunt est laboris mollit sit minim nulla aute. Labore id laborum pariatur commodo ipsum reprehenderit duis. Lorem amet excepteur et ad exercitation consequat cupidatat labore in do adipisicing anim dolor. In occaecat amet proident ex ad laborum Lorem aliqua laborum sit duis. Ea nulla minim mollit sunt aliqua veniam sint sit fugiat id et.</p>
                    <p className="legal">legal: Esse id officia anim labore veniam amet occaecat culpa aliquip adipisicing ea dolore duis minim. Anim velit ipsum adipisicing aliqua elit excepteur magna nostrud dolor esse amet velit. Voluptate irure quis eiusmod id esse et quis adipisicing eu labore esse cillum. Incididunt veniam ut enim sint nostrud consectetur enim ea qui elit adipisicing Lorem sint. Eiusmod sunt ut ad laborum esse adipisicing dolore ad laboris anim voluptate nostrud voluptate. Cupidatat nulla amet ex consectetur aute veniam.</p>
                </div>
            </>
        );
    }
}

export default Type;