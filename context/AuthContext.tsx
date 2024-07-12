// 'use client'
// import { createContext, useEffect, useState } from "react";

// export const AuthContext = createContext<any>(null);

// export const AuthContextProvider = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {
//   const getUserFromLocalStorage = () => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       return JSON.parse(storedUser);
//     }
//     return null; // Explicitly return null if there's no user
//   };
//   const [user, setUser] = useState<string | null>(getUserFromLocalStorage());
//   useEffect(() => {
//     localStorage.setItem("user", JSON.stringify(user));
//   }, [user]);

//   return (
//     <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
//   );
// };
