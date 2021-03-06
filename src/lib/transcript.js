import { Livechat } from '../api';
import store from '../store';
import { ModalManager } from '../components/Modal';


const promptTranscript = async() => {
	const { config: { messages: { transcriptMessage } }, user: { token, visitorEmails }, room: { _id } } = store.state;
	const email = visitorEmails && visitorEmails.length > 0 ? visitorEmails[0].address : '';
	if (!email) {
		return;
	}

	// eslint-disable-next-line no-unused-vars
	const message = transcriptMessage || 'Would you like a copy if this chat emailed'; // (TAPi18n.__('Would_you_like_a_copy_if_this_chat_emailed'));

	return ModalManager.confirm({
		text: message,
	}).then(async(result) => {
		if ((typeof result.success === 'boolean') && result.success) {
			return await Livechat.requestTranscript(email, { token, rid: _id });
		}
	});
};

const transcriptSentAlert = (message) => ModalManager.alert({
	text: message,
	timeout: 1000,
});


export const handleTranscript = async() => {
	const { config: { settings: { transcript } = {} } } = store.state;

	if (!transcript) {
		return;
	}

	const result = await promptTranscript();
	if (result && result.success) {
		transcriptSentAlert(result.message);
	}
};
