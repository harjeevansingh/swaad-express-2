import { SanityClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = SanityClientnityClient({
	projectId: 'r34eauer',
	dataset: 'production',
	useCdn: true,
	apiVersion: '2021-10-21',
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

// RUN THIS to add exception for localhost 300 CORS policy
// sanity cors add http://localhost:8081

export default client;