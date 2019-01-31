import styles from './styles';
import Logo from './logo.svg';
import { createClassName } from '../helpers';
import { PopoverMenu } from '../Menu';


export const Footer = ({ children, className, ...props }) => (
	<footer className={createClassName(styles, 'footer', {}, [className])} {...props}>
		{children}
	</footer>
);


export const Content = ({ children, className, ...props }) => (
	<div className={createClassName(styles, 'footer__content', {}, [className])} {...props}>
		{children}
	</div>
);


export const PoweredBy = ({ className, ...props }) => (
	<h3 className={createClassName(styles, 'powered-by', {}, [className])} {...props}>
		Powered by
		<a href="https://rocket.chat" target="_blank" rel="noopener noreferrer" translate="no">
			<Logo title="Rocket.Chat" class={createClassName(styles, 'powered-by__logo')} width="60" />
		</a>
	</h3>
);

const handleMouseUp = ({ target }) => target.blur();

const OptionsTrigger = ({ pop }) => (
	<button className={createClassName(styles, 'footer__options')} onClick={pop} onMouseUp={handleMouseUp}>
		Options
	</button>
);


export const Options = ({ children }) => (
	<PopoverMenu trigger={OptionsTrigger} overlayed>
		{children}
	</PopoverMenu>
);


Footer.Content = Content;
Footer.PoweredBy = PoweredBy;
Footer.Options = Options;


export default Footer;
