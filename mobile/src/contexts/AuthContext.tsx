import { createContext, ReactNode } from "react";

interface UserProps {
    name: string;
    avatarUrl: string;
}

export interface AuthContextDataProps {
    user: UserProps;
    signIn: () => Promise<void>;
}

interface  AuthProviderProps {
	children: ReactNode;
}


export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContentProvider({ children }: AuthProviderProps){
	async function signIn(){
		console.log('I am in')

	}
	return(
		<AuthContext.Provider value={{
			signIn,
			user:{
				name: 'Caroline Vieira',
				avatarUrl: 'https://github.com/Ca-byte.png'
			} 
		}}>
			{ children }

		</AuthContext.Provider>
	)
}