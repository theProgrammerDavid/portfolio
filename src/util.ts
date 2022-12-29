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
  tExperience,
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
export function buildSocial(
  website: string,
  url: string,
  badge?: string
): Social {
  return {
    No: socialCount++,
    website: website,
    url: url,
    badgeUrl: badge,
  };
}

export function buildLanguage(
  name: string,
  url: string,
  experience?: tExperience
): Language {
  return {
    name: name,
    url: url,
    experience,
  };
}

export function buildFramework(
  name: string,
  url: string,
  experience?: tExperience
): Framework {
  return {
    name: name,
    url: url,
    experience,
  };
}

export function buildOther(
  name: string,
  url: string,
  experience?: tExperience
): Other {
  return {
    name: name,
    url: url,
    experience,
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

function hex(c: any) {
  var s = "0123456789abcdef";
  var i = parseInt(c);
  if (i == 0 || isNaN(c)) return "00";
  i = Math.round(Math.min(Math.max(0, i), 255));
  return s.charAt((i - (i % 16)) / 16) + s.charAt(i % 16);
}

/* Convert an RGB triplet to a hex string */
function convertToHex(rgb: any) {
  return hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
}

/* Remove '#' in color hex string */
function trim(s: any) {
  return s.charAt(0) == "#" ? s.substring(1, 7) : s;
}

/* Convert a hex string to an RGB triplet */
function convertToRGB(hex: any) {
  var color = [];
  color[0] = parseInt(trim(hex).substring(0, 2), 16);
  color[1] = parseInt(trim(hex).substring(2, 4), 16);
  color[2] = parseInt(trim(hex).substring(4, 6), 16);
  return color;
}

export function generateColor(
  colorStart: string,
  colorEnd: string,
  colorCount: number
) {
  // The beginning of your gradient
  var start = convertToRGB(colorStart);

  // The end of your gradient
  var end = convertToRGB(colorEnd);

  // The number of colors to compute
  var len = colorCount;

  //Alpha blending amount
  var alpha = 0.0;

  var saida = [];

  for (let i = 0; i < len; i++) {
    var c = [];
    alpha += 1.0 / len;

    c[0] = start[0] * alpha + (1 - alpha) * end[0];
    c[1] = start[1] * alpha + (1 - alpha) * end[1];
    c[2] = start[2] * alpha + (1 - alpha) * end[2];

    saida.push(convertToHex(c));
  }

  return saida;
}
