import Post from "./components/Post";
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://www.travelzoo.com/images/blog/legacyblog/us/wp-content/uploads/2018/02/1_BoracayIsland_WhiteBeach_Philippines_shutterstock_401484094.jpg?width=820">
        This is a beautiful beach.
      </Post>
    </div>
  );
}

export default App;
