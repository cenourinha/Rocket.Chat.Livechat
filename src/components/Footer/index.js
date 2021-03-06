import styles from './styles';
import Logo from './logo.svg';
import { createClassName } from '../helpers';
import { PopoverMenu, Group, Item } from '../Menu';
import ChangeIcon from '../../icons/change.svg';
import RemoveIcon from '../../icons/remove.svg';
import FinishIcon from '../../icons/finish.svg';


export const Footer = ({ children, ...props }) => (
	<footer className={createClassName(styles, 'footer')} {...props}>
		{children}
	</footer>
);


export const Content = ({ children, ...props }) => (
	<div className={createClassName(styles, 'footer__content')} {...props}>
		{children}
	</div>
);


export const PoweredBy = (props) => (
	<h3 className={createClassName(styles, 'powered-by')} {...props}>
		{I18n.t('Powered by Rocket.Chat').split('Rocket.Chat')[0]}
		<a href="https://rocket.chat" starget="_blank" rel="noopener noreferrer">
			<Logo class={createClassName(styles, 'powered-by__logo')} width={60} role="img" aria-label="Rocket.Chat" />
		</a>
		{I18n.t('Powered by Rocket.Chat').split('Rocket.Chat')[1]}
	</h3>
);


const OptionsTrigger = ({ pop }) => (
	<button className={createClassName(styles, 'footer__options')} onClick={pop}>
		{I18n.t('Options')}
	</button>
);


export const Options = ({ onChangeDepartment, onFinishChat, onRemoveUserData }) => (
	<PopoverMenu trigger={OptionsTrigger} overlayed>
		<Group>
			{onChangeDepartment && <Item onClick={onChangeDepartment} icon={ChangeIcon}>{I18n.t('Change department')}</Item>}
			{onRemoveUserData && <Item onClick={onRemoveUserData} icon={RemoveIcon}>{I18n.t('Forget/Remove my personal data')}</Item>}
			{onFinishChat && <Item danger onClick={onFinishChat} icon={FinishIcon}>{I18n.t('Finish this chat')}</Item>}
		</Group>
	</PopoverMenu>
);

Footer.Content = Content;
Footer.PoweredBy = PoweredBy;
Footer.Options = Options;

export default Footer;
