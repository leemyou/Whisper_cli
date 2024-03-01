export const diarySchema = {
  name: 'diaries',
  properties: {
    diary_id: 'string',
    is_featured: 'boolean',
    date: 'string',
    title: 'string',
    mood: 'string',
    weather: 'string',
    image: 'string',
    content: 'string',
    audio_id: 'string',
    // TODO : 음성 녹음 관련 constant는 추후 더 추가해야함.
  },
  primaryKey: 'diary_id',
};
