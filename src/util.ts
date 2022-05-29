import {
  Folder,
  Other,
  Social,
  Language,
  Framework,
  Command,
  Project,
  Achievement,
  Publication,
  Certification,
} from "./models";

export function buildFolder(
  permission: string,
  owner: string,
  name: string
): Folder {
  return {
    name: name,
    owner: owner,
    permission: permission,
  };
}

var socialCount = 1;
export function buildSocial(website: string, url: string): Social {
  return {
    No: socialCount++,
    website: website,
    url: url,
  };
}

export function buildLanguage(name: string, url: string): Language {
  return {
    name: name,
    url: url,
  };
}

export function buildFramework(name: string, url: string): Framework {
  return {
    name: name,
    url: url,
  };
}

export function buildOther(name: string, url: string): Other {
  return {
    name: name,
    url: url,
  };
}

export function buildCommand(name: string, description: string): Command {
  return {
    name: name,
    description: description,
  };
}

var projectIndexCounter = 1;
export function buildProject(
  title: string,
  description: string,
  document_url: string
): Project {
  return {
    No: projectIndexCounter++,
    title: title,
    description: description,
    document_url: document_url,
  };
}

var achievementIndexCounter = 1;
export function buildAchievement(
  title: string,
  document_url: string
): Achievement {
  return {
    No: achievementIndexCounter++,
    title: title,
    document_url: document_url,
  };
}

var publicationIndexCounter = 1;
export function buildPublication(name: string, url: string): Publication {
  return {
    name: name,
    url: url,
  };
}

var certificationIndex = 1;
export function buildCertification(name: string, url: string): Certification {
  return {
    name: name,
    url: url,
  };
}
