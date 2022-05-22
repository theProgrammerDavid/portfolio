export interface Folder {
    permission: string;
    owner: string;
    name: string;
};

export interface Social {
    No: number;
    website: string;
    url: string;
}

export interface Language {
    name: string;
    url: string;
}

export interface Framework {
    name: string;
    url: string;
}

export interface Other {
    name: string;
    url: string;
}

export interface Command {
    name: string;
    description: string;
}

export interface Project {
    No: number;
    title: string;
    description: string;
    document_url: string;
}

export interface Achievement {
    No: number;
    title: string;
    document_url: string;
}

export interface Publication{
    name:string;
    url:string;
}