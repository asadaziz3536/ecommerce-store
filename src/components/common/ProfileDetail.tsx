
interface Item {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
  creationAt: string;
  updatedAt: string;
}

interface Props {
  profile: Item;
}

const ProfileDetail = ({ profile }: Props) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 border rounded-xl ">
      <div className="flex-1/2">
        <div className="h-[400px] rounded-xl">
          <img
            className="object-cover w-full h-full  rounded md:rounded-tl-xl md:rounded-bl-xl"
            src={profile.avatar}
            alt=""
          />
        </div>
      </div>
      <div className="flex-1/2">
        <div className="font-bold flex justify-between w-full  py-4 md:px-6">
          id:<span className="font-normal">{profile.id}</span>
        </div>
        <br />
        <div className="font-bold flex justify-between w-full  py-4 md:px-6">
          name:<span className="font-normal">{profile.name}</span>
        </div>
        <br />
        <div className="font-bold flex justify-between w-full  py-4 md:px-6">
          email:<span className="font-normal">{profile.email}</span>
        </div>
        <br />
        <div className="font-bold flex justify-between w-full  py-4 md:px-6">
          password:<span className="font-normal">{profile.password}</span>
        </div>
        <br />
        <div className="font-bold flex justify-between w-full  py-4 md:px-6">
          role:<span className="font-normal">{profile.role}</span>
        </div>
        <br />
      </div>
    </div>
  );
};

export default ProfileDetail;
