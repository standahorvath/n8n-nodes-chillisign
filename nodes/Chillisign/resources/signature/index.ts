import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSignatures = {
	resource: ['signature'],
};

export const signatureDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForSignatures,
		},
		options: [
			{
				name: 'Render',
				value: 'render',
				action: 'Render signatures for email',
				description: 'Render signatures for a given email',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/signatures/{{$parameter.tokenId}}/render/{{$parameter.email}}',
					},
				},
			},
			{
				name: 'Active',
				value: 'active',
				action: 'Get active signatures',
				description: 'Shows only active signatures for given email and token',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/signatures/{{$parameter.tokenId}}/active/{{$parameter.email}}',
					},
				},
			},
		],
		default: 'render',
	},
	{
		displayName: 'Token ID',
		name: 'tokenId',
		type: 'string',
		typeOptions: { password: true },
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForSignatures,
		},
		description: 'Authorization token or "public"',
	},
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		placeholder: 'name@email.com',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForSignatures,
		},
		description: 'Email address to fetch signatures for',
	},
	{
		displayName: 'Client',
		name: 'client',
		type: 'string',
		default: '',

		displayOptions: {
			show: {
				...showOnlyForSignatures,
				operation: ['render'],
			},
		},
		description: 'Email client name (optional)',
		routing: {
			send: {
				type: 'query',
				property: 'client',
			},
		},
	},
	{
		displayName: 'Version',
		name: 'version',
		type: 'string',
		default: '',

		displayOptions: {
			show: {
				...showOnlyForSignatures,
				operation: ['render'],
			},
		},
		description: 'Email client version (optional)',
		routing: {
			send: {
				type: 'query',
				property: 'version',
			},
		},
	},
];


