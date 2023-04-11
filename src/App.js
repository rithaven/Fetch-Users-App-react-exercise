import  { useState, useEffect } from 'react';
import User from './component/User';
import './index.css';

function App() {
  const [users, setUsers] = useState([]);
 
  const fetchUsers = () =>{
	fetch('https://random-data-api.com/api/users/random_user?size=10')
			.then(response => response.json())
			.then(data => setUsers(data));
  }
	useEffect(() => {
		fetchUsers();
	}, []);

	return (
	<div className='flex flex-col items-center justify-center bg-[#e1f6dc] h-full'>
    	<button onClick={() => fetchUsers()} className="mt-8 bg-[#f0003c] rounded-lg px-16 py-2 text-2xl text-white">Fetch random</button>
      <div className='grid grid-cols-2 gap-4 p-8 '>
			{users.map(user => <User key={user.id} user={user} />)}
		</div>

  </div>
	);

}

export default App;
