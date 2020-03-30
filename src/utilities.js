export const getDocs = doc => {
  return {
    id: doc.id, ...doc.data()
  };
};
  