// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import type {IconDefinition, SizeProp} from '@fortawesome/fontawesome-svg-core';
import {
  faArrowRight, faBicycle, faBolt, faBook, faBox, faBrain, faBriefcase, faBug,
  faChartLine, faChurch, faCircleExclamation, faCircleQuestion, faCloud,
  faCode, faCookieBite, faCopy, faCube, faDesktop, faDownload, faEye, faFileCode,
  faImages, faLaptop, faMagnifyingGlass, faMicrophone, faNewspaper,
  faObjectGroup, faPlane, faPlay, faRocket, faRobot, faRuler,
  faRulerHorizontal, faRulerVertical, faShield, faTerminal, faUtensils,
  faWandMagicSparkles, faWrench,
} from '@fortawesome/free-solid-svg-icons';
import {faApple, faDocker, faGithub, faLinux, faPython, faWindows} from '@fortawesome/free-brands-svg-icons';
import {ShieldCheck} from 'lucide-react';

// Map original Mintlify/Font Awesome icon names to FA Free icon definitions.
// Brand icons (linux, apple, etc.) and a few name-mismatches are resolved here.
// Icons that are FA Pro-only fall back to Lucide equivalents at the bottom.
const FA_MAP: Record<string, IconDefinition> = {
  'apple':              faApple,
  'arrow-right':        faArrowRight,
  'bee':                faBug,
  'bicycle':            faBicycle,
  'bolt':               faBolt,
  'book':               faBook,
  'box':                faBox,
  'brain':              faBrain,
  'briefcase':          faBriefcase,
  'chart-line':         faChartLine,
  'church':             faChurch,
  'cloud':              faCloud,
  'bot':                faRobot,
  'code':               faCode,
  'cookie-bite':        faCookieBite,
  'cube':               faCube,
  'desktop':            faDesktop,
  'docker':             faDocker,
  'download':           faDownload,
  'eye':                faEye,
  'file-code':          faFileCode,
  'files':              faCopy,
  'github':             faGithub,
  'hat-chef':           faUtensils,
  'images':             faImages,
  'laptop':             faLaptop,
  'linux':              faLinux,
  'magnifying-glass':   faMagnifyingGlass,
  'message-question':   faCircleQuestion,
  'mic':                faMicrophone,
  'microphone':         faMicrophone,
  'newspaper':          faNewspaper,
  'plane':              faPlane,
  'play':               faPlay,
  'python':             faPython,
  'robot':              faRobot,
  'rocket':             faRocket,
  'ruler':              faRuler,
  'ruler-horizontal':   faRulerHorizontal,
  'ruler-vertical':     faRulerVertical,
  'shield':             faShield,
  'shield-exclamation': faCircleExclamation,
  'sparkles':           faWandMagicSparkles,
  'terminal':           faTerminal,
  'vector-square':      faObjectGroup,
  'windows':            faWindows,
  'wrench':             faWrench,
  'zap':                faBolt,
};

// FA Pro-only icons: use nearest Lucide equivalent
const LUCIDE_FALLBACKS: Record<string, React.ComponentType<{size?: number; className?: string; style?: React.CSSProperties}>> = {
  'shield-check': ShieldCheck,
};

interface IconProps {
  icon: string;
  size?: number;
  style?: React.CSSProperties;
  className?: string;
}

export default function Icon({icon, size = 16, style, className}: IconProps): React.ReactElement | null {
  // Resolve baseUrl-relative paths (e.g. "images/foo.svg") so they work at
  // any deploy prefix. External URLs and FA/Lucide names are passed through.
  const isAssetPath = !icon.startsWith('http') && (
    icon.includes('/') || icon.endsWith('.svg') || icon.endsWith('.png')
  );
  const resolvedSrc = useBaseUrl(isAssetPath ? icon : '');

  if (isAssetPath || icon.startsWith('http')) {
    const src = isAssetPath ? resolvedSrc : icon;
    return (
      <img
        src={src}
        alt=""
        width={size}
        height={size}
        style={{objectFit: 'contain', width: size, height: size, ...style}}
        className={className}
      />
    );
  }

  // FA Free icons
  const faDef = FA_MAP[icon];
  if (faDef) {
    return (
      <FontAwesomeIcon
        icon={faDef}
        style={{width: size, height: size, ...style}}
        className={className}
      />
    );
  }

  // Lucide fallbacks for FA Pro-only icons
  const LucideIcon = LUCIDE_FALLBACKS[icon];
  if (LucideIcon) {
    return <LucideIcon size={size} style={style} className={className} />;
  }

  if (process.env.NODE_ENV !== 'production') {
    console.warn(`[Icon] unknown icon name: "${icon}"`);
  }
  return null;
}
