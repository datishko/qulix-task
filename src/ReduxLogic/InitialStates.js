import InboxIcon from '@material-ui/icons/MoveToInbox';
import SendIcon from '@material-ui/icons/Send';
import DraftsIcon from '@material-ui/icons/Drafts';
import DeleteIcon from '@material-ui/icons/Delete';

export const appState = {
    loading: false,
    error: false,
    drawerIsOpen: false,
    browserLanguage: 'ru',
    locationData: {},
    leftMenuItems: [
        {
            id: 1,
            name_ru: 'Входящие',
            name_en: 'Inbox',
            icon: <InboxIcon />
        },
        {
            id: 2,
            name_ru: 'Отправленные',
            name_en: 'Sent',
            icon: <SendIcon />
        },
        {
            id: 3,
            name_ru: 'Черновики',
            name_en: 'Drafts',
            icon: <DraftsIcon />
        },
        {
            id: 4,
            name_ru: 'Корзина',
            name_en: 'Trash',
            icon: <DeleteIcon />
        },
    ],
    currentMenuItemId: 1,
    userInfo: {},
    inbox: [],
    sent: [],    
    drafts: [],
    trash: []
};