import styles from '../styles/Home.module.css'
import { useSelector } from 'react-redux'

export default function Home() {

  let team = useSelector(state => state.teamMembers)
  console.log(team)
  return (
    <div className={styles.container}>
      <div>Explore</div>
    </div>
  )
}
