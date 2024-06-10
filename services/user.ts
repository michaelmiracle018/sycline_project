import requestClient from '~/composables/useRequest';

export const users = async (): Promise<User[]> => {
  const response = await requestClient.get(`api/users`);
  return response.data;
};
