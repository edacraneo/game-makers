const AUTHORS: Record<string, { icon: string; bio: string }> = {
  ian57: { icon: '/logo/ian57.jpg', bio: 'MacGyver Hawkins !' },
  elluigi: { icon: '/logo/elluigi.jpg', bio: "Echappé de l'asile !" },
  buddevil: { icon: '/logo/buddevil.jpg', bio: 'tête à claque !' },
  frakasss: { icon: '/logo/frakasss.jpg', bio: 'Taper ! Programmer ! Taper !' },
};

export function authorIcon(name: string): string | null {
  return AUTHORS[name.toLowerCase()]?.icon ?? null;
}

export const team = [
  { name: 'ian57', ...AUTHORS.ian57 },
  { name: 'eLLuiGi', ...AUTHORS.elluigi },
  { name: 'Frakasss', ...AUTHORS.frakasss },
  { name: 'BudDeviL', ...AUTHORS.buddevil },
];
