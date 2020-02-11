import { connect } from 'react-redux';
import UserProfile from '../components/UserProfile';

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const UserProfileContainer = connect(mapStateToProps)(UserProfile)

export default UserProfileContainer