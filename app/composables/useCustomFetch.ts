export default async <T>(url: string, options?: { [key: string]: any }) => {
  const { data, error } = await useFetch<T>(url, options);

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: `Could not fetch data from ${url}`,
    });
  }

  return data;
};
