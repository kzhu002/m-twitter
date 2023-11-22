import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
    // Dummy data for top messages and trending users
    const topMessages = [
        { id: 1, text: 'Top Message 1', likes: 120 },
        { id: 2, text: 'Top Message 2', likes: 105 },
        { id: 3, text: 'Top Message 3', likes: 95 },
    ];

    const trendingUsers = [
        { id: 1, name: 'User 1', followers: 5000 },
        { id: 2, name: 'User 2', followers: 4500 },
        { id: 3, name: 'User 3', followers: 4200 },
    ];

    return (<div className="flex h-screen text-white">
        <div className="flex flex-col items-center w-1/2 ">
            <Image
                src="/mtwitter-logos_white.png"
                width={700}
                height={300}
                layout="responsive"
                alt="Logo"
            />
        </div>
        <div className="flex flex-col w-1/2 p-5">
            <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4">Join as a User</h2>
                <Link href="/signup-ordinary" passHref>
                    <button className="block mb-2 p-2 bg-blue-500 rounded hover:bg-blue-600">Sign up as Ordinary User</button>
                </Link>
                <Link href="/signup-corporate" passHref>
                    <button className="block p-2 bg-blue-500 rounded hover:bg-blue-600">Sign up as Corporate User</button>
                </Link>
            </div>
            <div>
                <h2 className="text-2xl font-bold mb-4">Top Liked Messages</h2>
                {topMessages.map(message => (
                    <p key={message.id} className="mb-2">{message.text} - {message.likes} Likes</p>
                ))}
            </div>
            <div>
                <h2 className="text-2xl font-bold mb-4 mt-6">Trending Users</h2>
                {trendingUsers.map(user => (
                    <p key={user.id} className="mb-2">{user.name} - {user.followers} Followers</p>
                ))}
            </div>
        </div>
    </div>
    );
};

export default Home;




