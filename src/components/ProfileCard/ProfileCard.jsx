import { useSelector } from "react-redux";

function ProfileCard() {
  const { user } = useSelector((state) => state.user);

  return (
    <div className="max-w-sm w-full mx-auto bg-white rounded-xl shadow-md p-6 text-center h-fit">
      <h2 className="text-xl font-semibold mb-4 text-left">Profile</h2>

      <div className="flex flex-col items-center">
        {/* Avatar */}
        <div className="w-24 h-24 rounded-full bg-blue-200 text-white flex items-center justify-center text-2xl font-bold mb-4 shadow-sm">
          MH
        </div>

        {/* Name */}
        <h3 className="text-lg font-semibold">{user?.userName}</h3>

        {/* Account Type */}
        <p className="text-gray-500 mb-4">Personal Account</p>

        {/* Button */}
        <button className="bg-gray-100 hover:bg-gray-200 text-sm font-medium py-2 px-4 rounded-full transition">
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
