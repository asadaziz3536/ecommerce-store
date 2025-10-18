import React from 'react'
import { useAuth } from '@/context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoutes = () => {
   const {user,loading}= useAuth()
  return (
    <div>
    
      {!user ? <Outlet/> : <Navigate to="/dashboard" replace />}
    </div>
  )
}

export default PublicRoutes
