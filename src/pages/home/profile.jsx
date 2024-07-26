import { Icon } from "@iconify/react";
import '../../styles/home/profile.css'
const Profile = ({ user }) => {
  return (
    <div className="container-profile">
      <div className="profile-picture">
        <Icon icon="iconoir:user-circle" />
      </div>

      <div className="profile-info">
        {user && (
          <>
            <h3>First Name</h3>
            <input type="text" value={user.data.first_name || ""} readOnly />

            <h3>Last Name</h3>
            <input type="text" value={user.data.last_name || ""} readOnly />

            <h3>Email</h3>
            <input type="text" value={user.data.email || ""} readOnly />
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
