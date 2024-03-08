import React, { useState, useEffect } from "react"


const Profile = () => {
    const [profileData, setProfileData] = useState(null);
  
    useEffect(() => {
      const fetchProfile = async () => {
        try {
          const response = await fetch('https://api.github.com/users/github-john-doe');
          if (response.ok) {
            const data = await response.json();
            setProfileData(data);
          } else {
            console.error('Failed to fetch profile data:', response.statusText);
          }
        } catch (error) {
          console.error('Error fetching profile data:', error);
        }
      };
  
      fetchProfile();
    }, []);
  
    if (!profileData) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className="profile text-center">
        <h2>{profileData.name}</h2>
        <img src={profileData.avatar_url} alt={profileData.login} />
        <p>{profileData.bio}</p>
        <p>Followers: {profileData.followers}</p>
        <p>Following: {profileData.following}</p>
        <p>Public Repos: {profileData.public_repos}</p>
        <a href={profileData.html_url}>View Profile</a>
      </div>
    );
  }
  
  export default Profile;