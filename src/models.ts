export interface Folder {
  permission: string;
  owner: string;
  name: string;
}

export type tExperience = "Beginner" | "Experienced" | "Expert";

export interface Social {
  No: number;
  website: string;
  url: string;
  badgeUrl?: string;
  experience?: tExperience;
}

export interface Language {
  name: string;
  url: string;
  experience?: tExperience;
}

export interface Framework {
  name: string;
  url: string;
  experience?: tExperience;
}

export interface Other {
  name: string;
  url: string;
  experience?: tExperience;
}

export interface Command {
  name: string;
  description: string;
}

export interface Project {
  No?: number;
  title: string;
  description: string;
  document_url: string;
}

export interface Achievement {
  No: number;
  title: string;
  document_url: string;
}

export interface Publication {
  name: string;
  url: string;
}

export interface Certification {
  name: string;
  url: string;
}

export enum ViewState {
  SIMPLIFIED,
  ADVANCED,
}

export interface iNavBarData {
  name: string;
  idTag: string;
}

export interface iMySection {
  backgroundColor?: string;
  height?: string;
}

export interface iExperience {
  start: string;
  end?: string;
  company: string;
  location: string;
  position: string;
  description: string;
  color?: string;
  colorSep?: string;
}

export interface iMyChip {
  url?: string;
  content: string;
  imgHeight?: number;
  imgWidth?: number;
}

export interface iMarkdownBadge {
  alt?: string;
  url?: string;
  markDownBadgeUrl?: string;
  experience?: tExperience;
}

export interface iCircle {
  radius: string;
  color: string;
}
