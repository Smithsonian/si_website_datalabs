// This checks DEV because the URLs won't make any sense on dev,
// they only make sense on deployment.
// Remove the trailing slash
const baseURL = import.meta.env.BASE_URL.slice(0, -1);
export const DATA_LABS_BASE = import.meta.env.DEV ? 'https://datalabs.cfa.harvard.edu' : baseURL;
export const DIY_URL = `${DATA_LABS_BASE}/diy/`;
export const SPECLAB_URL = `${DATA_LABS_BASE}/spectrumlab/`;
