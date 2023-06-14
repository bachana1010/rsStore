export interface Users {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    role: string

    
  
  }

export type UserApiResponse = Users[];

  
export interface AddUsers {
  email: string;
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  role: string;
  branchId: number;



}

