import PropTypes from 'prop-types';

export default function FriendListItem({avatar, name, isOnline, id}) {
    return (
        <li key={id} class="item">
        {isOnline && (
            <span class="status"></span>)}
            <img class="avatar" src={avatar} alt={name} width="48" />
            <p class="name">{name}</p>
        </li>

    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}