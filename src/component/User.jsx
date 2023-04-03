import ReactCardFlip from "react-card-flip";
import { useState } from "react";

const User = ({ user }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="p-8 bg-white rounded-lg">
      <ReactCardFlip isFlipped={isFlipped}>
        <div
          className="p-8 bg-white cursor-pointer"
          onMouseOver={() => setIsFlipped(!isFlipped)}
        >
          <img src={user.avatar} alt="User Avatar" />
          <h3 className="font-bold ">
            {user.first_name} {user.last_name}
          </h3>
          <p>Country: {user.address.country}</p>
        </div>
        <div
          className="p-8 bg-white cursor-pointer w-96 h-96"
          onMouseOver={() => setIsFlipped(!isFlipped)}
        >
          <h3 className="text-2xl font-bold">More information Here</h3>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default User;
