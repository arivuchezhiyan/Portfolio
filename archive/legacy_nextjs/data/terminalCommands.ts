import { PERSONAL_INFO, SOFTWARE_PROJECTS, GAME_DEV_PROJECTS, SKILL_CATEGORIES } from './portfolioData';
import { TerminalCommandResponse } from '@/types';

export const handleTerminalCommand = (
  cmd: string,
  setMode: (mode: 'software' | 'gamedev') => void,
  triggerEasterEgg: () => void
): TerminalCommandResponse => {
  const cleanCmd = cmd.trim().toLowerCase();
  const parts = cleanCmd.split(' ');
  const primary = parts[0];
  const arg = parts[1];

  switch (primary) {
    case 'help':
      return {
        output: [
          'AVAILABLE SYSTEM COMMANDS:',
          '-------------------------------------------------------',
          '  help                 - Display all available CLI commands',
          '  mode [software|gamedev] - Switch portfolio identity mode',
          '  bio                  - View background & SSN credentials',
          '  projects             - List Software Engineering projects',
          '  gamedev              - List AAA Unreal Engine 5 projects',
          '  skills               - Print technical skills breakdown',
          '  contact              - Show contact channels & location',
          '  matrix               - Trigger digital code rain effect',
          '  easteregg            - Unlock secret Konami / Arcade mode',
          '  clear                - Clear terminal screen output',
          '-------------------------------------------------------'
        ],
        type: 'system'
      };

    case 'mode':
      if (arg === 'software') {
        setMode('software');
        return { output: '>> IDENTITY SWITCHED TO: PROFESSIONAL SOFTWARE ENGINEER [CYAN MATRIX ACCENT ACTIVE]', type: 'success' };
      } else if (arg === 'gamedev') {
        setMode('gamedev');
        return { output: '>> IDENTITY SWITCHED TO: AAA GAME DEVELOPER [CRIMSON UNREAL ENGINE ACCENT ACTIVE]', type: 'success' };
      } else {
        return { output: 'Usage: mode software | mode gamedev', type: 'error' };
      }

    case 'bio':
      return {
        output: [
          `NAME: ${PERSONAL_INFO.name}`,
          `DEGREE: ${PERSONAL_INFO.degree}`,
          `INSTITUTION: ${PERSONAL_INFO.institution}`,
          `LOCATION: ${PERSONAL_INFO.location}`,
          `EMAIL: ${PERSONAL_INFO.email}`,
          '--- SOFTWARE FOCUS ---',
          PERSONAL_INFO.bioSoftware,
          '--- GAME DEV FOCUS ---',
          PERSONAL_INFO.bioGameDev,
        ],
        type: 'text'
      };

    case 'projects':
      return {
        output: [
          'SOFTWARE ENGINEERING SHOWCASE:',
          ...SOFTWARE_PROJECTS.map(p => `• [${p.category}] ${p.title} - ${p.subtitle} (${p.tags.join(', ')})`)
        ],
        type: 'text'
      };

    case 'gamedev':
      return {
        output: [
          'AAA GAME DEVELOPMENT SHOWCASE:',
          ...GAME_DEV_PROJECTS.map(g => `• [${g.engine}] ${g.title} - ${g.subtitle} (Target: ${g.performanceMetrics.fps})`)
        ],
        type: 'text'
      };

    case 'skills':
      return {
        output: SKILL_CATEGORIES.flatMap(cat => [
          `=== ${cat.title.toUpperCase()} ===`,
          ...cat.skills.map(s => `  ${s.name.padEnd(30, ' ')} [Proficiency: ${s.level}%]`)
        ]),
        type: 'table'
      };

    case 'contact':
      return {
        output: [
          'DIRECT CONTACT CHANNELS:',
          `Email: ${PERSONAL_INFO.email}`,
          `GitHub: ${PERSONAL_INFO.github}`,
          `LinkedIn: ${PERSONAL_INFO.linkedin}`,
          `Location: ${PERSONAL_INFO.location}`
        ],
        type: 'success'
      };

    case 'matrix':
      triggerEasterEgg();
      return { output: '>> INITIALIZING MATRIX DATA STREAM OVERLAY...', type: 'success' };

    case 'easteregg':
    case 'konami':
      triggerEasterEgg();
      return { output: '>> SECRET EASTER EGG UNLOCKED! PRESS ESC TO DISMISS HIGH-TECH MATRIX OVERLAY.', type: 'success' };

    case 'sudo':
      return { output: '>> ACCESS GRANTED: Welcome, Administrator Arivuchezhiyan E. Unlimited creative clearance verified.', type: 'success' };

    case 'clear':
      return { output: 'CLEAR', type: 'system' };

    default:
      if (cleanCmd === '') return { output: '', type: 'text' };
      return {
        output: `Command not recognized: "${cmd}". Type "help" for command manifest.`,
        type: 'error'
      };
  }
};
