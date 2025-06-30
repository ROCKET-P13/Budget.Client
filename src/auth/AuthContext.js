import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAuth0 } from 'react-native-auth0';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const { authorize, clearSession, getCredentials } = useAuth0();
	const [isAuthenticated, setIsAuthenticated] = useState(null);

	const login = async () => {
		try {
			await authorize();
			const creds = await getCredentials();
			setIsAuthenticated(!!creds?.accessToken);
		} catch (e) {
			console.error('Login failed', e);
		}
	};

	const logout = async () => {
		try {
			await clearSession();
			setIsAuthenticated(false);
		} catch (e) {
			console.error('Logout failed', e);
		}
	};

	useEffect(() => {
		const checkAuth = async () => {
			try {
				const creds = await getCredentials();
				setIsAuthenticated(!!creds?.accessToken);
			} catch {
				setIsAuthenticated(false);
			}
		};
		checkAuth();
	}, [getCredentials]);

	return (
		<AuthContext.Provider value={{ isAuthenticated, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthState = () => useContext(AuthContext);
