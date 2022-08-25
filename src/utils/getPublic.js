export const getPublic = (path) => `${process.env.PUBLIC_URL}/${path}`;
export const getPublicAsset = (path) => getPublic(`assets/${path}`);
