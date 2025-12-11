import OpenAI from 'openai';

const apiKey = process.env.OPENAI_API_KEY || 'dummy_key_for_build';

export const openai = new OpenAI({
    apiKey,
});
