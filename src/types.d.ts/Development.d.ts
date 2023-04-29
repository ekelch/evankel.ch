export interface Stack {
    stackName: string;
    subStacks: SubStack[];
}

export interface SubStack {
    subName: string;
    subContents: string[];
}