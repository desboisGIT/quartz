import NotesIcon from '@icons/NoteIcon';
import StatsIcon from '@icons/StatsIcon';
import MenuIcon from '@icons/MenuIcon';
import TodoIcon from '@icons/TodoIcon';
import WorkoutIcon from '@icons/WorkoutIcon';

type IconButtonProps = {
  icon: 'menu' | 'filter' | 'user' | 'add' | 'edit';
};

const IconsMap = {
  menu: () => <MenuIcon width={24} height={24} color="black" />,
  filter: () => <MenuIcon width={24} height={24} color="black" />,
  user: () => <MenuIcon width={24} height={24} color="black" />,
  add: () => <MenuIcon width={24} height={24} color="black" />,
  edit: () => <MenuIcon width={24} height={24} color="black" />,
};

export default function IconButton() {
  return null;
}
