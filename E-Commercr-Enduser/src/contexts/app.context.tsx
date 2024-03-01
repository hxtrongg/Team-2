import { createContext, useContext, useState } from 'react';
import  getProfile, { getAccessToken } from '../utils';
import { ExtendedPurchases } from '../types/purchase.type';


type Role = 'admin' | 'user';

export interface User {
    _id: string;
    roles: Role[];
    email: string;
    name?: string;
    avatar?: string;
    address?: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface AppContextProps {
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    profile: User | null;
    setProfile: React.Dispatch<React.SetStateAction<User | null>>;
    extendedPurchases: ExtendedPurchases[];
    setExtendedPurchases: React.Dispatch<
        React.SetStateAction<ExtendedPurchases[]>
    >;
    reset: () => void;
}

const initialAppContext: AppContextProps = {
    isAuthenticated: Boolean(getAccessToken()),
    setIsAuthenticated: () => null,
    profile: getProfile(),
    setProfile: () => null,
    extendedPurchases: [],
    setExtendedPurchases: () => null,
    reset: () => null,
};

export const AppContext = createContext<AppContextProps>(initialAppContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(
        initialAppContext.isAuthenticated,
    );

    const [extendedPurchases, setExtendedPurchases] = useState<
        ExtendedPurchases[]
    >([]);

    const [profile, setProfile] = useState(initialAppContext.profile);

    const reset = () => {
        setIsAuthenticated(false);
        setProfile(null);
        setExtendedPurchases([]);
    };

    return (
        <AppContext.Provider
            value={{
                isAuthenticated,
                setIsAuthenticated,
                profile,
                setProfile, 
                extendedPurchases,
                setExtendedPurchases,
                reset,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};
