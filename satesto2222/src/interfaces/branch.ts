  
export interface GetBranch {
    id : number,
    organizationId: number;
    brancheName: string;
    addedByUserId: number;

  
  }
  
  export type BranchApiResponse = GetBranch[];




