import displayTodoist from './components/apps/todoist';
import displaySpotify from './components/apps/spotify';
import displayVsCode from './components/apps/vscode';
import { displayTerminal } from './components/apps/terminal';
import { displaySettings } from './components/apps/settings';
import { displayChrome } from './components/apps/chrome';
import { displayTrash } from './components/apps/trash';
import { displayGedit } from './components/apps/gedit';
import { displayAboutFelix } from './components/apps/fnyamweya';

const apps = [
  {
    id: 'chrome',
    title: 'Google Chrome',
    icon: './themes/Felix/apps/chrome.png',
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayChrome,
  },
  {
    id: 'todo-ist',
    title: 'Todoist',
    icon: './themes/Felix/apps/todoist.png',
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    screen: displayTodoist,
  },
  {
    id: 'about-fnyamweya',
    title: 'About Felix',
    icon: './themes/Felix/system/user-home.png',
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayAboutFelix,
  },
  {
    id: 'vscode',
    title: 'Visual Studio Code',
    icon: './themes/Felix/apps/vscode.png',
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    screen: displayVsCode,
  },
  {
    id: 'terminal',
    title: 'Terminal',
    icon: './themes/Felix/apps/bash.png',
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    screen: displayTerminal,
  },
  {
    id: 'spotify',
    title: 'Spotify',
    icon: './themes/Felix/apps/spotify.png',
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    screen: displaySpotify, // My Top Playlists 😅
  },
  {
    id: 'settings',
    title: 'Settings',
    icon: './themes/Felix/apps/gnome-control-center.png',
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    screen: displaySettings,
  },
  {
    id: 'trash',
    title: 'Trash',
    icon: './themes/Felix/system/user-trash-full.png',
    disabled: false,
    favourite: false,
    desktop_shortcut: true,
    screen: displayTrash,
  },
  {
    id: 'gedit',
    title: 'Send a Message',
    icon: './themes/Felix/apps/gedit.png',
    disabled: false,
    favourite: false,
    desktop_shortcut: true,
    screen: displayGedit,
  },
];

export default apps;
