const formatKeys = (name: string, value: string | number) => {
   return {
      name: name,
      type: typeof value,
      value: value,
   } as unknown as PropertyKey
}

export { formatKeys }
