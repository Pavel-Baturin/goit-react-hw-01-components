import FriendListItem from "../FriendListItem/FriendListItem";
import styles from './FriendList.module.css'

export default function FriendList({friends}) {
    return (
        <ul className={styles.list}>
            {friends.map(friend => (
                <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} key={friend.id} />
            ))}
        </ul>
    );
}