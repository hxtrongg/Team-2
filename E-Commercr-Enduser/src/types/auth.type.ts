import { User } from './user.type';
import { SuccessResponseApi } from './util.type.ts';

export interface data {
    access_token: string;
    expires: string;
    customer: User;
}

export type AuthResponse = SuccessResponseApi<data>;
