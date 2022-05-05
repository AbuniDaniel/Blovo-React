import './profile.css'
import { useAuth } from '../config/firebase';
import { useEffect } from 'react'

export const Profile = () => {

    useEffect(() => {
    document.title = "Profil"
  }, [])

    const currentUser = useAuth();

  return (
      <h2 className='profile'>Contul pe care sunteti conectat are mail-ul: {currentUser.email}</h2>
  );
}