import { type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { signatureDescription } from './resources/signature';

export class Chillisign implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Chillisign',
		name: 'chillisign',
		icon: { light: 'file:chillisign.svg', dark: 'file:chillisign.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Chillisign API',
		defaults: {
			name: 'Chillisign',
		},
		usableAsTool: true,
		inputs: ['main'],
		outputs: ['main'],
		credentials: [],
		requestDefaults: {
			baseURL: 'https://admin.chillisign.io',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Signature',
						value: 'signature',
					},
				],
				default: 'signature',
			},
			...signatureDescription,
		],
	};
}
